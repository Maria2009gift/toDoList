
import './App.css';
import todosDate from './todos.json'
import React, {Component} from 'react'
import { ToDoList } from './components/ToDoList/ToDoList';
import { Form } from './components/Form/Form';

export class App extends Component {

  state = {
    tasks: todosDate
  }

  showForm = (event) => {
    console.log(event.target);
    
    event.target.classList.add("form_active")
  }

  render(){
    const {tasks} = this.state
    console.log();
    
    return (
    <>
      <h1>Список ваших справ на тиждень</h1>
      <p>Кількість ваших справ: </p><span>{tasks.length}</span>
      <ToDoList data={tasks}/>
      <button onClick={this.showForm}>Додати завдання</button>
      <Form/>

    </>
  );
  }
}


export default App;
