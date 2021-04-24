import {useRef} from 'react';
import '../03-examples/multiple.css';

export const FocusScreen = () => {

  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
    console.log(inputRef)
  } 

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr/>

      <input
      ref={inputRef}
      className="form-control mb-3"
      placeholder="Name">
      </input>

      <button 
      className="btn btn-outline-primary"
      onClick={handleClick}>
        Focus
        </button>

    </div>
  )
}
