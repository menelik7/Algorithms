// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

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
		this.head = new Node(data, this.head);
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
		return this.head;
	}

	getLast() {
		if (!this.head) {
			return null;
		}

		let node = this.head;
		while (node) {
			if (!node.next) {
				return node;
			}
			node = node.next;
		}
	}

	clear() {
		this.head = null;
	}

	removeFirst() {
		if (!this.head) {
			return;
		}

		this.head = this.head.next;
	}

	removeLast() {
		if (!this.head) {
			return;
		}

		if (!this.head.next) {
			this.head = null;
			return;
		}

		let previous = this.head;
		let node = this.head.next;
		while(node.next) {
			previous = node;
			node = node.next;
		}

		previous.next = null;
	}

	insertLast(data) {
		const last = this.getLast();

		if (last) {
			// There are some existing nodes in our chain
			last.next = new Node(data);
		} else {
			// The chain is empty!
			this.head = new Node(data);
		}
	}

	getAt(index) {
		let counter = 0;
		let node = this.head;

		while (node) {
			if (counter === index) {
				return node;
			}
			counter++;
			node = node.next;
		}

		return null;
	}

	removeAt(index) {
		if (!this.head) {
			return;
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

	insertAt(data, index) {
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

	forEach(fn) {
		let counter = 0;
		let node = this.head;

		while (node) {
			node.data = fn(node, counter);
			node = node.next;
			counter++;
		}
	}

	*[Symbol.iterator]() {
		let node = this.head;
		while (node) {
			yield node;
  			node = node.next;
		}
	}
}

module.exports = { Node, LinkedList };

function addToNum(node, counter) {
	return node.data + ' ' + counter;
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

// Remove the first node in our list
list.removeFirst();
console.log('List with first node removed: ' + JSON.stringify(list, null, 4) + '\r\n');

// Remove the last node in our list
list.removeLast();
console.log('List with last node removed: ' + JSON.stringify(list, null, 4) + '\r\n');

// Insert last
list.insertLast('Tihitina');
console.log('List with a new node inserted at the end of our list: ' + JSON.stringify(list, null, 4) + '\r\n');

// Return the node at the given index
console.log('Display the node at the given index in our list: ' + JSON.stringify(list.getAt(2), null, 4) + '\r\n');

// Remove the node at the given index
list.removeAt(1);
console.log('List with the given node removed: ' + JSON.stringify(list, null, 4) + '\r\n');

// Insert the node at the given index
list.insertAt('Rebecca', 0);
console.log('List with a new node inserted at the given index in our list ' + JSON.stringify(list, null, 4) + '\r\n');

// Concatinate a given string to each of our node value
list.forEach(addToNum);
console.log('List with node values updated with a given string: ' + JSON.stringify(list, null, 4) + '\r\n');

// Clear our list
list.clear();
console.log('Cleared List: ' + JSON.stringify(list, null, 4) + '\r\n');

list.insertFirst('Fikir');
list.insertFirst('Sarah');
list.insertFirst('Menelik');
list.insertFirst('Messeret');
list.insertFirst('Messay');
list.insertFirst('Mamoush');
list.insertFirst('Oshu');
console.log('New list to incorporate some additional features of linked lists: ' + JSON.stringify(list, null, 4) + '\r\n');

function midpoint(list) {
	let slow =  list.getFirst();
	let fast = list.getFirst();

	while (fast.next && fast.next.next) {
		slow = slow.next;
		fast = fast.next.next;
	}

	return slow;
}

console.log('Current list midpoint node is: ' + JSON.stringify(midpoint(list)) + '\r\n');

function howManyFromLast(list, data) {
	let node = findNode(data);
	let counter = 0;

	while (node) {
		if (!node.next) {
			return counter;
		}
		counter++;
		node = node.next;
	}
}

function findNode(data) {
	let node = list.head;

	while (node) {
		if (node.data === data) {
			return node;
		}
		node = node.next;
	}
}

function howManyFromLast(list, data) { // alternative and better solution
	let node = list.head;
	let counter = 0;
	while (node.next) { // becausde we are returning the counter outside the loop - otherwise we would have while (node) and do a if (!node.next) inside the loop and return the counter from there.
		if (node.data === data) {
			counter = 0;
		}
		counter++;
		node = node.next;
	}

	return counter;
}

console.log('Menelik is ' + howManyFromLast(list, 'Menelik') + ' nodes from last.');

