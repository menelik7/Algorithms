// ***** CHAPTER TWO *****
// ***** Program Structure *****
// Chess Board
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #

function chessBoard(width, height) {
	let rows = 0;

	while (rows < width) {
		let count = 0;
		let hash = "";

		while (count < height) {
			if (rows % 2 === 0) {
				if (count % 2 === 0) {
					hash += " ";
				} else {
					hash += "#";
				}
			} else {
				if (count % 2 === 0) {
					hash += "#";
				} else {
					hash += " ";
				}
			}
			count++;
		}

		console.log(hash);
		rows++;
	}
}

chessBoard(8, 8);

// ***** CHAPTER THREE *****
// ***** Functions *****
// Closure
// function powerer(exponent) {
// 	return (num) => num ** exponent;
// }

// let square = powerer(2);
// let cube = powerer(3);
// let num = Math.floor(Math.random() * 9) + 1;
// console.log(
// 	`The square of ${num} is ${square(num)} and it's cube is ${cube(num)}.`
// );

// Recursion
// function power(base, exponent) {
// 	if (exponent == 0) {
// 		return 1;
// 	} else {
// 		return base * power(base, exponent - 1);
// 	}
// }
// console.log(power(2, 3));

// First go
// 2 * power(2, 2);
//  Second go
// 2 * 2 * power(2, 1);
// Third go
// 2 * 2 * 2 * power(2, 0)
// Fourth go
// 2 * 2 * 2 * 1 = 8

// Example
function findSolution(target) {
	let count = 0;
	function find(current, history) {
		if (current == target) {
			return `After recursing ${count} time${
				count === 1 ? "" : "s"
			}, we get ${history}.`;
		} else if (current > target) {
			return null;
		} else {
			count++;
			return (
				find(current + 5, `(${history} + 5)`) ||
				find(current * 3, `(${history} * 3)`)
			);
		}
	}
	return find(1, "1");
}
console.log(findSolution(13));

// Start
// find(1, "1");

// First
// find(6, "(1 + 5)");

// Second
// find (11, "((1 + 5) + 5)")

// Third
// find (16, ) too big
// find (33, ) too big
// find (18, ) too big
// find(3, "(1 * 3)");

// Fourth
// find(8, "((1 * 3) + 5)");

// Fifth
// find(13, "(((1 * 3) + 5) + 5)")
// found!

function isEven(num) {
	function subTwo(result) {
		if (result === 0) {
			return true;
		} else if (result === 1 || result === -1) {
			return false;
		} else {
			if (result > 0) {
				return subTwo(result - 2);
			} else {
				return subTwo(result + 2);
			}
		}
	}
	return subTwo(num);
}

console.log(isEven(-1));

// Count B's
function countBs(str, index) {
	let count = 0;
	let indexArr = [];
	for (i = 0; i < str.length; i++) {
		if (str[i] === "B") {
			count += 1;
			indexArr.push(i);
		}
	}
	console.log(
		`There ${count > 1 ? "are" : "is"} ${count} B${
			count > 1 ? "s" : ""
		} in the given string.`
	);
	return `${indexArr.length > 1 ? "They are" : "It is"} at index${
		indexArr.length > 1 ? "es" : ""
	} [${indexArr}].`;
}

console.log(countBs("Boys In Da HoBod"));

// ***** CHAPTER FOUR *****
// ***** Data Structures Objects and Arrays  *****
let arr = [1, 2, 3];
// add in front
arr.unshift(0);
console.log(arr);
// Array are objects
console.log(typeof arr);

// Comparing objects
let object1 = { value: 10 };
let object2 = { value: 10 };
console.log(object1 === object2);
// Same with arrays (which are also objects) unless specifically bound to be equal to another object.

function remove(array, index) {
	return array.slice(0, index).concat(array.slice(index + 1));
}

console.log(remove(["a", "b", "c", "d", "e"], 2));

console.log(String(6).padStart(3, "0"));

function max(...numbers) {
	let result = -Infinity;
	for (let number of numbers) {
		if (number > result) result = number;
	}
	return result;
}
console.log(max(4, 1, 9, -2));

// JSON

let string = JSON.stringify({ squirrel: false, events: ["weekend"] });
console.log(string);
console.log(JSON.parse(string));

