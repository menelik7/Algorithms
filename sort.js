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
// function mergeSort(nums) {
// 	if (nums.length === 1) {
// 		return nums;
// 	}

// 	const middle = Math.floor(nums.length / 2);
// 	const nums1 = nums.slice(0, middle);
// 	const nums2 = nums.slice(middle);

// 	return merge(mergeSort(nums1), mergeSort(nums2));
// }

// function merge(nums1, nums2) {
// 	const result = [];
// 	let nums1Item = nums1[0];
// 	let nums2Item = nums2[0];
// 	let i = 0;
// 	let j = 0;

// 	while (nums1Item !== undefined || nums2Item !== undefined) {
// 		if (nums2Item === undefined || nums1Item < nums2Item) {
// 			i++;
// 			result.push(nums1Item);
// 			nums1Item = nums1[i];
// 		} else {
// 			j++;
// 			result.push(nums2Item);
// 			nums2Item = nums2[j];
// 		}
// 	}

// 	return result;
// }

// console.log("selection Sort");
// console.log(selectionSort(array));

// console.log("Merge Sort");
// console.log(mergeSort(array));
