/**
 * Return HTML list items from an object.
 */
export function listify(obj: Record<string, any>) {
  return Object.entries(obj ?? {})
    .map(([k, v]) => `<li>${k}: ${v}</li>`)
    .join("");
}
