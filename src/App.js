import React,{useEffect,useState} from 'react'
import Todoform from './Todoform';
import './App.css';
import TodoList from './TodoList';

const Localstorage_key = "ls_ley";  //you can name it anything :)


function App() {
const [todos, settodos] = useState([]);
console.log(todos)


useEffect(() => {
  const localstrtodos = JSON.parse(localStorage.getItem(Localstorage_key));
   if(localstrtodos){
     settodos(localstrtodos);
   }
}, [])
//to store the list in local storage of the browser on each new entry
useEffect(() => {
   localStorage.setItem(Localstorage_key,JSON.stringify(todos));
 
}, [todos])

//to chane the toogle complete
let togglecomplete = (id)=>{
  settodos(todos.map(todo=>{
      if(todo.id ===id){
        return({
          ...todo,complete:!todo.complete
        })
      }
      return todo;
  }))
}
//for adding a todo
let addtodo = todo=>{
   settodos([todo,...todos])
}


//for removing a todo
let removeTodo = (id)=>{
  settodos(todos.filter(todo=>todo.id!==id));
} 

  return (
    <div className="app">
      <h1>TO DO LIST</h1>
      <Todoform addtodo={addtodo}/>
      <TodoList todos={todos} removeTodo={removeTodo} togglecomplete={togglecomplete}/>
    </div>
  );
}

export default App;
