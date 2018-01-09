document.addEventListener('DOMContentLoaded',
  function applysettings() {
    chrome.storage.local.get(null, function(items) {
      let fetchedValues = Object(items);
      if (!fetchedValues.local_server_id && !fetchedValues.remote_server_id) {
        document.getElementById('setup').innerHTML = '<p style="padding:20px;background:#ccc;">Don\'t forget to <a href="../html/options.html">Setup</a> the extension!</p>';
      }
      else{
        document.getElementById('frameContainer').innerHTML = '<iframe style="border:none;" src="' + fetchedValues.active_server_id + fetchedValues.path_id + '" width=100% height=100%></iframe>';
        document.getElementById('bod').style.width = fetchedValues.width_id;
        document.getElementById('bod').style.height = fetchedValues.height_id;
      }
    })
  }
)
