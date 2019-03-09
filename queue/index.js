// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
	constructor() {
		this.data = [];
	}

	add(record) {
		this.data.unshift(record);
	}

	remove() {
		this.data.pop();
	}
}

module.exports = Queue;

const q = new Queue;
q.add('Menelik');
q.add('Sarah');
console.log('Queues are First in First out \r\n')
console.log('q with Menelik added first and then Sarah: ' + JSON.stringify(q, null, 1) + '\r\n');
q.remove();
console.log('q with last item removed: ' + JSON.stringify(q, null, 1));