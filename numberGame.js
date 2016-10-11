function validateInput(n) {
	if (null == n)
		return null;
	
	n = parseInt(n);
	
	// invalid input = 0
	if (isNaN(n) || n < 1 || n > 100)
		n = 0;
	
	return n;
}

window.onload = function() {
	do {
		var n = validateInput(prompt("Pick a number between 1 and 100.\nYou will have 7 turns."));
		
		if (null == n)
			return;
		
		var r = Math.floor((Math.random() * 100) + 1);
		
		for (var i = 1; i <= 7; i++) {
			if (n == r) {
				alert("It took you " + i + " turn(s) to guess my number, which was " + r + ".");
				break;
			}
			
			if (i == 7) {
				alert("Oops!! No turns left. My number was " + r + ".");
				break;
			}
			
			alert("Turn " + i + "\nYour guess, " + n + ", is " + (n < r ? "too low" : "too high") + ".\nPick a number between 1 and 100.\nYou have " + (7 - i) + " turn(s) left.");
			
			n = validateInput(prompt("Pick a number between 1 and 100."));
			
			if (null == n)
				return;
		}
	} while (confirm("Play Guess the Number Again"));
}
