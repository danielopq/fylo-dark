/**
 * @fileoverview Adds functionality to the "Get Starter" button, validating the email provided by the user.
 * Displays feedback based on the email format validation.
 * @author Daniel Martinez Duque
 * @date 2024-08-04
 */

/**
 * Validates if the email address provided by the user has a correct format.
 * If the email is valid, displays a success message; otherwise, shows an error.
 */
const validateEmail=()=>{
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


(()=>{
	document.getElementById("getAccess-bt").addEventListener('click',validateEmail,false);
})()