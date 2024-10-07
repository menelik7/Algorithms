function reverseString(str) {
	let newString = "";

	// for (let i = 0; i < str.length; i++) {
	// 	newString = str[i] + newString;
	// }
	// OR

	// for (let i = str.length - 1; i >= 0; i--) {
	// 	newString += str[i];
	// }
	// OR

	const newStringArr = str.split("").reduce((acc, curVal) => {
		acc = curVal + acc;

		return acc;
	}, newString);

	console.log(newStringArr);
}

reverseString("Hi!  My name is Menelik."); // .kileneM si eman yM  !iH
