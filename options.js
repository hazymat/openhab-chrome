// Saves options to localStorage.
function save_options() {
	localStorage["URL"] = $("#URL").val();
	localStorage["width"] = $("#width").val();
	localStorage["height"] = $("#height").val();

	// Update status to let user know options were saved.
	$("#status").html("Options Saved.");
	setTimeout(function() {
		$("#status").html("");
	}, 2000);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
	var URL = localStorage["URL"];
	var width = localStorage["width"];
	var height = localStorage["height"];
	
	if(URL){
		$("#URL").val(URL);
	}
	if(width){
		$("#width").val(width);
	}
	if(height){
		$("#height").val(height);
	}
}

$(document).ready(function(){
	restore_options();
	
	$("#save").click(function(){
		save_options();
	});
});