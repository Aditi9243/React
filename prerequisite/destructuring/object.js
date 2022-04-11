// let obj = {
//     name : 'Adam',
//     state : "New York",
//     pincode : 123456
// }

// let {name, state, pincode} = obj

// console.log(name, state, pincode); //Adam New York 123456

//Nested object
let obj = {
    name : 'Adam',
    address : {
        country : 'USA',
        state : {
            stateName : 'New York',
            pincode : 123456
        }
    }
}

let {name} = obj
console.log(name); //Adam

// let {address : {country}} =  obj
// console.log(country); //USA

let {address : {country:cb}} =  obj //creating alias name for country
console.log(cb); //USA

let {address : {state : {pincode}}} = obj
console.log(pincode); //123456

