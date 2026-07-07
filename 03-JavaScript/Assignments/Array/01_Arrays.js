/******************************************************************
 * JAVASCRIPT ARRAY BASICS & ARRAY METHODS
 * Author: Piyush's JS Notes
 ******************************************************************/

// ================================================================
// 1. ARRAY CREATION
// ================================================================

// JavaScript arrays are dynamic and heterogeneous
// (can store multiple data types)

let arr = [1, true, "Piyush", NaN, true, null, undefined, NaN, 4, 1];

console.log("Original Array:");
console.log(arr);

console.log("\nLength of array:");
console.log(arr.length);

console.log("\nElement at index 3:");
console.log(arr[3]); // NaN



// ================================================================
// 2. TRAVERSING ARRAY
// ================================================================

console.log("\nTraversing array using for loop:");

for(let i = 0; i < arr.length; i++){
    console.log(`arr[${i}] =`, arr[i]);
}

/*
Syntax:
for(initialization; condition; increment){
    statement
}

Time Complexity:
O(n)

Interview:
Q. Which loop is faster?
Ans: Traditional for loop.
*/



// ================================================================
// 3. UPDATING ELEMENT
// ================================================================

console.log("\nUpdating element:");

arr[3] = false;

console.log(arr);

/*
Arrays in JavaScript are mutable.

Time Complexity:
O(1)
*/



// ================================================================
// 4. PUSH()
// ================================================================

/*
Purpose:
Add element(s) at the END.

Syntax:
array.push(element1, element2, ...)

Returns:
New length of array

Time Complexity:
O(1) amortized
*/

let pushArr = [1,2,3];

console.log("\nBefore push:");
console.log(pushArr);

let pushReturn = pushArr.push(4,5,6);

console.log("After push:");
console.log(pushArr);

console.log("Returned value:");
console.log(pushReturn);



/*
Interview Questions:

1. Does push return array?
Answer:
No. It returns new length.

2. Why is push faster than unshift?
Answer:
Because push adds at end,
while unshift shifts every element.
*/



// ================================================================
// 5. POP()
// ================================================================

/*
Purpose:
Remove last element.

Syntax:
array.pop()

Returns:
Removed element

Time Complexity:
O(1)
*/

let popArr = [10,20,30];

console.log("\nBefore pop:");
console.log(popArr);

let removedPop = popArr.pop();

console.log("Removed:");
console.log(removedPop);

console.log("After pop:");
console.log(popArr);

/*
Interview:
What if array is empty?

[].pop() => undefined
*/



// ================================================================
// 6. UNSHIFT()
// ================================================================

/*
Purpose:
Add element at beginning.

Syntax:
array.unshift(elements)

Returns:
New length

Time Complexity:
O(n)
*/

let unshiftArr = [2,3,4];

console.log("\nBefore unshift:");
console.log(unshiftArr);

let unshiftReturn = unshiftArr.unshift(1);

console.log("After unshift:");
console.log(unshiftArr);

console.log("Returned:");
console.log(unshiftReturn);

/*
Interview:
Why O(n)?

Because every existing element
must shift one position right.
*/



// ================================================================
// 7. SHIFT()
// ================================================================

/*
Purpose:
Remove first element.

Syntax:
array.shift()

Returns:
Removed element

Time Complexity:
O(n)
*/

let shiftArr = [1,2,3,4];

console.log("\nBefore shift:");
console.log(shiftArr);

let removedShift = shiftArr.shift();

console.log("Removed:");
console.log(removedShift);

console.log("After shift:");
console.log(shiftArr);

/*
Interview:
Why is shift slower than pop?

Because all elements
need re-indexing.
*/



// ================================================================
// 8. indexOf()
// ================================================================

/*
Purpose:
Find first occurrence.

Syntax:
array.indexOf(element, startIndex)

Returns:
index OR -1

Time Complexity:
O(n)
*/

console.log("\nindexOf:");

console.log(arr.indexOf("Piyush"));
console.log(arr.indexOf(null));
console.log(arr.indexOf(100));

/*
Important Interview Question:
*/

