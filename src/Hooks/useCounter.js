import {useState} from 'react';
export const useCounter = (initialState=1) => {

  const [counter, setCounter] = useState(initialState);

  const increment = () => {
    setCounter(counter+1);
  }


  const decrement = () => {
    setCounter(counter-1);
  }

  const reset = (initialState=1) => {
    setCounter(initialState)
  }

  return [
    counter,
    increment,
    reset,
    decrement
  ]
}
