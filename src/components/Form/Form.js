
import React, { Component } from 'react'
import style from './Form.module.css'

export class Form extends Component {

    state = {
        isdone: "done",
        description: "",
        id: "",
    }

    chooseCompleteTask = (event) => {
        this.setState({ isdone: event.currentTarget.name })
    }
    handleChange = (event) => {
        this.setState({[event.currentTarget.name]: event.currentTarget.value})
    }
    handleSubmit = (event) =>{
        event.preventDefault()
        this.props.onSubmit(this.state.id, this.state.description, this.state.isdone)
    }
    render() {
        console.log(this.props.onSubmit);

        return (
            <div className={style.modalWindow}>
                <form onSubmit={this.handleSubmit} className={style.form}>
                    <label>
                        Введіть id
                        <input className={style.item} value={this.state.id} name='id' onChange={this.handleChange} />
                    </label>
                    <label>
                        Введіть опис завдання
                        <input className={style.item} value={this.state.description} name='description' onChange={this.handleChange} />
                    </label>
                    Чи виконано завдання
                    <label>так
                        <input type='radio' checked={this.state.isdone === "done"} className={style.item} name='done' onChange={this.chooseCompleteTask} />
                    </label>
                    <label>ні
                        <input type='radio' checked={this.state.isdone === "notdone"} className={style.item} name='notdone' onChange={this.chooseCompleteTask} />
                    </label>
                    <button type='submit'>Додати</button>
                </form>
            </div>
        )
    }


}







