# 🌐 React Context API

> **Difficulty:** ⭐⭐⭐ Intermediate
> **Prerequisites:** Components, Props, useState
> **Estimated Reading Time:** 25–30 minutes

---

# 📚 Learning Objectives

After completing this topic, we will be able to:

- Understand what Context API is.
- Learn why Context API is needed.
- Understand the problem of Prop Drilling.
- Create a Context.
- Use a Provider.
- Understand how Context works internally.
- Answer common interview questions.

---

# 📖 What is Context API?

**Context API** is a built-in React feature used to share data between multiple components without passing props manually through every intermediate component.

It provides a central place to store data that can be accessed by any component inside the Provider.

> **Interview Definition:**  
> Context API is a React feature that allows components to share data globally without passing props through every intermediate component.

---

# 🤔 Why Do We Need Context API?

Imagine this Component Tree.

```text
App

│

├── Navbar

├── Home

│     └── Product

│            └── ProductDetails

│                    └── BuyButton
```

Suppose `App` has user information.

```javascript
const user = "Rahul";
```

We need this user inside `BuyButton`.

Without Context API, we pass props through every component.

```text
App

↓

Navbar

↓

Home

↓

Product

↓

ProductDetails

↓

BuyButton
```

Even though only **BuyButton** needs the data.

This unnecessary passing of props is called **Prop Drilling**.

---

# 📖 What is Prop Drilling?

**Prop Drilling** is the process of passing props through multiple intermediate components just to reach a deeply nested component.

Example

```text
App

↓

Home

↓

Products

↓

ProductCard

↓

ProductDetails

↓

ReviewSection
```

If only **ReviewSection** needs the data,

all intermediate components must still receive and forward the props.

This makes the code harder to maintain.

---

# 🚨 Problems with Prop Drilling

- Repeated props
- Difficult maintenance
- Less readable code
- Tight coupling between components
- Unnecessary code

---

# 🧠 JavaScript Behind It

Normally, JavaScript variables belong to a function.

```javascript
function demo() {

    let name = "Rahul";
}
```

Another function cannot access this variable directly.

React Context creates a **shared data container** that multiple components can access.

---

# 📌 Creating Context

```jsx
import { createContext } from "react";

const UserContext = createContext();
```

`createContext()` creates a Context object.

---

# 📌 Providing Context

```jsx
<UserContext.Provider value={user}>

    <Home />

</UserContext.Provider>
```

The `Provider` shares the value with all child components.

---

# 📌 Component Tree

```text
UserContext.Provider

│

├── Home

│

├── Products

│

├── ProductCard

│

└── ProductDetails
```

Every child component can access the provided value.

---

# ⚙️ Internal Working

```text
createContext()

↓

Context Object Created

↓

Provider Receives Value

↓

Value Stored in Context

↓

Child Component Requests Value

↓

React Finds Nearest Provider

↓

Returns Value
```

React searches **upwards** in the component tree for the nearest matching Provider.

---

# 🔄 Execution Flow

```text
App Starts

↓

createContext()

↓

Provider Stores Value

↓

Child Requests Context

↓

React Finds Provider

↓

Value Returned

↓

Component Renders
```

---

# 🌍 Real-World Analogy

Imagine a school notice board.

The principal posts an announcement.

```text
Principal

↓

Notice Board

↓

Teachers

↓

Students
```

Students don't ask every teacher individually.

Everyone reads the same notice board.

Context API works similarly.

- Provider → Notice Board
- Value → Announcement
- Components → Students

---

# 📊 Props vs Context API

| Props | Context API |
|--------|-------------|
| Parent to Child | Global sharing |
| Manual passing | Automatic access |
| Can cause Prop Drilling | Eliminates Prop Drilling |
| Good for small data flow | Good for shared data |

---

# 📌 Common Use Cases

Context API is commonly used for:

- 🌙 Dark / Light Theme
- 👤 Logged-in User
- 🌍 Language Selection
- 🛒 Shopping Cart
- 🔐 Authentication
- ⚙️ Application Settings

---

# ⚠️ Common Mistakes

### ❌ Using Context for every piece of data

Context should store **shared** data only.

---

### ❌ Forgetting Provider

```jsx
<User />
```

Without a Provider, components won't receive the intended context value.

---

### ❌ Creating Multiple Unnecessary Contexts

Create Context only when data needs to be shared across multiple components.

---

# ✅ Best Practices

- Use Context for global/shared data.
- Keep Context focused on one responsibility.
- Don't replace Props with Context everywhere.
- Wrap only the required components with the Provider.
- Use meaningful Context names.

---

# 🧪 Hands-on Practice

### Practice 1

Create a `ThemeContext`.

---

### Practice 2

Provide `"Dark"` as the theme.

---

### Practice 3

Create a `UserContext`.

---

### Practice 4

Pass the logged-in user through Context.

---

# 🎯 Interview Questions

1. What is Context API?

2. Why do we use Context API?

3. What is Prop Drilling?

4. How does Context API solve Prop Drilling?

5. What does `createContext()` do?

6. What is a Provider?

7. Can Context replace Props completely?

8. Name some real-world use cases of Context API.

---

# 📝 Notebook Summary

- Context API shares data without manual prop passing.
- It solves Prop Drilling.
- `createContext()` creates a Context object.
- `Provider` supplies data to child components.
- React finds the nearest Provider when a component requests Context.
- Use Context for shared/global data only.

---

# 📚 Key Terms

| Term | Meaning |
|------|---------|
| Context API | React feature for sharing data |
| Prop Drilling | Passing props through many components |
| createContext() | Creates a Context object |
| Provider | Supplies Context values |
| Consumer | Reads Context values |

---

# 🔗 Related Topics

**Previous:** JavaScript `filter()` Method

**Next:** useContext Hook