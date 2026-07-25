# 🎮 Controlled Components

> **Difficulty:** ⭐⭐⭐ Intermediate
> **Prerequisites:** useState Hook, Event Handling
> **Estimated Reading Time:** 20–25 minutes

---

# 📚 Learning Objectives

After completing this topic, we will be able to:

- Understand what Controlled Components are.
- Learn why Controlled Components are used.
- Connect input fields with React State.
- Understand one-way data flow in forms.
- Differentiate Controlled and Uncontrolled Components.
- Answer common interview questions.

---

# 📖 What is a Controlled Component?

A **Controlled Component** is a form element whose value is controlled by **React State** instead of the browser.

Whenever the user changes the input, React updates the state, and the updated state controls what is displayed.

> **Interview Definition:**  
> A Controlled Component is a form element whose value is managed and controlled by React State.

---

# 🤔 Why Do We Need Controlled Components?

Imagine a Login Form.

```text
Username

Password

Login Button
```

Whenever the user types,

we may want to:

- Validate input
- Show error messages
- Enable/Disable the Login button
- Submit data to a server

To do this, React must know the current value of every input field.

That's why we use Controlled Components.

---

# 🧠 JavaScript Behind It

In plain JavaScript, we read input values directly from the DOM.

```javascript
const value = document.getElementById("username").value;
```

React follows a different approach.

Instead of reading from the DOM,

React stores the value in **State**.

---

# 📌 How a Controlled Component Works

```text
User Types

↓

onChange Event Fires

↓

Event Object Received

↓

setState() Updates State

↓

Component Re-renders

↓

Updated Value Appears
```

React State becomes the **single source of truth**.

---

# 📌 Basic Syntax

```jsx
const [name, setName] = useState("");

<input
    type="text"
    value={name}
    onChange={(event) => setName(event.target.value)}
/>
```

---

# 📌 Complete Example

```jsx
import { useState } from "react";

function App() {

    const [name, setName] = useState("");

    return (
        <>
            <input
                type="text"
                value={name}
                onChange={(event) =>
                    setName(event.target.value)
                }
            />

            <h2>Hello {name}</h2>
        </>
    );
}
```

Output

```text
User Types: Rahul

↓

Hello Rahul
```

---

# 📌 Understanding the Code

```jsx
value={name}
```

Displays the current state inside the input.

---

```jsx
onChange={handleChange}
```

Detects every change made by the user.

---

```jsx
event.target.value
```

Reads the latest input value.

---

```jsx
setName(...)
```

Updates React State.

---

# 📌 Controlled Login Form

```jsx
function Login() {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    return (
        <>
            <input
                type="email"
                value={email}
                onChange={(e) =>
                    setEmail(e.target.value)
                }
            />

            <input
                type="password"
                value={password}
                onChange={(e) =>
                    setPassword(e.target.value)
                }
            />
        </>
    );
}
```

Each input has its own state.

---

# ⚙️ Internal Working

```text
User Types

↓

Input Event Occurs

↓

onChange Executes

↓

event.target.value Read

↓

Setter Function Called

↓

State Updated

↓

React Re-renders

↓

Input Displays Updated Value
```

---

# 🔄 Execution Flow

```text
Input Field

↓

User Types

↓

onChange

↓

setState

↓

State Changes

↓

Component Re-renders

↓

Updated UI
```

---

# 🌍 Real-World Analogy

Imagine a teacher writing attendance in a register.

```text
Student Speaks

↓

Teacher Updates Register

↓

Register Always Has Latest Information
```

Similarly,

```text
User Types

↓

React Updates State

↓

State Controls Input
```

React State always contains the latest value.

---

# 📊 Controlled vs Uncontrolled Components

| Controlled Component | Uncontrolled Component |
|----------------------|------------------------|
| Managed by React State | Managed by the DOM |
| Uses `useState` | Uses `ref` or DOM methods |
| Easy validation | Harder validation |
| Recommended | Used in specific cases |
| Predictable | Less predictable |

---

# 📌 Benefits of Controlled Components

- Easy validation
- Real-time updates
- Better user experience
- Predictable behavior
- Easy form submission
- Centralized data management

---

# ⚠️ Common Mistakes

### ❌ Forgetting `value`

```jsx
<input onChange={handleChange} />
```

The input is no longer fully controlled by React.

---

### ✅ Correct

```jsx
<input
    value={name}
    onChange={handleChange}
/>
```

---

### ❌ Forgetting `onChange`

```jsx
<input value={name} />
```

The input becomes read-only because its value never changes.

---

### ❌ Updating State Directly

```jsx
name = "Rahul";
```

---

### ✅ Correct

```jsx
setName("Rahul");
```

---

# ✅ Best Practices

- Use one state variable for each input when appropriate.
- Always provide both `value` and `onChange`.
- Keep form state inside React.
- Use meaningful state names.
- Validate user input before submitting.

---

# 🧪 Hands-on Practice

### Practice 1

Create a Name input field.

---

### Practice 2

Display the entered name below the input.

---

### Practice 3

Create Email and Password fields.

---

### Practice 4

Disable the Login button until both fields contain values.

---

# 🎯 Interview Questions

1. What is a Controlled Component?

2. Why do we use Controlled Components?

3. What is the role of `value` in a Controlled Component?

4. Why do we use `onChange`?

5. What happens if `value` is provided without `onChange`?

6. Difference between Controlled and Uncontrolled Components?

7. Why is React State called the "single source of truth"?

---

# 📝 Notebook Summary

- Controlled Components are controlled by React State.
- The `value` prop displays the current state.
- The `onChange` event updates the state.
- React State becomes the single source of truth.
- Controlled Components are recommended for forms.

---

# 📚 Key Terms

| Term | Meaning |
|------|---------|
| Controlled Component | Input controlled by React State |
| `value` | Displays the current state |
| `onChange` | Detects user input |
| State | Stores input values |
| Single Source of Truth | React State is the authoritative data source |

---

# 🔗 Related Topics

**Previous:** useContext Hook

**Next:** Forms in React