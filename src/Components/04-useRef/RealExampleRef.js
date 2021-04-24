import {MultipleCustomHooks} from '../03-examples/MultipleCustomHooks';
import {useState} from 'react';
import '../03-examples/multiple.css';


export const RealExampleRef = () => {

  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Ref</h1>
      <hr/>
    {show && <MultipleCustomHooks />}
    
      <button
      className="btn btn-primary"
      onClick={()=> setShow(!show)}>
        Show/Hide
        </button>
    </div>
  )
}
