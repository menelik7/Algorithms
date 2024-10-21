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

// const orderStatus = {
// 	placed: false,
// 	received: false,
// 	shipped: false,
// 	delivered: false,
// };

// const updateStatus = (currentStatus) => {
// 	orderStatus[currentStatus] = true;
// };

// updateStatus("delivered");

// console.log(orderStatus);

// const fib = (num) => {
// 	let fibNumbers = [0, 1];
// 	for (let i = 2; i <= num; i++) {
// 		fibNumbers.push(fibNumbers[i - 2] + fibNumbers[i - 1]);
// 	}

// 	return fibNumbers[num];
// };

function myFunction(str) {
	console.log("First", i); // undefined

	if (true) {
		var i = 100;
	}

	console.log("Second", i); // 100
}

// myFunction();

// console.log(mergeUnsortedArrays([3, 0, 31, 4], [4, 30, 6])); // O(n^2) Quadratic time compaxity

var twoSum = function (nums, target) {
	const complements = {};

	for (let i = 0; i < nums.length; i++) {
		const complement = target - nums[i];
		if (complement in complements) return [complements[complement], i];
		complements[nums[i]] = i;
	}
};

// console.log("Two sum: ", twoSum([2, -2, 11, 15], 9));

var maxSubArray = function (nums) {
	let currentHighest = nums[0];
	let mainHighest = currentHighest;

	for (let i = 1; i < nums.length; i++) {
		// O(n)
		currentHighest = Math.max(currentHighest + nums[i], nums[i]);

		if (currentHighest > mainHighest) {
			mainHighest = currentHighest;
		}
	}

	return mainHighest;
};

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

function bubbleSort(array) {
	for (let i = 0; i < array.length; i++) {
		for (let j = i + 1; j < array.length; j++) {
			if (array[j] < array[i]) {
				const lesser = array[j];
				array[j] = array[i];
				array[i] = lesser;
			}
		}
	}

	return array;
}

// console.log(bubbleSort([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

function mergeSort(nums) {
	if (nums.length === 1) {
		return nums;
	}

	const middle = Math.floor(nums.length / 2);
	const nums1 = nums.slice(0, middle);
	const nums2 = nums.slice(middle);

	return merge(mergeSort(nums1), mergeSort(nums2));
}

function merge(nums1, nums2) {
	const result = [];
	let nums1Item = nums1[0];
	let nums2Item = nums2[0];
	let i = 0;
	let j = 0;

	while (nums1Item !== undefined || nums2Item !== undefined) {
		if (nums2Item === undefined || nums1Item < nums2Item) {
			i++;
			result.push(nums1Item);
			nums1Item = nums1[i];
		} else {
			j++;
			result.push(nums2Item);
			nums2Item = nums2[j];
		}
	}

	return result;
}

// console.log(mergeSort([5, 1, 1, 2, 0, 0]));

function moveZeros(nums) {
	let left = 0;

	for (let right = 0; right < nums.length; right++) {
		if (nums[right] !== 0) {
			[nums[right], nums[left]] = [nums[left], nums[right]]; // Array destructuring
			left++;
		}
	}

	return nums;
}

// console.log(moveZeros([1, 0, 3, 0, 0, 12]));

function rotate(nums, k) {
	const length = nums.length;
	k = k % length;

	nums.push(...nums.splice(0, length - k));

	console.log("Rotated nums", nums);
}

// rotate([1, 2,3], 5);

// function LongestWord(sen) {
// 	const strArr = sen.split(" ");
// 	let longestStr = "";

// 	for (let str of strArr) {
// 		const strWithoutSpecialChar = str.replace(/\W/gi, "");
// 		if (strWithoutSpecialChar.length > longestStr.length)
// 			longestStr = strWithoutSpecialChar;
// 	}
// 	console.log(longestStr);
// } // O(2n) time, O(2n) space

function LongestWord(str) {
	const re = /^[a-zA-Z0-9_.-]*$/;
	let curStr = "";
	let longestStr = "";

	for (let i = 0; i < str.length; i++) {
		if (re.test(str[i])) {
			curStr += str[i];
			longestStr = curStr.length > longestStr.length ? curStr : longestStr;
		} else {
			curStr = "";
		}
	}
	console.log(longestStr);
}
// O(n) time, O(1) space

// LongestWord("f  umk   n&!! timer loving"); // time

function firstRecurringItem1(input) {
	// O(n^2)
	if (!input || input.length < 2) return "Nothing to compare!";

	let inputLength = input.length;
	const recurringItem = [];

	for (let i = 0; i < inputLength; i++) {
		for (let j = i + 1; j < inputLength; j++) {
			if (input[i] === input[j]) {
				if (recurringItem.length) {
					if (j < recurringItem[1]) {
						recurringItem[0] = input[i];
						recurringItem[1] = j;
					}
				} else {
					recurringItem.push(input[i], j);
				}
			}

			console.log(recurringItem);
		}
	}

	return recurringItem[0];
}

