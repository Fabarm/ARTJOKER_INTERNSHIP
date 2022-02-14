"use strict";
// 1
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  paste(data) {
    let newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.pasteNode(this.root, newNode);
    }
  }

  pasteNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.pasteNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.pasteNode(node.right, newNode);
      }
    }
  }

  searchTarget(node, target) {
    if (node === null) {
      return null;
    } else if (target < node.data) {
      return this.search(node.left, target);
    } else if (target > node.data) {
      return this.search(node.right, target);
    } else {
      return node;
    }
  }

  deleteTarget(node, target) {
    if (node.data === target) {
       node.data = null;
       node.left = null;
       node.right = null;
    } else if (target < node.data) {
      if(node.left === null) {
        return null;
      }
      return this.deleteTarget(node.left, target);
    } else if (target > node.data) {
      if(node.right === null) {
        return null;
      }
      return this.deleteTarget(node.right, target);
    }
    return "Delete complete";
  }
}

let bst = new BinaryTree();
bst.paste(4);
bst.paste(2);
bst.paste(6);
bst.paste(8);
bst.paste(5);
bst.paste(0);
bst.paste(10);
bst.paste(7);
bst.paste(3);
bst.paste(-1);

console.log(bst)

// 2
function selectionSort(array) {
  if(Array.isArray(array) === false) {
    throw new Error("Data type array is not a array");
  }

  for(let i = 0; i < array.length; i++) {
    let min = i;
    for(let j = i; j < array.length; j++) {
      if(array[j] < array[min]) {
        min=j;
      }
    }
    if (min !== i) {
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
  return array;
}

function bubbleSort(array) {
  if(Array.isArray(array) === false) {
    throw new Error("Data type array is not a array");
  }

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

//Не по заданию, просто реализация поиска для отсортированного массива по типу бинарного дерева
function binarySearchFromSortedArray(array, target) {
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