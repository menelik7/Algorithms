// Binary search tree
class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}

	insert(data) {
		if (data < this.data && this.left) {
			this.left.insert(data);
		} else if (data < this.data) {
			this.left = new Node(data);
		} else if (data > this.data && this.right) {
			this.right.insert(data);
		} else if (data > this.data) {
			this.right = new Node(data);
		}
	}

	contains(data) {
		if (this.data === data) {
			return this;
		}

		if (data < this.data && this.left) {
			return this.left.contains(data);
		} else if (data > this.data && this.right) {
			return this.right.contains(data);
		}

		return null;
	}
}

// Build our tree
const bst = new Node(10);
console.log('Orignal tree: ' + JSON.stringify(bst, null, 5));

// Insert new nodes into our tree
bst.insert(5);
bst.insert(0);
bst.insert(-30);
bst.insert(15);
bst.insert(25);
bst.insert(18)
bst.insert(-20);
console.log('Tree with new nodes insertes: ' + JSON.stringify(bst, null, 5));

// constains method
console.log('Contains method: ' + JSON.stringify(bst.contains(0)));