import React from 'react'
import './Todo.css'

const Item = props => {

  const handleClick = e => {
    props.handleToggleTodos(props.item.id)
  }

  return(
    <div onClick={handleClick} className={props.item.completed ? 'strike' : ''}>
      <p>{props.item.task}</p>
    </div>
  )
}

export default Item