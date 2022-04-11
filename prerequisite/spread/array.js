let arr = [1, 2, 3, 4]

let arr1 = arr  //accessed by reference

console.log(arr); //[1, 2, 3, 4]
console.log(arr1); //[1, 2, 3, 4]

arr.push(5)

console.log(arr); //[1, 2, 3, 4, 5]
console.log(arr1); //[1, 2, 3, 4, 5] called cloning of an array

//Spread operator
console.log(...arr); //1 2 3 4 5 in format of string
let arr2 = [...arr]

arr.push(6)
console.log(arr);
console.log(arr1);
console.log(arr2); //new reference will be created in the memory