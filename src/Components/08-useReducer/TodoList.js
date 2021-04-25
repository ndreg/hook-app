import React from 'react';
import { TodoListItem } from "./TodoListItem"

export const TodoList = React.memo(({todos: toDos, handleToggle, handleDelete}) => {
  return (
    <>
    <ul className="list-group list-group-flush">
      <TodoListItem
      todos={toDos}
      handleToggle={handleToggle}
      handleDelete={handleDelete}
      />
    </ul> 
    </>
  )
})
