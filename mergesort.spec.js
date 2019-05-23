describe("Split Array function", function() {
	it("is able to split an empty array", function() {
		// your code here
		expect(split([])).toEqual([]);
	});
	it("is able to split an even array into halves", () => {
		expect(split([0, 1, 2, 3])).toEqual([[0, 1], [2, 3]]);
	});
	it("is able to split an odd array into halves", () => {
		expect(split([0, 1, 2])).toEqual([[0, 1], [2]]);
	});
});

describe("Merge function", function() {
	it("it returns an empty array", function() {
		// test the merging algorithm
		expect(merge([], [])).toEqual([]);
	});
	it("is able to merge two one element sorted arrays into one sorted array", function() {
		// test the merging algorithm
		expect(merge([2], [1])).toEqual([1, 2]);
	});
	it("is able to merge two sorted arrays into one sorted array", function() {
		// test the merging algorithm
		expect(merge([2, 3], [0, 1])).toEqual([0, 1, 2, 3]);
	});
});
