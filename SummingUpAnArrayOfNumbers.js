//*****Loop*****//
function addNums(array) {
	let total = 0;

	array.forEach(num => (total += num));
	return total;
}

//*****Recursion*****//
function addNums(array, result = 0, index = 0) {
	if (index === array.length) {
		// OR if (index > array.length - 1) These two statements can be confusing...
		return result;
	}

	result += array[index];
	index++;
	return addNums(array, result, index);
}

console.log("The total is: " + addNums([2, 4, 6, 8, 9, 88, 56, 6, 8, 4])); // Can be any number of numbers in this array
