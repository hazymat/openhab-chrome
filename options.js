// Saves options to localStorage.
function save_options() {
	localStorage["server_id"] = $("#serverid").val();
	localStorage["port_id"] = $("#portid").val();
	localStorage["home_id"] = $("#homeid").val();
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
	var server_id = localStorage["server_id"];
	var port_id = localStorage["port_id"];
	var home_id = localStorage["home_id"];
	var path_id = localStorage["path_id"];
	var width_id = localStorage["width_id"];
	var height_id = localStorage["height_id"];
	
	if(server_id){
		$("#serverid").val(server_id);
	}
	if(port_id){
		$("#portid").val(port_id);
	}
	if(home_id){
		$("#homeid").val(home_id);
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
	
	$("#saveButton").click(function(){
		save_options();
	});
});
