import React from 'react'
import './todo.css'
import DeleteIcon from '@material-ui/icons/Delete';

function Todo({todo,removeTodo,togglecomplete}) {
    let handleremove = ()=>{
        removeTodo(todo.id);
    }
    let handlecheckclick = ()=>{
         togglecomplete(todo.id)
    }
    return (
        <div className={todo.complete?"todo complete":"todo"}>
           <input type="checkbox" onClick={handlecheckclick} checked={todo.competed}/>
           <li>{todo.task}</li>
           <a onClick={handleremove}><DeleteIcon style={{fill: "black"}}/></a>   
            
        </div>
    )
}

export default Todo;