// Exercise
// Sum of a range
function range(start, finish, step) {
	let rangeArr = [];
	if (start < finish) {
		for (i = start; i <= finish; i += step) {
			rangeArr.push(i);
		}
	} else {
		for (i = start; i >= finish; i += step) {
			rangeArr.push(i);
		}
	}
	console.log(rangeArr);
	return rangeArr;
}

function sum(array) {
	let total = 0;
	for (num of array) {
		total += num;
	}
	return total;
}

console.log(sum(range(10, 1, -1)));

// Reversing an array
function reverseArray(array) {
	let reversedArr = [];
	for (let i = 0; i < array.length; i++) {
		reversedArr.unshift(array[i]);
	}
	return reversedArr;
}

console.log(
	"Reversed array: ",
	reverseArray(["a", "b", "c", "d", "e", "f", "g"])
);

function reverseArrayInPLace(array) {
	let width = array.length;
	for (let i = 0; i < Math.floor(width / 2); i++) {
		let temp = array[i];
		array[i] = array[width - 1 - i];
		array[width - 1 - i] = temp;
	}

	return array;
}

console.log(
	"In place reversed array: ",
	reverseArrayInPLace(["a", "b", "c", "d", "e", "f", "g"])
);

// A list
// list = {
// 	value: 1,
// 	rest: {
// 		value: 2,
// 		rest: {
// 			value: 3,
// 			rest: null,
// 		},
// 	},
// };

function arrayToList(array) {
	let list = null;
	for (let i = array.length; i > 0; i--) {
		let node = {
			value: i,
			rest: list,
		};
		list = node;
	}

	return list;
}

console.log("list: " + JSON.stringify(arrayToList([1, 2, 3, 4]), null, 2));

// Deep Comparison
console.log(
	"\r\n--------------------------------------------------------------------\r\n" +
		"------------------------  DEEP COMPARISON  -------------------------\r\n" +
		"--------------------------------------------------------------------"
);

function startComparing(first, second) {
	console.log(`\r\nFirst entry: ${JSON.stringify(first)} (${typeof first})`);
	console.log(`Second entry: ${JSON.stringify(second)} (${typeof second})`);
	return deepEqual(first, second);
}

function deepEqual(first, second) {
	if (typeof first === "object" && typeof second === "object") {
		if (first === null && second === null) {
			return "\r\nnull is definitely equal to null";
		} else if (first === null || second === null) {
			return "\r\nBoth are objects but one is null.";
		} else if (Object.keys(first).length === Object.keys(second).length) {
			console.log(
				"\r\nBoth are objects with the same number of keys and their comparison is as follows: "
			);
			return compareKeys(first, second);
		} else {
			return "\r\nBoth are object but with a different number of keys.";
		}
	} else {
		return first === second;
	}
}

function compareKeys(object1, object2) {
	console.log("\r\nKEYS COMPARISON: ");
	let firstKeys = Object.keys(object1);
	let secondKeys = Object.keys(object2);
	let limit = firstKeys.length || secondKeys.length;
	let keysResults = [];

	for (let i = 0; i < limit; i++) {
		console.log(
			"The keys comparison " + (i + 1) + ": ",
			deepEqual(firstKeys[i], secondKeys[i])
		);
		keysResults.push(deepEqual(firstKeys[i], secondKeys[i]));
	}

	if (keysResults.indexOf(false) != -1) {
		return "\r\nThese objects are equal in type but they don't have the same properties.";
	} else {
		return compareProps(object1, object2);
	}
}

function compareProps(object1, object2) {
	console.log("\r\nVALUES COMPARISON: ");
	let prop1 = Object.values(object1);
	let prop2 = Object.values(object2);
	let limit = prop1.length || prop2.length;
	let valuesResult = [];

	for (let i = 0; i < limit; i++) {
		console.log(
			"The values comparison " + (i + 1) + ": ",
			deepEqual(prop1[i], prop2[i])
		);
		valuesResult.push(deepEqual(prop1[i], prop2[i]));
	}

	if (valuesResult.indexOf(false) != -1) {
		return "\r\nThese objects have the same properties but not the same values.";
	} else {
		return "\r\nThese objects are equal in BOTH type and values.";
	}
}

console.log(startComparing(["one", "two", "three"], ["ne", "two", "three"]));
