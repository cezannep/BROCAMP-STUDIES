# React Basics

Author: Antas
Date: 2026-06-13

## Overview

React is a JavaScript library developed by Meta for building fast and interactive user interfaces. It follows a component-based architecture, where the UI is divided into reusable components. React uses a Virtual DOM to efficiently update and render changes in the browser.

React allows developers to build Single Page Applications (SPAs) by updating only the necessary parts of the page instead of reloading the entire page.

## Key Concepts

### What is React?

* JavaScript library for building user interfaces.
* Created and maintained by Meta.
* Uses reusable components.
* Uses Virtual DOM for better performance.
* Supports one-way data flow.
* Commonly used for modern web applications.

### Hooks

Hooks are special functions introduced in React that allow functional components to use React features such as state, lifecycle methods, and references.

Benefits of Hooks:

* Simpler code compared to class components.
* Reusable stateful logic.
* Better readability and maintainability.
* No need for lifecycle methods in most cases.

Common Hooks:

* useState
* useEffect
* useRef
* useContext
* useReducer
* useMemo
* useCallback

### useState

`useState` is used to create and manage state inside a functional component.

Features:

* Stores dynamic data.
* Triggers component re-render when state changes.
* Returns current state and a state updater function.

Syntax:

```jsx
const [state, setState] = useState(initialValue);
```

### useEffect

`useEffect` is used to perform side effects in a component.

Examples of side effects:

* API calls
* Timers
* Event listeners
* DOM updates

Syntax:

```jsx
useEffect(() => {
  // side effect code

  return () => {
    // cleanup code
  };
}, []);
```

Dependency Array:

* `[]` → Runs once after initial render.
* `[value]` → Runs when value changes.
* No dependency array → Runs after every render.

### useRef

`useRef` is used to persist values across renders without causing re-renders.

Uses:

* Access DOM elements directly.
* Store mutable values.
* Keep previous values.
* Manage timers and intervals.

Syntax:

```jsx
const inputRef = useRef(null);
```

Important:

* Updating `ref.current` does not trigger a re-render.
* Value persists between renders.

## Examples

### useState Example

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}

export default Counter;
```

### useEffect Example

```jsx
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Component Mounted");

    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  return <h1>Hello React</h1>;
}

export default App;
```

### useRef Example

```jsx
import { useRef } from "react";

function InputFocus() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} />

      <button onClick={focusInput}>
        Focus Input
      </button>
    </>
  );
}

export default InputFocus;
```

## Resources

### Documentation

* React Official Documentation: https://react.dev
* Hooks Documentation: https://react.dev/reference/react

### Articles

* React Learn Section: https://react.dev/learn
* React State Guide: https://react.dev/learn/state-a-components-memory

### Videos

* [React Tutorial Series](https://www.youtube.com/watch?v=jSWwKABiFik&list=PLY-ecO2csVHfgVM9sChmUirqK7BXUBX9P)
* [React Tutorial Series](https://www.youtube.com/watch?v=QFaFIcGhPoM&t=1s)

## Key Takeaways

* React is a component-based JavaScript library for building user interfaces.
* Hooks allow functional components to use state and lifecycle features.
* useState manages component state and triggers re-renders.
* useEffect handles side effects such as API calls, timers, and event listeners.
* useRef stores mutable values and accesses DOM elements without causing re-renders.
* React applications are built by combining reusable components.



