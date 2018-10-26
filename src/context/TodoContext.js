import React, { createContext, useReducer } from 'react'

import reducer from '../reducers/todos'

let nextTodoId = 0

const initialValue = []

const TodoContext = createContext({ todos: initialValue })
export const TodoContextConsumer = TodoContext.Consumer

export const TodoContextProvider = props => {
  const [todos, dispatch] = useReducer(reducer, initialValue)

  const addTodo = text =>
    dispatch({
      type: 'ADD_TODO',
      id: nextTodoId++,
      text,
    })

  const toggleTodo = id =>
    dispatch({
      type: 'TOGGLE_TODO',
      id,
    })

  return (
    <TodoContext.Provider {...props} value={{ todos, addTodo, toggleTodo }} />
  )
}

export default TodoContext
