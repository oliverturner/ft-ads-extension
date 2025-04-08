import type { VisibleKeysId } from "@/types/constants.d.ts";

export function filterVisible(
  src: Record<string, unknown>,
  visibleKeysId: VisibleKeysId
) {
  const visibleKeys = VISIBLE_KEYS[visibleKeysId];
  const visible: Record<string, unknown> = {};
  const hidden: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(src ?? {})) {
    if (visibleKeys.includes(key as never)) {
      visible[key] = value;
    } else {
      hidden[key] = value;
    }
  }

  return { visible, hidden };
}
