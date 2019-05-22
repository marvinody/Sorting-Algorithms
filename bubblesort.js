function swap(array, indexOne, indexTwo) {
  let numOne = array[indexOne];
  let numTwo = array[indexTwo];
  array[indexOne] = numTwo;
  array[indexTwo] = numOne;
  return array;
}

// function swap(eleOne, eleTwo) {
//   let c = eleOne;
//   eleOne = eleTwo;
//   eleTwo = c;
//   return [eleOne, eleTwo];
// }

function bubbleSort(arr) {
  let sorted = false;
  while (sorted === false) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        arr = swap(arr, i, i + 1);
        count++;
      }
    }
    if (count === 0) {
      sorted = true;
    }
  }
  return arr;
}

// function bubbleSort(array) {
//   let numSwaps = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < array[i + 1]) {
//       array = swap(array, i, i + 1);
//       numSwaps++;
//     }
//   }
//   if (numSwaps > 0) {
//     return bubbleSort(array);
//   } else {
//     return array;
//   }
// }
