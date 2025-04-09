export const EXTENSION_NAME = "ftAds";
export const FT_DOMAINS = "*://*.ft.com/*";

const SPOOR_URL = "https://spoor-api.ft.com/ingest";
export const URLS = {
  SPOOR_SLOT_REQUESTED: `${SPOOR_URL}?type=ads:slot-requested`,
  SPOOR_SLOT_RENDERED: `${SPOOR_URL}?type=ads:slot-rendered`,
  GAM: "https://securepubads.g.doubleclick.net/gampad/ads",
} as const;

export const STORAGE_KEYS = {
  PAGE: "ftAds:page",
  SLOTS: "ftAds:slots",
  SPOOR: "ftAds:spoor",
  GAM: "ftAds:gam",
} as const;

export const VISIBLE_KEYS = {
  gptPageTargeting: [
    "adtech",
    "ca",
    "device_spoor_id",
    "ias-kw",
    "loggedIn",
    "pt",
    "res",
    "mvt",
    "mvt2",
    "rootid",
    "topic",
  ],
  gam: ["dids", "gdpr", "gdpr_consent", "iu_parts", "ppid", "prev_iu_szs", "prev_scp"],
  gamCustParams: [
    "adtech",
    "ca",
    "device_spoor_id",
    "ias-kw",
    "loggedIn",
    "mvt",
    "mvt2",
    "permutive",
    "pt",
    "res",
    "slv",
    "topic"
  ],
} as const;
