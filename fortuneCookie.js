window.onload = function() {
	var n = 0;
	var invalid = true;

	do {
		n = prompt("Please input a nber between 1 and 5: ");
		
		if (null == n)
			return;
		
		n = parseInt(n);
		
		invalid = (isNaN(n) || n < 1 || n > 5);
		
		if (invalid)
			alert("Input not valid");
	} while (invalid);
	
	var fortune = "";
	
	switch (n) {
	case 1:
		fortune = "A friend asks only for your time not your money.";
		break;
	case 2:
		fortune = "Hard work pays off in the future, laziness pays off now.";
		break;
	case 3:
		fortune = "A chance meeting opens new doors to success and friendship.";
		break;
	case 4:
		fortune = "The greatest risk is not taking one.";
		break;
	case 5:
		fortune = "The man on the top of the mountain did not fall there.";
		break;
	}
	
	alert(fortune);
}
