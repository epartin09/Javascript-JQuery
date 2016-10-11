var r1 = [1540, 1130, 1580, 1105];
var r2 = [2010, 1168, 2305, 4102];
var r3 = [2450, 1847, 2710, 2391];
var r4 = [1845, 1491, 1284, 1575];
var r5 = [2120, 1767, 1599, 3888];
var textDisplay;
var region = [r1, r2, r3, r4, r5];

var $ = function(id) {
	return document.getElementById(id);
}

/*
Array.prototype.sum = function(col) {
	var S = 0;
	
	for (var i = 0; i < this.length; i++) {
		S += this[i][col];
	}
	
	return S;
}
*/

function sumCol(a, c) {
	var S = 0;
	
	for (var i = 0; i < a.length; i++) {
		S += a[i][c];
	}
	
	return S;
}

function sumRow(a, r) {
	return a[r].reduce((S, N) => S + N);
}

function show_quarter_click() {
	textDisplay = "";
	textDisplay += "Sales by Quarter";
	
	for (var i = 0; i < region[0].length; i++) {
		textDisplay += "\nQ" + (i + 1) + ": " + sumCol(region, i);
	}
	
	$("results").innerHTML = textDisplay;
}

function show_region_click() {
	textDisplay = "";
	textDisplay += "Sales by Region";
	
	for (var i = 0; i < region.length; i++) {
		textDisplay += "\nRegion " + (i + 1) + ": " + sumRow(region, i);
	}
	
	$("results").innerHTML = textDisplay;
}

function show_total_click() {
	textDisplay = "";
	textDisplay += "Total sales: ";
	
	var total = 0;
	
	for (var i = 0; i < region.length; i++) {
		total += sumRow(region, i);
	}
	
	textDisplay += total;
	
	$("results").innerHTML = textDisplay;
}

window.onload = function() {
	$("show_quarter").onclick = show_quarter_click;
	$("show_region").onclick = show_region_click;
	$("show_total").onclick = show_total_click;
}
