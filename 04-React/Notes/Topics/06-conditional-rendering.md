# 🔀 Conditional Rendering

> **Difficulty:** ⭐ Beginner  
> **Prerequisites:** JSX, Components, Props  
> **Estimated Reading Time:** 15–20 minutes

---

# 📚 Learning Objectives

After completing this topic, we will be able to:

- Understand Conditional Rendering.
- Learn why Conditional Rendering is used.
- Explore different ways to render UI conditionally.
- Learn which method to use in different situations.
- Answer common interview questions.

---

# 📖 What is Conditional Rendering?

**Conditional Rendering** means displaying different UI based on a condition.

Instead of always rendering the same content, React allows us to render different components or elements depending on a condition.

> **Interview Definition:**  
> Conditional Rendering is the process of displaying different UI based on a condition.

---

# 🤔 Why Do We Need Conditional Rendering?

Not every user should see the same UI.

For example:

- Logged-in users see the Dashboard.
- Logged-out users see the Login page.
- Admin users see the Admin Panel.
- Customers see Product Details.
- During API calls, a Loading Spinner is displayed.

Without Conditional Rendering, we would have to create multiple pages for each scenario.

React solves this efficiently.

---

# 🧠 JavaScript Behind It

React uses JavaScript conditions.

Before React:

```javascript
let age = 20;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

React applies the same concept to JSX.

Instead of printing text,

we decide which UI to display.

---

# 📌 Method 1 : if...else Statement

```jsx
function App() {

    const isLoggedIn = true;

    if (isLoggedIn) {
        return <h1>Welcome User</h1>;
    }

    return <h1>Please Login</h1>;
}
```

---

# 📌 Method 2 : Ternary Operator (Most Common)

Syntax

```javascript
condition ? trueValue : falseValue
```

Example

```jsx
function App() {

    const isLoggedIn = true;

    return (
        <>
            {
                isLoggedIn
                    ? <h2>Welcome Back</h2>
                    : <h2>Please Login</h2>
            }
        </>
    );
}
```

This is the most commonly used method in React.

---

# 📌 Method 3 : Logical AND (&&)

Use this when we want to render something **only if the condition is true**.

```jsx
function App() {

    const isAdmin = true;

    return (
        <>
            {isAdmin && <button>Delete User</button>}
        </>
    );
}
```

If the condition is false,

nothing is rendered.

---

# 📌 Method 4 : Storing JSX in a Variable

```jsx
function App() {

    const isLoggedIn = true;

    let message;

    if (isLoggedIn) {
        message = <h2>Welcome User</h2>;
    } else {
        message = <h2>Please Login</h2>;
    }

    return (
        <>
            {message}
        </>
    );
}
```

Useful when the UI is complex.

---

# 📌 Real Project Examples

### Login System

```text
User Logged In

↓

Dashboard
```

Otherwise

```text
User Not Logged In

↓

Login Page
```

---

### Loading Spinner

```text
API Calling

↓

Loading...

↓

API Response

↓

Show Data
```

---

### E-commerce Website

```text
In Stock

↓

Add to Cart Button
```

Otherwise

```text
Out of Stock
```

---

### Admin Panel

```text
Admin

↓

Edit Button
Delete Button
```

Normal User

↓

Hide Buttons

---

# ⚙️ Internal Working

```text
Component Executes

↓

Condition Evaluated

↓

React Chooses JSX

↓

Virtual DOM Created

↓

Browser Displays UI
```

React renders **only the JSX that satisfies the condition**.

---

# 🔄 Execution Flow

```text
Component Starts

↓

Condition Checked

↓

True ?

↓

Yes

↓

Render First UI

↓

No

↓

Render Second UI
```

---

# 🌍 Real-World Analogy

Imagine entering a shopping mall.

If you have a VIP Pass,

↓

Enter VIP Lounge.

Otherwise,

↓

Enter Regular Lounge.

The condition decides which section you can access.

React works the same way.

---

# 📊 Comparison

| Method | Best Used When |
|---------|----------------|
| if...else | Entire component changes |
| Ternary Operator | Two possible UI outputs |
| Logical AND (&&) | Show UI only when condition is true |
| Variable | Complex JSX |

---

# ⚠️ Common Mistakes

### ❌ Using if inside JSX

Wrong

```jsx
return (
    <>
        if(isLoggedIn){
            <Home/>
        }
    </>
)
```

JavaScript `if` statements cannot be written directly inside JSX.

---

### ✅ Correct

```jsx
return (
    <>
        {
            isLoggedIn
                ? <Home/>
                : <Login/>
        }
    </>
)
```

---

### ❌ Forgetting the False Case

```jsx
{
    isLoggedIn ?
    <Home/>
}
```

Use a ternary only when both outcomes are provided.

---

### ❌ Using Ternary for Very Complex UI

When JSX becomes too large,

prefer `if...else` or a variable.

---

# ✅ Best Practices

- Use **Ternary Operator** for simple conditions.
- Use **&&** when rendering only on a true condition.
- Use **if...else** for large UI changes.
- Keep conditional logic easy to read.
- Avoid deeply nested ternary operators.

---

# 🎯 Interview Questions

1. What is Conditional Rendering?

2. Why do we need Conditional Rendering?

3. Name different ways to perform Conditional Rendering.

4. Which method is most commonly used?

5. When should we use Logical AND (`&&`)?

6. Can we write an `if` statement directly inside JSX?

7. Difference between Ternary Operator and Logical AND (`&&`)?

8. Which method is better for complex UI?

---

# 📝 Notebook Summary

- Conditional Rendering displays different UI based on a condition.
- React uses normal JavaScript conditions.
- Common methods:
  - if...else
  - Ternary Operator
  - Logical AND (`&&`)
  - Variable
- Ternary is the most commonly used approach.
- `&&` renders UI only when the condition is true.
- Keep conditional logic simple and readable.

---

# 📚 Key Terms

| Term | Meaning |
|------|---------|
| Conditional Rendering | Rendering UI based on a condition |
| if...else | Executes one of two code blocks |
| Ternary Operator | Short form of if...else |
| Logical AND (`&&`) | Renders UI only when the condition is true |
| JSX | UI returned by a React Component |

---

# 🔗 Related Topics

**Previous:** Props

**Next:** useState Hook