//    [1, 2, 3], 
//    [8, 9, 4], SR ER
//    [7, 6, 5]  
// 	      EC    
//        SC


// Iterative solution
function matrix(n) {
	const array = [];

	for (let i = 0; i < n; i++) {
		array.push([]);
	}
	
	let counter = 1;
	let startRow = 0;
	let endRow = n - 1;
	let startCol = 0;
	let endCol = n - 1;

	while (startRow <= endRow && startCol <= endCol) {
		for (let i = startCol; i <= endCol; i++) {
			array[startRow][i] = counter;
			counter++;
		}
		startRow++;

		for (let i = startRow; i <= endRow; i++) {
			array[i][endCol] = counter;
			counter++;
		}
		endCol--;

		for (let i = endCol; i >= startCol; i--) {
			array[endRow][i] = counter;
			counter++
		}
		endRow--;

		for (let i = endRow; i >= startRow; i--) {
			array[i][startCol] = counter;
			counter++
		}
		startCol++;
	}

	return array;
}

console.log(matrix(15));