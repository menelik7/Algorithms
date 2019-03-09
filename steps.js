// #  
// ## 
// ###

// Iterative solution
// Runtime complexity of n^2
function steps(n) {
	for (let row = 0; row < n; row++) {
		let stair = '';

		for (let col = 0; col < n; col++) {
			if (col <= row) {
				stair += '#';
			} else {
				stair += ' ';
			}
		}

		console.log(stair);
	}
}

// Recursive solution
// Runtime complexity n^2
function steps(n, row = 0, stair = '') {
	if (n === row) {
		return;
	}

	if (stair.length === n) {
		console.log(stair);
		return steps(n, row + 1);
	}

	const add = stair.length <= row ? '#' : ' ';
	return steps(n, row, stair + add);
}

steps(3);