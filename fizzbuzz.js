function fizzbuzz(n) {
	 for (let i = 1; i <= n; i++) {
	 	if (i % 3 === 0 && i % 5 === 0) {
	 		console.log('FizzBuzz');
	 	} else if (i % 3 === 0) {
	 		console.log('fizz');
	 	} else if (i % 5 === 0) {
	 		console.log('buzz');
	 	} else {
	 		console.log(i);
	 	}
	 }
}

function fizzbuzz(n) {
	 for (let i = 1; i <= n; i++)console.log((i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i);
}

fizzbuzz(55);