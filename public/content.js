let portDev;

const onMessage = (msg) => {
  console.log(msg);
  portDev.postMessage("bar");
};

const onDisconnect = () => {
  portDev = null;
};

chrome.runtime?.onConnect.addListener(function onContentConnect(port) {
  console.log("⛳️ content.js onConnect", port);

  if (port.name !== "dev") return;

  portDev = port;
  portDev.onMessage.addListener(onMessage);
  portDev.onDisconnect.addListener(onDisconnect);

  portDev.postMessage("content.js connected");

  return true;
});

// Try to access googletag object
window.googletag = window.googletag ?? { cmd: [] };

googletag.cmd.push(() => {
  console.log("⛳️ content.js googletag.cmd.push");

  googletag.pubads().addEventListener("slotRenderEnded", (event) => {
    console.log("⛳️ slotRenderEnded", event);
    portDev.postMessage(JSON.stringify(event));
  });
});

// setTimeout(() => {
//   console.log("⛳️ content.js", {
//     cmd: window.googletag.cmd,
//     pubads: window.googletag.pubads,
//   });
// }, 2000);
