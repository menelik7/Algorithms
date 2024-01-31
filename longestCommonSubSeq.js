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
