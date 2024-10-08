
import './App.css';
// import todosDate from './todos.json'
import React, {Component} from 'react'
import { ToDoList } from './components/ToDoList/ToDoList';
import { Form } from './components/Form/Form';

export class App extends Component {

  state = {
    tasks: []
  }

  showForm = (event) => {
    console.log(event.target);
    
    event.target.classList.add("form_active")
  }

  saveDescription = (event) => {

    event.preventDefault()

    const id = event.target.elements.id.value
    const description = event.target.elements.description.value
    const isdone = event.target.elements.isdone.value

    const task = {id: id, description:description, done: isdone}

    
    this.setState(({tasks}) =>{ 
      // console.log(tasks);
      return {
        tasks: [...tasks, task]
      }
      
    })
    console.log(this.state.tasks);
   
    
    return this.state.tasks
  }

  render(){
    const {tasks} = this.state
    
    return (
    <>
      <h1>Список ваших справ на тиждень</h1>
      <p>Кількість ваших справ: </p><span>{tasks.length}</span>
      <ToDoList data={tasks}/>
      <button onClick={this.showForm}>Додати завдання</button>
      <Form onSubmit={this.saveDescription}/>

    </>
  );
  }
}


export default App;
