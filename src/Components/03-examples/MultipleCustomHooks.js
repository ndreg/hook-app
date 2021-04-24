import { useFetch } from '../../Hooks/useFetch';
import {useCounter} from '../../Hooks/useCounter';
import './multiple.css';
export const MultipleCustomHooks = () => {

  const [counter, reset, increment, decrement] = useCounter();

  const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

  const {author, quote} = !!data && data[0];


  return (
    <div className="container">
      <h1>Breaking Bad Quotes</h1>
      <hr/>

      {loading ? 
        (<div className="alert alert-info text-center">
          Loading...
        </div>)
      :
        (<blockquote className="blockquote text-right">
          <p className="mb-2">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>)
      }

      <button 
        className="btn btn-primary"
        onClick={decrement}>
        Previous quote
      </button>

      <button 
        className="btn btn-primary"
        onClick={reset}>
        First quote
      </button>
      
      <button 
        className="btn btn-primary"
        onClick={increment}>
        Next quote
      </button>
    </div>
  )
}
