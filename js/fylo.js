window.onload = start;
/**
*<p>Add event listener to the "get started button"</p>
*/
function start(){
	document.getElementById("getAccess-bt").addEventListener('click',validateEmail,false);
}
/**
*<p>Checks if the email address has a valid format</p>
*/
function validateEmail(){
	var regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	if(document.getElementById("getAccess-tf").value.match(regex)){
		document.getElementById("getAcces-errorMsg").style.color = "#79f181";
		document.getElementById("getAcces-errorMsg").innerHTML = "We will contact you soon";
		document.getElementById("getAccess-tf").value = "";
	}else{
		document.getElementById("getAcces-errorMsg").style.color = "hsl(0, 100%, 63%)";
		document.getElementById("getAcces-errorMsg").innerHTML = "Please enter a valid email address";
	}
}