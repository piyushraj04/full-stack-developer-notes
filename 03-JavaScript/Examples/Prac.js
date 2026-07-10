// let arr = ["Piyush","Raj","Mayank","Karn"]

// // console.log(arr.reverse().toString());

// let str = "javascript is easy to learn"
// let rev =str.split(" ").reverse().join(" ");
// console.log(rev);


// console.log(arr.join("-"));
// console.log(arr.toString(""));




// let arr2 = [1,2,3]
// let sum = 0;
// // arr2.forEach(x=>{
// //     sum= sum + (x*x);
// // })

// console.log(arr2.reduce((acc,curr)=>acc+(curr*curr)));

// // console.log(sum);


// let emp = [
//     {
//         name : "abc",
//         sal : 10000
//     },
//        {
//         name : "bcd",
//         sal : 11000
//     },
//        {
//         name : "cde",
//         sal : 12000
//     }
// ]
// // console.log(emp);
// console.log(emp.map(x=>x.sal+x.sal*(10/100)));


// // let hike = emp.map(x.sal=>x.sal=(x.sal+(sal+(5/100))));
// // console.log(hike);


class Product{
    constructor(name,price,cat){
        this.name = name;
        this.price = price;
        this.cat = cat;
    }
}

let p1 = new Product("Book",250,"Stationary")

function display( p){
    console.log(`name ${p.name} , price ${p.price} , cat ${p.cat}`);
}

display(new Product("Pencil",5,"Stationary"));




// let p1 = new Product("Pencil",5,"Stationary");
// console.log(p1);



