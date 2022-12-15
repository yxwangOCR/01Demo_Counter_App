import "./App.css";
import { useSelector, useDispatch } from "react-redux";
//useSelector hook helps us to get counter from store.
//useDispatch hook helps us to dispatch action,
//The store fetch action, then update store.

function App() {
  //Provide a callback function with "state" inside
  //We have coounter property in state
  const counter = useSelector((state) => state.counter); // callback function
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const add = () => {
    dispatch({ type: "ADD", payload: 10 });
  };
  const subtract = () => {
    dispatch({ type: "SUB", payload: 10 });
  };
  const reset = () => {
    dispatch({ type: "RESET" });
  };
  return (
    <div className='App'>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <div className='buttons'>
        <button onClick={add}> + 10</button>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={subtract}> - 10 </button>
      </div>
      <button className='reset-button' onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default App;

// Dispatch an action : whenever we want to send data to store
// Dispatch an unique action, then store will fetch this action and do update.
