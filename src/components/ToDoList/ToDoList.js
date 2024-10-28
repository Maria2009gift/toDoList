
import React, {Component} from 'react'
import { List, TitleTasks } from './ToDoListStyled'

export class ToDoList extends Component {

    render(){
        
        return(
            <>
            <TitleTasks>Завдання:</TitleTasks>
            <List>
                {this.props.data.map((task) => {
                    return(
                        <li key={task.id}>
                            <p>{task.description}</p>
                            <input type='checkbox' checked={task.isdone} onChange={() => {this.props.toggleIsDone(task.id)}} ></input>
                            <button type='button' onClick={() => {this.props.deleteing(task.id)}}>Видалити</button>
                        </li>
                    )
                })}
            </List>
            </>
        )
    }
}




