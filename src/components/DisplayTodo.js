import React from 'react'
import Todo from './Todo';
import './todolist.css'
import {useSelector} from 'react-redux'

//this component basically prints the todo list
function DisplayTodo() {
    // simple methods takes a  callback 
    let todos = useSelector(state=> state.todos)
    return (
        <div className="todo_list">
            <ul >
           {todos.map(todo=>{
              return(
                <Todo key={todo.id} 
                todo={todo} 
                />
              ) 
           })} 
        </ul>
        </div>   
    )
}

export default DisplayTodo
