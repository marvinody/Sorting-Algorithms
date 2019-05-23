function split(wholeArray) {
	/* your code here to define the firstHalf and secondHalf arrays */
	if (!wholeArray.length) return [];
	const middle = Math.ceil(wholeArray.length / 2);
	const firstHalf = wholeArray.slice(0, middle);
	const secondHalf = wholeArray.slice(middle);
	return [firstHalf, secondHalf];
}

function merge(leftArr, rightArr, cmp = defaultCompare) {
	let leftIndex = (rightIndex = 0);
	let mergedArray = [];
	let sumArrLengths = leftArr.length + rightArr.length;

	while (mergedArray.length < sumArrLengths) {
		if (leftArr.length === leftIndex) {
			//add rest of right array
			mergedArray.push(...rightArr.slice(rightIndex));
			continue;
		}
		if (rightArr.length === rightIndex) {
			//add rest of left array
			mergedArray.push(...leftArr.slice(leftIndex));
			continue;
		}
		let leftVal = leftArr[leftIndex];
		let rightVal = rightArr[rightIndex];
		const cmpVal = cmp(leftVal, rightVal);
		if (cmpVal < 0) {
			mergedArray.push(leftVal);
			leftIndex++;
		} else if (cmpVal >= 0) {
			mergedArray.push(rightVal);
			rightIndex++;
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
