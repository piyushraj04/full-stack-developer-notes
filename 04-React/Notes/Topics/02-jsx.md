# 🧩 JSX (JavaScript XML)

> JSX is a syntax extension for JavaScript that allows us to write HTML-like code inside JavaScript.

---

# 📖 What is JSX?

**JSX (JavaScript XML)** is a syntax extension that allows us to write HTML-like code inside JavaScript.

React uses JSX to describe what the User Interface (UI) should look like.

> **Interview Point:** JSX is **not HTML**. It is JavaScript syntax that looks similar to HTML.

---

# 🤔 Why Do We Need JSX?

Without JSX, creating UI in React becomes difficult because we need to use JavaScript functions like `React.createElement()`.

### Without JSX

```javascript
const element = React.createElement(
    "h1",
    null,
    "Hello React"
);
```

### With JSX

```jsx
const element = <h1>Hello React</h1>;
```

JSX makes code:

- Easier to read
- Easier to write
- Easier to maintain

---

# ⚙️ How JSX Works Internally

JSX is **not understood directly by browsers**.

When the application runs:

```text
JSX
   │
   ▼
Babel Compiler
   │
   ▼
React.createElement()
   │
   ▼
JavaScript Object
   │
   ▼
Browser UI
```

Example:

### We Write

```jsx
const element = <h1>Hello React</h1>;
```

### Babel Converts It To

```javascript
const element = React.createElement(
    "h1",
    null,
    "Hello React"
);
```

---

# 🏗️ JSX Syntax

```jsx
const heading = <h1>Welcome</h1>;
```

JSX expressions are usually stored in variables or returned from components.

---

# 📌 Embedding JavaScript Inside JSX

Use **curly braces `{}`** to write JavaScript expressions.

```jsx
const name = "Rahul";

<h1>Hello, {name}</h1>;
```

Output

```text
Hello, Rahul
```

---

## Another Example

```jsx
const a = 10;
const b = 20;

<p>{a + b}</p>
```

Output

```text
30
```

---

# 📌 What Can We Write Inside `{}`?

✅ Variables

```jsx
{name}
```

---

✅ Expressions

```jsx
{10 + 20}
```

---

✅ Function Calls

```jsx
{getName()}
```

---

✅ Ternary Operator

```jsx
{age >= 18 ? "Adult" : "Minor"}
```

---

❌ We Cannot Write

```jsx
if(age > 18)
```

because `if` is a statement, not an expression.

---

# 📌 JSX Rules

## 1. Return Only One Parent Element

✅ Correct

```jsx
return (
    <div>
        <h1>Hello</h1>
        <p>Welcome</p>
    </div>
);
```

---

❌ Wrong

```jsx
return (
    <h1>Hello</h1>
    <p>Welcome</p>
);
```

---

## 2. Every Tag Must Be Closed

✅

```jsx
<img src="logo.png" />
```

```jsx
<input />
```

```jsx
<br />
```

---

❌

```jsx
<img>
```

---

## 3. Use `className` Instead of `class`

HTML

```html
<div class="box"></div>
```

JSX

```jsx
<div className="box"></div>
```

---

## 4. Use `htmlFor` Instead of `for`

HTML

```html
<label for="email">
```

JSX

```jsx
<label htmlFor="email">
```

---

# 📌 JSX Comments

```jsx
{
    /* This is a JSX comment */
}
```

---

# 📌 React Fragment

Sometimes we don't want an extra `<div>`.

We can use a Fragment.

```jsx
<>
    <h1>Hello</h1>
    <p>Welcome</p>
</>
```

or

```jsx
<React.Fragment>
    ...
</React.Fragment>
```

Fragments group multiple elements without adding an extra HTML element to the DOM.

---

# 🌍 Real-World Analogy

Imagine designing a room.

Instead of writing detailed construction instructions, you draw a blueprint.

JSX is like that blueprint.

It describes **what the UI should look like**, while React handles building it.

---

# ⚙️ Execution Flow

```text
Write JSX
      │
      ▼
Babel Compiles JSX
      │
      ▼
React.createElement()
      │
      ▼
Virtual DOM Object
      │
      ▼
Browser Displays UI
```

---

# 🎯 Interview Questions

### 1. What is JSX?

JSX is a syntax extension for JavaScript that allows us to write HTML-like code inside JavaScript.

---

### 2. Is JSX HTML?

No.

JSX only looks like HTML. It is converted into JavaScript by Babel.

---

### 3. Can browsers understand JSX?

No.

Browsers understand JavaScript, not JSX.

---

### 4. Which tool converts JSX into JavaScript?

**Babel**

---

### 5. Why do we use JSX?

- Better readability
- Easier development
- Cleaner code
- Better developer experience

---

# ⚠️ Common Mistakes

### ❌ Using `class`

```jsx
<div class="box"></div>
```

### ✅ Correct

```jsx
<div className="box"></div>
```

---

### ❌ Multiple Parent Elements

```jsx
return (
    <h1>Hello</h1>
    <p>React</p>
);
```

### ✅ Correct

```jsx
return (
    <>
        <h1>Hello</h1>
        <p>React</p>
    </>
);
```

---

### ❌ Forgetting to Close Tags

```jsx
<img src="logo.png">
```

### ✅ Correct

```jsx
<img src="logo.png" />
```

---

# ✅ Best Practices

- Keep JSX simple and readable.
- Use meaningful variable names.
- Avoid writing complex logic directly inside JSX.
- Use Fragments instead of unnecessary `<div>` elements.
- Keep JavaScript logic outside JSX whenever possible.

---

# 📝 Notebook Summary

- JSX stands for JavaScript XML.
- JSX allows us to write HTML-like syntax inside JavaScript.
- Browsers do not understand JSX directly.
- Babel converts JSX into `React.createElement()`.
- Use `{}` to write JavaScript expressions inside JSX.
- JSX must return one parent element.
- Use `className` instead of `class`.
- Use `htmlFor` instead of `for`.
- Close all tags.
- Use Fragments when no extra wrapper element is needed.

---

# 📚 Key Terms

| Term | Meaning |
|------|---------|
| JSX | JavaScript XML |
| Babel | Converts JSX into JavaScript |
| Expression | JavaScript code that returns a value |
| Fragment | Groups elements without creating an extra DOM node |
| className | JSX attribute for CSS classes |
| htmlFor | JSX attribute for label elements |

---

# 🚀 What's Next?

➡ **03 - Components**