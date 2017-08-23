
function loadJSON(callback) {
	//document.getElementById("carContainer").innerHTML = "Hello";
	
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.overrideMimeType("application/json");
	
	xmlhttp.open("GET", "data.json", true);
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
				callback(xmlhttp.responseText);
			}
		};
				
	xmlhttp.send(null);
}

function init() {
	loadJSON(function(response) {
		var actual_JSON = JSON.parse(response);
		document.getElementById("carContainer").innerHTML = actual_JSON.cars[2].name;
		//alert("It's a " + actual_JSON.name);
	});
}

