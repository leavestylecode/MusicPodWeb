type RuntimeBindings = {
  DB?: D1Database;
  REWARD_CODE_KEY?: string;
  SUPABASE_URL?: string;
  SUPABASE_SECRET_KEY?: string;
};

const bindingsKey = "__musicpodRuntimeBindings";

type RuntimeGlobal = typeof globalThis & {
  __musicpodRuntimeBindings?: RuntimeBindings;
};

export function setRuntimeBindings(bindings: RuntimeBindings) {
  (globalThis as RuntimeGlobal)[bindingsKey] = bindings;
}

export function getRuntimeDatabase() {
  const database = (globalThis as RuntimeGlobal)[bindingsKey]?.DB;
  if (!database) throw new Error("Cloudflare D1 binding `DB` is unavailable.");
  return database;
}

type RuntimeStringBinding = "REWARD_CODE_KEY" | "SUPABASE_URL" | "SUPABASE_SECRET_KEY";

function runtimeValue(name: RuntimeStringBinding) {
  const binding = (globalThis as RuntimeGlobal)[bindingsKey]?.[name];
  if (binding) return binding;
  if (typeof process !== "undefined") return process.env[name];
  return undefined;
}

export function getSupabaseConfig() {
  const url = runtimeValue("SUPABASE_URL");
  const secretKey = runtimeValue("SUPABASE_SECRET_KEY");

  if (!url && !secretKey) return null;
  if (!url || !secretKey) throw new Error("Supabase reward configuration is incomplete.");

  const endpoint = new URL(url);
  if (endpoint.protocol !== "https:") throw new Error("Supabase URL must use HTTPS.");

  return { url: endpoint.origin, secretKey };
}

export function getRewardCodeKey() {
  const key = runtimeValue("REWARD_CODE_KEY");
  if (!key) throw new Error("Reward code encryption key is unavailable.");
  return key;
}
