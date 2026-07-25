# 🔍 JavaScript filter() Method

> **Difficulty:** ⭐⭐ Beginner to Intermediate
> **Prerequisites:** Arrays, Array of Objects, map(), Object Destructuring
> **Estimated Reading Time:** 20–25 minutes

---

# 📚 Learning Objectives

After completing this topic, we will be able to:

- Understand the `filter()` method.
- Learn why `filter()` is used.
- Filter simple arrays.
- Filter arrays of objects.
- Use `filter()` with React.
- Differentiate between `filter()` and `map()`.
- Answer interview questions confidently.

---

# 📖 What is filter()?

`filter()` is a built-in JavaScript array method that creates a **new array containing only the elements that satisfy a given condition**.

It does **not** modify the original array.

> **Interview Definition:**  
> `filter()` is a JavaScript array method that returns a new array containing only the elements that satisfy a specified condition.

---

# 🤔 Why Do We Need filter()?

Imagine an E-commerce website.

The store has 1,000 products.

A customer wants to see only:

- Electronics
- Products under ₹50,000
- Products that are in stock

Instead of displaying all products, we filter only the required ones.

This is where `filter()` is used.

---

# 🧠 JavaScript Behind It

Suppose we have an array of numbers.

```javascript
const numbers = [10, 20, 30, 40, 50];
```

We only want numbers greater than 25.

```javascript
const result = numbers.filter(number => number > 25);

console.log(result);
```

Output

```javascript
[30, 40, 50]
```

`filter()` checks every element.

If the condition is **true**, the element is included.

If the condition is **false**, the element is skipped.

---

# 📌 Syntax

```javascript
array.filter((element, index, array) => {
    return condition;
});
```

---

# 📖 Parameters

| Parameter | Description |
|-----------|-------------|
| element | Current element |
| index | Current index |
| array | Original array |

---

# 📌 Example with Numbers

```javascript
const numbers = [5, 12, 18, 25, 40];

const result = numbers.filter(num => num >= 18);

console.log(result);
```

Output

```javascript
[18, 25, 40]
```

---

# 📌 Example with Strings

```javascript
const names = ["Rahul", "Amit", "Priya", "Riya"];

const result = names.filter(name => name.startsWith("R"));

console.log(result);
```

Output

```javascript
["Rahul", "Riya"]
```

---

# 📌 Example with Array of Objects

```javascript
const products = [
    {
        id: 1,
        name: "Laptop",
        price: 50000,
        inStock: true
    },
    {
        id: 2,
        name: "Phone",
        price: 30000,
        inStock: false
    },
    {
        id: 3,
        name: "Watch",
        price: 5000,
        inStock: true
    }
];
```

Display only products that are in stock.

```javascript
const availableProducts = products.filter(
    product => product.inStock
);

console.log(availableProducts);
```

---

# 📌 React Example

```jsx
function App() {

    const availableProducts = products.filter(
        product => product.inStock
    );

    return (
        <>
            {
                availableProducts.map(({ id, name, price }) => (
                    <div key={id}>
                        <h2>{name}</h2>
                        <p>₹{price}</p>
                    </div>
                ))
            }
        </>
    );
}
```

---

# 📌 Multiple Conditions

```javascript
const result = products.filter(
    product =>
        product.price < 50000 &&
        product.inStock
);
```

Display only products that:

- Cost less than ₹50,000
- Are available in stock

---

# 📌 Search Example

```javascript
const result = products.filter(product =>
    product.name.toLowerCase().includes("lap")
);
```

Useful for search functionality.

---

# 📊 filter() vs map()

| filter() | map() |
|-----------|--------|
| Returns matching elements | Returns transformed elements |
| Checks a condition | Changes data |
| Number of elements may decrease | Number of elements remains the same |
| Used for searching/filtering | Used for transforming data |

---

# ⚙️ Internal Working

```text
Original Array

↓

filter()

↓

Visit Every Element

↓

Condition Checked

↓

True ?

↓

Yes → Add to New Array

↓

No → Skip

↓

Return New Array
```

---

# 🔄 Execution Flow

```text
Array

↓

filter()

↓

Check Condition

↓

Collect Matching Elements

↓

Return Filtered Array

↓

Render UI
```

---

# 🌍 Real-World Analogy

Imagine airport security.

Every passenger is checked.

```text
Passenger

↓

Security Check

↓

Condition Satisfied?

↓

Yes → Allowed

↓

No → Stopped
```

Similarly,

`filter()` checks every element and keeps only those that satisfy the condition.

---

# ⚠️ Common Mistakes

### ❌ Expecting filter() to Modify the Original Array

```javascript
products.filter(product => product.inStock);

console.log(products);
```

The original array remains unchanged.

---

### ❌ Forgetting to Store the Result

```javascript
products.filter(product => product.inStock);
```

The filtered array is discarded.

---

### ✅ Correct

```javascript
const availableProducts =
    products.filter(product => product.inStock);
```

---

### ❌ Using map() Instead of filter()

Use:

- `filter()` → To remove unwanted elements.
- `map()` → To transform elements.

---

# ✅ Best Practices

- Use `filter()` for searching and filtering.
- Keep conditions simple.
- Combine `filter()` with `map()` when rendering.
- Don't modify the original array.
- Use meaningful variable names.

---

# 🧪 Hands-on Practice

### Practice 1

Display only even numbers.

---

### Practice 2

Display products that are in stock.

---

### Practice 3

Display products with a price less than ₹30,000.

---

### Practice 4

Create a search filter using `includes()`.

---

# 🎯 Interview Questions

1. What is `filter()`?

2. What does `filter()` return?

3. Does `filter()` modify the original array?

4. Difference between `filter()` and `map()`?

5. Difference between `filter()` and `find()`?

6. Can we use multiple conditions inside `filter()`?

7. Where is `filter()` used in React?

---

# 📝 Notebook Summary

- `filter()` returns only the elements that satisfy a condition.
- It always returns a new array.
- The original array remains unchanged.
- It is commonly used for searching and filtering data.
- It works well with `map()` in React.

---

# 📚 Key Terms

| Term | Meaning |
|------|---------|
| `filter()` | Returns matching elements |
| Condition | Rule used to select elements |
| Callback Function | Function executed for each element |
| New Array | Array returned by `filter()` |
| Array of Objects | Common data structure used with `filter()` |

---

# 🔗 Related Topics

**Previous:** Object Destructuring

**Next:** Context API