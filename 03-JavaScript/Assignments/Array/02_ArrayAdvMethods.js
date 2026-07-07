/******************************************************************
 * ADVANCED ARRAY METHODS
 * sort(), forEach(), find(), every(),
 * some(), filter(), map(), reduce()
 ******************************************************************/

// ================================================================
// SORT()
// ================================================================

/*
Purpose:
Sort elements of array.

IMPORTANT:
By default, JavaScript converts everything
to STRING and then sorts lexicographically.
*/

let sortArr = [5,13,24,91,71,60,21,1,8];

console.log("Original:");
console.log(sortArr);



/*
Default sort()

Internally:

5   -> "5"
13  -> "13"
24  -> "24"

Then compares strings.

Syntax:
array.sort()
*/

let temp = [...sortArr];

temp.sort();

console.log("\nDefault sort:");
console.log(temp);

/*
Output:
[1,13,21,24,5,60,71,8,91]

Interview Question:
Why does this happen?

Because sort() converts elements
to strings by default.
*/



// ================================================================
// ASCENDING SORT
// ================================================================

/*
Syntax:

array.sort((a,b)=>a-b)

Rules:

negative -> keep order
positive -> swap
zero     -> no change
*/

sortArr.sort((prev,curr)=>prev-curr);

console.log("\nAscending:");
console.log(sortArr);

/*
Time Complexity:
O(n log n)
*/



// ================================================================
// DESCENDING SORT
// ================================================================

sortArr.sort((prev,curr)=>curr-prev);

console.log("\nDescending:");
console.log(sortArr);

/*
Interview:
Does sort modify original array?

YES.

sort() is MUTABLE.
*/



// ================================================================
// FOREACH()
// ================================================================

/*
Purpose:
Traverse array.

Syntax:

array.forEach(
    (element,index,array)=>{
        statement
    }
)

Returns:
undefined

Time Complexity:
O(n)
*/

console.log("\nforEach:");

sortArr.forEach(
    (ele,index)=>{
        console.log(
            `index=${index} value=${ele}`
        );
    }
);

/*
Interview:
Can we break forEach?

NO.

break, continue, return
don't stop forEach.
*/



// ================================================================
// FIND()
// ================================================================

/*
Purpose:
Return FIRST element
satisfying condition.

Syntax:

array.find(callback)

Returns:
element OR undefined

Time Complexity:
O(n)
*/

let val = sortArr.find(
    ele=>ele%2===0
);

console.log("\nfind:");
console.log(val);

/*
Interview:
Difference between
find() and filter()?

find()
returns ONE element.

filter()
returns ARRAY.
*/



// ================================================================
// EVERY()
// ================================================================

/*
Purpose:
Checks if ALL elements
satisfy condition.

Returns:
true/false

Time Complexity:
O(n)
*/

let isEven =
    sortArr.every(
        ele=>ele%2===0
    );

console.log("\nevery:");
console.log(isEven);

/*
Example:

[2,4,6]
=> true

[2,4,5]
=> false
*/

/*
Interview:
every() stops immediately
when one condition fails.
*/



// ================================================================
// SOME()
// ================================================================

/*
Purpose:
Checks whether at least
one element satisfies
condition.

Returns:
true/false

Time Complexity:
O(n)
*/

let isOdd =
    sortArr.some(
        ele=>ele%2!==0
    );

console.log("\nsome:");
console.log(isOdd);

/*
Interview:

every()
ALL must pass.

some()
ONE must pass.
*/



// ================================================================
// FILTER()
// ================================================================

/*
Purpose:
Create new array
based on condition.

Returns:
new array

Original remains unchanged.

Time Complexity:
O(n)
*/

let evenNumbers =
    sortArr.filter(
        ele=>ele%2===0
    );

console.log("\nfilter:");
console.log(evenNumbers);

/*
Interview:
filter always returns array.

Even if nothing found:

[]
*/



// ================================================================
// MAP()
// ================================================================

/*
Purpose:
Transform each element.

Returns:
new array

Original unchanged.

Time Complexity:
O(n)
*/

let updatedVal =
    sortArr.map(
        ele=>ele+10
    );

console.log("\nmap:");
console.log(updatedVal);

/*
Interview:

map()
transforms data.

filter()
filters data.
*/



// ================================================================
// REDUCE()
// ================================================================

/*
Purpose:
Reduce entire array
into single value.

Syntax:

array.reduce(
    (accumulator,current)=>{
        return value;
    },
    initialValue
)

Returns:
single value

Time Complexity:
O(n)
*/

let reduceVal =
    sortArr.reduce(
        (acc,ele)=>{
            return acc+ele;
        },
        10
    );

console.log("\nreduce:");
console.log(reduceVal);

/*
Working:

acc=10

10+91
101+71
172+60
...
*/



// ================================================================
// MAX USING REDUCE
// ================================================================

let maxVal =
    sortArr.reduce(
        (acc,ele)=>{
            return acc>ele
                   ? acc
                   : ele;
        }
    );

console.log("\nMaximum:");
console.log(maxVal);



/*
Can also write:

let max =
arr.reduce(
    (a,b)=>Math.max(a,b)
)
*/



// ================================================================
// MIN USING REDUCE
// ================================================================

let minVal =
    sortArr.reduce(
        (acc,ele)=>{
            return acc<ele
                   ? acc
                   : ele;
        }
    );

console.log("\nMinimum:");
console.log(minVal);



// ================================================================
// SUM USING REDUCE
// ================================================================

let sum =
    sortArr.reduce(
        (acc,ele)=>acc+ele,
        0
    );

console.log("\nSum:");
console.log(sum);



// ================================================================
// RAPID REVISION
// ================================================================

/*

sort()
-------
sort array
MUTABLE
O(n log n)

forEach()
----------
iterate
returns undefined
O(n)

find()
-------
returns first match
O(n)

every()
--------
all conditions true?
returns boolean
O(n)

some()
-------
at least one true?
returns boolean
O(n)

filter()
---------
returns new array
O(n)

map()
------
transforms array
returns new array
O(n)

reduce()
---------
reduces array
to single value
O(n)

*/