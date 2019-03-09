// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
	constructor() {
		this.first = new Stack();
		this.second = new Stack();
	}

	add(record) {
		this.first.push(record);
	}

	peek() {
		while (this.first.peek()) {
			this.second.push(this.first.pop());
		}

		const recordToBeDeleted = this.second.peek();

		while (this.second.peek()) {
			this.first.push(this.second.pop());
		}

		return recordToBeDeleted;
	}

	remove() {
		while (this.first.peek()) {
			this.second.push(this.first.pop());
		}

		const recordToBeDeleted = this.second.pop();

		while (this.second.peek()) {
			this.first.push(this.second.pop());
		}

		return recordToBeDeleted;
	}
}

module.exports = Queue;
const queue = new Queue();
const names = ['Menelik', 'Worku', 'Tefera', 'Feyissa', 'Mojo'];
names.forEach((name) => queue.add(name));
console.log('Original Queue: ' + JSON.stringify(queue, null) + '\r\n');
console.log('Peeked Item: ' + queue.peek() + '\r\n');
console.log('Item to be removed: ' + queue.remove() + '\r\n');
console.log('Updated Queue with peeked item removed: ' + JSON.stringify(queue, null) + '\r\n');
