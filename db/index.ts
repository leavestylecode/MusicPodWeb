import { drizzle } from "drizzle-orm/d1";
import { getRuntimeDatabase } from "../lib/runtime-env";
import * as schema from "./schema";

export function getDb() {
  return drizzle(getRuntimeDatabase(), { schema });
}
