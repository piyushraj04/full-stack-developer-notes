# 🎣 useState Hook

> **Difficulty:** ⭐⭐ Beginner to Intermediate  
> **Prerequisites:** JavaScript Variables, Functions, Components, Props  
> **Estimated Reading Time:** 20–25 minutes

---

# 📚 Learning Objectives

After completing this topic, we will be able to:

- Understand what `useState` is.
- Learn why `useState` is needed.
- Create and update state.
- Understand component re-rendering.
- Differentiate between variables and state.
- Answer common interview questions.

---

# 📖 What is useState?

`useState` is a **built-in React Hook** that allows Functional Components to store and update data (state).

Whenever the state changes, React automatically re-renders the component and updates the UI.

> **Interview Definition:**  
> `useState` is a React Hook that allows Functional Components to manage state and automatically update the UI whenever the state changes.

---

# 🤔 Why Do We Need useState?

Imagine a Counter Application.

Without `useState`, changing a variable does **not** update the UI.

Example

```jsx
function App() {

    let count = 0;

    function increment() {
        count++;
        console.log(count);
    }

    return (
        <>
            <h1>{count}</h1>

            <button onClick={increment}>
                Increment
            </button>
        </>
    );
}
```

Although `count` changes internally,

the browser still displays **0** because React does not know that the variable changed.

---

# 🧩 Visual Memory

```text
Normal Variable

↓

Value Changes

↓

React Doesn't Know

↓

UI Doesn't Update ❌
```

---

With `useState`

```text
State Changes

↓

React Knows

↓

Component Re-renders

↓

UI Updates ✅
```

---

# 🧠 JavaScript Behind It

JavaScript Variables

```javascript
let count = 0;

count++;

console.log(count);
```

JavaScript updates the variable,

but JavaScript cannot update React's UI automatically.

React needs a way to know that data has changed.

That's why React provides **State**.

---

# 📌 Syntax

```jsx
const [count, setCount] = useState(0);
```

---

# Understanding the Syntax

```jsx
const [count, setCount] = useState(0);
```

| Part | Meaning |
|------|---------|
| `count` | Current state value |
| `setCount` | Function to update the state |
| `useState(0)` | Initial state value |

---

# 📌 Import

```jsx
import { useState } from "react";
```

---

# 📌 Example

```jsx
import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    return (
        <>
            <h2>{count}</h2>

            <button onClick={increment}>
                Increment
            </button>
        </>
    );
}

export default Counter;
```

---

# 📌 Updating State

```jsx
setCount(count + 1);
```

React updates the state,

then automatically re-renders the component.

---

# 📌 Multiple State Variables

```jsx
const [name, setName] = useState("");

const [age, setAge] = useState(20);

const [isLoggedIn, setIsLoggedIn] = useState(false);
```

Each state variable is independent.

---

# 📌 Updating Different Data Types

## Number

```jsx
setCount(10);
```

---

## String

```jsx
setName("Rahul");
```

---

## Boolean

```jsx
setIsLoggedIn(true);
```

---

## Array

```jsx
setNumbers([10,20,30]);
```

---

## Object

```jsx
setUser({
    name: "Rahul",
    age: 22
});
```

---

# ⚙️ Internal Working

```text
Component Renders

↓

useState Creates State

↓

Returns Current Value

+

Setter Function

↓

User Clicks Button

↓

Setter Function Executes

↓

State Updates

↓

React Re-renders Component

↓

Virtual DOM Updates

↓

Browser UI Updates
```

---

# 🔄 Execution Flow

```text
App Starts

↓

useState(0)

↓

count = 0

↓

Button Click

↓

setCount(1)

↓

React Detects State Change

↓

Component Re-renders

↓

UI Displays 1
```

---

# 🌍 Real-World Analogy

Imagine a digital scoreboard in a cricket stadium.

When a team scores a run:

```text
Score Changes

↓

Scoreboard Updates Automatically
```

The scoreboard always shows the latest score.

Similarly,

`useState` updates the UI whenever the state changes.

---

# 📌 Rules of useState

- Call Hooks only at the top level of a Component.
- Never call Hooks inside loops or conditions.
- Always use the setter function to update state.
- Do not modify state directly.

---

# 📊 Variable vs State

| Variable | State |
|----------|-------|
| Managed by JavaScript | Managed by React |
| UI does not update | UI updates automatically |
| No re-render | Re-render happens |
| Temporary value | Persistent between renders |

---

# ⚠️ Common Mistakes

### ❌ Updating State Directly

```jsx
count = count + 1;
```

---

### ✅ Correct

```jsx
setCount(count + 1);
```

---

### ❌ Forgetting to Import

```jsx
const [count, setCount] = useState(0);
```

Without

```jsx
import { useState } from "react";
```

---

### ❌ Calling useState Inside if

```jsx
if (true) {
    useState(0);
}
```

Hooks must always be called at the top level.

---

# ✅ Best Practices

- Use meaningful state names.
- Keep state as small as possible.
- Always use the setter function.
- Use multiple state variables instead of one large state object when appropriate.
- Never modify state directly.

---

# 🎯 Interview Questions

1. What is `useState`?

2. Why do we use `useState`?

3. Why doesn't updating a normal variable update the UI?

4. What does `useState` return?

5. What is the purpose of the setter function?

6. Can we have multiple `useState` Hooks in one component?

7. Why should we not update state directly?

8. What happens when `setState` is called?

9. Difference between Variable and State?

---

# 📝 Notebook Summary

- `useState` is a React Hook.
- It manages state in Functional Components.
- State changes trigger re-rendering.
- `useState` returns the current state and a setter function.
- Always use the setter function to update state.
- Normal variables do not trigger UI updates.

---

# 📚 Key Terms

| Term | Meaning |
|------|---------|
| Hook | Special React function |
| State | Data managed by React |
| useState | Hook used to create state |
| Setter Function | Function used to update state |
| Re-render | React updates the UI after a state change |

---

# 🔗 Related Topics

**Previous:** Conditional Rendering

**Next:** Event Handling