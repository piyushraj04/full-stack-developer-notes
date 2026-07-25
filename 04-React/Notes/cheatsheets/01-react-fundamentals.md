# 📘 React Fundamentals Cheat Sheet

> Module 1
>
> Topics Covered:
> - React Introduction
> - JSX

---

# 🚀 React

## What is React?

React is an open-source JavaScript library used for building User Interfaces (UI).

Developed and maintained by **Meta (Facebook).**

---

## Why React?

- Component-Based Architecture
- Reusable UI
- Virtual DOM
- One-way Data Flow
- Fast Rendering
- Large Community

---

## Key Features

✅ Component Based

✅ Declarative

✅ Reusable Components

✅ Virtual DOM

✅ JSX

---

# 🧠 Virtual DOM

Virtual DOM is a lightweight copy of the Real DOM.

```text
State Changes

↓

Virtual DOM Updates

↓

Diffing

↓

Only Changed Parts

↓

Real DOM Updates
```

Advantages

- Faster Rendering
- Better Performance
- Fewer DOM Operations

---

# ⚛ JSX

## What is JSX?

JSX stands for JavaScript XML.

It lets us write HTML-like syntax inside JavaScript.

Example

```jsx
const element = <h1>Hello React</h1>;
```

React converts it into

```javascript
React.createElement(
    "h1",
    null,
    "Hello React"
);
```

---

# JSX Rules

✅ One parent element

✅ Close every tag

```jsx
<img />
<input />
```

✅ Use className

```jsx
<div className="container">
```

✅ JavaScript inside {}

```jsx
<h2>{name}</h2>
```

---

# Expression Example

```jsx
const age = 22;

<h2>{age}</h2>
```

---

# Root Element

```html
<div id="root"></div>
```

React renders the application inside this element.

---

# React Rendering

```text
Component

↓

JSX

↓

React.createElement()

↓

Virtual DOM

↓

Real DOM

↓

Browser
```

---

# Common Mistakes

❌ Multiple root elements

```jsx
<h1>Hello</h1>
<p>React</p>
```

✅ Correct

```jsx
<>
    <h1>Hello</h1>
    <p>React</p>
</>
```

---

❌ class

```jsx
<div class="box">
```

✅ Correct

```jsx
<div className="box">
```

---

❌ Unclosed Tags

```jsx
<img>
```

✅ Correct

```jsx
<img />
```

---

# Best Practices

- Keep JSX clean.
- Break UI into components.
- Use meaningful names.
- Keep one responsibility per component.
- Write readable code.

---

# One-Minute Revision

✅ React is a JavaScript library.

✅ React uses Components.

✅ JSX lets us write HTML-like code inside JavaScript.

✅ JSX is converted into `React.createElement()`.

✅ React updates the Virtual DOM first.

✅ Only changed parts are updated in the Real DOM.

---

# Interview Quick Questions

### What is React?

A JavaScript library for building user interfaces.

---

### What is JSX?

HTML-like syntax written inside JavaScript.

---

### Is JSX HTML?

No.

It is JavaScript syntax that Babel converts into
`React.createElement()`.

---

### Why is React Fast?

Because it updates the Virtual DOM first and changes only the required parts of the Real DOM.

---

### What are React's main features?

- Component Based
- Virtual DOM
- JSX
- Reusable UI
- One-way Data Flow

---

# Related Topics

➡ Components