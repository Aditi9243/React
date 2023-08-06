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

//let obj1 = obj    //similar to arrays
//let obj1 = {...obj}   //shallow copy*** -> not a efficient way to copy data as we need to spread at diff levels

//let obj1 = {...obj, address: {...obj.address, state : {...obj.address.state}}} 

let obj1 = JSON.parse(JSON.stringify(obj)) //deep copy***

obj.name = 'Mark'
obj.address.country = 'India' //there will be spread only at one level thus change will be display in both objects
obj.address.state.pincode = 2222222

console.log(obj);
console.log(obj1);