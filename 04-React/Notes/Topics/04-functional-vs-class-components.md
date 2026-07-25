# ⚛️ Functional vs Class Components

> **Difficulty:** ⭐ Beginner  
> **Prerequisites:** React Introduction, JSX, Components  
> **Estimated Reading Time:** 15–20 minutes

---

# 📚 Learning Objectives

After completing this topic, we will be able to:

- Understand Functional Components.
- Understand Class Components.
- Learn the differences between them.
- Create Components in different ways.
- Understand why Functional Components are preferred today.
- Answer common interview questions.

---

# 📖 What is a Functional Component?

A **Functional Component** is a JavaScript function that returns JSX.

It is the modern and recommended way of creating React Components.

> **Interview Definition:**  
> A Functional Component is a JavaScript function that returns JSX and can use React Hooks to manage state and other React features.

---

# 📝 Syntax

```jsx
function Welcome() {
    return <h1>Hello React</h1>;
}
```

---

# 📌 Three Ways to Create a Functional Component

## 1. Function Declaration (Recommended for Beginners)

```jsx
function Welcome() {
    return <h1>Hello React</h1>;
}

export default Welcome;
```

---

## 2. Function Expression

```jsx
const Welcome = function () {
    return <h1>Hello React</h1>;
};

export default Welcome;
```

---

## 3. Arrow Function (Most Common)

```jsx
const Welcome = () => {
    return <h1>Hello React</h1>;
};

export default Welcome;
```

---

### Short Arrow Function

If there is only one JSX expression, we can write:

```jsx
const Welcome = () => <h1>Hello React</h1>;
```

---

# 📖 What is a Class Component?

A **Class Component** is an ES6 JavaScript class that extends `React.Component`.

It must contain a `render()` method that returns JSX.

Before React Hooks were introduced, Class Components were used for state and lifecycle methods.

---

# 📝 Syntax

```jsx
import React, { Component } from "react";

class Welcome extends Component {
    render() {
        return <h1>Hello React</h1>;
    }
}

export default Welcome;
```

---

# 🤔 Why Were Class Components Used?

Earlier, Functional Components could only display UI.

Only Class Components could:

- Store State
- Handle Lifecycle Methods
- Manage Complex Logic

After React 16.8 introduced **Hooks**, Functional Components gained these capabilities.

Today, Functional Components are the preferred approach.

---

# 📊 Functional vs Class Components

| Functional Component | Class Component |
|----------------------|-----------------|
| JavaScript Function | ES6 Class |
| Returns JSX | Uses `render()` |
| Uses Hooks | Uses Lifecycle Methods |
| No `this` keyword | Uses `this` |
| Less Code | More Boilerplate |
| Easier to Read | More Complex |
| Preferred Today | Legacy Approach |

---

# ⚙️ Internal Working

## Functional Component

```text
React Calls Function

↓

Function Executes

↓

Returns JSX

↓

Virtual DOM Updates

↓

Browser Displays UI
```

---

## Class Component

```text
React Creates Object

↓

Calls render()

↓

Returns JSX

↓

Virtual DOM Updates

↓

Browser Displays UI
```

---

# 🔄 Execution Flow

### Functional Component

```text
Component Called

↓

Function Executes

↓

Returns JSX

↓

React Renders UI
```

---

### Class Component

```text
Component Created

↓

render() Executes

↓

Returns JSX

↓

React Renders UI
```

---

# 🌍 Real-World Analogy

Imagine making tea.

### Functional Component

You follow a recipe.

Input → Steps → Tea

Simple and direct.

---

### Class Component

You first create a machine.

Then start the machine.

Then make tea.

More setup is required.

---

# 📌 When Should We Use Functional Components?

Use Functional Components because they:

- Support Hooks
- Require less code
- Are easier to understand
- Are easier to test
- Are recommended by the React team

---

# ⚠️ Common Mistakes

### ❌ Component name starts with lowercase

```jsx
function welcome() {}
```

---

### ✅ Correct

```jsx
function Welcome() {}
```

---

### ❌ Forgetting `return`

```jsx
const Welcome = () => {
    <h1>Hello</h1>;
}
```

Nothing is returned.

---

### ✅ Correct

```jsx
const Welcome = () => {
    return <h1>Hello</h1>;
}
```

or

```jsx
const Welcome = () => <h1>Hello</h1>;
```

---

### ❌ Forgetting `render()` in Class Component

```jsx
class Welcome extends Component {

}
```

---

### ✅ Correct

```jsx
class Welcome extends Component {
    render() {
        return <h1>Hello</h1>;
    }
}
```

---

# ✅ Best Practices

- Prefer Functional Components for new projects.
- Use Arrow Functions for concise code.
- Keep Components focused on one responsibility.
- Use meaningful Component names.
- Avoid Class Components unless maintaining older projects.

---

# 🎯 Interview Questions

### 1. What is a Functional Component?

### 2. What is a Class Component?

### 3. Which Component type is preferred today?

### 4. Why are Functional Components preferred?

### 5. What is the role of the `render()` method?

### 6. Can Functional Components use state?

### 7. What are React Hooks?

### 8. Does a Functional Component use the `this` keyword?

### 9. Name three ways to create a Functional Component.

---

# 📝 Notebook Summary

- Functional Components are JavaScript functions that return JSX.
- Class Components are ES6 classes that extend `React.Component`.
- Functional Components use Hooks.
- Class Components use Lifecycle Methods.
- Functional Components are simpler and require less code.
- Modern React applications prefer Functional Components.

---

# 📚 Key Terms

| Term | Meaning |
|------|---------|
| Functional Component | JavaScript function returning JSX |
| Class Component | ES6 class returning JSX through `render()` |
| Hooks | React features used inside Functional Components |
| render() | Method that returns JSX in a Class Component |
| JSX | HTML-like syntax returned by Components |

---

# 🚀 What's Next?

➡ **05 - Props**