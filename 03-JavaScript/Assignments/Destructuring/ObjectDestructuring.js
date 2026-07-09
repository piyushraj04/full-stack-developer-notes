let person = {
    fName: "Piyush",
    lName : "Raj",
    age : 22,
    Occupattion : "Student",
    address : {
        vill : "Balha",
        Dist : "Sitamarhi",
        City : "Pupri",
        pin : 843320
    }

}

let {fName,address:{City}} = person

console.log(City);
