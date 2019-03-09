// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
	constructor() {
		this.data = [];
	}

	push(record) {
		this.data.push(record);
	}

	pop() {
		this.data.pop();
	}

	peek() {
		return this.data[this.data.length - 1];
	}
}

module.exports = Stack;

const s = new Stack;
console.log('Stacks are First in Last out \r\n' + JSON.stringify(s, null, 1) + '\r\n');
s.push('Menelik');
s.push('Sarah');
console.log('s with Menelik added first and then Sarah: ' + JSON.stringify(s, null, 1) + '\r\n');
console.log('Take a peek at the element to be removed: ' + s.peek() + '\r\n');
s.pop();
console.log('s with the item removed: ' + JSON.stringify(s, null, 1));