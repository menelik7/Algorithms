const posts = [
	{
		title: "Some Exposure",
		description: "If you want to get to the top, "
	},
	{
		title: "More Exposure",
		description: "you MUST pass this test."
	},
	{
		title: "Tennis",
		description: "Who is the GOAT?!"
	}
];

let str = "";
posts.forEach(post => {
	return post.title === "Some Exposure" || post.title === "More Exposure"
		? (str += post.description)
		: "";
});

// const arr =
// 	filterPost.length > 0
// 		? filterPost.map(post => post)
// 		: "Oops!  Nothing matched your search criteria.";
// let str = "";
// for (let post of arr) {
// 	str += post.description;
// }

console.log(str);
