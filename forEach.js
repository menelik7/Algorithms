const array = [1, 2, 3, 4];
let decider = ['Menelik', ' Manew'];
let count = decider.length;

array.forEach((element, index) => {
	const add = 10;

	if (index === count) {
		console.log('decider: empty');
		console.log('Number of items removed from decider: ' + count);
	}

	if (index < count) {
		element += add;
		console.log('decider: ' + decider);
		console.log('element at index [' + index + '] = ' + element);
		decider.pop();
	}
});

