import Link from "next/link";
import { BrandIcon } from "./BrandIcon";

export default function NotFound() {
  return (
    <main className="not-found-shell">
      <BrandIcon size={72} />
      <p className="not-found-code">404</p>
      <h1>This page could not be found.</h1>
      <p className="not-found-body">The page you are looking for does not exist or has moved.</p>
      <Link className="not-found-link" href="/">Back to MusicPod</Link>
    </main>
  );
}
