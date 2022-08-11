import './App.css';
import {useSelector, useDispatch} from 'react-redux'
//useSelector hook helps us to get counter from store.
//useDispatch hook helps us to dispatch action,
//The store fetch action, then update store.


function App() {
  
  //Provide a callback function with "state" inside
  //We have coounter property in state
const counter = useSelector((state)=>state.counter)
const dispatch = useDispatch()
const increment =()=>{
  dispatch({type: "INCREMENT"})
};
const decrement =()=>{
  dispatch({type: "DECREMENT"})
};

const addByTen = ()=>{
  dispatch({type: "ADD", payload: 10})
}

const subtractByTen =()=>{
  dispatch({type:"SUB", payload: 10})
}
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <div className='buttons'>
      <button onClick={addByTen}>+ 10</button>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>   
      <button onClick={subtractByTen}>- 10</button>
      </div>
    </div>
  );
}

export default App;


// Dispatch an action : whenever we want to send data to store
// Dispatch an unique action, then store will fetch this action and do update.