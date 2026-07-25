# 📘 React Module 2 - Components, Props & Conditional Rendering

> Topics Covered
>
> - Components
> - Functional vs Class Components
> - Props
> - Conditional Rendering

---

# 🧩 Components

## Definition

A Component is an independent and reusable piece of UI.

Everything in React is built using components.

---

## Why Components?

- Reusable
- Easy to maintain
- Better code organization
- Independent UI blocks

---

## Types

### Functional Component ✅ (Recommended)

```jsx
function Welcome() {
    return <h1>Hello</h1>;
}
```

Uses Hooks.

---

### Class Component

```jsx
class Welcome extends React.Component {

    render() {
        return <h1>Hello</h1>;
    }

}
```

Uses lifecycle methods.

Older approach.

---

# Functional vs Class

| Functional | Class |
|------------|-------|
| Function | ES6 Class |
| Uses Hooks | Uses Lifecycle Methods |
| Less Code | More Boilerplate |
| Recommended | Legacy |

---

# 🎁 Props

## Definition

Props (Properties) are used to pass data from a Parent Component to a Child Component.

Props are **Read-Only**.

---

## Parent

```jsx
<User
    name="Rahul"
    age={22}
/>
```

---

## Child

```jsx
function User(props) {

    return (

        <h2>{props.name}</h2>

    );

}
```

---

## Destructuring Props

```jsx
function User({ name, age }) {

    return <h2>{name}</h2>;

}
```

Preferred approach.

---

## Props Flow

```text
Parent

↓

Props

↓

Child
```

One-way data flow.

---

# 🎭 Conditional Rendering

Used to display different UI based on a condition.

---

## if...else

```jsx
if(isLoggedIn){

    return <Home/>

}

return <Login/>
```

---

## Ternary Operator

```jsx
{
    isLoggedIn

    ? <Home/>

    : <Login/>
}
```

---

## Logical AND

```jsx
{
    isLoggedIn && <Profile/>
}
```

---

## Store JSX in Variable

```jsx
let content;

if(isLoggedIn){

    content = <Home/>;

}else{

    content = <Login/>;

}

return content;
```

---

# 🧠 Component Flow

```text
App

↓

Parent Component

↓

Pass Props

↓

Child Component

↓

Render JSX
```

---

# ⭐ Best Practices

- Keep components small.
- One responsibility per component.
- Use Functional Components.
- Destructure props.
- Use meaningful names.
- Keep JSX readable.

---

# ❌ Common Mistakes

### Updating Props

```jsx
props.name = "ABC";
```

❌ Wrong

Props are immutable.

---

### Using Class Components for New Projects

Prefer Functional Components with Hooks.

---

### Returning Multiple Elements

```jsx
<h1>Hello</h1>
<p>React</p>
```

Wrap them using:

```jsx
<>
    ...
</>
```

---

# 🚀 One-Minute Revision

✅ Components are reusable UI blocks.

✅ Functional Components are preferred.

✅ Props pass data Parent → Child.

✅ Props are Read-Only.

✅ React follows One-Way Data Flow.

✅ Conditional Rendering changes UI based on conditions.

---

# 🎯 Interview Questions

### What is a Component?

Reusable UI building block.

---

### Types of Components?

- Functional
- Class

---

### Which is preferred?

Functional Components.

---

### What are Props?

Read-only data passed from Parent to Child.

---

### Can Child modify Props?

No.

---

### What is One-Way Data Flow?

Data always flows from Parent to Child.

---

### Methods of Conditional Rendering?

- if...else
- Ternary
- &&
- Variables

---

# 📌 Related Topics

➡ useState
➡ Event Handling