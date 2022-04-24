import './App.css';
import Header from './Components/Header';
import {About} from './Components/About';
import {Footer} from './Components/Footer';
import {Todo} from './Components/Todo';

function App()

  let todolist=[
    {
      sno:100,
      title:"Learn React",
      desc:"Learn React from scratch",
    },
    {
      sno:200,
      title:"Learn Java",
      desc:"Learn Java from scratch",
    },
    {
      sno:300,
      title:"Learn Flutter",
      desc:"Learn Flutter from scratch",
    }
  ]

  const onDelete = () =>{
    console.log("I am Delete");
  }
  
  return (
    <>
      <Header title="Rahul Todos"/>
      <About/>
      <Todo todolist={todolist} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;