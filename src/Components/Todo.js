import React from 'react'
import "./CSS/Todo.css"
import TodoItem from './TodoItem'

const Todo = (props) => {
  return (
    <section className='todo-section'>
        <div className="card-header-todo">
            Task List
            <a href="#" onClick={props.clearAll} className="delete-all">Delete All</a>
        </div>
        <div className="card-body">
            <ul>
              {props.items.map((item,index)=>{
                return <TodoItem deleteone={props.deleteone} key={index} item={item}/>
              })}
            </ul>
        </div>
    </section>
  )
}

export default Todo