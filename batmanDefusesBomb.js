// function fizzbuzz(n) {
// 	for (i = 1; i <= n; i++) {
// 		if ( i % 3 === 0 && i % 5 === 0) {
// 			console.log('FizzBuzz')
// 		} else if (i % 3 === 0) {
// 			console.log('fizz')
// 		} else if (i % 5 === 0) {
// 			console.log('buzz')
// 		} else {
// 			console.log(i)
// 		}
// 	}
// }

// fizzbuzz(100)

// const name = "Menelik Worku Tefera";
// const initials = name.match(/\b(\w)/g).join(""); //
// console.log(initials);

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
//  **/

// const readline = () => {
// 	return "5526";
// };

// var inputs = readline().split(" ");
// console.log("Inputs = ", inputs);

// const n = inputs.length; // the number of temperatures to analyse
// console.log("n = ", n);

// let currentPar = 5526;
// let diff;
// let result = 0;

// if (!n || (n === 1 && !inputs[0])) {
// 	result = result;
// } else {
// 	for (let i = 0; i < n; i++) {
// 		const t = parseInt(inputs[i]); // a temperature expressed as an integer ranging from -273 to 5526

// 		diff = Math.abs(0 - t);
// 		if (diff < currentPar) {
// 			result = inputs[i];
// 			currentPar = diff;
// 		} else if (diff === currentPar) {
// 			let highest = Math.max(result, inputs[i]);
// 			result = highest;
// 		}
// 	}
// }

// console.log("result = ", result);
// // Write an action using console.log()
// // To debug: console.error('Debug messages...');
// var words = ["the", "quick", "brown", "fox"];
// var wordLengths = words.map(word => word.length);

// var wordLengths3 = [];
// var i;
// for (i = 0; i < words.length; i++) {
// 	var word = words[i];
// 	wordLengths3.push(word.length);
// }

// console.log(wordLengths3);
// // "use strict";
// (function() {
// 	var a = (b = 42);
// })();
// // unless stric mode is used the output will be the following
// console.log(typeof a); // undefined
// console.log(typeof b); // number

const N = 5; // maximum number of turns before game over.

const size = [10, 10]; // Size of building.
const W = size[0]; // width of the building.
const H = size[1]; // height of the building.
let minXCoord = 0;
let minYCoord = 0;
let maxXCoord = W - 1;
let maxYCoord = H - 1;

const bombLocation = [7, 7];
const A0 = bombLocation[0];
const B0 = bombLocation[1];
console.log("Bomb Location: ", bombLocation);

let batmanPosition = [2, 1];

let numberOfJumps = 0;

// game loop
while (numberOfJumps < N) {
	let X0 = batmanPosition[0];
	let Y0 = batmanPosition[1];
	let bombDir = ""; // the direction of the bombs from batman's current location (D, U, R, L, DR, DL, UR, UL).

	if (batmanPosition.every((value, index) => value === bombLocation[index])) {
		console.log(
			`Found and defused the bomb in ${
				numberOfJumps === 1
					? numberOfJumps + " jump"
					: numberOfJumps + " jumps"
			}! My current location is now: [ ${X0}, ${Y0} ]`
		);
		break;
	}

	if (B0 > Y0) {
		bombDir += "D";
		minYCoord = Y0 + 1;
	}
	if (B0 < Y0) {
		bombDir += "U";
		maxYCoord = Y0 - 1;
	}
	if (A0 > X0) {
		bombDir += "R";
		minXCoord = X0 + 1;
	}
	if (A0 < X0) {
		bombDir += "L";
		maxXCoord = X0 - 1;
	}

	if (maxYCoord === minYCoord && maxXCoord === minXCoord) {
		(batmanPosition[1] = minYCoord || maxYCoord) &&
			(batmanPosition[0] = maxXCoord || minXCoord);
		bombDir = "";
	}

	if (bombDir === "D") {
		maxYCoord === minYCoord
			? (batmanPosition[1] = minYCoord || maxYCoord)
			: (batmanPosition[1] = Math.ceil((minYCoord + maxYCoord) / 2));
	} else if (bombDir === "U") {
		maxYCoord === minYCoord
			? (batmanPosition[1] = maxYCoord || minYCoord)
			: (batmanPosition[1] =
					minYCoord + Math.ceil((maxYCoord - minYCoord) / 2));
	} else if (bombDir === "R") {
		maxXCoord === minXCoord
			? (batmanPosition[0] = maxXCoord || minXCoord)
			: (batmanPosition[0] = Math.ceil((minXCoord + maxXCoord) / 2));
	} else if (bombDir === "L") {
		maxXCoord === minXCoord
			? (batmanPosition[0] = maxXCoord || minXCoord)
			: (batmanPosition[0] =
					minXCoord + Math.ceil((maxXCoord - minXCoord) / 2));
	} else if (bombDir === "DR") {
		maxYCoord === minYCoord
			? (batmanPosition[1] = minYCoord || maxYCoord)
			: (batmanPosition[1] = Math.ceil((minYCoord + maxYCoord) / 2)) &&
			  (batmanPosition[0] = Math.ceil((minXCoord + maxXCoord) / 2));
	} else if (bombDir === "DL") {
		maxYCoord === minYCoord
			? (batmanPosition[1] = minYCoord || maxYCoord)
			: (batmanPosition[1] = Math.ceil((minYCoord + maxYCoord) / 2)) &&
			  (batmanPosition[0] =
					minXCoord + Math.ceil((maxXCoord - minXCoord) / 2));
	} else if (bombDir === "UR") {
		maxYCoord === minYCoord
			? (batmanPosition[1] = maxYCoord || minYCoord)
			: (batmanPosition[1] =
					minYCoord + Math.ceil((maxYCoord - minYCoord) / 2)) &&
			  (batmanPosition[0] = Math.ceil((minXCoord + maxXCoord) / 2));
	} else if (bombDir === "UL") {
		maxYCoord === minYCoord
			? (batmanPosition[1] = maxYCoord || minYCoord)
			: (batmanPosition[1] =
					minYCoord + Math.ceil((maxYCoord - minYCoord) / 2)) &&
			  (batmanPosition[0] =
					minXCoord + Math.ceil((maxXCoord - minXCoord) / 2));
	}

	numberOfJumps++;
	console.log(batmanPosition);
}

if (numberOfJumps === N) {
	console.log(
		"You've exceeded your allowed number of jumps(5).  GAME OVER!!!"
	);
}
