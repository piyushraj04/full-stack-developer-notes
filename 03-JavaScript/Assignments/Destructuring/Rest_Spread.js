//rest operator ---left side/declartion side

//...args //use as last argument only to bind other elements

let arr = [10,20,30,40,50]

let[a,b,...args]=arr
console.log(args);

//spread Operator //used to extract ---right side / initislization side
///...arr
function demo(a,b,...args){
    console.log(a+b);
    console.log(args);
    console.log(args.map(el=>el*el));
}
demo(...arr)
