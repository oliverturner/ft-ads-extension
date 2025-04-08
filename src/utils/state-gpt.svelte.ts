import type { FTAdsSlotData } from "@/types/data.d.ts";

class GPTState {
  state = $state<{
    page: Record<string, string>;
    slots: FTAdsSlotData[];
  }>({
    page: {},
    slots: [],
  });

  updatePage = (pageData: Record<string, string> | null) => {
    this.state.page = {};
    Object.entries(pageData ?? {}).forEach(([key, value]) => {
      this.state.page[key] = value;
    });
  };

  updateSlots = (slotsData: FTAdsSlotData[] | null) => {
    this.state.slots = [];
    slotsData?.forEach((slot) => {
      this.state.slots.push(slot);
    });
  };
}

export const gptState = new GPTState();
