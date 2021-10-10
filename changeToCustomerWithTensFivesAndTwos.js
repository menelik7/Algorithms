// Give back the smallest number of bills as change to a paying customer
// using only $10, $5, and $2 bills.

function giveChange(change) {
	change = Math.floor(change); // In case someone enters decimal.
	if (change === 1 || change === 3) {
		// These are the only two numbers that cannot be accommodated.
		return "Impossible!";
	}
	const two = change < 4 ? change >> 1 : [0, 3, 1, 4, 2][change % 5],
		rest = change - two * 2;

	return {
		two,
		five: Math.floor((rest % 10) / 5),
		ten: Math.floor(rest / 10),
	};
}

// let two = [0,3,1,4,2][change % 5];

//does
// let two;
// if(change%5 === 0) two = 0;
// if(change%5 === 1) two = 3;
// if(change%5 === 2) two = 1;
// if(change%5 === 3) two = 4;
// if(change%5 === 4) two = 2;

// change >> 1 is here just a shorthand for Math.floor(change/2) and deals mostly with the special cases giveChange(1) and giveChange(3); They are not interchangeable, but for the range 0..4 (where I use it) they produce the same result.

function giveChange(amount) {
	amount = Math.floor(amount);
	var ch = { two: 0, five: 0, ten: 0 };

	if (amount < 2 || amount == 3) return "Impossible!";

	if (amount % 2) {
		amount -= 5;
		ch.five = 1;
	}

	while (amount % 10) {
		amount -= 2;
		ch.two++;
	}

	ch.ten = amount / 10;

	return ch;
}

// Ultimate test
for (let i = 1; i < 100; i++) {
	ten = 0;
	five = 0;
	two = 0;
	console.log(i + ":", giveChange(i));
}
