import "@shoelace-style/shoelace";
import "@shoelace-style/shoelace/dist/themes/light.css";

import { AdsRequestTracker } from "./requests/ad-server";
import { SpoorRequestTracker } from "./requests/spoor-api";

const adsRequestTracker = new AdsRequestTracker();
const spoorRequestTracker = new SpoorRequestTracker();

// @ts-expect-error chrome-types is wrong
chrome.devtools?.network.onRequestFinished.addListener(function ({ request }) {
  adsRequestTracker.onRequestFinished(request);
  spoorRequestTracker.onRequestFinished(request);
});

if (import.meta.env.MODE === "development") {
  const requests = await import("./__fixtures__/requests/pg/home");
  adsRequestTracker.onRequestFinished({ url: requests.ads } as any);

  for (const request of requests.spoor) {
    spoorRequestTracker.onRequestFinished({
      url: request.url,
      postData: { text: JSON.stringify(request.postData) },
    } as any);
  }
}
