# 📦 Props

> **Difficulty:** ⭐ Beginner  
> **Prerequisites:** Components, Functional Components  
> **Estimated Reading Time:** 15–20 minutes

---

# 📚 Learning Objectives

After completing this topic, we will be able to:

- Understand what Props are.
- Learn why Props are used.
- Pass data between Components.
- Understand one-way data flow.
- Use Props with Functional Components.
- Use Props with object destructuring.
- Answer common interview questions.

---

# 📖 What are Props?

**Props** stands for **Properties**.

Props are used to **pass data from a Parent Component to a Child Component**.

They make Components reusable and dynamic.

> **Interview Definition:**  
> Props are read-only inputs that allow a Parent Component to pass data to a Child Component.

---

# 🤔 Why Do We Need Props?

Imagine we have a Product Card Component.

Without Props, we would have to create a separate component for every product.

```text
Product1

Product2

Product3

Product4
```

This creates duplicate code.

Instead, we create one reusable component and pass different data using Props.

```text
ProductCard

↓

Phone

↓

Laptop

↓

Watch

↓

Shoes
```

One Component.

Multiple Data.

---

# 🧠 JavaScript Behind It

Before learning Props, let's understand JavaScript functions.

Example

```javascript
function greet(name) {
    return `Hello ${name}`;
}

greet("Rahul");
greet("Amit");
```

Here,

`name` is the parameter.

Different values are passed every time.

React Props work in exactly the same way.

Instead of passing normal values,

React passes an **object**.

---

# 📌 Syntax

## Parent Component

```jsx
<Product name="Laptop" price={50000} />
```

---

## Child Component

```jsx
function Product(props) {
    return (
        <>
            <h2>{props.name}</h2>
            <h3>{props.price}</h3>
        </>
    );
}
```

---

# 📦 How Props Work

```text
Parent Component

        │

        │ sends props

        ▼

Child Component

        │

        ▼

Receives props object

        │

        ▼

Displays Data
```

---

# 📖 Props are an Object

Whenever a Parent passes data,

React combines all values into a single object.

Example

```jsx
<Product
    name="Laptop"
    brand="Dell"
    price={50000}
/>
```

React internally creates

```javascript
props = {
    name: "Laptop",
    brand: "Dell",
    price: 50000
};
```

---

# 📌 Accessing Props

```jsx
function Product(props) {
    return (
        <>
            <h2>{props.name}</h2>
            <h3>{props.brand}</h3>
            <p>{props.price}</p>
        </>
    );
}
```

---

# 📌 Object Destructuring

Instead of writing

```jsx
props.name
props.price
props.brand
```

We can write

```jsx
function Product({ name, brand, price }) {
    return (
        <>
            <h2>{name}</h2>
            <h3>{brand}</h3>
            <p>{price}</p>
        </>
    );
}
```

This is called **Object Destructuring**.

It makes the code cleaner and easier to read.

---

# 📌 Passing Different Types of Props

## String

```jsx
<Product name="Laptop" />
```

---

## Number

```jsx
<Product price={50000} />
```

---

## Boolean

```jsx
<Product available={true} />
```

---

## Array

```jsx
<Product colors={["Black", "Silver"]} />
```

---

## Object

```jsx
<Product details={{ brand: "Dell", ram: "16GB" }} />
```

---

## Function

```jsx
<Product onBuy={buyProduct} />
```

Functions can also be passed as Props.

---

# 📌 One-Way Data Flow

React follows **One-Way Data Flow**.

Data always moves in one direction.

```text
Parent

        │

        ▼

Child
```

A Child Component cannot directly change the Parent's Props.

---

# ⚠️ Props are Read-Only

Props should never be modified inside a Child Component.

❌ Wrong

```jsx
props.name = "Phone";
```

✅ Correct

Use the received value without changing it.

---

# ⚙️ Internal Working

```text
Parent Component Executes

↓

Creates Props Object

↓

Passes Props

↓

Child Receives Props

↓

Child Returns JSX

↓

React Updates Virtual DOM

↓

Browser Displays UI
```

---

# 🔄 Execution Flow

```text
App Component

↓

<Product name="Laptop" />

↓

React Creates Props Object

↓

Product Component Executes

↓

Returns JSX

↓

Browser Displays Product
```

---

# 🌍 Real-World Analogy

Imagine a teacher handing worksheets to students.

The **teacher** decides what worksheet each student receives.

Students can read the worksheet but cannot change the teacher's original copy.

Similarly:

- Parent Component → Teacher
- Props → Worksheet
- Child Component → Student

---

# ✅ Advantages of Props

- Reusable Components
- Dynamic UI
- Easy Data Sharing
- Cleaner Code
- Better Maintainability
- One-Way Data Flow

---

# ⚠️ Common Mistakes

### ❌ Modifying Props

```jsx
props.name = "Phone";
```

---

### ❌ Forgetting Curly Braces

Wrong

```jsx
<Product price="50000" + 1000 />
```

Correct

```jsx
<Product price={50000 + 1000} />
```

---

### ❌ Too Many `props.` References

Instead of

```jsx
props.name
props.price
props.brand
```

Use destructuring.

---

# ✅ Best Practices

- Treat Props as read-only.
- Use meaningful prop names.
- Prefer object destructuring.
- Keep Components reusable.
- Pass only the required data.

---

# 🎯 Interview Questions

1. What are Props?

2. Why are Props used?

3. Why are Props called read-only?

4. What is One-Way Data Flow?

5. Can Props be modified?

6. What is Props Destructuring?

7. Can we pass functions as Props?

8. Can we pass objects and arrays as Props?

9. Difference between Props and State?

---

# 📝 Notebook Summary

- Props = Properties.
- Used to pass data from Parent to Child.
- Props are read-only.
- Props are stored as an object.
- React follows One-Way Data Flow.
- Destructuring makes code cleaner.
- Props can store any JavaScript value.

---

# 📚 Key Terms

| Term | Meaning |
|------|---------|
| Props | Properties passed from Parent to Child |
| Parent Component | Sends data |
| Child Component | Receives data |
| Destructuring | Extracting values from an object |
| One-Way Data Flow | Data moves only from Parent to Child |
| Read-Only | Cannot be modified by the Child |

---

# 🔗 Related Topics

**Previous:** Functional vs Class Components

**Next:** Conditional Rendering