import React,{useState} from 'react'
import  './todoform.css';
import { v4 as uuidv4 } from 'uuid';  //basically generates a random id
import AddBoxIcon from '@material-ui/icons/AddBox';


function Todoform({addtodo}) {
    const [todo, settodo] = useState({
        task:'',
        id:'',
        complete:false
    })
     
    //to add the input
    let handleinputchange=e=>{
        settodo({...todo,task:e.target.value})
    }
    let handleSubmit= e=>{
        e.preventDefault();  //to prevent the default refresh on submission
        if(todo.task.trim()){     //removes the whitespaces from both ends
            addtodo({...todo,id:uuidv4()})     //storing the todo    
            settodo({...todo,task:''})         //clearing the todo
        }              
        
    }
    return (
        <form className="todoform" onSubmit={handleSubmit}>
        <input type="text" placeholder="Add a task"  value={todo.task} className="todo_input"  onChange={handleinputchange}   />
        <button type="submit"><AddBoxIcon /></button>
        </form>
    )
}

export default Todoform;
