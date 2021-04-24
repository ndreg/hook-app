import { useCounter } from '../../Hooks/useCounter';
import './counterapp.css';

export const CounterWithCustomHook = () => {

  const [state, reset, increment, decrement] = useCounter();

  return (
    <div>
      <h1>Counter with Hook {state}</h1>
      <button className="btn btn-primary"
      onClick={()=>increment(1)}>+1</button>
      <button className="btn btn-secondary"
      onClick={()=> reset()}>Reset</button>
      <button className="btn btn-primary"
      onClick={()=>decrement(1)}>-1</button>
    </div>
  )
}
