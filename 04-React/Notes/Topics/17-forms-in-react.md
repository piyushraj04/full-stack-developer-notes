# 📝 Forms in React

> **Difficulty:** ⭐⭐⭐ Intermediate
> **Prerequisites:** useState Hook, Event Handling, Controlled Components
> **Estimated Reading Time:** 30–35 minutes

---

# 📚 Learning Objectives

After completing this topic, we will be able to:

- Understand how forms work in React.
- Learn why React uses Controlled Components for forms.
- Handle form submission.
- Prevent page refresh using `preventDefault()`.
- Validate user input.
- Build a complete Login Form.
- Answer common interview questions.

---

# 📖 What is a Form?

A **Form** is a collection of input fields used to collect information from users.

Examples:

- Login Form
- Registration Form
- Contact Form
- Feedback Form
- Payment Form

React manages form data using **State**.

> **Interview Definition:**  
> A React Form is a collection of controlled input fields whose values are managed using React State.

---

# 🤔 Why Do We Need Forms?

Most web applications need user input.

Examples:

- Login
- Sign Up
- Search Products
- Checkout
- Book Tickets

React stores all user input inside **State**, making it easy to validate, display, and submit.

---

# 🧠 JavaScript Behind It

In plain JavaScript,

we usually read values directly from the DOM.

```javascript
const email =
document.getElementById("email").value;
```

React avoids direct DOM access.

Instead,

```text
User Types

↓

React State Updates

↓

State Stores Data

↓

Form Uses State
```

---

# 📌 Basic Form Structure

```jsx
<form>

    <input />

    <button>

        Submit

    </button>

</form>
```

React handles submission using the `onSubmit` event.

---

# 📌 Handling Form Submission

```jsx
function App() {

    function handleSubmit(event) {

        event.preventDefault();

        console.log("Form Submitted");

    }

    return (

        <form onSubmit={handleSubmit}>

            <button>

                Submit

            </button>

        </form>

    );

}
```

---

# 📌 Why preventDefault()?

Normally,

submitting a form refreshes the page.

```text
Submit

↓

Browser Refreshes

↓

State Lost
```

`preventDefault()` stops this default browser behavior.

```javascript
event.preventDefault();
```

---

# 📌 Complete Login Form

```jsx
import { useState } from "react";

function LoginForm() {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    function handleSubmit(event) {

        event.preventDefault();

        console.log({
            email,
            password
        });

    }

    return (

        <form onSubmit={handleSubmit}>

            <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) =>
                    setEmail(e.target.value)
                }
            />

            <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) =>
                    setPassword(e.target.value)
                }
            />

            <button type="submit">

                Login

            </button>

        </form>

    );

}
```

---

# 📌 Form Validation

Before submitting,

we should check user input.

```jsx
if (!email || !password) {

    alert("All fields are required.");

    return;

}
```

---

# 📌 Displaying Error Messages

```jsx
{
    !email &&
    <p>Please enter your email.</p>
}
```

This provides immediate feedback to the user.

---

# 📌 Disabling the Submit Button

```jsx
<button
    type="submit"
    disabled={!email || !password}
>

    Login

</button>
```

The button becomes enabled only when both fields contain values.

---

# 📌 Resetting the Form

```jsx
setEmail("");

setPassword("");
```

Usually done after successful form submission.

---

# ⚙️ Internal Working

```text
User Types

↓

onChange Event

↓

State Updated

↓

User Clicks Submit

↓

onSubmit Executes

↓

preventDefault()

↓

Validation

↓

Process Data

↓

(Optional) Reset Form
```

---

# 🔄 Execution Flow

```text
Render Form

↓

User Enters Data

↓

State Updates

↓

Submit Button Clicked

↓

onSubmit Event

↓

preventDefault()

↓

Validation

↓

Submit Data

↓

Re-render UI
```

---

# 🌍 Real-World Analogy

Imagine filling out a job application.

```text
Fill Details

↓

Review Information

↓

Submit Application

↓

Company Verifies Details

↓

Application Accepted
```

React forms work the same way.

- User fills details.
- React stores them.
- Validation checks the input.
- The data is submitted.

---

# 📊 HTML Form vs React Form

| HTML Form | React Form |
|------------|------------|
| Uses DOM | Uses React State |
| Direct DOM access | Controlled Components |
| Browser manages data | React manages data |
| Page refresh on submit | `preventDefault()` prevents refresh |
| Less control | More control |

---

# ⚠️ Common Mistakes

### ❌ Forgetting `preventDefault()`

The page refreshes, causing all state values to reset.

---

### ❌ Forgetting `onSubmit`

The submit button has no custom behavior.

---

### ❌ Not Validating Input

Invalid or empty data may be submitted.

---

### ❌ Mixing Controlled and Uncontrolled Inputs

Keep all related form fields controlled by React State.

---

# ✅ Best Practices

- Use Controlled Components.
- Validate before submitting.
- Use meaningful input names.
- Keep one state variable per field (or use an object for larger forms).
- Show clear validation messages.
- Disable submission when required fields are empty.

---

# 🧪 Hands-on Practice

### Practice 1

Build a Login Form.

---

### Practice 2

Add Email and Password validation.

---

### Practice 3

Display an error if any field is empty.

---

### Practice 4

Clear the form after successful submission.

---

### Practice 5

Disable the Login button until both fields are filled.

---

# 🎯 Interview Questions

1. How are forms handled in React?

2. Why are Controlled Components preferred for forms?

3. What is `onSubmit`?

4. Why do we use `preventDefault()`?

5. How do we validate user input?

6. How do we reset a form?

7. Difference between HTML forms and React forms?

---

# 📝 Notebook Summary

- React forms use Controlled Components.
- Form data is stored in React State.
- `onSubmit` handles form submission.
- `preventDefault()` stops page refresh.
- Validate input before processing.
- Reset the form after successful submission if needed.

---

# 📚 Key Terms

| Term | Meaning |
|------|---------|
| Form | Collection of input fields |
| onSubmit | Handles form submission |
| preventDefault() | Prevents default browser action |
| Validation | Checking user input |
| Controlled Component | Input managed by React State |

---

# 🔗 Related Topics

**Previous:** Controlled Components

**Next:** useEffect Hook