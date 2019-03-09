class Queue {
	constructor() {
		this.data = [];
	}

	push(record) {
		this.data.push(record);
	}

	add(record) {
		this.data.unshift(record);
	}

	remove() {
		return this.data.pop();
	}

	peek() {
		return this.data[this.data.length - 1];
	}
}

function weave(sourceA, sourceB) {
	const q = new Queue;

	while (sourceA.peek() || sourceB.peek()) {
		if (sourceA.peek()) {
			q.add(sourceA.remove());
		}

		if (sourceB.peek()) {
			q.add(sourceB.remove());
		}
	}

	return q;
}

const sourceA = new Queue;
fathersNames = ['Worku', 'Girma'];
fathersNames.forEach((name) => sourceA.push(name));

const sourceB = new Queue;
ChildrenNames = ['Menelik', 'Tihitina'];
ChildrenNames.forEach((name) => sourceB.push(name));

console.log('SourceA: ' + JSON.stringify(sourceA));
console.log('SourceB: ' + JSON.stringify(sourceB) +'\r\n');

console.log('Implementing the weave function...\r\n')

console.log('Weaved Queue from sourceA and sourceB: ' + JSON.stringify(weave(sourceA, sourceB)));