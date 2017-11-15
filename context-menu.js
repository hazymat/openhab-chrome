// This script will create the conext menu for the extension.
chrome.contextMenus.removeAll();

chrome.contextMenus.create({
  id: "radioLocal",
  type: "radio",
  title: "Local URL",
  contexts: ["browser_action"],
  onclick: function() {
    localStorage["active_server_id"] = localStorage["local_server_id"];
  }
});

chrome.contextMenus.create({
  id: "radioRemote",
  type: "radio",
  title: "Remote URL",
  contexts: ["browser_action"],
  onclick: function() {
    localStorage["active_server_id"] = localStorage["remote_server_id"];
  }
});

// Checks the Local URL radio on the context menu
chrome.contextMenus.update("radioRemote", {
  checked: false
});
chrome.contextMenus.update("radioLocal", {
  checked: true
});
localStorage["active_server_id"] = localStorage["local_server_id"];
