import type { FTAdsSpoorData } from "@/types/data.d.ts";

class SpoorState {
  state = $state<{
    requests: Record<string, FTAdsSpoorData>;
  }>({
    requests: {},
  });

  updateRequests = (pageData: Record<string, FTAdsSpoorData> | null) => {
    this.state.requests = {};
    Object.entries(pageData ?? {}).forEach(([key, value]) => {
      this.state.requests[key] = value;
    });
  };
}

export const spoorState = new SpoorState();
