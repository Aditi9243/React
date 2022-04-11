let arr = [1, 2, 3, 4]

let arr1 = arr  //accessed by reference

console.log(arr); //[1, 2, 3, 4]
console.log(arr1); //[1, 2, 3, 4]

arr.push(5)

console.log(arr); //[1, 2, 3, 4, 5]
console.log(arr1); //[1, 2, 3, 4, 5]