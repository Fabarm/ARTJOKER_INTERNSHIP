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
    return "Data added";
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
      return this.searchTarget(node.left, target);
    } else if (target > node.data) {
      return this.searchTarget(node.right, target);
    } else {
      return node;
    }
  }

  minNode(node) {
    if (node.left === null)
      return node;
    else
      return this.minNode(node.left);
  }

  deleteTarget(target) {
    this.root = this.deleteNode(this.root, target);
  }

  deleteNode(node, target) {
    if (node === null) {
      return null;
    } else if (target < node.data) {
      node.left = this.deleteNode(node.left, target);
      return node;
    } else if (target > node.data) {
      node.right = this.deleteNode(node.right, target);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      let newNode = this.minNode(node.left);
      node.data = newNode.data;
      node.left = this.deleteNode(node.left, newNode.data);
      return node;
    }
  }
}

// 2
function selectionSort(array) {
  if (Array.isArray(array) === false) {
    throw new Error("Data type array is not a array");
  }

  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min !== i) {
      [array[i], array[min]] = [array[min], array[i]];
    }
  }
  return array;
}

function bubbleSort(array) {
  if (Array.isArray(array) === false) {
    throw new Error("Data type array is not a array");
  }

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]]
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