let array = [1,2,3,4,5];

Array.prototype.myForEach = function(callback) {
  if(typeof callback !== "function") {
    throw new Error("Data type callback is not a function");
  }

  let array = this;
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
};

Array.prototype.myFilter = function(callback) {
  if(typeof callback !== "function") {
    throw new Error("Data type callback is not a function");
  }

  let array = this;
  for(let i = 0; i < array.length; i++){
    if(!callback(array[i])){
      array.splice(i,1);
      i--;
    }
  }

  return array;
};

Array.prototype.myMap = function(callback){
  let array = [];
  for(let i = 0; i < this.length; i++){
    array.push(callback(this[i]));
  }
  return array;
};

// let a = array.map(item => item *2)
// let b = array.myMap(item => item *2)
// console.log(a)
// console.log(b)

