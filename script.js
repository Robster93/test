

function loadNewElement(site) {
	
	if (site == 1) {
		var element = document.getElementById("container");
		
		element.innerHTML = '<object type="text/html" data="input.html"></object>'
		
		/*var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var myObj = JSON.parse(this.responseText);
				document.getElementById("carContainer").innerHTML = myObj.name;
			}
		};
		
		xmlhttp.open("GET", "data.json", true);
		xmlhttp.send();
		*/
	} else if (site == 2) {
		var element = document.getElementById("container");
		
		element.innerHTML = '<object type="text/html" data="input.html"></object>'
	}
	
}