

function loadNewElement(site) {
	
	if (site == "news") {
		var element = document.getElementById("container");
		
		element.innerHTML = '<object type="text/html" data="input.html"></object>'
			
		
		
	} else if (site == "contact") {
		var element = document.getElementById("container");
		
		element.innerHTML = '<object type="text/html" data="input.html"></object>'
		
		//var c = element.childNodes.length;
		//document.getElementById("xx").innerHTML = c;
		
		//alert(document.getElementById("carContainer").innerHTML);
	}
	
}