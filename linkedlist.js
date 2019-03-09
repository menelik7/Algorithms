class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(data) {
		// this.head = new Node(data, this.head);
		this.inserAt(data, 0); // preferred method because we are reusing code that is already written and avoids redundancy.
	}

	size() {
		let counter = 0;
		let node = this.head;

		while(node) {
			counter++;
			node = node.next;
		}

		return counter;
	}

	getFirst() {
		// return this.head;
		return this.getAt(0); // Preferred method as described above.
	}

	getLast() {
		// if (!this.head) {
		// 	return null;
		// }

		// let node = this.head;

		// while (node) {
		// 	if (!node.next) {
		// 		return node;
		// 	}
		// 	node = node.next;
		// }
		return this.getAt(this.size() - 1);
	}

	clear() {
		this.head = null;
	}

	removeFirst() {
		if (!this.head) {
			return null;
		}

		this.head = this.head.next;
	}

	removeLast() {
		if (!this.head) {
			return null;
		}

		if (!this.head.next) {
			this.head = null;
			return;
		}

		let previous = this.head;
		let node = this.head.next;

		while (node.next) {
			previous = node;
			node = node.next;
		}

		previous.next = null;

	}

	inserLast(data) {
		const last = this.getLast();

		if (last) {
			last.next = new Node(data);
		} else {
			this.head = new Node(data);
		}
	}

	getAt(index) {
		if (!this.head) {
			return null;
		}
		
		let node = this.head;
		let counter = 0;
		while (node) {
			if (counter === index) {
				return node;
			}

			counter++;
			node = node.next;
		}

		return null; // This also takes care of the case where the index is out of bounds
	}

	removeAt(index) {
		if (!this.head) {
			return null;
		}

		if (index === 0) {
			this.head = this.head.next;
			return;
		}

		const previous = this.getAt(index - 1);
		if (!previous || !previous.next) {
			return;
		}
		previous.next = previous.next.next;
	}

	inserAt(data, index) {
		if (!this.head) {
			this.head = new Node(data);
			return;
		}

		if (index === 0) {
			this.head = new Node(data, this.head);
			return;
		}

		const previous = this.getAt(index - 1) || this.getLast();
		previous.next = new Node(data, previous.next);
	}
}

// Initiate the linked list
const list = new LinkedList();
// Insert new nodes
list.insertFirst('Fikir');
list.insertFirst('Sarah');
list.insertFirst('Menelik');
console.log('List: ' + JSON.stringify(list, null, 4) + '\r\n');

// Insert first method
list.insertFirst('Rebecca');
console.log('Updated List: ' + JSON.stringify(list, null, 4) + '\r\n');

// Get the size of the current list
console.log('List size: ' + list.size() + '\r\n');

// Get the first node in out list
console.log('First in the list: ' + JSON.stringify(list.getFirst(), null, 4) + '\r\n');

// Get the last node in our list
console.log('Last the list: ' + JSON.stringify(list.getLast(), null, 4) + '\r\n');

// Clear our list
// list.clear();
// console.log('Cleared List: ' + JSON.stringify(list, null, 4) + '\r\n');

// Remove the first node in our list
list.removeFirst();
console.log('List with first node removed: ' + JSON.stringify(list, null, 4) + '\r\n');

// Remove the last node in our list
list.removeLast();
console.log('List with last node removed: ' + JSON.stringify(list, null, 4) + '\r\n');

// Insert last
list.inserLast('Tihitina');
console.log('List with a new node inserted at the end of our list: ' + JSON.stringify(list, null, 4) + '\r\n');

// Return the node at the given index
console.log('Display the node at the given index in our list: ' + JSON.stringify(list.getAt(2), null, 4) + '\r\n');

// Remove the node at the given index
list.removeAt(1);
console.log('List with the given node removed: ' + JSON.stringify(list, null, 4) + '\r\n');

// Insert the node at the given index
list.inserAt('Rebecca', 0);
console.log('List with a new node inserted at the given index in our list ' + JSON.stringify(list, null, 4) + '\r\n');
