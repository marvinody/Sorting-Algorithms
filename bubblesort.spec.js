describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });
});

describe('Swap', function() {
  it('can swap two numbers', function() {
    expect(swap([2, 1, 4, 5], 2, 3)).toEqual([2, 1, 5, 4]);
  });
});

describe('Bubble Sort', function() {
  it('can sort array', function() {
    expect(bubbleSort([4, 3, 2, 1])).toEqual([1, 2, 3, 4]);
  });
});

describe('Bubble Sort Swap', function() {
  it('can swap', function() {
    expect(bubbleSort([1, 0])).toEqual([0, 1]);
  });
});
