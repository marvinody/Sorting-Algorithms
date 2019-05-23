function split(wholeArray) {
	/* your code here to define the firstHalf and secondHalf arrays */
	if (!wholeArray.length) return [];
	const middle = Math.ceil(wholeArray.length / 2);
	const firstHalf = wholeArray.slice(0, middle);
	const secondHalf = wholeArray.slice(middle);
	return [firstHalf, secondHalf];
}

function merge(leftArr, rightArr) {
	let leftIndex = (rightIndex = 0);
	let mergedArray = [];
	let sumArrLengths = leftArr.length + rightArr.length;
	let leftVal = leftArr[0];
	let rightVal = rightArr[0];
	while (mergedArray.length < sumArrLengths) {
		if (leftArr.length === leftIndex) {
			//add rest of right array
			mergedArray.push(...rightArr.slice(rightIndex));
		}
		if (rightArr.length === rightIndex) {
			//add rest of left array
			mergedArray.push(...leftArr.slice(leftIndex));
		}
		if (leftVal < rightVal) {
			mergedArray.push(leftVal);
			leftIndex++;
			leftVal = leftArr[leftIndex];
		} else if (leftVal >= rightVal) {
			mergedArray.push(rightVal);
			rightIndex++;
			rightVal = rightArr[rightIndex];
		}
	}

	return mergedArray;
}

function mergeSort(array) {
	/* your code here */
	if (array.length <= 1) return array;
	const [leftArr, rightArr] = split(array);
	const sortedLeftArr = mergeSort(leftArr);
	const sortedRightArr = mergeSort(rightArr);
	return merge(sortedLeftArr, sortedRightArr);
}
