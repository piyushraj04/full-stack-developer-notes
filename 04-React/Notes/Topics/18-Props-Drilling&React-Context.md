📘 Topic: Props Drilling & React Context
📚 Learning Objectives

After completing this topic, we will be able to:

Understand Props Drilling.
Know why Props Drilling is a problem.
Understand React Context.
Learn Global Data.
Learn Context Provider.
Learn Context Consumer (useContext & Context.Consumer).
Understand the complete execution flow.
Part 1: Props Drilling
📖 Definition

Props Drilling is the process of passing data from a parent component to a deeply nested child component through intermediate components using props, even though those intermediate components do not use the data.

Interview Definition

Props Drilling is the unnecessary passing of props through multiple levels of components to reach a deeply nested component.

🤔 Why is Props Drilling a Problem?

Suppose we have the following component tree:

App
 │
 ▼
Navbar
 │
 ▼
Profile
 │
 ▼
UserDetails

Only UserDetails needs the user data.

But because React allows data to flow only from Parent → Child, we must pass the data through every intermediate component.

<App user={user}>

↓

<Navbar user={user}>

↓

<Profile user={user}>

↓

<UserDetails user={user}/>

Notice:

Navbar doesn't need user.
Profile doesn't need user.

Yet both receive it just to pass it further.

This unnecessary passing is called Props Drilling.

🚨 Problems with Props Drilling
Difficult to maintain.
Too many props.
Components become cluttered.
Hard to understand data flow.
Code becomes less reusable.
Part 2: Why React Context?
Imagine This Situation

Suppose every page of our application needs:

Logged-in User
Theme
Language
Authentication Status

Without Context:

App
 │
 ▼
Navbar
 │
 ▼
Sidebar
 │
 ▼
Dashboard
 │
 ▼
Profile

We pass the same data again and again.

This creates Props Drilling.

React introduced Context API to solve this problem.

Part 3: What is React Context?
📖 Definition

React Context is a built-in feature that allows us to share data with multiple components without passing props manually at every level.

Interview Definition

React Context is a mechanism for sharing global data between components without props drilling.

Why is it called "Context"?

Think of Context as a shared storage box.

Instead of every parent carrying the data to its children, we keep the data in one shared place.

Any component can access it whenever needed.

Part 4: What is Global Data?
Definition

Global Data is data that is required by multiple components throughout the application.

Examples:

Logged-in User
Theme (Dark/Light)
Language
Authentication Status
Shopping Cart
Currency
Notifications

These values are needed almost everywhere.

Part 5: How Context Works Internally

React Context has three main steps.

Create Context

↓

Provide Data

↓

Consume Data

Let's understand each one.

Step 1: Create Context
const UserContext = createContext();
Why?

We create a Context object that will hold shared data.

Think of it as creating an empty container.

Step 2: Context Provider
What is Provider?

The Provider stores the data and makes it available to all child components.

Syntax
<UserContext.Provider value={user}>
    <App />
</UserContext.Provider>
Explanation
value={user}

This is the data being shared.

Every component inside <Provider> can access this value.

Why Provider?

Without Provider:

Context has no data.

Provider fills the Context with data.

Think of it like:

Empty Water Tank

↓

Fill Water

↓

Everyone can use it
Step 3: Context Consumer

Now child components need the data.

There are two methods.

Method 1: useContext() ⭐ (Recommended)
const user = useContext(UserContext);
Why?
Simple
Clean
Used in Functional Components
Most common in modern React
Method 2: Context.Consumer
<UserContext.Consumer>
{
(user) => (
<h1>{user}</h1>
)
}
</UserContext.Consumer>
Why?

Before Hooks existed, Functional Components couldn't directly access Context.

So React provided Context.Consumer.

Today it is mostly seen in older codebases or Class Components.

Complete Execution Flow
createContext()

↓

Provider stores data

↓

Child Component calls useContext()

↓

React finds nearest Provider

↓

Returns value

↓

Component re-renders with data
Real-World Analogy

Imagine a college library.

Without Context:

Student

↓

Teacher

↓

HOD

↓

Librarian

↓

Book

Everyone keeps forwarding the request.

This is Props Drilling.

With Context:

Library

↓

Student directly gets Book

The student doesn't need to go through every person.

That's exactly how Context works.

Props Drilling vs Context
Props Drilling	React Context
Pass data through multiple components	Share data globally
Difficult to maintain	Easy to maintain
Lots of unnecessary props	No unnecessary props
Parent → Child only	Any child inside Provider can access data
Common Mistakes
❌ Using Context for every state

Context is not a replacement for useState.

Use Context only for shared/global data.

❌ Forgetting Provider
const user = useContext(UserContext);

Without Provider, the value will be the default value (or undefined if none is provided).

❌ Wrapping the wrong components

Only components inside the Provider can access the Context.

Best Practices
Use Context for global data only.
Prefer useContext() over Context.Consumer.
Keep Context small and focused.
Don't put every piece of state into Context.
Interview Questions
1. What is Props Drilling?
2. Why is Props Drilling a problem?
3. What is React Context?
4. What problem does Context solve?
5. What is Global Data?
6. What is Context Provider?
7. What is Context Consumer?
8. Difference between useContext() and Context.Consumer?
9. Can we use Context without Provider?
10. When should we use Context?
Notebook Summary

✅ Props Drilling → Passing props through multiple components unnecessarily.

✅ React Context → Shares data globally without props drilling.

✅ Global Data → Data used by many components (user, theme, language, cart, auth).

✅ Provider → Supplies the shared data using the value prop.

<UserContext.Provider value={data}>

✅ Consumer → Reads the shared data.

Modern way:

const data = useContext(UserContext);

Older way:

<Context.Consumer>
🧠 Memory Trick

Remember the Context API in 3 simple steps:

1️⃣ Create  → createContext()

        ↓

2️⃣ Provide → <Context.Provider value={...}>

        ↓

3️⃣ Consume → useContext(Context)

Create → Provide → Consume