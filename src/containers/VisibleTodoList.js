import React, { useContext } from 'react'

import TodoContext from '../context/TodoContext'
import VisibilityFilterContext from '../context/VisibilityFilterContext'

import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const VisibleTodoList = () => {
  const todoContext = useContext(TodoContext)
  const visibilityFilterContext = useContext(VisibilityFilterContext)
  return (
    <TodoList
      todos={getVisibleTodos(todoContext.todos, visibilityFilterContext.filter)}
      toggleTodo={todoContext.toggleTodo}
    />
  )
}

export default VisibleTodoList
