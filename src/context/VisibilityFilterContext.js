import React, { createContext, useReducer } from 'react'

import reducer from '../reducers/visibilityFilter'
import { VisibilityFilters } from '../actions'

const initialValue = VisibilityFilters.SHOW_ALL

const VisibilityFilter = createContext({ filter: initialValue })
export const VisibilityFilterConsumer = VisibilityFilter.Consumer

export const VisibilityFilterContextProvider = props => {
  const [filter, dispatch] = useReducer(reducer, initialValue)

  const setVisibilityFilter = filter =>
    dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter,
    })

  return (
    <VisibilityFilter.Provider
      {...props}
      value={{ filter, setVisibilityFilter }}
    />
  )
}

export default VisibilityFilter
