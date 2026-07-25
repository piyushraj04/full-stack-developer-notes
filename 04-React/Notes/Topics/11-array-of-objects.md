# 📦 Array of Objects

> **Difficulty:** ⭐⭐ Beginner  
> **Prerequisites:** JavaScript Arrays, Objects, map() Method, List Rendering  
> **Estimated Reading Time:** 20–25 minutes

---

# 📚 Learning Objectives

After completing this topic, we will be able to:

- Understand what an Array of Objects is.
- Learn why it is widely used in React.
- Access object properties inside arrays.
- Iterate through arrays of objects.
- Prepare data for List Rendering.
- Answer interview questions confidently.

---

# 📖 What is an Array of Objects?

An **Array of Objects** is a collection where each element is an object containing related information.

Each object represents one entity with multiple properties.

> **Interview Definition:**  
> An Array of Objects is a data structure where each array element is an object containing key-value pairs.

---

# 🤔 Why Do We Need an Array of Objects?

Imagine building an E-commerce website.

Each product has multiple details:

- Name
- Brand
- Price
- Rating
- Category
- Stock Status

Using separate arrays would be difficult to manage.

❌ Wrong

```javascript
const names = ["Laptop", "Phone"];
const prices = [50000, 30000];
const ratings = [4.5, 4.8];
```

Keeping related information in different arrays can easily cause mismatches.

✅ Better Approach

```javascript
const products = [
    {
        id: 1,
        name: "Laptop",
        brand: "Dell",
        price: 50000,
        rating: 4.5,
        inStock: true
    },
    {
        id: 2,
        name: "Phone",
        brand: "Samsung",
        price: 30000,
        rating: 4.8,
        inStock: true
    }
];
```

Each object stores all the information about one product.

---

# 🧠 JavaScript Behind It

An object stores related properties.

```javascript
const student = {
    name: "Rahul",
    age: 22
};
```

An array stores multiple values.

```javascript
const numbers = [10, 20, 30];
```

Combining them creates an Array of Objects.

```javascript
const students = [
    {
        name: "Rahul",
        age: 22
    },
    {
        name: "Amit",
        age: 23
    }
];
```

---

# 📌 Syntax

```javascript
const arrayName = [
    {
        key1: value1,
        key2: value2
    },
    {
        key1: value1,
        key2: value2
    }
];
```

---

# 📌 Example

```javascript
const employees = [
    {
        id: 1,
        name: "Rahul",
        department: "Development",
        salary: 60000
    },
    {
        id: 2,
        name: "Amit",
        department: "Testing",
        salary: 45000
    }
];
```

---

# 📌 Accessing Data

Access the first object.

```javascript
products[0]
```

Access the product name.

```javascript
products[0].name
```

Access the product price.

```javascript
products[0].price
```

Access the second product.

```javascript
products[1]
```

---

# 📌 Iterating Through an Array of Objects

```javascript
products.map((product) => {
    console.log(product.name);
});
```

Output

```text
Laptop

Phone
```

---

# 📌 Rendering in React

```jsx
function App() {

    return (
        <>
            {
                products.map((product) => (
                    <div key={product.id}>
                        <h2>{product.name}</h2>
                        <p>{product.brand}</p>
                        <h3>${product.price}</h3>
                    </div>
                ))
            }
        </>
    );
}
```

---

# 📌 Real Project Examples

Array of Objects is commonly used for:

- Product Lists
- Employee Records
- Student Records
- Orders
- Shopping Cart
- Comments
- Users
- API Responses

---

# ⚙️ Internal Working

```text
Array

↓

Each Element is an Object

↓

map() Visits Every Object

↓

Object Properties Accessed

↓

JSX Created

↓

React Renders UI
```

---

# 🔄 Execution Flow

```text
Products Array

↓

map()

↓

Current Product

↓

Read Properties

↓

Create JSX

↓

Display Product Card
```

---

# 🌍 Real-World Analogy

Imagine a classroom register.

Each student has:

- Roll Number
- Name
- Age
- Class
- Marks

Each student's details are stored together.

The entire register becomes an **Array of Objects**.

---

# 📊 Array vs Array of Objects

| Array | Array of Objects |
|--------|------------------|
| Stores simple values | Stores complete records |
| Example: `[10,20,30]` | Example: `[{name:"Rahul"}]` |
| Less information | Rich structured data |
| Simple iteration | Property-based access |

---

# ⚠️ Common Mistakes

### ❌ Forgetting Object Property

```javascript
product
```

Instead of

```javascript
product.name
```

---

### ❌ Using Wrong Property Name

```javascript
product.productName
```

When the property is actually

```javascript
product.name
```

---

### ❌ Forgetting `key` While Rendering

```jsx
<div>
```

Always provide a unique `key`.

---

# ✅ Best Practices

- Use meaningful property names.
- Use unique IDs.
- Keep related data inside one object.
- Use `map()` for rendering.
- Use object destructuring for cleaner code.

---

# 🧪 Hands-on Practice

### Practice 1

Create an array of five students.

---

### Practice 2

Display employee names.

---

### Practice 3

Render Product Cards.

---

### Practice 4

Display products that are in stock.

---

# 🎯 Interview Questions

1. What is an Array of Objects?

2. Why do we use an Array of Objects?

3. How do we access object properties?

4. How do we iterate through an Array of Objects?

5. Why are Arrays of Objects commonly used in React?

6. What is the difference between an Array and an Array of Objects?

---

# 📝 Notebook Summary

- An Array of Objects stores multiple objects in one array.
- Each object represents one complete record.
- React commonly uses Arrays of Objects to render dynamic UI.
- Use `map()` to iterate through the array.
- Access properties using dot notation.

---

# 📚 Key Terms

| Term | Meaning |
|------|---------|
| Array | Collection of values |
| Object | Collection of key-value pairs |
| Array of Objects | Collection of objects |
| Property | A key-value pair inside an object |
| Dot Notation | Accessing object properties |

---

# 🔗 Related Topics

**Previous:** JavaScript `map()` Method

**Next:** Object Destructuring