let car = {
    brand : "lamborghini",
    colour : "Reddish Blown",
    owner : "Piyush",
    ownerGf : "Khushiii" 
}

//keyname
// console.log(Object.keys(car));

//values
// console.log(Object.values(car));

//entries:--key with value
// console.log(Object.entries(car));

//freeze---
Object.freeze(car);
delete car.ownerGf
// console.log(car);
car.wife = "Chummiiiii";
// console.log(car);
car.brand = "BMW"
console.log(car);

//isFrozen
// console.log(Object.isFrozen(car));

//seal
Object.seal(car);
delete car.ownerGf;
// console.log(car);
car.wiffey = "Simran"
// console.log(car);
car.brand = "Ferrari"
// console.log(car);
/*
 * Notes---------
 # JavaScript Object Methods (`Object.keys`, `Object.values`, `Object.entries`, `Object.freeze`, `Object.seal`)

---

# Initial Object

```javascript
let car = {
    brand: "Lamborghini",
    colour: "Reddish Brown",
    owner: "Piyush",
    ownerGf: "Khushiii"
};

console.log(car);
```

**Output**

```javascript
{
  brand: 'Lamborghini',
  colour: 'Reddish Brown',
  owner: 'Piyush',
  ownerGf: 'Khushiii'
}
```

---

# 1. Object.keys()

## Definition

Returns an array containing **only the keys (property names)** of an object.

## Syntax

```javascript
Object.keys(objectName)
```

## Example

```javascript
let car = {
    brand: "Lamborghini",
    colour: "Reddish Brown",
    owner: "Piyush",
    ownerGf: "Khushiii"
};

console.log(Object.keys(car));
```

### Output

```javascript
[ 'brand', 'colour', 'owner', 'ownerGf' ]
```

### Real World Use

- Display property names
- Loop through object keys
- Validation

---

# 2. Object.values()

## Definition

Returns an array containing **only the values** of an object.

## Syntax

```javascript
Object.values(objectName)
```

## Example

```javascript
console.log(Object.values(car));
```

### Output

```javascript
[
  'Lamborghini',
  'Reddish Brown',
  'Piyush',
  'Khushiii'
]
```

---

# 3. Object.entries()

## Definition

Returns an array of key-value pairs.

Each element is itself an array:

```
[key, value]
```

## Syntax

```javascript
Object.entries(objectName)
```

## Example

```javascript
console.log(Object.entries(car));
```

### Output

```javascript
[
  ['brand', 'Lamborghini'],
  ['colour', 'Reddish Brown'],
  ['owner', 'Piyush'],
  ['ownerGf', 'Khushiii']
]
```

### Useful for

```javascript
for (let [key, value] of Object.entries(car)) {
    console.log(key, value);
}
```

Output

```javascript
brand Lamborghini
colour Reddish Brown
owner Piyush
ownerGf Khushiii
```

---

# 4. delete Operator

## Definition

Deletes a property from an object.

## Example

```javascript
delete car.ownerGf;

console.log(car);
```

Output

```javascript
{
    brand: 'Lamborghini',
    colour: 'Reddish Brown',
    owner: 'Piyush'
}
```

---

# 5. Adding New Property

```javascript
car.wife = "Chummiiiii";

console.log(car);
```

Output

```javascript
{
    brand: 'Lamborghini',
    colour: 'Reddish Brown',
    owner: 'Piyush',
    wife: 'Chummiiiii'
}
```

---

# 6. Updating Property

```javascript
car.brand = "BMW";

console.log(car);
```

Output

```javascript
{
    brand: 'BMW',
    colour: 'Reddish Brown',
    owner: 'Piyush',
    wife: 'Chummiiiii'
}
```

---

# 7. Object.freeze()

## Definition

Makes an object completely immutable.

After freezing:

✔ Cannot Add

✔ Cannot Delete

✔ Cannot Update

---

## Example

```javascript
let car = {
    brand: "BMW",
    colour: "Black"
};

Object.freeze(car);

car.brand = "Audi";      // Ignored
car.owner = "Piyush";    // Ignored
delete car.colour;       // Ignored

console.log(car);
```

Output

```javascript
{
    brand: 'BMW',
    colour: 'Black'
}
```

Nothing changes.

---

# Object.isFrozen()

Checks whether an object is frozen.

```javascript
console.log(Object.isFrozen(car));
```

Output

```javascript
true
```

---

# 8. Object.seal()

## Definition

Sealed objects allow **updating existing properties** but **do not allow adding or deleting properties**.

---

## Example

```javascript
let car = {
    brand: "BMW",
    colour: "Black"
};

Object.seal(car);

// Delete
delete car.colour;

// Add
car.owner = "Piyush";

// Update
car.brand = "Ferrari";

console.log(car);
```

Output

```javascript
{
    brand: 'Ferrari',
    colour: 'Black'
}
```

Explanation

Delete ❌

Add ❌

Update ✔

---

# Object.isSealed()

```javascript
console.log(Object.isSealed(car));
```

Output

```javascript
true
```

---

# Freeze vs Seal

| Feature | freeze() | seal() |
|----------|----------|---------|
| Add Property | ❌ | ❌ |
| Delete Property | ❌ | ❌ |
| Update Existing Property | ❌ | ✔ |
| Configurable | ❌ | ❌ |
| Writable | ❌ | ✔ |

---

# Flow Diagram

```
Normal Object

↓

Can Add ✔
Can Delete ✔
Can Update ✔

↓

Object.seal()

↓

Can Add ❌
Can Delete ❌
Can Update ✔

↓

Object.freeze()

↓

Can Add ❌
Can Delete ❌
Can Update ❌
```

---

# Complete Example

```javascript
let car = {
    brand: "Lamborghini",
    colour: "Reddish Brown",
    owner: "Piyush",
    ownerGf: "Khushiii"
};

console.log("Original Object");
console.log(car);

console.log("\nKeys");
console.log(Object.keys(car));

console.log("\nValues");
console.log(Object.values(car));

console.log("\nEntries");
console.log(Object.entries(car));

console.log("\nDelete ownerGf");
delete car.ownerGf;
console.log(car);

console.log("\nAdd wife");
car.wife = "Chummiiiii";
console.log(car);

console.log("\nUpdate brand");
car.brand = "BMW";
console.log(car);

console.log("\nSeal Object");
Object.seal(car);

delete car.owner;
console.log(car);

car.wiffey = "Simran";
console.log(car);

car.brand = "Ferrari";
console.log(car);

console.log("\nIs Sealed?");
console.log(Object.isSealed(car));
```

---

# Interview Questions

## Q1. Difference between Object.freeze() and Object.seal()?

**Answer**

```
freeze()

Cannot Add
Cannot Delete
Cannot Update

seal()

Cannot Add
Cannot Delete
Can Update
```

---

## Q2. Can you update properties after Object.freeze()?

```javascript
Object.freeze(obj);

obj.name = "ABC";
```

Answer

```
No.
```

---

## Q3. Can you update properties after Object.seal()?

```javascript
Object.seal(obj);

obj.name = "ABC";
```

Answer

```
Yes.
```

---

## Q4. Can you delete a property after Object.seal()?

Answer

```
No.
```

---

## Q5. Can you add a property after Object.freeze()?

Answer

```
No.
```

---

## Q6. Which method returns key-value pairs?

Answer

```javascript
Object.entries()
```

---

## Q7. Which method returns only property names?

Answer

```javascript
Object.keys()
```

---

## Q8. Which method returns only values?

Answer

```javascript
Object.values()
```

---

# Common Interview Traps

## Trap 1

```javascript
let obj = {
    name: "Piyush"
};

Object.freeze(obj);

obj.name = "Rahul";

console.log(obj.name);
```

Output

```javascript
Piyush
```

---

## Trap 2

```javascript
let obj = {
    name: "Piyush"
};

Object.seal(obj);

obj.name = "Rahul";

console.log(obj.name);
```

Output

```javascript
Rahul
```

---

## Trap 3

```javascript
let obj = {
    name: "Piyush"
};

Object.seal(obj);

delete obj.name;

console.log(obj);
```

Output

```javascript
{
    name: "Piyush"
}
```

---

## Trap 4

```javascript
let obj = {
    name: "Piyush"
};

Object.freeze(obj);

obj.age = 22;

console.log(obj);
```

Output

```javascript
{
    name: "Piyush"
}
```

---

## Trap 5 (Very Common)

```javascript
const car = {
    brand: "BMW"
};

car.brand = "Audi";

console.log(car.brand);
```

Output

```javascript
Audi
```

### Why?

`const` prevents **reassignment of the variable**, **not mutation of the object**.

```javascript
car = {}; // ❌ Error
car.brand = "Audi"; // ✔ Allowed
```

To make the object itself immutable, use:

```javascript
Object.freeze(car);
```

---

# Remember This

```
Object.keys()    → Keys

Object.values()  → Values

Object.entries() → Key + Value

delete           → Removes Property

Object.freeze()  → No Add, No Delete, No Update

Object.seal()    → No Add, No Delete, Update Allowed
```
 
 */





