function getMedian(array) {
	const isEven = array.length % 2 === 0;

	return isEven ? array[array.length / 2 - 1] : array[Math.floor(array.length / 2)]; 
}

console.log(getMedian([0, 1, 3, 7, 5, 6, 8])) // 7