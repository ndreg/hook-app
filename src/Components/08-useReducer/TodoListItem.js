import React from 'react';

export const TodoListItem = React.memo(({todos: toDos, handleToggle, handleDelete}) => {
  return (
    <>
    {
      toDos.map((todo, id) => (
        <li 
          key={todo.id}
          className="list-group-item">

          <p 
          className={`${todo.done && 'complete'}`}
          onClick={()=>handleToggle(todo.id)}>
            {id+1}. {todo.description}
          </p>

          <button
          key={todo.id} 
          className="btn btn-danger"
          onClick={()=>handleDelete(todo.id)}>
            Delete
          </button>
        </li>
      ))
      }
    </>
  )
})
