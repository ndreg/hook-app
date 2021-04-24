import { useMemo, useState } from 'react';
import { useCounter } from '../../Hooks/useCounter'
import {procesoPesado} from '../../helpers/procesoPesado';
import '../03-examples/multiple.css'

export const MemoHook = () => {

  const [counter, increment] = useCounter();
  const [show, setShow] = useState(true);
  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

  return (
    <div>
      <h1>Memo Hook</h1>
      <h3>Counter: <small>{counter}</small></h3>
      <hr/>
      <p>{memoProcesoPesado}</p>
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
