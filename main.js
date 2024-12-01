const calculator = {
	add: (a, b) => a + b,
	sub: (a, b) => a - b,
	div: (a, b) => a / b,
	mul: (a, b) => a * b,
	sqrt: (a) => {
		let upper = findBound(a, true);
		let lower = findBound(a, false);
		return upper;
	},
};

function findBound(n, upper) {
	let arr = n.toString().split("");
	let up = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == ".") {
			break;
		} else {
			up.push(arr[i]);
		}
	}

	if (upper) {
		up[up.length - 1] = (Number(up[up.length - 1]) + 1).toString();
	}

	return Number(up.join(""));
}

module.exports = calculator;
