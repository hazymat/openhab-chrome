// This script will create the conext menu for the extension.
chrome.contextMenus.removeAll();

chrome.contextMenus.create({
  id: "radioLocal",
  type: "radio",
  title: "Local URL",
  contexts: ["browser_action"],
  onclick: function() {
    chrome.storage.local.get(null, function(items) {
      const fetchedValues = Object(items);
      let values = {
        active_server_id: fetchedValues.local_server_id
      };
      chrome.storage.local.set(values, function() {});
    });
  }
});

chrome.contextMenus.create({
  id: "radioRemote",
  type: "radio",
  title: "Remote URL",
  contexts: ["browser_action"],
  onclick: function() {
    chrome.storage.local.get(null, function(items) {
      const fetchedValues = Object(items);
      let values = {
        active_server_id: fetchedValues.remote_server_id
      };
      chrome.storage.local.set(values, function() {});
    });
  }
});
