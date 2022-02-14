"use strict"
// 1
Function.prototype.newBind = function(context, ...rest) {
  let myThis = this;

  return function (...args) {
    let id = Symbol();
    context[id] = myThis;
    let result = context[id](...rest, ...args);
    delete context[id];
    return result;
  }
};

Function.prototype.newCall = function(context, ...rest) {
  let id = Symbol();
  context[id] = this;
  let result = context[id](...rest);
  delete context[id];
  return result;
};

// 2
Array.prototype.newMap = function(callback){
  if(typeof callback !== "function") {
    throw new Error("Data type callback is not a function");
  }

  let array = [];

  for(let i = 0; i < this.length; i++) {
    array.push(callback(this[i]));
  }
  return array;
};

Array.prototype.newFilter = function(callback) {
  if(typeof callback !== "function") {
    throw new Error("Data type callback is not a function");
  }
  let result = [];

  for(let i = 0; i < this.length; i++) {
    if(callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};

Array.prototype.newReduce = function(callback, defaultValue){
  if(typeof callback !== "function") {
    throw new Error("Data type callback is not a function");
  }
  let result = defaultValue || 0;

  for(let i = 0; i < this.length; i++) {
    result = callback(this[i], result);
  }

  return result;
};

Array.prototype.newFind = function (callback) {
  if(typeof callback !== "function") {
    throw new Error("Data type callback is not a function");
  }

  for(let i = 0; i < this.length; i++) {
    if(callback(this[i], i, this)) {
      return this[i];
    }
  }

  return undefined;
};

Array.prototype.newForEach = function(callback) {
  if(typeof callback !== "function") {
    throw new Error("Data type callback is not a function");
  }

  for(let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};