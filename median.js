function getMedian(array) {
	return array[Math.floor((array.length - 1) / 2)];
}

console.log(getMedian([0, 1, 3, 7, 5, 6, 8, 9, 7, 7, 11, 12])); // 7
