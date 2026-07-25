# 🎯 Object Destructuring

> **Difficulty:** ⭐⭐ Beginner
> **Prerequisites:** Objects, Arrays of Objects, Props
> **Estimated Reading Time:** 20–25 minutes

---

# 📚 Learning Objectives

After completing this topic, we will be able to:

- Understand Object Destructuring.
- Learn why Object Destructuring is used.
- Extract object properties easily.
- Use Object Destructuring with React Props.
- Use Object Destructuring inside `map()`.
- Answer common interview questions.

---

# 📖 What is Object Destructuring?

**Object Destructuring** is an ES6 feature that allows us to extract object properties into individual variables.

Instead of accessing properties repeatedly using dot notation (`object.property`), we can extract them directly.

> **Interview Definition:**  
> Object Destructuring is an ES6 feature that extracts properties from an object into separate variables.

---

# 🤔 Why Do We Need Object Destructuring?

Suppose we have a product object.

```javascript
const product = {
    id: 1,
    name: "Laptop",
    brand: "Dell",
    price: 50000
};
```

Without Destructuring

```javascript
console.log(product.name);
console.log(product.brand);
console.log(product.price);
```

We repeatedly write `product.`

With Destructuring

```javascript
const { name, brand, price } = product;

console.log(name);
console.log(brand);
console.log(price);
```

Cleaner, shorter, and easier to read.

---

# 🧠 JavaScript Behind It

Every object contains key-value pairs.

```javascript
const student = {
    name: "Rahul",
    age: 22
};
```

Instead of writing

```javascript
student.name
student.age
```

We can extract them.

```javascript
const { name, age } = student;
```

Now we can directly use

```javascript
name
age
```

---

# 📌 Syntax

```javascript
const { property1, property2 } = object;
```

---

# 📌 Basic Example

```javascript
const employee = {
    id: 101,
    name: "Rahul",
    department: "Development"
};

const { name, department } = employee;

console.log(name);
console.log(department);
```

Output

```text
Rahul
Development
```

---

# 📌 Using Destructuring in React Props

Without Destructuring

```jsx
function Product(props) {
    return (
        <>
            <h2>{props.name}</h2>
            <p>{props.price}</p>
        </>
    );
}
```

---

With Destructuring

```jsx
function Product({ name, price }) {
    return (
        <>
            <h2>{name}</h2>
            <p>{price}</p>
        </>
    );
}
```

This is the preferred approach in React.

---

# 📌 Destructuring Inside map()

```javascript
const products = [
    {
        id: 1,
        name: "Laptop",
        price: 50000
    },
    {
        id: 2,
        name: "Phone",
        price: 30000
    }
];
```

Instead of

```jsx
products.map((product) => (
    <div key={product.id}>
        <h2>{product.name}</h2>
        <p>{product.price}</p>
    </div>
));
```

Use

```jsx
products.map(({ id, name, price }) => (
    <div key={id}>
        <h2>{name}</h2>
        <p>{price}</p>
    </div>
));
```

Cleaner and easier to read.

---

# 📌 Renaming Variables

We can rename variables while destructuring.

```javascript
const product = {
    name: "Laptop"
};

const { name: productName } = product;

console.log(productName);
```

Output

```text
Laptop
```

---

# 📌 Default Values

If a property doesn't exist, we can provide a default value.

```javascript
const product = {
    name: "Laptop"
};

const {
    name,
    brand = "Dell"
} = product;

console.log(brand);
```

Output

```text
Dell
```

---

# 📌 Nested Object Destructuring

```javascript
const user = {
    name: "Rahul",
    address: {
        city: "Hyderabad",
        state: "Telangana"
    }
};

const {
    address: { city }
} = user;

console.log(city);
```

Output

```text
Hyderabad
```

---

# ⚙️ Internal Working

```text
Object Created

↓

Destructuring Pattern Applied

↓

Matching Properties Found

↓

Values Assigned to Variables

↓

Variables Ready to Use
```

---

# 🔄 Execution Flow

```text
Object

↓

Read Property Names

↓

Extract Values

↓

Store in Variables

↓

Use Variables
```

---

# 🌍 Real-World Analogy

Imagine receiving an employee ID card.

The card contains:

- Name
- Employee ID
- Department
- Designation

Instead of carrying the whole employee record everywhere, you extract only the details you need.

Object Destructuring works the same way.

---

# 📊 Without vs With Destructuring

| Without Destructuring | With Destructuring |
|-----------------------|-------------------|
| `product.name` | `name` |
| `product.price` | `price` |
| More repetitive | Cleaner code |
| Less readable | More readable |

---

# ⚠️ Common Mistakes

### ❌ Wrong Property Name

```javascript
const { productName } = product;
```

If the object contains `name`, this returns `undefined`.

---

### ✅ Correct

```javascript
const { name } = product;
```

---

### ❌ Forgetting Curly Braces

```javascript
const name = product;
```

---

### ✅ Correct

```javascript
const { name } = product;
```

---

### ❌ Destructuring from Undefined

```javascript
const { name } = undefined;
```

This causes an error.

Always make sure the object exists before destructuring.

---

# ✅ Best Practices

- Prefer destructuring for cleaner code.
- Use meaningful variable names.
- Destructure only required properties.
- Use default values when necessary.
- Use destructuring in React Props and `map()`.

---

# 🧪 Hands-on Practice

### Practice 1

Extract `name` and `price` from a product object.

---

### Practice 2

Render a product list using destructuring inside `map()`.

---

### Practice 3

Rename `name` to `productName`.

---

### Practice 4

Use a default value for `brand`.

---

# 🎯 Interview Questions

1. What is Object Destructuring?

2. Why do we use Object Destructuring?

3. How is Object Destructuring used in React?

4. Can we rename variables while destructuring?

5. Can we provide default values?

6. How do we use destructuring inside `map()`?

7. Why is destructuring preferred in Props?

---

# 📝 Notebook Summary

- Object Destructuring extracts object properties into variables.
- It reduces repetitive code.
- It improves readability.
- React commonly uses destructuring in Props and `map()`.
- We can rename variables and provide default values.

---

# 📚 Key Terms

| Term | Meaning |
|------|---------|
| Object | Collection of key-value pairs |
| Destructuring | Extracting properties into variables |
| Default Value | Value used when a property is missing |
| Renaming | Giving a new variable name while destructuring |
| Props Destructuring | Extracting props directly in a component |

---

# 🔗 Related Topics

**Previous:** Array of Objects

**Next:** filter() Method