console.log("\nNaN with indexOf:");
console.log([NaN].indexOf(NaN));

/*
Output:
-1

Reason:

indexOf uses strict equality (===)

NaN !== NaN
*/



// ================================================================
// 9. lastIndexOf()
// ================================================================

/*
Purpose:
Find last occurrence.

Syntax:
array.lastIndexOf(element, fromIndex)

Returns:
index OR -1

Time Complexity:
O(n)
*/

let lastArr = [1,2,3,2,4,2];

console.log("\nlastIndexOf:");

console.log(lastArr.lastIndexOf(2));

console.log(lastArr.lastIndexOf(2,3));

console.log([NaN].lastIndexOf(NaN));

/*
Again:

NaN !== NaN
*/



// ================================================================
// 10. includes()
// ================================================================

/*
Purpose:
Check whether element exists.

Syntax:
array.includes(element, startIndex)

Returns:
true/false

Time Complexity:
O(n)
*/

let includeArr = [1,2,3,NaN];

console.log("\nincludes:");

console.log(includeArr.includes(2));

console.log(includeArr.includes(100));

console.log(includeArr.includes(NaN));

/*
IMPORTANT INTERVIEW QUESTION

Why does this work?

[NaN].includes(NaN)

Answer:
includes() uses SameValueZero comparison.

SameValueZero treats:

NaN === NaN

as true.
*/



// ================================================================
// 11. slice()
// ================================================================

/*
Purpose:
Creates shallow copy.

DOES NOT modify original array.

Syntax:
array.slice(start, end)

Rule:
start -> included
end -> excluded

Time Complexity:
O(k)
*/

let sliceArr = [1,2,3,4,5,6,7,8,9];

console.log("\nOriginal array:");
console.log(sliceArr);

let sliced = sliceArr.slice(2,5);

console.log("Slice result:");
console.log(sliced);

console.log("Original remains unchanged:");
console.log(sliceArr);

/*
Interview:
Why is slice called shallow copy?

Because nested objects
still share references.
*/



// ================================================================
// 12. splice()
// ================================================================

/*
Purpose:
Insert/Delete/Replace

MODIFIES ORIGINAL ARRAY.

Syntax:

array.splice(
    start,
    deleteCount,
    item1,
    item2,
    ...
) 

Returns:
Removed elements

Time Complexity:
O(n)
*/

let spliceArr = [1,2,3,4,5,6];

console.log("\nOriginal:");
console.log(spliceArr);

console.log("\nRemoving:");

let removed = spliceArr.splice(1,2);

console.log("Removed:");
console.log(removed);

console.log("Array:");
console.log(spliceArr);



console.log("\nInserting:");

spliceArr.splice(1,0,"A","B");

console.log(spliceArr);



console.log("\nReplacing:");

spliceArr.splice(2,1,"Piyush");

console.log(spliceArr);

/*
Examples:

splice(2,3)
=> remove

splice(2,0,"A")
=> insert

splice(2,1,"A")
=> replace
*/



// ================================================================
// MOST IMPORTANT INTERVIEW QUESTION
// ================================================================

/*

slice() vs splice()

---------------------------------------------------
slice()
---------------------------------------------------
Doesn't modify original
Returns copied array
Creates shallow copy
O(k)

---------------------------------------------------
splice()
---------------------------------------------------
Modifies original
Returns removed elements
Used for insert/delete/replace
O(n)

*/


// ================================================================
// RAPID REVISION
// ================================================================

/*

push()         -> add at end
pop()          -> remove from end

unshift()      -> add at beginning
shift()        -> remove from beginning

indexOf()      -> first occurrence
lastIndexOf()  -> last occurrence

includes()     -> existence check

slice()        -> copy (non-destructive)

splice()       -> insert/delete/replace
                  (destructive)

*/

// ================================================================
// reverse
// ================================================================


console.log("\nReversing:");
let reversedArr = [1,2,3,4,5]
reversedArr.reverse()
console.log(reversedArr);

// ================================================================
// join
// ================================================================


let joinArr = ["A","B","C","D","E"]


console.log("\njoining:");

console.log(joinArr.join(" "));


