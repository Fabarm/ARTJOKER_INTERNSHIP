"use strict";
// 1
class BinaryTree {
  constructor() {    
    this.data = null; 
    this.left = null; 
    this.right = null; 
  }

  add(data, node) {
    if (typeof data !== "number") {
      throw new Error("Data type of target is not a number");
    }
    node = node || this;
    if (node.data === null) { 
      node.data = data; 
      return data; 
    }  
    if (data < node.data) {
      if (node.left === null) {
        node.left = new BinaryTree();
      }
      return this.add(data, node.left);
    } else {    
      if (node.right === null) {
        node.right = new BinaryTree();      
      }
      return this.add(data, node.right);
    }
  }

  search(data, node) {
    if (typeof data !== "number") {
      throw new Error("Data type of target is not a number");
    }
    node = node || this;
    if (data < node.data) {
      if (node.left === null) {
        return false;
      }
      return this.search(data, node.left);
    } else if (data > node.data) {
      if (node.right === null) {
        return false;
      }
      return this.search(data, node.right);
    } else {
      return true;
    } 
  }

  delete(data, node) {
    if (typeof data !== "number") {
      throw new Error("Data type of target is not a number");
    }
    node = node || this;
    if (data < node.data) {
      if (node.left === null) {
        return false;
      }
      node.left = this.delete(data, node.left);
      return node;
    } else if (data > node.data) {
      if (node.right === null) {
        return false;
      }
      node.right = this.delete(data, node.right);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      } else if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      } else {
        let newNode = this.minNode(node.right);
        node.data = newNode.data;
        node.right = this.delete(newNode.data, node.right);
        return node;
      }
    }
  }

  minNode(node) {
    if (node.left === null) {
      return node;
    }
    return this.minNode(node.left);
  }  
};

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