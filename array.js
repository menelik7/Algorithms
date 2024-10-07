class MyArray {
	constructor() {
		this.length = 0;
		this.data = {};
	}

	push(item) {
		this.data[this.length] = item;
		this.length++;
	}

	pop() {
		// const updatedData = {};
		// Object.entries(this.data).forEach(([key, value]) => {
		// 	if (parseFloat(key) !== this.length - 1) updatedData[key] = value;
		// });
		// this.length--;
		// this.data = updatedData;
		const { [this.length - 1]: keyOfLastItem, ...rest } = this.data;
		this.data = rest;
		this.length--;
	}

	unshift(item) {
		const tempObj = this.indexChangeFromUnshift();
		tempObj[0] = item;
		this.data = tempObj;
		this.length++;
	}

	shift() {
		const tempObj = this.indexChangeFromShift();
		this.data = tempObj;
		this.length--;
	}

	indexChangeFromUnshift() {
		const tempObj = {};
		Object.entries(this.data).forEach(([key, value]) => {
			tempObj[parseFloat(key) + 1] = value;
		});

		return tempObj;
	}

	indexChangeFromShift() {
		const tempObj = {};
		Object.entries(this.data).forEach(([key, value]) => {
			if (key !== "0") {
				tempObj[parseFloat(key) - 1] = value;
			}
		});

		return tempObj;
	}
}

const myArray = new MyArray();
myArray.push("Menelik");
myArray.push("Sarah");
myArray.push("Fikir");
console.log("Data after push()", myArray.data);
myArray.unshift("Tehetena");
console.log("Data after unshift()", myArray.data);
myArray.pop();
console.log("Data after pop()", myArray.data);
myArray.shift();
console.log("Data after shift()", myArray.data);
