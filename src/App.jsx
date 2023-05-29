import React, {useState} from "react";
import './App.css';


const useCounter = () => {
  const [counter, setCounter] = useState(0);

  const increase = () => setCounter(counter + 1)
  const decrement = () => setCounter(counter -1)
  const reset = () => setCounter(0)

  return {
    counter,
    increase,
    decrement,
    reset
  };
};

export default function App() {
  const {
    counter, 
    increase, 
    decrement, 
    reset
  } = useCounter();

   return ( 
    <div className='number'>
      <h1 className='title'>Contador</h1>
      <div>{counter}</div>
      <button className='add-btn' onClick={increase}>+</button>
      <button className='add-btn' onClick={decrement}>-</button>
      <button className='add-btn' onClick={reset}>Reset</button>
    </div>
  );
}