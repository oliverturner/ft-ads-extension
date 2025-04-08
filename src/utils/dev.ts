/**
 * When in dev mode turn on the supplied flags
 *
 * The following flags are enabled by default:
 * - `adsEnableTestCreatives`
 * - `disablePaywall`
 */
export function setDevFlags(flags: string[] = []) {
  const defaultFlags = [
    // "adsEnableTestCreatives",
    "adsPGArticle",
    "adsPGMyFTPage",
    "adsPGSearchPage",
    "adsPGStreamPage",
    "adsPGVideoPage",
    "ads-refresh-display",
    "disablePaywall",
  ];

  if (import.meta.env.DEV) {
    cookieStore.set({
      name: "next-flags",
      domain: "ft.com",
      expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
      value: [...flags, ...defaultFlags].map((flag) => `${flag}:on`).join(","),
    });
  }
}
