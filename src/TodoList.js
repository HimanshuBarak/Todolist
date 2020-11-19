import React from 'react'
import Todo from './Todo';
import './todolist.css'
//this component basically prints the todo list
function TodoList({todos,removeTodo,togglecomplete}) {
    return (
        <div className="todo_list">
            <ul >
           {todos.map(todo=>{
              return(
                <Todo key={todo.id} 
                todo={todo} 
                removeTodo ={removeTodo}
                togglecomplete ={togglecomplete} 
                />
              ) 
             
           })} 
        </ul>
        </div>
       
    )
}

export default TodoList
