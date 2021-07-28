import './App.css';
import Header from './Components/Header' ;
import {Footer} from './Components/Footer';
import {Todos} from './Components/Todos';
import React, {useState} from 'react';

function App() {


  const onDelete = (todo) =>{

    setTodos(todos.filter((e) => {
      return e!== todo;
    }))

  }



  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "you need to go to the market to get this job done"
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "you need to go to the market to get this job done2"
    },
    {
      sno: 3,
      title: "Go to the ghat",
      desc: "you need to go to the market to get this job done3"
    }
  ]);

  return (
    <>
      <Header title="My Todos List" searchBar={false}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer />
    </>
  );
}

export default App;
