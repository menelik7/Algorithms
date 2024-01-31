// let numArray = [12, 4, 34, 129, 2, 19, 57, 99, 100];
// let strArray = ["a", "k", "s", "c", "f"];

// // Out of the box method
// // let newNumArray = numArray.sort((a, b) => b - a);
// // let newStrArray = strArray.sort();

// // Classical
// function sortArray(arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		for (let j = i + 1; j < arr.length; j++) {
// 			if (arr[j] < arr[i]) {
// 				let lesser = arr[j];
// 				arr[j] = arr[i];
// 				arr[i] = lesser;
// 			}
// 		}
// 		console.log("Original numbers array", JSON.stringify(numArray));
// 	}

// 	return arr;
// }

// // i = 12 and j = 4
// // lesser = 4
// // numArray[1] = 12
// // numArray[0] = 4

// console.log("Sorted numbers array", JSON.stringify(sortArray(numArray)));
// // console.log("String array", newStrArray);

const char1 = "adcdef";
const char2 = "ghijk";
let arr = [];
arr.push(char1, char2);
console.log(arr);
