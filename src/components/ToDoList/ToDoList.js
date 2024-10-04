
import React, {Component} from 'react'

export class ToDoList extends Component {
    state = {
        tasks: this.props.data
    }

    adding = () => {
        
    }

    render(){
        console.log(this.state.tasks);
        
        return(
            <ul className='list'>
                {this.state.tasks.map((task) => {
                    return(
                        <li key={task.id}>
                            <p>{task.description}</p>
                            <input type='checkbox'></input>
                        </li>
                    )
                })}
            </ul>
        )
    }
}




