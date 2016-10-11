var $ = function(id) {
    return document.getElementById(id); 
}

var subtotal_click = function() {
	$("subtotal").value = "";
}

var tax_rate_click = function() {
	$("tax_rate").value = "";
}

var calculate_click = function() {
	var subtotal = parseFloat($("subtotal").value);
    var taxRate  = parseFloat($("tax_rate").value);
	
	var isInvalid1 = (null == subtotal || isNaN(subtotal) || subtotal <= 0 || subtotal > 10000);
	
	if(isInvalid1)
		$("subtotal_error").firstChild.nodeValue = "Must be a positive number less than $10,000";
	else
		$("subtotal_error").firstChild.nodeValue = "*";
	
	var isInvalid2 = (null == taxRate || isNaN(taxRate) || taxRate <= 0 || taxRate > 12);
	
	if(isInvalid2)
		$("tax_rate_error").firstChild.nodeValue = "Must be a positive number less than 12";
	else
		$("tax_rate_error").firstChild.nodeValue = "*";
	
	// move the cursor to the Subtotal field
	$("subtotal").focus();
	
	if(isInvalid1 || isInvalid2)
		return;
	
	var salesTax = subtotal * taxRate * 0.01;
	var total = subtotal + salesTax; 
	
	$("sales_tax").value = salesTax.toFixed(0);
	$("total").value = total.toFixed(2);
	
	
}
var clear_click = function() {
	// clear all text boxes
	$("subtotal").value = "";
	$("tax_rate").value = "";
	$("sales_tax").value = "";
	$("total").value ="";
	$("tax_rate_error").firstChild.nodeValue = "*";
	$("subtotal_error").firstChild.nodeValue = "*"; 
	
	
	// move the cursor to the Subtotal field
	$("subtotal").focus();
}

window.onload = function() {
	// move the cursor to the Subtotal field
	$("subtotal").focus();
	// event handlers
	$("subtotal").onclick = subtotal_click;
	$("tax_rate").onclick = tax_rate_click;
	$("calculate").onclick = calculate_click;
	$("clear").onclick = clear_click;
}
