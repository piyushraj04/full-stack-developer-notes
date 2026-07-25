# 🎣 useContext Hook

> **Difficulty:** ⭐⭐⭐ Intermediate
> **Prerequisites:** React Context API, createContext(), Props
> **Estimated Reading Time:** 20–25 minutes

---

# 📚 Learning Objectives

After completing this topic, we will be able to:

- Understand what `useContext` is.
- Learn why `useContext` is used.
- Read data from Context.
- Understand how React finds the nearest Provider.
- Compare `Consumer` and `useContext`.
- Answer common interview questions.

---

# 📖 What is useContext?

`useContext` is a built-in React Hook that allows a component to read data from a Context.

Instead of using `<Context.Consumer>`, we can use `useContext()` to access Context values in a simpler way.

> **Interview Definition:**  
> `useContext` is a React Hook used to read values from a Context created using `createContext()`.

---

# 🤔 Why Do We Need useContext?

Suppose a Theme is shared using Context.

```text
App

↓

ThemeProvider

↓

Navbar

↓

Home

↓

Product

↓

ProductCard
```

Every component inside the Provider can access the Theme.

Without `useContext`, we use `Consumer`.

With `useContext`, reading Context becomes much simpler.

---

# 🧠 JavaScript Behind It

In JavaScript, we normally access data from variables.

```javascript
const name = "Rahul";

console.log(name);
```

React Context stores shared values.

`useContext()` retrieves that shared value.

---

# 📌 Step 1 : Create Context

```jsx
import { createContext } from "react";

export const ThemeContext = createContext();
```

---

# 📌 Step 2 : Provide Context

```jsx
<ThemeContext.Provider value="Dark">

    <Home />

</ThemeContext.Provider>
```

---

# 📌 Step 3 : Read Context

```jsx
import { useContext } from "react";

const theme = useContext(ThemeContext);
```

Now,

```javascript
theme
```

contains

```text
Dark
```

---

# 📌 Complete Example

```jsx
import { createContext, useContext } from "react";

const ThemeContext = createContext();

function App() {

    return (

        <ThemeContext.Provider value="Dark">

            <Home />

        </ThemeContext.Provider>

    );
}

function Home() {

    const theme = useContext(ThemeContext);

    return <h2>{theme}</h2>;
}
```

Output

```text
Dark
```

---

# 📌 Consumer vs useContext

Older React

```jsx
<ThemeContext.Consumer>

    {(theme) => <h2>{theme}</h2>}

</ThemeContext.Consumer>
```

Modern React

```jsx
const theme = useContext(ThemeContext);
```

`useContext` is shorter, cleaner, and easier to read.

---

# ⚙️ Internal Working

```text
createContext()

↓

Context Object Created

↓

Provider Stores Value

↓

Child Calls useContext()

↓

React Searches Upward

↓

Nearest Provider Found

↓

Value Returned

↓

Component Renders
```

---

# 🔄 How React Finds Context

Suppose we have this tree.

```text
ThemeProvider

│

├── Navbar

│

├── Home

│      └── Product

│              └── ProductCard
```

`ProductCard` executes

```jsx
useContext(ThemeContext)
```

React starts searching **upwards**.

```text
ProductCard

↑

Product

↑

Home

↑

ThemeProvider ✅
```

The nearest matching Provider is found.

The value is returned.

---

# 🌍 Real-World Analogy

Imagine a library.

You need a book.

Instead of asking every person,

you walk to the nearest bookshelf that contains the book.

Similarly,

`useContext()` searches upward until it finds the nearest matching Provider.

---

# 📊 Consumer vs useContext

| Consumer | useContext |
|----------|------------|
| Older approach | Modern approach |
| More code | Less code |
| Uses render function | Uses Hook |
| Less readable | Cleaner and simpler |
| Rarely used today | Recommended |

---

# 📌 Rules of useContext

- Use only inside Functional Components.
- The component must be inside the matching Provider.
- Import the correct Context object.
- Call Hooks only at the top level of the component.

---

# 📌 Real Project Examples

`useContext` is commonly used for:

- 🌙 Theme Switching
- 👤 Logged-in User
- 🌍 Language
- 🛒 Shopping Cart
- 🔐 Authentication
- ⚙️ App Settings

---

# ⚠️ Common Mistakes

### ❌ Using useContext Outside Provider

```jsx
const theme = useContext(ThemeContext);
```

Without a Provider, the component receives the Context's default value (or `undefined` if no default was provided).

---

### ❌ Importing the Wrong Context

```jsx
useContext(UserContext)
```

Instead of

```jsx
useContext(ThemeContext)
```

---

### ❌ Calling Hooks Inside if

```jsx
if (true) {

    useContext(ThemeContext);

}
```

Hooks must always be called at the top level.

---

# ✅ Best Practices

- Use `useContext` instead of `Consumer`.
- Keep Context focused on one responsibility.
- Wrap only required components with the Provider.
- Use meaningful Context names.
- Use multiple Contexts instead of one huge Context when appropriate.

---

# 🧪 Hands-on Practice

### Practice 1

Create a `ThemeContext`.

---

### Practice 2

Display `"Dark"` using `useContext`.

---

### Practice 3

Create a `UserContext`.

---

### Practice 4

Display the logged-in user's name.

---

# 🎯 Interview Questions

1. What is `useContext`?

2. Why do we use `useContext`?

3. Difference between `Consumer` and `useContext`?

4. Can `useContext` be used without a Provider?

5. How does React find the Provider?

6. Why is `useContext` preferred over `Consumer`?

7. Can we use multiple Contexts in one application?

---

# 📝 Notebook Summary

- `useContext` reads data from a Context.
- It is the modern alternative to `Consumer`.
- React searches upward to find the nearest matching Provider.
- `useContext` can only be used inside Functional Components.
- The component should be wrapped inside the appropriate Provider.

---

# 📚 Key Terms

| Term | Meaning |
|------|---------|
| useContext | Hook to read Context values |
| Context | Shared data container |
| Provider | Supplies Context values |
| Consumer | Older way to read Context |
| Hook | Special React function |

---

# 🔗 Related Topics

**Previous:** React Context API

**Next:** Controlled Components