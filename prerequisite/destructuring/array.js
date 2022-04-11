let arr = ['Hi', 'I', 'am', 'Aditi']

let x1 = arr[0] //Hi
let x2 = arr[1] //I

//Destructuring -> here sequence matters

// let [a, b, c, d] = arr
// console.log(a, b, c, d); //Hi I am Aditi

// let [a, b, , d] = arr
// console.log(a, b, d); //Hi I Aditi

// let [a, b] = arr
// console.log(a, b); //Hi I

let [a, b, c, d, e] = arr
console.log(a, b, c, d, e); //Hi I am Aditi undefined