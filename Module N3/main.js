"use strict";
// 1
class BinaryTree {
  constructor() {
    this.root = null;
  }

  pasteTarget(data) {
    if(typeof data !== "number") {
      throw new Error("Data type is not a number");
    }

    let newNode = {
      data : data,
      left : null,
      right : null,
    };

    if (this.root === null) {
      this.root = newNode;
    } else {
      pasteNode(this.root, newNode);
    }

    function pasteNode(node, newNode) {
      if (newNode.data < node.data) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          pasteNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          pasteNode(node.right, newNode);
        }
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
    }
    return node;
  }

  deleteTarget(target) {
    if(typeof target !== "number") {
      throw new Error("Data type of target is not a number");
    }
    this.root = deleteNode(this.root, target);

    function deleteNode(node, target) {
      if (node === null) {
        return null;
      } else if (target < node.data) {
        node.left = deleteNode(node.left, target);
        return node;
      } else if (target > node.data) {
        node.right = deleteNode(node.right, target);
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
        let newNode = minNode(node.right);
        node.data = newNode.data;
        node.right = deleteNode(node.right, newNode.data);
        return node;
      }
    }

    function minNode(node) {
      if (node.left === null) {
        return node;
      }
      return minNode(node.left);
    }
  }
}

// 2
Array.prototype.selectionSort = function (callback) {
  if(typeof callback !== "function") {
    throw new Error("Data type callback is not a function");
  }
  for (let i = 0; i < this.length; i++) {
    let min = i;
    for (let j = i; j < this.length; j++) {
      if (callback(this[min], this[j])) {
        min = j;
      }
    }
    [this[i], this[min]] = [this[min], this[i]];
  }
  return this;
}

Array.prototype.bubbleSort = function (callback) {
  if(typeof callback !== "function") {
    throw new Error("Data type callback is not a function");
  }
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length - 1 - i; j++) {
      if (callback(this[j], this[j + 1])) {
        [this[j], this[j + 1]] = [this[j + 1], this[j]]
      }
    }
  }
  return this;
}