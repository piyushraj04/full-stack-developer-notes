# 📘 Module 04 - Modern JavaScript Essentials (For React)

> JavaScript Foundation for React Development

---

# Topics Covered

1. Arrow Functions
2. Callback Functions
3. Spread Operator (...)
4. Rest Operator (...)
5. Template Literals
6. Import & Export
7. Optional Chaining (?.)
8. Nullish Coalescing (??)
9. Short Circuit Operators (&&, ||)

---

# 1️⃣ Arrow Functions

## Definition

A shorter syntax for writing JavaScript functions.

```js
const add = (a, b) => a + b;

2️⃣ Callback Functions
Definition

A function passed as an argument to another function.

function greet(name, callback) {
    console.log(name);
    callback();
}
React Usage
onClick={handleClick}

Commonly used with:

map()
filter()
Events
setTimeout()
3️⃣ Spread Operator (...)
Definition

Expands arrays or objects.

Array
const arr = [...numbers];
Object
const user = {
   ...oldUser,
   age: 22
};
React Usage

Updating State

setUser({
   ...user,
   age:23
});
4️⃣ Rest Operator (...)
Definition

Collects multiple values into one variable.

function sum(...nums){

}

Object Rest

const {name, ...details}=user;
5️⃣ Template Literals

Uses backticks (`)

const msg=`Hello ${name}`;

Multi-line strings

String Interpolation

6️⃣ Import & Export
Named Export
export const add=()=>{};

Import

import {add} from "./math";
Default Export
export default App;

Import

import App from "./App";
7️⃣ Optional Chaining (?.)

Safely accesses nested objects.

user?.address?.city

Returns

value
undefined

instead of throwing an error.

8️⃣ Nullish Coalescing (??)

Returns default value only if

null
undefined
const username=name ?? "Guest";

Unlike ||

It does NOT replace

0
false
""
9️⃣ Short Circuit Operators
AND (&&)
isLoggedIn && <Home/>
OR (||)
name || "Guest"
Nullish (??)
name ?? "Guest"
Summary Table
Feature	Use
Arrow Function	Short Functions
Callback	Function Argument
Spread	Copy & Merge
Rest	Collect Values
Template Literal	Dynamic Strings
Import/Export	Modules
Optional Chaining	Safe Access
Nullish Coalescing	Default Value
&& /	
Common Mistakes

❌ Forgetting return in arrow function

❌ Using spread instead of rest

❌ Confusing || with ??

❌ Using optional chaining everywhere unnecessarily

Best Practices

✔ Use Arrow Functions in React

✔ Prefer Spread for immutable updates

✔ Use Optional Chaining for API data

✔ Use ?? instead of || for default values

✔ Keep callback functions small

Memory Tricks
Arrow  → Short Function

Callback → Function inside Function

Spread → Expands

Rest → Collects

?. → Safe Access

?? → Null or Undefined

&& → Render If True

|| → First Truthy Value
Interview Questions
What is an Arrow Function?
What is a Callback Function?
Difference between Spread and Rest?
Difference between || and ??
Why use Optional Chaining?
Difference between Named and Default Export?
Why is Spread used with useState()?
Give React examples of Callback Functions.
What are Template Literals?
Explain Short Circuit Operators.
One-Minute Revision

✅ Arrow → Short Function

✅ Callback → Function passed to another function

✅ Spread → Copy / Merge

✅ Rest → Collect

✅ Template Literal → ${}

✅ Import / Export → Modules

✅ Optional Chaining → Safe Access

✅ Nullish → Default for null/undefined

✅ && → Conditional Rendering

✅ || → First Truthy Value