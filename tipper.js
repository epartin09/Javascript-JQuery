window.onload = function() {
	var billText = "Total bill: ";
	var bill = parseFloat(prompt(billText));
	var tip15 = bill * 0.15;
	var tip20 = bill * 0.2;
	
	alert(billText + bill + "\n15% tip = " + tip15.toString() + " and 20% tip = " + tip20.toString());
}
