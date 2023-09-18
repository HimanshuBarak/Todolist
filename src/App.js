import React from 'react'
import AddTodo from './components/AddTodo';
import './App.css';
import DisplayTodo from './components/DisplayTodo';


function App() {

  return (
    <div className="app">
      <h1>TO DO LIST</h1>
        <AddTodo />
        <DisplayTodo />
    </div>
  );
}

export default App;
