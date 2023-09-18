import React from 'react'
import './todo.css'
import DeleteIcon from '@material-ui/icons/Delete';
import {useDispatch} from 'react-redux' 
import {removeTodo} from '../features/todo/todoSlice'

function Todo({todo}) {
    const dispatch = useDispatch() 
    let handleremove = ()=>{
      console.log("so basically this function did got fired")  
      dispatch(removeTodo(todo.id))
    }
    let handlecheckclick = ()=>{
        // togglecomplete(todo.id)
    }
    return (
        <div className={todo.complete?"todo complete":"todo"}>
           <input type="checkbox" onClick={handlecheckclick} checked={todo.competed}/>
           <li>{todo.text}</li>
          <button onClick={handleremove}><DeleteIcon style={{fill: "black"}}/> </button>
            
        </div>
    )
}

export default Todo;
