export type StorageKey = keyof typeof STORAGE_KEYS;

export type VisibleKeys = typeof VISIBLE_KEYS;
export type VisibleKeysId = keyof VisibleKeys;
export type GptPageTargetingKey = VisibleKeys["gptPageTargeting"][number];
export type GamKey = VisibleKeys["gam"][number];
export type GamCustParamsKey = VisibleKeys["gamCustParams"][number];
