# 🧩 Components

> **Difficulty:** ⭐ Beginner  
> **Prerequisites:** React Introduction, JSX  
> **Estimated Reading Time:** 12–15 minutes

---

# 📚 Learning Objectives

After completing this topic, we will be able to:

- Understand what a React Component is.
- Explain why Components are used.
- Create and render Components.
- Understand Component Composition.
- Understand the Component Tree.
- Explain the advantages of Components.
- Answer common interview questions.

---

# 📖 What is a Component?

A **Component** is a reusable and independent piece of User Interface (UI).

Each component contains its own structure, logic, and styling, allowing us to build applications by combining small reusable pieces.

> **Interview Definition:**  
> A Component is a reusable, independent building block of a React application that returns JSX.

---

# 🤔 Why Do We Need Components?

Imagine building an E-commerce website.

Without Components:

- Navbar code is written on every page.
- Footer code is repeated.
- Product Card is copied multiple times.
- Any small change requires updating every page.

This leads to:

- Code duplication
- Difficult maintenance
- More bugs

React solves this using Components.

Create once → Reuse everywhere.

---

# 🌍 Real World Example

A website like Amazon can be divided into many Components.

```text
Amazon Website

│
├── Navbar
├── Search Bar
├── Categories
├── Product List
│      ├── Product Card
│      ├── Product Card
│      ├── Product Card
│      └── Product Card
│
├── Cart
└── Footer
```

Each part is an independent Component.

---

# 🏗️ Component-Based Architecture

React follows a **Component-Based Architecture**.

Instead of building one large page, we divide it into many small Components.

```text
App

│
├── Navbar
├── Hero
├── ProductList
│      ├── ProductCard
│      ├── ProductCard
│      └── ProductCard
├── Footer
```

This makes applications:

- Modular
- Reusable
- Easy to maintain

---

# ⭐ Characteristics of Components

A good Component should be:

- Reusable
- Independent
- Easy to Maintain
- Easy to Test
- Small and Focused
- Self-contained

---

# 📌 Types of Components

React supports two types of Components.

## 1. Functional Component

A JavaScript function that returns JSX.

Example:

```jsx
function Welcome() {
    return <h1>Hello React</h1>;
}
```

Modern React applications use Functional Components.

---

## 2. Class Component

A JavaScript class that extends `React.Component`.

Example:

```jsx
class Welcome extends React.Component {
    render() {
        return <h1>Hello React</h1>;
    }
}
```

Class Components are considered the older approach.

> We will study both in detail in the next topic.

---

# 📌 Component Naming Rules

React Components should:

✅ Start with a Capital Letter.

Correct

```jsx
function Navbar() {}
```

Correct

```jsx
function ProductCard() {}
```

Wrong

```jsx
function navbar() {}
```

React treats lowercase names as HTML elements.

---

# 📌 Creating a Component

A simple Functional Component.

```jsx
function Welcome() {
    return <h1>Welcome to React</h1>;
}

export default Welcome;
```

---

# 📌 Rendering a Component

Components are rendered like HTML tags.

```jsx
function App() {
    return (
        <>
            <Welcome />
        </>
    );
}
```

Output

```text
Welcome to React
```

---

# 📌 Component Composition

Large Components are built using smaller Components.

Example

```text
App

│
├── Navbar
├── Hero
├── ProductList
│      ├── ProductCard
│      ├── ProductCard
│      └── ProductCard
└── Footer
```

This process is called **Component Composition**.

Instead of writing one huge component, we combine multiple smaller Components.

---

# 📌 Component Tree

When Components are connected together, they form a **Component Tree**.

Example

```text
App

│
├── Navbar
├── Home
│      ├── ProductList
│      │      ├── ProductCard
│      │      ├── ProductCard
│      │      └── ProductCard
│      │
│      └── Sidebar
│
└── Footer
```

Every React application internally forms a Component Tree.

---

# ⚙️ Internal Working

When React renders an application:

```text
App Component

↓

Returns JSX

↓

React creates Child Components

↓

Each Child returns its own JSX

↓

React combines all JSX

↓

Virtual DOM is created

↓

Browser displays the UI
```

Each Component is rendered independently.

---

# 🔄 Execution Flow

```text
Application Starts

↓

App Component Executes

↓

Child Components Execute

↓

Each Component Returns JSX

↓

React Combines All Components

↓

Virtual DOM Created

↓

Browser UI Updated
```

---

# 🌍 Real World Analogy

Imagine building a house.

Instead of building everything together,

different workers build:

- Doors
- Windows
- Roof
- Kitchen
- Bedroom

Finally, everything is assembled to create the complete house.

React Components work in the same way.

Small Components combine to build one complete application.

---

# ✅ Advantages of Components

- Code Reusability
- Easy Maintenance
- Better Readability
- Easier Testing
- Faster Development
- Modular Architecture
- Better Team Collaboration

---

# ⚠️ Common Mistakes

### ❌ Using lowercase Component names

```jsx
function navbar() {}
```

---

### ✅ Correct

```jsx
function Navbar() {}
```

---

### ❌ Creating one huge Component

```text
App

↓

2000 lines of code
```

---

### ✅ Correct

Break it into:

- Navbar
- Sidebar
- Footer
- Product Card
- Login Form

---

### ❌ Repeating the same JSX

Instead,

Create one Component and reuse it.

---

# ✅ Best Practices

- Keep Components small.
- One Component should have one responsibility.
- Use meaningful names.
- Reuse Components whenever possible.
- Avoid duplicate UI code.

---

# 🎯 Interview Questions

### 1. What is a Component?

### 2. Why do we use Components?

### 3. What is Component-Based Architecture?

### 4. What is Component Composition?

### 5. What is a Component Tree?

### 6. Why should Component names start with a capital letter?

### 7. What are the types of Components?

### 8. Can one Component use another Component?

---

# 📝 Notebook Summary

- Component = Reusable UI Block.
- React follows Component-Based Architecture.
- Components make applications modular.
- Components can be Functional or Class based.
- Components should start with a Capital Letter.
- Components can contain other Components.
- Connected Components form a Component Tree.
- Components improve code reusability and maintenance.

---

# 📚 Key Terms

| Term | Meaning |
|------|---------|
| Component | Reusable UI Block |
| JSX | UI returned by a Component |
| Component Tree | Hierarchical structure of Components |
| Component Composition | Combining smaller Components to build larger ones |
| Reusability | Write once, use multiple times |
| Component-Based Architecture | Building applications using independent Components |

---

# 🚀 What's Next?

➡ **04 - Functional vs Class Components**