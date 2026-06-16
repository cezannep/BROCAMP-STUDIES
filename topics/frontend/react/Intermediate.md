# React Intermediate

Author: Antas

Date: 2026-06-16

## Overview

React provides several advanced hooks that help manage global state, complex state logic, performance optimization, and component communication.

In this section, we will learn:

* useContext
* useReducer
* useMemo
* useCallback

These hooks are commonly used in real-world React applications to build scalable and efficient user interfaces.

---

## Key Concepts

### useContext

`useContext` is a React Hook used to access data from a Context without passing props manually through every component.

Benefits:

* Avoids prop drilling.
* Shares data globally.
* Simplifies state management.
* Improves code readability.

Common Use Cases:

* User authentication
* Theme management
* Language settings
* Global application data

Syntax:

```jsx
const value = useContext(MyContext);
```

---

### useReducer

`useReducer` is a Hook used for managing complex state logic.

It works similarly to Redux by using:

* State
* Action
* Reducer Function
* Dispatch Function

Benefits:

* Better for complex state updates.
* Keeps state logic organized.
* Easier to maintain than multiple useState hooks.

Syntax:

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

Reducer Structure:

```jsx
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;

    default:
      return state;
  }
}
```

---

### useMemo

`useMemo` is used to memoize a calculated value and prevent expensive computations from running on every render.

Benefits:

* Improves performance.
* Avoids unnecessary calculations.
* Recomputes only when dependencies change.

Syntax:

```jsx
const memoizedValue = useMemo(() => {
  return expensiveCalculation();
}, [dependencies]);
```

Important:

* Returns a value.
* Used for expensive calculations.
* Executes only when dependencies change.

---

### useCallback

`useCallback` is used to memoize a function and preserve its reference between renders.

Benefits:

* Prevents unnecessary function recreation.
* Improves performance with React.memo.
* Reduces unnecessary child component renders.

Syntax:

```jsx
const memoizedFunction = useCallback(() => {
  // function logic
}, [dependencies]);
```

Important:

* Returns a function.
* Useful when passing functions as props.
* Commonly used with React.memo.

---

## Examples

### useContext Example

```jsx
import { createContext, useContext } from "react";

const UserContext = createContext();

function Child() {
  const user = useContext(UserContext);

  return <h2>Welcome {user}</h2>;
}

function App() {
  return (
    <UserContext.Provider value="Antas">
      <Child />
    </UserContext.Provider>
  );
}

export default App;
```

---

### useReducer Example

```jsx
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    default:
      return state;
  }
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h1>{count}</h1>

      <button
        onClick={() => dispatch({ type: "increment" })}
      >
        Increment
      </button>

      <button
        onClick={() => dispatch({ type: "decrement" })}
      >
        Decrement
      </button>
    </>
  );
}

export default Counter;
```

---

### useMemo Example

```jsx
import { useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const squaredValue = useMemo(() => {
    console.log("Calculating...");
    return count * count;
  }, [count]);

  return (
    <>
      <h2>{squaredValue}</h2>

      <button
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </>
  );
}

export default App;
```

---

### useCallback Example

```jsx
import {
  useState,
  useCallback,
  memo,
} from "react";

const Child = memo(({ handleClick }) => {
  console.log("Child Rendered");

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
});

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button Clicked");
  }, []);

  return (
    <>
      <h1>{count}</h1>

      <button
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>

      <Child handleClick={handleClick} />
    </>
  );
}

export default App;
```

---

## Resources

### Documentation

* React Context API: https://react.dev/reference/react/useContext
* React useReducer: https://react.dev/reference/react/useReducer
* React useMemo: https://react.dev/reference/react/useMemo
* React useCallback: https://react.dev/reference/react/useCallback

### Articles

* React Learn: https://react.dev/learn
* Passing Data Deeply with Context: https://react.dev/learn/passing-data-deeply-with-context
* Extracting State Logic into a Reducer: https://react.dev/learn/extracting-state-logic-into-a-reducer

### Videos

* [React Tutorial Series](https://www.youtube.com/watch?v=jSWwKABiFik&list=PLY-ecO2csVHfgVM9sChmUirqK7BXUBX9P)
* [React Tutorial Series](https://www.youtube.com/watch?v=QFaFIcGhPoM&t=1s)

---

## Key Takeaways

* useContext allows components to access shared data without prop drilling.
* useReducer manages complex state logic using reducers and actions.
* useMemo memoizes values and prevents unnecessary calculations.
* useCallback memoizes functions and prevents unnecessary re-renders.
* useMemo returns a value, while useCallback returns a function.
* useContext and useReducer are often used together for global state management.
* Performance optimization hooks should be used only when needed.
