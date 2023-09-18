import React,{useState} from 'react'
import  './todoform.css';
import AddBoxIcon from '@material-ui/icons/AddBox';
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'

function AddTodo() {
    const [todo, settodo] = useState('')
    const dispatch = useDispatch() 
    //to add the input
    let handleinputchange=e=>{
        settodo(e.target.value)
    }
    let handleSubmit= e=>{
        e.preventDefault();  //to prevent the default refresh on submission
       
            dispatch(addTodo(todo))    //storing the todo    
            settodo('')         //clearing the todo
                        
    }
    return (
        <form className="todoform" onSubmit={handleSubmit}>
        <input type="text" placeholder="Add a task"  value={todo} className="todo_input"  onChange={handleinputchange}   />
        <button type="submit"><AddBoxIcon /></button>
        </form>
    )
}

export default AddTodo;
