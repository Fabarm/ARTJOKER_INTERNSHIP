'use stric'
// // 1
// function isAnagram(wordFirst, wordSecond) {
//     let firstWord = wordFirst.toLowerCase().split('').sort().join("");
//     let secondWord = wordSecond.toLowerCase().split('').sort().join("");
//     if(firstWord == secondWord){
//         return true;
//     }
//     return false;
// }


// // 3
// function calc(num){
//     let counter = 0; 
//     for(let i=0; i=num; i++){
//         num = Math.floor(num/10);
//         counter++
//     }
//     return counter;
// } 

// const calcRecurs = (function () {
//     let count = 0;
//     return function amount(num){
//         if(num < 9){
//             count++
//             return count;
//         }
//         count++;
//         return amount(Math.floor(num/10));
//     }
// })();
// console.log(calcRecurs(2356));
// console.log(calcRecurs(235666));

// // 4
// function isPalindrome(str){
//     let newStr = str.toLowerCase().split('').reverse().join('');
//     if( str == newStr){
//         return true;
//     }
//     return false;
// }

// 5
function calcWord(str){
    let arr = str.split(' ').sort();
    console.log(arr);
    let newArr = arr.filter((item, index) => arr.indexOf(item) === index)
    console.log(newArr);
    
}

console.log(calcWord('Widget id with id with if else'));

// // 8
// const factorial = (function () {
//     let memo = {};
//     return function fact(num){
//         if (num === 0) {
//             return 1;
//         }

//         if(memo[num] === undefined) {
//             memo[num] = fact(num - 1);
//         }

//         return num * memo[num];
//     };
// })();