let sum = 0;
let avrg = 0;

const findAverage = arr => {
	arr.forEach(num => (sum += num));
	console.log(sum);
	avrg = sum / arr.length;

	return avrg;
};

console.log(findAverage([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
