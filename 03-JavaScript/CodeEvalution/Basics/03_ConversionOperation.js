//Number conversion
let score = NaN

// console.log(typeof score);
// console.log(score);

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

/*
33  =>  33
"33abc"   =>  NaN
null    =>     0
undefined   =>    0
true   =>   1
false     => 0
""   =>   0
NaN   =>   NaN
Note: but however all is converted in 'number'
*/


//Boolean Conversion
let bool = ""

// console.log(typeof bool);
// console.log(bool);

let valueInBoolean = Boolean(bool)
// console.log(typeof valueInBoolean);
// console.log(valueInBoolean);

/*
1   =>   true
0   =>   false
null =>  false
undefined  =>   false
NaN   =>    false
123  =>    true
"Piyush"  =>   true
"111"   =>   true  -- something in string
""    =>  false   -- empty string
*/


//String conversion
let someNum = 1

// console.log(typeof someNum);
// console.log(someNum);

let valueInString = String(someNum)

// console.log(typeof valueInString);
// console.log(valueInString);


/*
1   =>   1  --- but string "1"


*/




// ***************************************----Operations------********************************

// console.log(+true);
// console.log("10"===10); //false

// console.log(1+1+"1");

// ****---Null comparison------*****
// console.log(null==0);
// console.log(null>0);
// console.log(null<0);
// console.log(null<=NaN);

// console.log(null>=0)//true
// console.log(null<=0);//true
// console.log(null == undefined); // true

/*
Easy way to remember for interviews
Expression	Result	Reason
null == 0	false	== does not convert null to 0
null > 0	false	null converts to 0, 0 > 0
null < 0	false	null converts to 0, 0 < 0
null >= 0	true	!(null < 0)
null <= 0	true	!(null > 0)

*/

// ****---Undefined comparison------*****
// console.log(undefined==0);
// console.log(undefined>0);
// console.log(undefined<0);
// console.log(undefined<=NaN);
// console.log(undefined>=0)//
// console.log(undefined==NaN);
// console.log(undefined<=0);//

// console.log(undefined==null); //true
// console.log(undefined == undefined); // true


/**
 * bcz:-
 Number(undefined) : becomes: NaN
and any comparison with NaN is always false.
 */





















