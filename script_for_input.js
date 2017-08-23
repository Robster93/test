
function loadJSON(callback) {
	//document.getElementById("carContainer").innerHTML = "Hello";
	
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.overrideMimeType("application/json");
	
	xmlhttp.open("GET", "data.json", true);
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
				callback(xmlhttp.resopnseText);
			}
		};
				
	xmlhttp.send(null);
}

function init() {
	loadJSON(function(resopnse) {
		var actual_JSON = JSON.parse(resopnse);
		document.getElementById("carContainer").innerHTML = myObj.name;
		alert("It's a " + myObj.name);
	}
}

