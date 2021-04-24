import {useState} from 'react';
export const useCounter = (initialState=0) => {

  const [state, setstate] = useState(initialState);

  const increment = (factor=1) => {
    setstate(state+factor);
  }


  const decrement = (factor=1) => {
    setstate(state-factor);
  }

  const reset = (initialState=0) => {
    setstate(initialState)
  }

  return [
    state,
    reset,
    increment,
    decrement
  ]
}
