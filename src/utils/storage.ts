import type { FTAdsSlotData, FTAdsSpoorData } from "@/types/data.d.ts";
import type { GAMStateProps } from "@/utils/state-gam.svelte.ts";

import { STORAGE_KEYS } from "./constants";

export const pageStorage = storage.defineItem<Record<string, string>>(
  `session:${STORAGE_KEYS.PAGE}`,
  { fallback: {} }
);

export const slotsStorage = storage.defineItem<FTAdsSlotData[]>(
  `session:${STORAGE_KEYS.SLOTS}`,
  { fallback: [] }
);

export const spoorStorage = storage.defineItem<Record<string, FTAdsSpoorData>>(
  `session:${STORAGE_KEYS.SPOOR}`,
  { fallback: {} }
);

export const gamStorage = storage.defineItem<GAMStateProps>(
  `session:${STORAGE_KEYS.GAM}`,
  {
    fallback: {
      params: {},
      custParams: {},
    },
  }
);
