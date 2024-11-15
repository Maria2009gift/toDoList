import {nanoid} from 'nanoid'
import './App.css';
import style from './components/Form/Form.module.css';
import React, { Component } from 'react'
import { ToDoList } from './components/ToDoList/ToDoList';
import { Form } from './components/Form/Form';
import { Statistics } from './components/Statistics/Statistics';
import { Modal } from './components/Modal/Modal'

export class App extends Component {

  state = {
    tasks: [],
    filter: '',
    modalVisibility: false,
  }



  deleteToDo = (id) => {
    const newList = this.state.tasks.filter(task => task.id !== id)
    this.setState({ tasks: newList })
  }

  addToDo = (description) => {

    const task = { id: nanoid(), description, isdone: false }


    this.setState(({ tasks }) => {

      return {
        tasks: [...tasks, task]
      }

    })
    console.log(this.state.tasks);


    return this.state.tasks
  }

  componentDidMount() {
    const tasksFromLocalStorage = window.localStorage.getItem("tasks")
    if (tasksFromLocalStorage) {     
      this.setState({tasks: JSON.parse(tasksFromLocalStorage)})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.tasks !== this.state.tasks)
      window.localStorage.setItem("tasks", JSON.stringify(this.state.tasks))
  }

  toggleIsDone = (id) => {
    this.setState((prevState) => {
      return ({
        tasks: prevState.tasks.map((task) => {
          if (task.id === id) {
            return ({ ...task, isdone: !task.isdone })
          }
          return(task)

        })
      })
    }

    )
  }

  calculateTasks = () => {
    return this.state.tasks.reduce((total, task) => {
      if (task.isdone) {
        total.complete += 1
      } else {
        total.notcomplete += 1
      }
      return total
    }, {complete: 0, notcomplete: 0})
  }

  handleFilter = (event)=>{
    this.setState({filter: event.currentTarget.value})
  }

  getVisibleTasks = () =>{
    
    return this.state.tasks.filter((task) => task.description.toLowerCase().includes(this.state.filter.toLowerCase()))
  }
  toggleModal = () =>{
    this.setState((prevState)=> ({modalVisibility: !prevState.modalVisibility}))
  }

  render() {
    const { tasks, filter } = this.state
    const calculate = this.calculateTasks()
    const visibleTasks = this.getVisibleTasks()

    return (
      <>
        <h1>Список ваших справ на тиждень</h1>
        <Statistics lenght={tasks.length} complete={calculate.complete} notcomplete={calculate.notcomplete}/>
        <button onClick={this.toggleModal}>Створити  нове завдання</button>
        {this.state.modalVisibility && <Modal closeModal={this.toggleModal}>
        <Form onSubmit={this.addToDo} closeModal={this.toggleModal}/>
        <button onClick={this.toggleModal}>Закрити модалку</button>
        </Modal>}
        <input placeholder='Знайти елемент' onChange={this.handleFilter}  value={filter} className={style.input}/>
        <ToDoList data={visibleTasks} deleteing={this.deleteToDo} toggleIsDone={this.toggleIsDone} /> 
      </>
    );
  }
}


export default App;




