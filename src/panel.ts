import "@shoelace-style/shoelace";
import "@shoelace-style/shoelace/dist/themes/light.css";

import { GAMPanel } from "./panels/gam";
import { SpoorPanel } from "./panels/spoor";
// import { PagePanel } from "./panels/page";

const gamPanel = new GAMPanel();
const spoorPanel = new SpoorPanel();
// const pageEventsPanel = new PagePanel();

function updateDevToolsPanel() {
  gamPanel.refresh();
  spoorPanel.refresh();
  // pageEventsPanel.refresh();
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
  gamPanel.onRequestFinished(request);
  spoorPanel.onRequestFinished(request);
});

chrome.devtools?.network.onNavigated.addListener(updateDevToolsPanel);

// Load fixture data in development mode
if (import.meta.env.MODE === "development") {
  const requests = await import("./__fixtures__/requests/pg/home");
  gamPanel.onRequestFinished({ url: requests.ads } as any);

  for (const request of requests.spoor) {
    spoorPanel.onRequestFinished({
      url: request.url,
      postData: { text: JSON.stringify(request.postData) },
    } as any);
  }
}
