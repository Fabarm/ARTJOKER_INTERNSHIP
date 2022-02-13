// 1
let arr = [-5,-4,-3,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

// 2
function sortIncrease(array) {
  for (let j = 0; j < array.length - 1; j++) {
    for (let i = 0; i < array.length - 1 - j; i++) {
      if (array[i] < array[i + 1]) {
        let result = array[i + 1];
        array[i + 1] = array[i];
        array[i] = result;
      }
    }
  }
  return array;
}

function bubbleSort (array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.round((right - left)/2) + left;

    if (target === array[mid]) {
      return mid;
    } else if (target < array[mid]) {
      right = mid -1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}