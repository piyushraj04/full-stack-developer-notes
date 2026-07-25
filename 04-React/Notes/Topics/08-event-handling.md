# 🖱️ Event Handling

> **Difficulty:** ⭐⭐ Beginner  
> **Prerequisites:** JavaScript Functions, Arrow Functions, useState  
> **Estimated Reading Time:** 20–25 minutes

---

# 📚 Learning Objectives

After completing this topic, we will be able to:

- Understand Event Handling.
- Learn why Event Handling is used.
- Handle different user events.
- Understand the Event Object.
- Pass arguments to event handlers.
- Understand function reference vs function call.
- Answer common interview questions.

---

# 📖 What is Event Handling?

**Event Handling** is the process of responding to user actions such as clicking a button, typing in an input field, submitting a form, or moving the mouse.

React uses event handlers to make applications interactive.

> **Interview Definition:**  
> Event Handling is the process of executing a function in response to a user-generated event.

---

# 🤔 Why Do We Need Event Handling?

Without Event Handling, a React application would only display static content.

Events allow users to interact with the application.

Examples:

- Click a button
- Submit a form
- Type in a search box
- Hover over an image
- Double-click an item
- Press a keyboard key

Without events, none of these interactions would be possible.

---

# 🧠 JavaScript Behind It

Before React, JavaScript handled events like this:

```javascript
button.addEventListener("click", function () {
    console.log("Button Clicked");
});
```

React simplifies this by attaching event handlers directly in JSX.

---

# 📌 Basic Syntax

```jsx
<button onClick={handleClick}>
    Click Me
</button>
```

---

# 📌 Example

```jsx
function App() {

    function handleClick() {
        alert("Button Clicked");
    }

    return (
        <button onClick={handleClick}>
            Click Me
        </button>
    );
}
```

---

# 📌 Common React Events

| Event | Description |
|--------|-------------|
| onClick | Mouse click |
| onDoubleClick | Double-click |
| onChange | Input value changes |
| onSubmit | Form submission |
| onMouseOver | Mouse enters an element |
| onMouseOut | Mouse leaves an element |
| onKeyDown | Key is pressed |
| onKeyUp | Key is released |
| onFocus | Input gains focus |
| onBlur | Input loses focus |

---

# 📌 Function Reference vs Function Call

## ✅ Function Reference

```jsx
<button onClick={handleClick}>
```

React calls the function **only when the button is clicked**.

---

## ❌ Function Call

```jsx
<button onClick={handleClick()}>
```

The function executes **immediately during rendering**, not when the button is clicked.

---

# 📌 Passing Arguments

Sometimes we need to pass additional data.

```jsx
function greet(name) {
    alert(`Hello ${name}`);
}

<button onClick={() => greet("Rahul")}>
    Greet
</button>
```

Arrow functions delay execution until the event occurs.

---

# 📌 Event Object

Whenever an event occurs, React automatically provides an **Event Object**.

It contains information about the event.

```jsx
function handleClick(event) {
    console.log(event);
}

<button onClick={handleClick}>
    Click
</button>
```

---

# 📌 Common Event Object Properties

| Property | Description |
|----------|-------------|
| event.target | Element that triggered the event |
| event.type | Event name |
| event.target.value | Input value |
| event.preventDefault() | Prevent default browser behavior |

---

# 📌 Reading Input Values

```jsx
function App() {

    function handleChange(event) {
        console.log(event.target.value);
    }

    return (
        <input
            type="text"
            onChange={handleChange}
        />
    );
}
```

As the user types, the current input value is printed.

---

# 📌 Preventing Default Behavior

```jsx
function handleSubmit(event) {

    event.preventDefault();

    alert("Form Submitted");
}
```

Without `preventDefault()`, the browser refreshes after form submission.

---

# ⚙️ Internal Working

```text
User Action

↓

React Detects Event

↓

Event Handler Executes

↓

State Updates (if required)

↓

Component Re-renders

↓

UI Updates
```

---

# 🔄 Execution Flow

```text
User Clicks Button

↓

onClick Event Fires

↓

handleClick() Executes

↓

React Processes Changes

↓

Browser Updates UI
```

---

# 🌍 Real-World Analogy

Imagine pressing a doorbell.

```text
Press Doorbell

↓

Bell Rings

↓

Person Opens Door
```

Similarly,

```text
Click Button

↓

Event Fires

↓

React Executes Function
```

---

# 📊 HTML vs React Events

| HTML | React |
|------|-------|
| onclick | onClick |
| onchange | onChange |
| lowercase | camelCase |
| String | JavaScript Function |

---

# ⚠️ Common Mistakes

### ❌ Calling the function directly

```jsx
<button onClick={handleClick()}>
```

---

### ✅ Correct

```jsx
<button onClick={handleClick}>
```

---

### ❌ Forgetting `preventDefault()`

```jsx
<form onSubmit={handleSubmit}>
```

The page refreshes after submission.

---

### ✅ Correct

```jsx
event.preventDefault();
```

---

### ❌ Using HTML event names

```jsx
onclick
```

---

### ✅ Correct

```jsx
onClick
```

---

# ✅ Best Practices

- Use meaningful function names.
- Pass function references, not function calls.
- Use arrow functions only when passing arguments.
- Keep event handlers simple and readable.
- Use `preventDefault()` for form submissions.

---

# 🧪 Hands-on Practice

### Practice 1

Create a button that shows:

```
Hello React
```

when clicked.

---

### Practice 2

Create a button that changes the background color.

---

### Practice 3

Create an input field and print the typed value in the console.

---

### Practice 4

Create a button that displays:

```
Welcome Rahul
```

using an argument.

---

# 🎯 Interview Questions

1. What is Event Handling?

2. Why do we use Event Handling?

3. Difference between `onClick={handleClick}` and `onClick={handleClick()}`?

4. What is the Event Object?

5. What is `event.target`?

6. Why do we use `preventDefault()`?

7. How do we pass arguments to an event handler?

8. Why are React event names written in camelCase?

---

# 📝 Notebook Summary

- Event Handling responds to user actions.
- React uses camelCase event names.
- Pass function references, not function calls.
- React automatically provides an Event Object.
- `event.target.value` reads input values.
- `preventDefault()` prevents default browser behavior.

---

# 📚 Key Terms

| Term | Meaning |
|------|---------|
| Event | User action |
| Event Handler | Function executed when an event occurs |
| Event Object | Object containing event details |
| `event.target` | Element that triggered the event |
| `preventDefault()` | Stops default browser behavior |

---

# 🔗 Related Topics

**Previous:** useState Hook

**Next:** List Rendering