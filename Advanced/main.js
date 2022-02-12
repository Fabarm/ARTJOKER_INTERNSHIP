// 1

// 2
Array.prototype.myMap = function(callback){
  if(typeof callback !== "function") {
    throw new Error("Data type callback is not a function");
  }

  let array = [];

  for(let i = 0; i < this.length; i++) {
    array.push(callback(this[i]));
  }
  return array;
};

Array.prototype.myFilter = function(callback) {
  if(typeof callback !== "function") {
    throw new Error("Data type callback is not a function");
  }

  for(let i = 0; i < this.length; i++) {
    if(!callback(this[i], i, this)) {
      this.splice(i,1);
      i--;
    }
  }

  return this;
};

Array.prototype.myReduce = function(callback, defaultValue){
  if(typeof callback !== "function") {
    throw new Error("Data type callback is not a function");
  }

  let result = defaultValue || 0;

  for(let i = 0; i < this.length; i++) {
    result = callback(this[i], result);
  }

  return result;
};

Array.prototype.myFind = function (callback) {
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

Array.prototype.myForEach = function(callback) {
  if(typeof callback !== "function") {
    throw new Error("Data type callback is not a function");
  }

  for(let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};








