// abccccc12mk56
function maxChar(str) {
	const charMap = {};
	let max = 0;
	let prop = '';
	
	for (let char of str) {
		charMap[char] =	charMap[char] + 1 || 1;
	}

	for (let char in charMap) {
		if (charMap[char] > max) {
			max = charMap[char];
			prop = char;
		}
	}

	console.log(JSON.stringify(charMap, null, 1));
	return prop + ': ' + max;
}

console.log(maxChar('abccbbbbbbbbaccc12mxxxxmk'));  // x: 9