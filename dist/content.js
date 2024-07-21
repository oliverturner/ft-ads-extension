window.googletag = window.googletag ?? { cmd: [] };

googletag.cmd.push(() => {
  console.log("⛳️ content.js googletag.cmd.push");
});

console.log("⛳️ content.js", window.googletag.cmd);
