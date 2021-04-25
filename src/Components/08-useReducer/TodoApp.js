import {useReducer, useEffect} from 'react';
import {todoReducer} from './todoReducer';

import './todoapp.css';
import { useForm } from '../../Hooks/useForm';


const init = () => {
 return JSON.parse(localStorage.getItem('todos') || [])
}

export const TodoApp = () => {


  const [todos, dispatch] = useReducer(todoReducer, [], init)

  useEffect(()=> {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])


  const handleSubmit = (e) => {
    e.preventDefault();

    if(description.trim().length > 0) {
    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false
    }

    const action = {
      type: 'add',
      payload: newTodo,
    }
    
    dispatch( action );
    reset()
  }else {
    alert("No se permiten valores vacios.")
  }
  }

  const [{description}, handleInputChange, reset] = useForm({
    description: ''
  })

  return (
    <div>
      <h1>Task to do ({todos.length})</h1>
      <hr/>

      <div className="row">
        <div className="col-7">
            <ul className="list-group list-group-flush">
            {
              todos.map((todo, id) => (
                <li 
                key={todo.id}
                className="list-group-item"
                >
                  <p className="">
                  {id+1}. {todo.description}
                  </p>

                  <button className="btn btn-danger">Delete</button>
                </li>
              ))
            }
          </ul> 
        </div>

        <div className="col-5">
          <h4 className="text-center">Add task</h4>
          <hr/>
          <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="description"
            className="form-control"
            placeholder="To do ..."
            autoComplete="off"
            value={description}
            onChange={handleInputChange}
            ></input>
            <button 
            className="btn btn-block btn-outline-danger mt-1"
            type="submit">Add</button>
          </form>
        </div>

      </div>
      
    </div>
  )
}
