// 1. Import and Export concept `````````````````````````````````````````

import { apiKey } from "./util.js";
import { apiKey as utilKey, abc as content } from "./util.js";

import key from "./util.js"

import * as util from "./util.js"

// `from` tells from which file it is being imported
//  ./ => same folder
//  ../ => different folder

console.log("simple export " + apiKey);
console.log("default export " + key);

console.log("imported as object " + util.abc + " " + util.apiKey + " " + util.default);

console.log("alias name " + utilKey + " " + content);

// 2. Variables and values `````````````````````````````````````````

console.log("Value can be printed directly.");
// Variables allow us to reuse the value - they are like containers for values of different types

let userMessage = "Hello world!!!";
userMessage = "New Value";

console.log(userMessage);

const message = "Work hard";
// cannot reassign value of type `const`
// message = "Do it any way!!"

console.log(message);

// 3. Operators ````````````````````````````````````````````

console.log(10 + 5);    //can use various operators -> -, +, *, /, >, <, >=, <=, ==, ===

console.log("hello" + " world");    //concate the string

// 4. Functions and parameters `````````````````````````````````````````

function greet(userName, message = "Hello") {
    console.log("hello world");
    console.log(userName + " " + message);

    return "Hi! I am " + userName + ". " + message;
}

greet();
greet("Aditi", "What's app?");
greet("Aastha");

const greetPerson = greet("Sanjana", "What are you doing?");

// console.log("Function return => " + greet("Sanjana"));

console.log("Function return => " + greetPerson);

// Question : 
// Your task is to write a new function that should be named combine and have the following characteristics:
// Accept three input values
// Calculate a new value based on the three input values: a * b / c (if a, b & c are the input values)
// Return the calculated result

function combine (a, b, c) {
    const result = a * b / c;
    return result;
}

//  5. Arrow Function `````````````````````````````````````````

//  Syntax : () => { ...body }

export default (userName, userMessage) => {
    console.log("Hello!");
    return userName + " " + userMessage;
}

//  6. Objects and Classes `````````````````````````````````````````

const user = {
    name: "Aditi",
    age: 21,
  
    greet() {
      console.log("Hello");
      console.log(this.name + " " + this.age);
    }
  };
  
  console.log(user);  //{name: "Aditi", age: 21, greet: ƒ greet()}
  console.log(user.name); //Aditi 
  user.greet(); //Hello {next-line} Aditi 21 
  
  // Note : First letter in `class name` should be capital  {Important}
  class User {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log("Hi!");
    }
  }
  
  const user1 = new User("Anil", 45);
  console.log(user1); //User {name: "Anil", age: 45, constructor: Object}
  console.log(user1.name);  //Anil 
  user1.greet();  //Hi! 

// 7. Arrays and Arrays methods `````````````````````````````````````````

const hobbies = ["reading", "cooking", "dancing"];
console.log(hobbies[0]);  //reading 

hobbies.push("working");
console.log(hobbies);
// ["reading", "cooking", "dancing", "working"]
// 0: "reading"
// 1: "cooking"
// 2: "dancing"
// 3: "working"

// const index = hobbies.findIndex((item) => {
//   return item === 'reading';
// });

const index = hobbies.findIndex((item) => item === "reading");
console.log(index); //0

const editedHobbies = hobbies.map((item) => item + "!");
console.log(editedHobbies); //["reading!", "cooking!", "dancing!", "working!"]

let i = 0;
const newArr = hobbies.map((item) => ({id: i++, name: item}));
console.log(newArr);
// [Object, Object, Object, Object]
// 0: Object
//  id: 0
//  name: "reading"
// 1: Object
// 2: Object
// 3: Object

// Question - Your task is to add the missing logic to a transformToObjects() function that should transform a list of numbers into a list of JavaScript objects.
// In the newly returned array, every object must have a val key and the input array's number as a value.
// For example, for the provided input [1, 2, 3] the transformToObjects([1, 2, 3]) function should return [{val: 1}, {val: 2}, {val: 3}].

function transformToObjects(numberArray) {
    // Todo: Add your logic
    // should return an array of objects
    const ans = numberArray.map((item) => ({val: item}));
    return ans;
}

//  8. Destructuring `````````````````````````````````````````

// (a) Destructuring the `array`

// const userNameData = ["Anil", "Barnwal"];
// const firstName = userNameData[0];
// const lastName = userNameData[1];

const [firstName, lastName] = ["Anil", "Barnwal"];

console.log(firstName + " - " + lastName);  //Anil - Barnwal 

// (b) Destructuring the `object`

// const user = {
//   name: "Aditi",
//   age: 21,
// }
// const name = user.name;
// const age = user.age;

const {name: userName, age} = {
  name: "Aditi",
  age: 21,
}

console.log(userName + " - " + age);  //Aditi - 21 
//where `userName` is alias name for `name` key

// (c) Destructuring the `function` - Refer document**

//  9. Spread Operator `````````````````````````````````````````

const oldHobbies = ["reading", "cooking"];
const newHobbies = ["dancing"];

const mergeArray = [oldHobbies, newHobbies];
console.log(mergeArray);
//[Array(2), Array(1)]
// 0: Array(2)
// 1: Array(1)

const newMergeArray = [...hobbies, ...newHobbies];
console.log(newMergeArray); //["reading", "cooking", "dancing"]

const userDetail = {
  name: "Aditi",
  age: 21
}

const extendedUser = {
  isAdmin: true,
  ...userDetail
}

console.log(extendedUser);  //{isAdmin: true, name: "Aditi", age: 21}

//  10. Control Structure `````````````````````````````````````````

const password = prompt("Your Password");
if (password === "Hello") {
  console.log("Hello works");
} 
else if (password === "hello") {
  console.log("hello works");
} 
else {
  console.log("Access not granted");
}

const cities = ["Delhi", "Agra", "Patna", "Banglore"];
for(const city of cities) {
  console.log(city);
}
// Delhi 
// Agra 
// Patna 
// Banglore 

//  11. Functions as values `````````````````````````````````````````
//  (a) in Built-in function
function handleTimeout() {
  console.log("Timed out!!");
}

const handleTimeout2 = () => {
  console.log("Timed out .... again!!");
};

setTimeout(handleTimeout, 2000);
setTimeout(handleTimeout2, 3000);
setTimeout(() => {
  console.log("More timed out ... !!");
}, 4000);

//  (b) in custom function created by you
function greeter(greetFn)
{
  greetFn();
}

greeter(() => console.log("Passing function as Value"));

//  12. Defining functions inside of functions `````````````````````````````````````````

function init() {
  function greet() {
    console.log("Hi");
  }

  greet();
}

// greet();  //Error - 'greet' is not defined.
init();

//  13. Reference vs Primitive Values `````````````````````````````````````````

let userMsg = "Hello";
userMsg = userMsg.concat("!!!");
// userMsg.concat("!!!") => This will prduce a new string rather than updating the prev one
console.log(userMsg);

const books = ["Fiction", "Romantic"];
// books = [];
books.push("Self-Help");
console.log(books); //["Fiction", "Romantic", "Self-Help"]
// Reference values => stores the address of data in memory. Any changes is done by going to that address and updating the value