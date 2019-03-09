//   # 
//  ###
// #####
// Iterative solution
// function pyramid(n) {
// 	const midpointIndex = Math.floor((n * 2 - 1) / 2);

// 	for (let row = 0; row < n; row++) {
// 		let level = '';

// 		for (let col = 0; col <= n * 2 -1; col++) {
// 			if (midpointIndex - row <= col && midpointIndex + row >= col) {
// 				level += '#';
// 			} else {
// 				level += ' ';
// 			}
// 		}

// 		console.log(level);
// 	}
// }

// Recursive solution
function pyramid(n, row = 0, level = '') {
	if (n === row) {
		return;
	}

	if (level.length === n * 2 - 1) {
		console.log(level);
		return pyramid(n, row + 1);
	}

	const midpointIndex = Math.floor((n * 2 - 1) / 2);
	let add = (midpointIndex - row <= level.length && midpointIndex + row >= level.length) ? '#' : ' ';
	return pyramid(n, row, level + add);
}

pyramid(5);