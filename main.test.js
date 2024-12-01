const hello = require("./main");

test("Returns Hello", () => {
	expect(hello()).toBe("Hello, World!");
});
