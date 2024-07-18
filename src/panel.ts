import "@shoelace-style/shoelace";
import "@shoelace-style/shoelace/dist/themes/light.css";

import { AdsRequestPanel } from "./panels/ad-server";
import { SpoorRequestPanel } from "./panels/spoor-api";
import { PageEventsPanel } from "./panels/page-events";

const adsRequestPanel = new AdsRequestPanel();
const spoorRequestPanel = new SpoorRequestPanel();
const pageEventsPanel = new PageEventsPanel();

function updateDevToolsPanel() {
  adsRequestPanel.refresh();
  spoorRequestPanel.refresh();
  pageEventsPanel.refresh();
}

chrome.devtools?.inspectedWindow.eval(
  "window.oTracking.event",
  {},
  function (result, isException) {
    if (isException) {
      console.log({ isException });
    } else {
      console.log({ result });
    }
  }
);

// @ts-expect-error chrome-types is wrong
chrome.devtools?.network.onRequestFinished.addListener(function ({ request }) {
  adsRequestPanel.onRequestFinished(request);
  spoorRequestPanel.onRequestFinished(request);
});

chrome.devtools?.network.onNavigated.addListener(updateDevToolsPanel);

// Load fixture data in development mode
if (import.meta.env.MODE === "development") {
  const requests = await import("./__fixtures__/requests/pg/home");
  adsRequestPanel.onRequestFinished({ url: requests.ads } as any);

  for (const request of requests.spoor) {
    spoorRequestPanel.onRequestFinished({
      url: request.url,
      postData: { text: JSON.stringify(request.postData) },
    } as any);
  }
}
