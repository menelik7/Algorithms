class Node {
	constructor(data) {
		this.data = data;
		this.children = [];
	}

	add(data) {
		this.children.push(new Node(data));
	}

	remove(data) {
		this.children = this.children.filter((child) => {
			return child.data !== data;
		});
	}
}

class Tree {
	constructor() {
		this.root = null;
	}

	build(data) {
		if (!this.root) {
			this.root = new Node(data);
			return;
		}

		this.root.add(data); 
	}

	traverseBF(fn) {
		const arr = [this.root];

		while (arr.length) {
			let node = arr.shift();
			arr.push(...node.children); // ... is the ES2015 spread operator which looks at all the elements of an array.
			fn(node);
		}
	}

	traverseDF(fn) {
		const arr = [this.root];

		while (arr.length) {
			let node = arr.shift();
			arr.unshift(...node.children);
			fn(node);
		}
	}

	traverseBFAndAdd(data, childData) {
		const arr = [this.root];

		while (arr.length) {
			let node = arr.shift();
			if (node.data === data) {
				node.add(childData);
				return;
			}

			arr.push(...node.children);
		}
	}

	traverseBFAndRemove(fn, data) {
		const arr = [this.root];

		while (arr.length) {
			let node = arr.shift();
			node.children.forEach((child) => {
				if (child.data === data) {
					fn(node, data);
				}
			});
			arr.push(...node.children);
		}
	}

	clear() {
		this.root = null;
	}
}

// Tree implementation
const tree = new Tree();
tree.build('Menelik');
tree.build('Sebu');
tree.build('Messay');
console.log('Original tree: ' + JSON.stringify(tree, null, 4) + '\r\n');

// Traverse BF and add children to a specific node
tree.traverseBFAndAdd('Sebu', 'Keku');
tree.traverseBFAndAdd('Sebu', 'Ephy');
tree.traverseBFAndAdd('Messay', 'Mamoush');
tree.traverseBFAndAdd('Messay', 'Oshu');
console.log('Tree with children added to specific nodes: ' + JSON.stringify(tree, null, 4) + '\r\n');

// Traverse BF and list the items in the tree in order of importance.
const BFArray = [];
function listOfTreeInOrderOfImportance(node) {
	BFArray.push(node.data);
}
console.log('List of node data using the traverseBF method:');
tree.traverseBF(listOfTreeInOrderOfImportance);
console.log(JSON.stringify(BFArray, null) + '\r\n');

// Traverse DF and list the items in the tree in order of importance.
const DFArray = [];
function listOfTreeInOrderOfDepth(node) {
	DFArray.push(node.data);
}
console.log('List of node data using the traverseDF method:');
tree.traverseDF(listOfTreeInOrderOfDepth);
console.log(JSON.stringify(DFArray, null) + '\r\n');

// Traverse BF and remove a node
function removeFromNodeChildMatchingData(node, data) {
	node.children = node.children.filter((child) => {
		return child.data !== data;
	})
}
tree.traverseBFAndRemove(removeFromNodeChildMatchingData, 'Ephy');
console.log('Tree with a specific node removed: ' + JSON.stringify(tree, null, 4) + '\r\n');

// Clear our tree
tree.clear();
console.log('Tree afer running the "clear" method: ' + JSON.stringify(tree, null, 4));
