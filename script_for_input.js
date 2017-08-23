
function onload() {
	document.getElementById("carContainer").innerHTML = "Hello";
	
	var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var myObj = JSON.parse(this.responseText);
				document.getElementById("carContainer").innerHTML = myObj.name;
			}
		};
		
		xmlhttp.open("GET", "data.json", true);
		xmlhttp.send();
}