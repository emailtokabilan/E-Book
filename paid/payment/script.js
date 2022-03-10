function validate() {
	var cardnum = document.myform.cardnum.value;
	var expirydate = document.myform.expirydate.value;
	var cvvnum = document.myform.cvvnum.value;
	var cardholder = document.myform.cardholder.value;
	
	var status = false;
	if (cardnum == "") {
		document.getElementById("cardnumlocation").innerHTML = "please enter your Card Number";
		status = false;
	} else {
		document.getElementById("cardnumlocation").innerHTML = "";
		status = true;
	}
	if (expirydate == "") {
		document.getElementById("expirydatelocation").innerHTML = "please enter your Expiry Date";
		status = false;
	} else {
		document.getElementById("expirydatelocation").innerHTML = "";
		status = true;
	}
	if (cvvnum == "") {
		document.getElementById("cvvnumlocation").innerHTML = "please enter your CVV Number";
		status = false;
	} else {
		document.getElementById("cvvnumlocation").innerHTML = "";
		status = true;
	}

	if (cardholder == "") {
		document.getElementById("cardholderlocation").innerHTML = "please enter your Card Holder Name";
		status = false;
	} else {
		document.getElementById("cardholderlocation").innerHTML = "";
		status = true;
	}
	return status;
}