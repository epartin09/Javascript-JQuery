window.onload = function() {
	var item1Text = "Cost of Item1: ";
	var item2Text = "Cost of Item2: ";
	var item1 = parseFloat(prompt(item1Text));
	var item2 = parseFloat(prompt(item2Text));
	var subTotal = item1 + item2;
	var salesTax = subTotal * 0.06;
	var total = subTotal + salesTax;
	
	item1 = item1.toFixed(2);
	item2 = item2.toFixed(2);
	salesTax = salesTax.toFixed(2);
	subTotal = subTotal.toFixed(2);
	total = total.toFixed(2);
	
	alert(item1Text + item1 + "\n" + item2Text + item2 + "\nTotal price of two items: " + subTotal + "\n6% Sales tax = " + salesTax + "\nTotal cost = " + total);
}
