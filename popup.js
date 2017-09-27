document.addEventListener('DOMContentLoaded', 
	function applysettings(){
		document.getElementById('MyFrameContainer').innerHTML= '<iframe style="border:none;" src="http://' + localStorage["server_id"] + ':' + localStorage["port_id"] + localStorage["path_id"] + localStorage["home_id"] + '" width=100% height=100%></iframe>';
		document.getElementById('bod').style.width=localStorage["width_id"];
		document.getElementById('bod').style.height=localStorage["height_id"];
		if (null == localStorage["server_id"]) {
			document.getElementById('setup').innerHTML = '<p style="padding:20px;background:#ccc;">Don\'t forget to <a href="options.html">Setup</a> the extension!</p>';
		}
	}
)
