# 📘 React Module 3 - State, Events, Lists & Array Methods

> **Topics Covered**
>
> - useState Hook
> - Event Handling
> - List Rendering
> - JavaScript map()
> - Array of Objects
> - Object Destructuring
> - JavaScript filter()

---

# 🎯 useState Hook

## Purpose

Stores and updates data in Functional Components.

```jsx
const [count, setCount] = useState(0);
```

## Flow

```
User Action
     ↓
setState()
     ↓
State Updated
     ↓
Component Re-renders
```

---

# 🖱 Event Handling

Events are written in **camelCase**.

Common Events

- onClick
- onChange
- onSubmit
- onMouseEnter
- onKeyDown

Example

```jsx
<button onClick={handleClick}>
    Click
</button>
```

---

# 📋 List Rendering

Render lists using `map()`.

```jsx
items.map(item => (
    <li key={item.id}>
        {item.name}
    </li>
))
```

Always use a unique **key**.

---

# 🗺 map()

Creates a **new array** by transforming every element.

```javascript
const doubled =
numbers.map(num => num * 2);
```

✔ Returns new array

✔ Doesn't modify original array

---

# 📦 Array of Objects

```javascript
const users = [

{
    id:1,
    name:"Rahul"
},

{
    id:2,
    name:"Anjali"
}

];
```

Render

```jsx
users.map(user => (

<p key={user.id}>
{user.name}
</p>

))
```

---

# 🎁 Object Destructuring

Instead of

```javascript
user.name
```

Use

```javascript
const { name } = user;
```

Cleaner code.

---

# 🔍 filter()

Returns only matching elements.

```javascript
const available =
products.filter(
product => product.inStock
);
```

✔ Returns new array

✔ Original array unchanged

---

# 🔄 Overall Flow

```
User

↓

Event

↓

State Update

↓

Component Re-render

↓

map()

↓

filter()

↓

Render Updated UI
```

---

# ❌ Common Mistakes

- Forgetting key prop
- Directly modifying state
- Forgetting onChange
- Using index as key unnecessarily
- Mutating arrays

---

# ⭐ Best Practices

- Use meaningful state names.
- Keep state minimal.
- Always use unique keys.
- Destructure objects.
- Combine filter() and map().
- Never mutate state directly.

---

# ⚡ One Minute Revision

✅ useState stores state.

✅ setState triggers re-render.

✅ Events update state.

✅ map() transforms arrays.

✅ filter() selects elements.

✅ Destructuring makes code cleaner.

✅ Lists require unique keys.

---

# 🎯 Interview Questions

1. What is useState?

2. Difference between State and Props?

3. Why is key required?

4. Difference between map() and filter()?

5. Does map() modify the original array?

6. What is Object Destructuring?

7. Why should state never be mutated directly?

---

# 📌 Next Module

➡ Context API
➡ useContext Hook