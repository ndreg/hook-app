import {useState} from 'react';
import './counterapp.css';

export const CounterApp = () => {

  const [state, setstate] = useState({
  counter1: 10,
  counter2: 20,
  })

  const {counter1, counter2} = state;


  return (
    <div>
      <h2>Counter {counter1}</h2>
      <h2>Counter {counter2}</h2>
      <hr/>
      <button 
      className="btn btn-primary" 
      onClick={
        ()=> setstate({
          ...state,
          counter1: counter1+1
        })
      }
      >+1</button>
    </div>
  )
}
