import React, { useContext } from 'react'

import Link from '../components/Link'
import VisibilityFilterContext from '../context/VisibilityFilterContext'

const FilterLink = props => {
  const visibilityFilterContext = useContext(VisibilityFilterContext)
  return (
    <Link
      {...props}
      active={props.filter === visibilityFilterContext.filter}
      onClick={() => visibilityFilterContext.setVisibilityFilter(props.filter)}
    />
  )
}

export default FilterLink
