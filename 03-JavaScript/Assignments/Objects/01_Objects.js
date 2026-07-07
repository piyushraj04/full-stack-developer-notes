//object\

//1. Literal way

let user = {
    userName : "Piyush",
    userAge : 22, 
    userEmail : "piyush@gmail.com",
    isEmployeed : false,
    occupation : "Student",
    skills : ["Html","CSS","JS","React","Java","SQL","Spring"],
    display : function(){
        console.log("output for this--> "+this);
        
    }

};
// console.log(user);
// console.log(user.userName);
user.userAge = 23
console.log("output for this-->"+user.display());

// console.log(user);


//2. Class constrctor way----

class animal{
    constructor(name,age,breed){
        this.name = name;
        this.age= age;
        this.breed=breed;
    }
}

let animal1 = new animal("Dog",5,"Huskyy")
console.log(animal1.breed);

//constructor function

function student(sName,sAge,sCourse,sPhoneNo){
    this.sName = sName;
    this.sAge = sAge;
    this.sCourse = sCourse;
    this.sPhoneNo = sPhoneNo;
}
let student1 = new student("Piyush",22,"Java Full Stack",7979919112);
console.log(student1);


//Object.create

let doctor = Object.create(null);
console.log(doctor);
doctor.name = "Piyush Raj";
doctor.specialist = "Radiology";
doctor.salary = 520000;

console.log(doctor);





