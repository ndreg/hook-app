import { useState } from 'react';
import { useCounter } from '../../Hooks/useCounter'
import { Small } from './Small';
import '../03-examples/multiple.css'

export const Memorize = () => {

  const [counter, increment] = useCounter();
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>Counter: <Small value={counter}/></h1>
      <button
      className="btn btn-primary"
      onClick={increment}>+1</button>
      <button
      className="btn btn-outline-primary ml-3"
      onClick={()=>{
        setShow(!show)
      }
      }
      >
        Show/Hide {JSON.stringify(show)}
      </button>
      <hr/>
    </div>
  )
}
