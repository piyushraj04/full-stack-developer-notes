let a = 10;
let c = a;

// console.log(a);
// console.log(c);

let obj = {
    name : "Piyush",
    email : "piyush@gmail.com"
}
let obj2 = obj;

console.log(obj);
console.log(obj2);

obj2.email ='mayank@gmail.com';
console.log("-------------------------------");

console.log(obj);
console.log(obj2);


console.log("-------------------------------");


function one(){
    two();
}

function two(){
    three();
    console.log("hello from Two...");
    
}

function three(){
    console.log("Hello");
}
one();

console.log("-------------------------------");
console.log("-------------------------------");
console.log("-------------------------------");

console.log(typeof null === "object");


/**
 
 */