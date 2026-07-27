# 📘 Module 5 - Props Drilling & React Context (Revision Cheat Sheet)

> **React Core | State Management**

---

# 🔴 Props Drilling

## Definition

Props Drilling is the process of passing data from a parent component to a deeply nested child component through multiple intermediate components using props, even when those components don't need the data.

### Flow

```text
App
 │
 ▼
Navbar
 │
 ▼
Profile
 │
 ▼
UserDetails ✅ (Needs Data)
```

Only **UserDetails** needs the data, but every component receives it.

---

## Problems

- ❌ Too many props
- ❌ Difficult to maintain
- ❌ Hard to understand data flow
- ❌ Less reusable components
- ❌ Increases code complexity

---

# 🟢 React Context

## Definition

React Context is a built-in feature that allows us to share data globally without passing props manually through every component.

### Purpose

✅ Solves Props Drilling.

---

# 🌍 Global Data

Global Data is data required by multiple components throughout the application.

### Examples

- 👤 Logged-in User
- 🎨 Theme (Dark/Light)
- 🌐 Language
- 🔐 Authentication Status
- 🛒 Shopping Cart
- 🔔 Notifications
- ⚙️ User Preferences

---

# ⚙️ Context API - 3 Steps

```text
Create Context
      ↓
Provide Data
      ↓
Consume Data
```

---

# 1️⃣ Create Context

```jsx
import { createContext } from "react";

const UserContext = createContext();
```

Creates an empty Context object.

---

# 2️⃣ Context Provider

Provides the shared data.

```jsx
<UserContext.Provider value={user}>
    <App />
</UserContext.Provider>
```

### Responsibilities

- Stores shared data.
- Makes data available to child components.

---

# 3️⃣ Context Consumer

## Method 1 (Recommended)

### useContext()

```jsx
const user = useContext(UserContext);
```

✔ Functional Components

✔ Modern React

✔ Simple

---

## Method 2

### Context.Consumer

```jsx
<UserContext.Consumer>
{
(user) => <h1>{user.name}</h1>
}
</UserContext.Consumer>
```

✔ Older Approach

✔ Mostly used in Class Components

---

# ⚙️ Internal Working

```text
createContext()

        ↓

Provider stores value

        ↓

Child calls useContext()

        ↓

React finds nearest Provider

        ↓

Returns shared value

        ↓

Component Re-renders
```

---

# 🔄 Execution Flow

```text
App

↓

Provider

↓

Shared Data Stored

↓

Child Component

↓

useContext()

↓

Data Received

↓

Render UI
```

---

# 📊 Provider vs Consumer

| Provider | Consumer |
|-----------|----------|
| Provides data | Reads data |
| Uses value prop | Uses useContext() |
| Wraps child components | Accesses shared data |
| One Provider | Many Consumers |

---

# 📊 Props Drilling vs React Context

| Props Drilling | React Context |
|---------------|---------------|
| Pass props through every level | Share data globally |
| Difficult to maintain | Easy to maintain |
| More props | Fewer props |
| Less reusable | More reusable |
| Parent → Child only | Any child inside Provider |

---

# ❌ Common Mistakes

- Using Context for every state.
- Forgetting Provider.
- Using useContext() outside Provider.
- Putting too much data into one Context.
- Wrapping the wrong components.

---

# ✅ Best Practices

- Use Context only for global data.
- Prefer useContext() over Context.Consumer.
- Keep Context small and focused.
- Create separate Contexts for different features.
- Keep Provider close to where data is needed.

---

# 🎯 Interview Questions

1. What is Props Drilling?
2. Why is Props Drilling a problem?
3. What is React Context?
4. Why do we use Context API?
5. What is Global Data?
6. What is Context Provider?
7. What is Context Consumer?
8. Difference between useContext() and Context.Consumer?
9. Can we use Context without Provider?
10. When should we use Context?

---

# 🧠 Memory Trick

```text
Create
   ↓
Provide
   ↓
Consume
```

OR

```text
createContext()

↓

<Context.Provider value={data}>

↓

useContext(Context)
```

Remember:

> **Create ➜ Provide ➜ Consume**

---

# 📝 One-Minute Revision

✅ Props Drilling → Passing props through multiple components.

✅ React Context → Shares global data without Props Drilling.

✅ Global Data → User, Theme, Auth, Language, Cart, etc.

✅ Provider → Supplies data using `value`.

```jsx
<Context.Provider value={data}>
```

✅ Consumer (Modern)

```jsx
const data = useContext(Context);
```

✅ Consumer (Old)

```jsx
<Context.Consumer>
```

---

# ⭐ Interview Tip

Use **Context API** only when the same data is needed by multiple components.

Examples:

- Logged-in User
- Theme
- Language
- Authentication
- Shopping Cart

❌ Do NOT use Context for every local state. Use `useState()` for component-specific state.