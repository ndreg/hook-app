import React from 'react'

export const TodoForm = React.memo(({description, handleSubmit, handleInputChange}) => {
  return (
    <form
      className="form-app"
      onSubmit={handleSubmit}>

      <input
      type="text"
      name="description"
      className="form-control mb-3"
      placeholder="Write a task..."
      autoComplete="off"
      value={description}
      onChange={handleInputChange}
      ></input>

      <button 
      className="btn btn-block btn-outline-danger"
      type="submit">
      New task
      </button>
  </form>
  )
})