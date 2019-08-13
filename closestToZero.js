let diff;
let result;
let currentPar = 1000;

const closestToZero = arr => {
	for (num of arr) {
		diff = Math.abs(0 - num);
		if (diff < currentPar) {
			result = num;
			currentPar = diff;
		} else if (diff === currentPar) {
			let highest = Math.max(result, num);
			result = highest;
		}
	}

	return result;
};

console.log(closestToZero([4, 23, 90, -12, 1, -2, 19, 11, -2, -1]));
