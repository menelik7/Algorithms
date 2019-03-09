// chunk([0, 1, 2, 3, 4, 5, 6], 2) --> [[0, 1], [2, 3], [4, 5], [6]]
// chunk([0, 1, 2, 3, 4, 5, 6], 4) --> [[0, 1, 2, 3], [4, 5, 6]]

// Iterative Solution #1
 function chunk(array, size) {
	const chunked = [];
	for (let element of array) {
		const last = chunked[chunked.length - 1];

		if (!last || last.length === size) {
			chunked.push([element]);
		} else {
			last.push(element);
		}
	}
	return chunked;
}

// Iterative solution #2
function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}

// Recursive Solution
function chunk(array, size, index = 0, chunked = []) {
	if (index > array.length) {
		return chunked;
	}

	chunked.push(array.slice(index, index + size));
	index += size;
	return chunk(array, size, index, chunked)
}

console.log(chunk([0, 1, 2, 3, 4, 5, 6, 4, 67, 23, 41, 9, 60, 3], 9))