function firstRecurringItem2(input) {
	// O(n logn)
	if (!input || input.length < 2) return "Nothing to compare!";

	let inputLength = input.length;
	const map = {};
	let jump = 1;
	let result = "No recurring items.";

	while (jump < inputLength) {
		for (let i = 0; i + jump <= inputLength - 1; i++) {
			if (input[i] === input[i + jump]) {
				if (!map.hasOwnProperty(input[i])) {
					map[input[i]] = i + jump;
				} else {
					if (i + jump < map[input[i]]) {
						map[input[i]] = i + jump;
					}
				}
			}
		}
		jump++;
	}

	let lowestIndexOfRecurringItem = inputLength;
	Object.entries(map).forEach(([key, value]) => {
		if (value < lowestIndexOfRecurringItem) {
			lowestIndexOfRecurringItem = value;
			result = key;
		}
	});

	return result;
}

function firstRecurringItem3(input) {
	// O(n)
	if (!input || input.length < 2) return "Nothing to compare!";

	let inputLength = input.length;
	const map = {};

	for (let i = 0; i < inputLength; i++) {
		if (!map.hasOwnProperty(input[i])) {
			map[input[i]] = true;
		} else {
			return input[i];
		}
	}

	return "No recurring items.";
}

// console.log("result", firstRecurringItem3([2, 1, 4, 3, 5, 9, 2, 5, 3, 5, 2]));

// Return change in multiple of $ 1, 2, 5, 10, 20, 50 bills
function getChange(change) {
	if (!change) return "No change required.";
	if (change > 99) return "Out of bounds.";

	const denominations = {
		one: 0,
		two: 0,
		five: 0,
		ten: 0,
		twenty: 0,
		fifty: 0,
	};

	const digits = JSON.stringify(change).split("");
	const lastChar = digits[digits.length - 1];
	const lastDigit = parseFloat(lastChar);

	if (lastDigit > 0 && lastDigit < 5 && lastDigit % 2) {
		denominations.one = 1;
	} else {
		denominations.five = 1;
		if ((change - 5) % 2) {
			denominations.one = 1;
		}
	}

	let remainder = change - (denominations.five * 5 + denominations.one);

	// Fifties
	denominations.fifty = Math.floor(remainder / 50);
	remainder = remainder - denominations.fifty * 50;
	// Twenties
	denominations.twenty = Math.floor(remainder / 20);
	remainder = remainder - denominations.twenty * 20;
	// Tens
	denominations.ten = Math.floor(remainder / 10);
	remainder = remainder - denominations.ten * 10;
	denominations.two = remainder / 2;

	return denominations;
}

// console.log(getChange(48));

// Linked list
class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}
class LinkedList {
	constructor(data) {
		this.head = {
			data,
			next: null,
		};
		this.tail = this.head;
		this.length = 1;
	}

	append(data) {
		const newNode = new Node(data);
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;

		return this;
	}

	prepend(data) {
		const newNode = new Node(data);
		newNode.next = this.head;
		this.head = newNode;
		this.length++;

		return this;
	}

	getAt(index) {
		if (index >= this.length || index < 0) {
			return undefined;
		}

		let counter = 0;
		let node = this.head;

		while (counter !== index) {
			node = node.next;
			counter++;
		}

		return node;
	}

	insertAt(index, data) {
		if (index === 0) {
			console.log("Just prepended", data);
			return this.prepend(data);
		}

		if (index === this.length) {
			console.log("Just appended", data);
			return this.append(data);
		}

		const newNode = new Node(data);

		let previousNode = this.getAt(index - 1);

		if (!previousNode) {
			console.log("Index is out of bounds.");
			return;
		}

		let nextNode = previousNode.next;
		previousNode.next = newNode;
		newNode.next = nextNode;
		this.length++;
	}

	remove(index) {
		if (index === 0) {
			this.head = this.head.next;

			return this.length--;
		}

		let nodeToBeRemoved = this.getAt(index);

		if (!nodeToBeRemoved) {
			console.log("Index is out of bounds.");
			return;
		}

		let previousNode = this.getAt(index - 1);

		if (index === this.length - 1) {
			this.tail = previousNode;
		}

		previousNode.next = nodeToBeRemoved.next;
		return this.length--;
	}
}

const linkedList = new LinkedList("Tihitina");
linkedList.append("Sarah");
linkedList.append("Fikir");

linkedList.prepend("Menelik");
linkedList.insertAt(2, "Bikisho");
console.log("After insert: ", JSON.stringify(linkedList, null, 2));
// const index = 3;
// console.log(`The data at index ${index} is:`, linkedList.getAt(index));
linkedList.remove(3);
console.log("After removal", JSON.stringify(linkedList, null, 2));
