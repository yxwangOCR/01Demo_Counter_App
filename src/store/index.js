import { createStore } from "redux";

// The reducer function :
// 1. This reducer function has "state" and "action" as the params;
// 2. "state" will be provided;
// 2.1 We can give an initial value to state as an object.
// 2.2 Then, "state" has a counter property with value "0".
// 3. "action" is an object that has 2 properties: type and payload

const reducerFunction = (state = { counter: 0 }, action) => {
  // 2 limitations:
  // 1st: synchronous function
  // 2nd: do NOT mutate the original state

  if (action.type === "INCREMENT") {
    return { counter: state.counter + 1 };
  }

  if (action.type === "DECREMENT") {
    return { counter: state.counter - 1 };
  }

  if (action.type === "ADD") {
    return { counter: state.counter + action.payload };
  }

  if (action.type === "SUB") {
    return { counter: state.counter - action.payload };
  }

  if (action.type === "RESET") {
    return { counter: 0 };
  }
  return { counter: 0 };
  return state; // return the main "state"
};

const store = createStore(reducerFunction);
// *** How to create store? ***
// createStore need a reducer to be created and used
export default store;

// Export "store" for whole App components access

// *** How to use store? ***
// For using the store, we need to go to the root file: index.js,
// then "Provide" the store for whole APP,
// so that all components will have access to store
