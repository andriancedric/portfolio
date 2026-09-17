/** Prefix local URLs when hosted at github.io/repository/. */
export function sitePath(path: string): string {
  const base = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
  return `${base}${path}`;
}
