const calculator = require("./main");

test("Adds numbers", () => {
	expect(calculator.add(3, -4)).toBe(-1);
});

test("Subtracts numbers", () => {
	expect(calculator.sub(3, -4)).toBe(7);
});

test("Divides", () => {
	expect(calculator.div(7, 4)).toBe(1.75);
});

test("Multiplies", () => {
	expect(calculator.mul(7, 4)).toBe(28);
});

test("Correct lower bound", () => {
	expect(calculator.sqrt(4.5)).toBe(4);
});

test("Correct upper bound", () => {
	expect(calculator.sqrt(4.5)).toBe(5);
});

test("Correct range for sqrt", () => {
	expect(calculator.sqrt(4.5)).toBe([4.1, 4.9]);
});
