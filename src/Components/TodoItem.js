import React from 'react'

const TodoItem = (props) => {
  const DeleteOne=e=>{
    e.preventDefault()
    props.deleteone(props.item)
  }
  return (
    <li>{props.item} <a style={{textDecoration:"none"}} href="#" onClick={DeleteOne} className="delete-one"><div className="fas fa-times"></div></a></li>
  )
}

export default TodoItem