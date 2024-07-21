let portDev, portTab;

const tabId = chrome.devtools.inspectedWindow.tabId;
const onDevMessage = (msg) => {
  portTab.postMessage(msg);
  return true;
};
const onTabMessage = (msg) => {
  portDev.postMessage(msg);
  return true;
};

chrome.runtime.onConnect.addListener(function onDevConnect(port) {
  if (+port.name !== tabId) return;

  portDev = port;
  portDev.onMessage.addListener(onDevMessage);

  portTab = chrome.tabs.connect(tabId, { name: "dev" });
  portTab.onMessage.addListener(onTabMessage);

  return true;
});

chrome.devtools.panels.create("FT Ads", "icons/icon-16.png", "index.html");
