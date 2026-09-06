/** Cloudflare Worker entry point for the vinext-starter template. */
import { handleImageOptimization, DEFAULT_DEVICE_SIZES, DEFAULT_IMAGE_SIZES } from "vinext/server/image-optimization";
import handler from "vinext/server/app-router-entry";
import { setRuntimeBindings } from "../lib/runtime-env";

interface Env {
  ASSETS: Fetcher;
  DB: D1Database;
  REWARD_CODE_KEY: string;
  SUPABASE_URL?: string;
  SUPABASE_SECRET_KEY?: string;
  IMAGES: {
    input(stream: ReadableStream): {
      transform(options: Record<string, unknown>): {
        output(options: { format: string; quality: number }): Promise<{ response(): Response }>;
      };
    };
  };
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

// Image security config. SVG sources with .svg extension auto-skip the
// optimization endpoint on the client side (served directly, no proxy).
// To route SVGs through the optimizer (with security headers), set
// dangerouslyAllowSVG: true in next.config.js and uncomment below:
// const imageConfig: ImageConfig = { dangerouslyAllowSVG: true };

// vinext 0.0.50 does not route notFound() thrown on a matched dynamic route
// (e.g. an invalid /:locale) to the not-found boundary, so the rejection
// escapes handler.fetch. Re-dispatching to a guaranteed-unmatched path lets the
// normal unmatched-route fallback render the branded 404 page with status 404.
const NOT_FOUND_RENDER_PATH = "/en/__not-found__";

function isNotFoundRejection(error: unknown): boolean {
  if (typeof error !== "object" || error === null || !("digest" in error)) return false;
  const digest = String((error as { digest: unknown }).digest);
  return digest === "NEXT_NOT_FOUND" || digest === "NEXT_HTTP_ERROR_FALLBACK;404";
}

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    setRuntimeBindings(env);
    const url = new URL(request.url);

    if (url.pathname === "/_vinext/image") {
      const allowedWidths = [...DEFAULT_DEVICE_SIZES, ...DEFAULT_IMAGE_SIZES];
      return handleImageOptimization(request, {
        fetchAsset: (path) => env.ASSETS.fetch(new Request(new URL(path, request.url))),
        transformImage: async (body, { width, format, quality }) => {
          const result = await env.IMAGES.input(body).transform(width > 0 ? { width } : {}).output({ format, quality });
          return result.response();
        },
      }, allowedWidths);
    }

    try {
      return await handler.fetch(request, env, ctx);
    } catch (error) {
      if (isNotFoundRejection(error) && url.pathname !== NOT_FOUND_RENDER_PATH) {
        return handler.fetch(new Request(new URL(NOT_FOUND_RENDER_PATH, request.url), request), env, ctx);
      }
      throw error;
    }
  },
};

export default worker;
