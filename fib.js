// Iterative solution
// function fib(n) {
// 	const array = [0, 1];

// 	for (let i = 2; i <= n; i++) {
// 		let x = array[i - 1];
// 		let y = array[i - 2];

// 		array.push(x + y);
// 	}

// 	console.log(JSON.stringify(array, null, 1));
// 	return 'Fibonacci ' + n + ' is ' + array[n];
// }


// Recursive solution
function memoize(fn) {
	const cache = {};
	return function(...args) {
		if(cache[args]) {
			return cache[args];
		}

		const result = fn.apply(this, args);
		cache[args] = result;
		return result;
	}
}

function slowFib(n) {
	if (n > 1476) {
		return 'Number exceeds our parameter - our highest index is 1476.';
	}

	if(n < 2) {
		return n;
	}

	return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

console.log(fib(50))