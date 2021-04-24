import { useCallback, useState } from 'react';
import {ShowIncrement} from './ShowIncrement';
import '../03-examples/multiple.css';

export const CallbackHooks = () => {

  const [counter, setCounter] = useState(10)

  const increment = useCallback( (num)=> {
      setCounter(c => c+num)
    }, [setCounter])

  return (
    <div>
      <h1>useCallback Hook</h1>
      <h2>Value {counter}</h2>
      <hr/>
      <ShowIncrement increment={increment}/>
    </div>
  )
}