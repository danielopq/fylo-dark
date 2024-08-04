/**
 * @fileoverview Adds the acction to the get "starter buttton" in order to validate the email given by the user.
 * @author Daniel Martinez Duque
 * @date 2024-08-04
 */

(()=>{
	document.getElementById("getAccess-bt").addEventListener('click',validateEmail,false);
})()

/**
*Checks if the email address has a valid format.
*/
function validateEmail(){
	var regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	if(document.getElementById("getAccess-tf").value.match(regex)){
		document.getElementById("getAcces-errorMsg").style.color = "#79f181";
		document.getElementById("getAcces-errorMsg").innerHTML = "We will contact you soon";
		document.getElementById("getAccess-tf").value = "";
	}else{
		document.getElementById("getAcces-errorMsg").style.color = "hsl(0, 100%, 63%)";
		document.getElementById("getAcces-errorMsg").innerHTML = "Error, please check your email";
	}
}