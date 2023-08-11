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

//  5. Arrow Function

export default (userName, userMessage) => {
    console.log("Hello!");
    return userName + " " + userMessage;
}
