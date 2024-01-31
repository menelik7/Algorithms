const array = [
	80, -8, 78, 568, 0, -9, 89, 12, -78, 894, -123, 87, -34, 2, 45, 3, -24, 34, 7,
	9,
];

// Bubble sort
// function bubbleSort(array) {
// 	for (i = 0; i < array.length - 1; i++) {
// 		for (let j = i + 1; j < array.length; j++) {
// 			if (array[j] < array[i]) {
// 				const lesser = array[j];
// 				array[j] = array[i];
// 				array[i] = lesser;
// 			}
// 		}
// 	}

// 	return array;
// }

// selection sort
function selectionSort(array) {
	for (let i = 0; i < array.length; i++) {
		let minValueIndex = i;

		for (let j = i + 1; j < array.length; j++) {
			if (array[j] < array[minValueIndex]) {
				minValueIndex = j;
			}
		}

		if (minValueIndex !== i) {
			console.log("It is lesser");
			let lesser = array[minValueIndex];
			array[minValueIndex] = array[i];
			array[i] = lesser;
		}
	}

	return array;
}

// Merge sort
// function mergeSort(array) {
// 	if (array.length === 1) {
// 		return array;
// 	}

// 	const center = Math.floor(array.length / 2);
// 	const left = array.slice(0, center);
// 	const right = array.slice(center);

// 	return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
// 	const results = [];

// 	while (left.length && right.length) {
// 		if (left[0] < right[0]) {
// 			results.push(left.shift());
// 		} else {
// 			results.push(right.shift());
// 		}
// 	}

// 	return [...results, ...left, ...right];
// }

// console.log("Bubble Sort");
// console.log(bubbleSort(array));

console.log("selection Sort");
console.log(selectionSort(array));

// console.log("Merge Sort");
// console.log(mergeSort(array));
