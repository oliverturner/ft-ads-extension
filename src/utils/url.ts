import type { RawParams } from "../typings/gpt";

/**
 * Parse nested params into an object.
 *
 * Optionally, only allow certain keys.
 */
export function parseNestedParams<T>(val: string, allowedKeys?: string[]): T {
  const params = new URLSearchParams(val);
  const result: RawParams = {};
  for (const [key, val] of params.entries()) {
    if (allowedKeys) {
      if (allowedKeys.includes(key)) {
        result[key] = val;
      }
    } else {
      result[key] = val;
    }
  }

  return result as T;
}
