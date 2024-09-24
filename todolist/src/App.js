// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [todolist,setTodolist]=useState([])

  let saveToDolist=(event)=>{

    let toname=event.target.toname.value;
    if(!todolist.includes(toname)){
      let finalToDOlist = [...todolist,toname]
      setTodolist(finalToDOlist)
    }
    else{
      alert("ToDolist Name Already Exits..")
    }

    event.preventDefault();

  }


  let list=todolist.map((value,i)=>{
    return(
      <TodolistItem value={value} indexno={i} todolist={todolist} setTodolist={setTodolist} key={i}/>
    )
  })


  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={saveToDolist}>
        <input type="text" name='toname'/><button>Save</button>
      </form>
      <div className='outerDiv'>
        <ul>
          {list}
        </ul>
      </div>
    </div>
  );
}

export default App;

function TodolistItem({value,indexno,todolist,setTodolist}){
  let [status,setStatus]=useState(false)
  let deleteRow=()=>{
    let finalData=todolist.filter((v,i)=>i!==indexno)
    setTodolist(finalData)
  }
  let statusCheck=()=>{
    setStatus(!status);
  }

  return(
    <li className={status? 'statusCheck':''} onClick={statusCheck}>{indexno+1} {value} <span onClick={deleteRow}>&times;</span></li>
  );
}