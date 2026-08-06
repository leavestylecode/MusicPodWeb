type RuntimeBindings = {
  DB?: D1Database;
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
