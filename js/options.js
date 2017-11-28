// Saves options to localStorage.

const DEFAULT_MYOPENHAB_URL = "https://home.myopenhab.org";
const DEFAULT_PATH = "basicui/app";
const DEFAULT_WIDTH = 400;
const DEFAULT_HEIGHT = 500;

function save_options() {
  let values = {local_server_id: document.querySelector("#localserverid").value,
                remote_server_id: document.querySelector("#remoteserverid").value,
                path_id: document.querySelector("#pathid").value,
                width_id: document.querySelector("#widthid").value,
                height_id: document.querySelector("#heightid").value
  };
  chrome.storage.local.set(values, function() {});

  // Update status to let user know options were saved.
	$("#status").html("Options Saved.");
	setTimeout(function() {
		$("#status").html("");
	}, 2000);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  chrome.storage.local.get(null, function(items) {
    const fetchedValues = Object(items);
    console.log(fetchedValues);
    console.log(fetchedValues.local_server_id);
    document.querySelector("#localserverid").value = fetchedValues.local_server_id || null;
    document.querySelector("#remoteserverid").value = fetchedValues.remote_server_id || null;
    document.querySelector("#pathid").value = fetchedValues.path_id || null;
    document.querySelector("#widthid").value = fetchedValues.width_id ;
    document.querySelector("#heightid").value = fetchedValues.height_id;
  });
}

$(document).ready(function(){
	restore_options();

	$("#saveButton").click(function(){
		save_options();
	});
});
