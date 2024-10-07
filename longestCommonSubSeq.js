/*
Shit that doesnt really work


function findIt(s1, s2, s1StartIdx = 0, s2StartIdx = 0, memo) {
	if (!memo) {
		memo = new Array(s1.length).fill().map(() => new Array(s2.length));
	} else if (memo[s1StartIdx] && memo[s1StartIdx][s2StartIdx]) {
		return memo[s1StartIdx][s2StartIdx];
	}

	const results = [];

	for (let s1Idx = s1StartIdx; s1Idx < s1.length; s1Idx++) {
		const s1Char = s1[s1Idx];
		const s2Idx = s2.indexOf(s1Char, s2StartIdx);

		let result = [];

		if (s2Idx !== -1) {
			result.push(s1Char, ...findIt(s1, s2, s1Idx + 1, s2Idx + 1, memo));
		}

		if (result.length) {
			memo[s1Idx][s2Idx] = result.join("");
		}

		results.push(result);
	}

	const longest = findLongest(results);

	return longest.join("");
}

function findLongest(arr) {
	let longest = [];

	for (let item of arr) {
		if (item.length > longest.length) {
			longest = item;
		}
	}

	return longest;
}

function longestCommonSubsequence(text1, text2) {
	const final = findIt(text1, text2);

	return final.length;
}
*/
function longestCommonSubsequence(text1, text2) {
	const n = text1.length;
	const m = text2.length;

	const dp = new Array(n + 1).fill(null).map(() => new Array(m + 1).fill(0));
	for (let i = 0; i <= n; i++) {
		dp[i][0] = 0;
	}
	for (let i = 0; i <= m; i++) {
		dp[0][i] = 0;
	}

	for (let ind1 = 1; ind1 <= n; ind1++) {
		for (let ind2 = 1; ind2 <= m; ind2++) {
			if (text1[ind1 - 1] === text2[ind2 - 1]) {
				dp[ind1][ind2] = 1 + dp[ind1 - 1][ind2 - 1];
			} else {
				dp[ind1][ind2] = Math.max(dp[ind1 - 1][ind2], dp[ind1][ind2 - 1]);
			}
		}
	}

	const len = dp[n][m];

	return len;
}

console.log(
	"The longest subsequence is: ",
	longestCommonSubsequence("ylqpejqbalahwr", "yrkzavgdmdgtqpg")
);
