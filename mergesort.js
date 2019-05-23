function split(wholeArray) {
	/* your code here to define the firstHalf and secondHalf arrays */
	if (!wholeArray.length) return [];
	const middle = Math.ceil(wholeArray.length / 2);
	const firstHalf = wholeArray.slice(0, middle);
	const secondHalf = wholeArray.slice(middle);
	return [firstHalf, secondHalf];
}

function merge(leftArr, rightArr, cmp = defaultCompare) {
	let leftIndex = 0,
		rightIndex = 0;
	let mergedArray = [];
	let sumArrLengths = leftArr.length + rightArr.length;

	while (mergedArray.length < sumArrLengths) {
		let leftVal = leftArr[leftIndex],
			rightVal = rightArr[rightIndex];

		let leftEmpty = leftIndex === leftArr.length;
		let rightEmpty = rightIndex === rightArr.length;
		while (!leftEmpty && (rightEmpty || cmp(leftVal, rightVal) <= 0)) {
			// move left into merged while less than right
			mergedArray.push(leftVal);
			leftVal = leftArr[++leftIndex];
			leftEmpty = leftIndex === leftArr.length;
		}
		while (!rightEmpty && (leftEmpty || cmp(leftVal, rightVal) > 0)) {
			// move right into merged while less than left
			mergedArray.push(rightVal);
			rightVal = rightArr[++rightIndex];
			rightEmpty = rightIndex === rightArr.length;
		}
	}

	return mergedArray;
}

function mergeSort(array, cmp = defaultCompare) {
	/* your code here */
	if (array.length <= 1) return array;
	const [leftArr, rightArr] = split(array);
	const sortedLeftArr = mergeSort(leftArr, cmp);
	const sortedRightArr = mergeSort(rightArr, cmp);
	return merge(sortedLeftArr, sortedRightArr, cmp);
}

const defaultCompare = (a, b) => a - b
