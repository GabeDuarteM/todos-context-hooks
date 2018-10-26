import React, { useContext } from 'react'
import TodoContext from '../context/TodoContext'

const AddTodo = ({ dispatch }) => {
  let input

  const todoContext = useContext(TodoContext)
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          todoContext.addTodo(input.value)
          input.value = ''
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default AddTodo
