// anagrams
// Solution #1 --> preferred
function anagrams(stringA, stringB) {
	return organize(stringA) === organize(stringB);
}

function organize(str) {
	const organized = str
		.replace(/[^\w]/g, "")
		.toLowerCase()
		.split("")
		.sort()
		.join(""); // We split because one cannot sort a string - has to be an array.
	return organized;
}

// Solution #2
function anagrams(stringA, stringB) {
	const aCharMap = buildCharMap(stringA);
	const bCharMap = buildCharMap(stringB);

	if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
		return false;
	}

	for (let char in aCharMap) {
		if (aCharMap[char] !== bCharMap[char]) {
			return false;
		}
	}

	return true;
}

function buildCharMap(str) {
	const charMap = {};

	for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
		charMap[char] = charMap[char] + 1 || 1;
	}
	console.log(charMap);
	return charMap;
}

console.log(anagrams("the quick brown fox!!!!", "*&())TehKCiqu nbrow xfo")); // true
