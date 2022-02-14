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

  search(node, target) {
    if(node === null) {
      return null;
    } else if (target < node.data) {
      return this.search(node.left, target);
    } else if (target > node.data) {
      return this.search(node.right, target);
    } else {
      return node;
    }
  }
}

let BST = new BinaryTree();
BST.paste(5);
BST.paste(3);
BST.paste(6);
BST.paste(7);
BST.paste(2);
BST.paste(4);
BST.paste(8);
BST.paste(-5);
BST.paste(-4);
console.log(BST.search(BST.root, 6))
console.log(BST)




// 2
function sortIncrease(array) {
  if(Array.isArray(array) === false) {
    throw new Error("Data type array is not a array");
  }

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

