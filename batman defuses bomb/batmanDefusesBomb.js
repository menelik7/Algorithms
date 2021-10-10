// const name = "Menelik Worku Tefera";
// const initials = name.match(/\b(\w)/g).join(""); //
// console.log(initials);

const N = 5; // maximum number of turns before game over.

const size = [10, 10]; // Size of building.
const W = size[0]; // width of the building.
const H = size[1]; // height of the building.
let minXCoord = 1;
let minYCoord = 1;
let maxXCoord = W;
let maxYCoord = H;

let batmanPosition = [
	Math.floor(Math.random() * W) + 1,
	Math.floor(Math.random() * H) + 1,
];
console.log("Batman's starting position: ", batmanPosition);
let X0 = batmanPosition[0];
let Y0 = batmanPosition[1];

const bombLocation = [
	Math.floor(Math.random() * W) + 1,
	Math.floor(Math.random() * H) + 1,
];
const A0 = bombLocation[0];
const B0 = bombLocation[1];
console.log("Bomb Location: ", bombLocation);

let numberOfJumps = 0;

const finalMessage = () => {
	console.log(
		`Found and defused the bomb in ${
			numberOfJumps === 1 ? numberOfJumps + " jump" : numberOfJumps + " jumps"
		}! My current location is now: [ ${X0}, ${Y0} ]`
	);
};

const finalBatmanPosition = () => {
	console.log(`[ ${X0}, ${Y0} ]`);
	finalMessage();
};

// game loop
while (numberOfJumps < N) {
	let bombDir = ""; // the direction of the bombs from batman's current location (D, U, R, L, DR, DL, UR, UL).

	if (B0 > Y0) {
		bombDir += "U";
		minYCoord = Y0 + 1;
	}
	if (B0 < Y0) {
		bombDir += "D";
		maxYCoord = Y0 - 1;
	}
	if (A0 > X0) {
		bombDir += "R";
		minXCoord = X0 + 1;
	}
	if (A0 < X0) {
		bombDir += "L";
		maxXCoord = X0 - 1;
	}

	console.log(bombDir);

	if (!bombDir) {
		finalMessage();
		break;
	}

	if (maxYCoord === minYCoord && maxXCoord === minXCoord) {
		(Y0 = minYCoord || maxYCoord) && (X0 = maxXCoord || minXCoord);
		numberOfJumps++;
		finalBatmanPosition();
		break;
	}

	if (maxYCoord === minYCoord) {
		Y0 = maxYCoord || minYCoord;
	} else if (maxYCoord - minYCoord === 2) {
		Y0 = maxYCoord - 1 || minYCoord + 1;
	} else if (bombDir.indexOf("D") !== -1) {
		Y0 = Math.ceil((minYCoord + maxYCoord) / 2);
	} else if (bombDir.indexOf("U") !== -1) {
		Y0 = minYCoord + Math.floor((maxYCoord - minYCoord) / 2);
	}

	if (maxXCoord === minXCoord) {
		X0 = maxXCoord || minXCoord;
	} else if (maxXCoord - minXCoord === 2) {
		X0 = maxXCoord - 1 || minXCoord + 1;
	} else if (bombDir.indexOf("R") !== -1) {
		X0 = Math.floor((minXCoord + maxXCoord) / 2);
	} else if (bombDir.indexOf("L") !== -1) {
		X0 = minXCoord + Math.ceil((maxXCoord - minXCoord) / 2);
	}

	numberOfJumps++;
	console.log(`[ ${X0}, ${Y0} ]`);
}

if (numberOfJumps === N) {
	console.log("You've exceeded your allowed number of jumps(5).  GAME OVER!!!");
}
