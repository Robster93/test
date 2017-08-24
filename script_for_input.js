
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

		var carsArray;

		for (i = 0; actual_JSON.cars.length - 1; i++) {
			//carsArray.push(new car(actual_JSON.cars[i].name, actual_JSON.cars[i].builtYear));
			var newCar = new car(actual_JSON.cars[i].name, actual_JSON.cars[i].builtYear);
			document.getElementById("carListContainer").innerHTML += '<h2>' + newCar.title + '</h2>' + '<p>' + newCar.builtYear + '</p>';
		}


		//alert("It's a " + actual_JSON.name);
	});
}

function car(title, builtYear) {
	this.title = title;
	this.builtYear = builtYear;
}

