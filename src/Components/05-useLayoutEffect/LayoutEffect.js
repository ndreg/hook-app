import { useLayoutEffect, useRef, useState} from 'react';
import { useFetch} from '../../Hooks/useFetch';
import {useCounter} from '../../Hooks/useCounter';
import './layout.css';

export const LayoutEffect = () => {

  const [counter, increment] = useCounter();
  const [boxSize, setboxSize] = useState({})

  const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

  const {quote} = !!data && data[0];

  const pTag = useRef()

  useLayoutEffect(() => {
    setboxSize(pTag.current.getBoundingClientRect())
  }, [quote])


  return (
    <div className="container">
      <h1>Layout Effect</h1>
      <hr/>
      
      <blockquote className="blockquote text-right">
          <p 
          ref={pTag}
          className="mb-2">{quote}</p>
        </blockquote>


      <pre>
        {JSON.stringify(boxSize,null, 3)}
      </pre>

      <button 
        className="btn btn-primary"
        onClick={increment}>
        Next quote
      </button>
    </div>
  )
}
