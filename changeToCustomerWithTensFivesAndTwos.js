// Give back the smallest number of bills as change to a paying customer
// using only $10, $5, and $2 bills.
let ten = 0;
let five = 0;
let two = 0;

const change = cash => {
	if (cash === 1) {
		return "Impossible!";
	} else if (
		cash >= 10 &&
		(cash % 10 >= 5 ||
			(cash % 10 >= 2 && (cash % 10) % 2 === 0) ||
			cash % 10 === 0)
	) {
		// console.log("I am in ten");
		ten = Math.floor(cash / 10);
		return change(cash % 10);
	} else if (
		cash >= 5 &&
		((cash % 5 >= 2 && (cash % 5) % 2 === 0) || cash % 5 === 0)
	) {
		// console.log("I am in 1st five");
		five = Math.floor(cash / 5);
		return change(cash % 5);
	} else if (cash - 5 >= 4) {
		// console.log("I am in 2nd five");
		five = 1;
		return change(cash - 5);
	} else if (cash >= 2 && (cash % 2 >= 1 || cash % 2 === 0)) {
		// console.log("I am in two");
		two = Math.floor(cash / 2);
		return change(cash % 2);
	}

	return {
		ten,
		five,
		two
	};
};

console.log(change(13));

// // Ultimate test
// for (let i = 1; i < 100; i++) {
// 	ten = 0;
// 	five = 0;
// 	two = 0;
// 	console.log(i + ":", change(i));
// }
