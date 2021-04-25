import {useReducer, useEffect, useCallback} from 'react';
import {todoReducer} from './todoReducer';
import { useForm } from '../../Hooks/useForm';
import { TodoList } from './TodoList';

import './todoapp.css';
import { TodoForm } from './TodoForm';

const init = () => {
  return JSON.parse(localStorage.getItem('todos') || []);
}

export const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const [{description}, handleInputChange, reset] = useForm({
    id: new Date().getTime(),
    description: '',
  });


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  const handleDelete = useCallback(
  (todoId) => {
    dispatch({
      type: 'delete',
      payload: todoId,
    });
  },
  [dispatch],
  );

  const handleToggle = useCallback(
  (todoId) => {
    dispatch({
      type: 'toggle',
      payload: todoId
    })
  },
  [dispatch],
  );


const handleSubmit = useCallback(
  (e) => {
  e.preventDefault();
  if(description.trim().length > 0) {
    const newTodo = {
      id: new Date().getTime(),
      description, 
      done: false,
    }

    dispatch({
      type: 'add',
      payload: newTodo,
    });

    reset();
  }
  },
  [description, reset],
  );

  return (
    <div className="task-app">
      <h1>Pending tasks: {todos.length}</h1>
      <hr/>

      <div className="row">
        <div className="col-7">
          <TodoList 
          todos={todos}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
          />
        </div>

        <div className="col-5">
          <TodoForm
          description={description}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  )
}
