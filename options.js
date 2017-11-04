// Saves options to localStorage.
function save_options() {
  localStorage["local_server_id"] = $("#localserverid").val();
  localStorage["remote_server_id"] = $("#remoteserverid").val();
  localStorage["path_id"] = $("#pathid").val();
  localStorage["width_id"] = $("#widthid").val();
  localStorage["height_id"] = $("#heightid").val();

	// Update status to let user know options were saved.
	$("#status").html("Options Saved.");
	setTimeout(function() {
		$("#status").html("");
	}, 2000);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  var local_server_id = localStorage["local_server_id"];
  var remote_server_id = localStorage["remote_server_id"];
  var path_id = localStorage["path_id"];
  var width_id = localStorage["width_id"];
  var height_id = localStorage["height_id"];
  
  if(local_server_id){
    $("#localserverid").val(local_server_id);
  }
  if (remote_server_id) {
    $("#remoteserverid").val(remote_server_id);
  }
  if(path_id){
    $("#pathid").val(path_id);
  }
  if(width_id){
    $("#widthid").val(width_id);
  }
  if(height_id){
    $("#heightid").val(height_id);
  }
}

$(document).ready(function(){
	restore_options();
	
	$("#save").click(function(){
		save_options();
	});
});
