
import React, {Component} from 'react'
import style from './Form.module.css'

export class Form extends Component {

    state = {
        isdone: "done"
    }

    chooseCompleteTask = (event) => {
        this.setState({isdone:event.currentTarget.name})
    }


    render(){
        console.log(this.props.onSubmit);
        
        return(
            <div className={style.modalWindow}>
                <form onSubmit={this.props.onSubmit} className={style.form}>
                    <label>
                        Введіть id
                        <input className={style.item} name='id'/>
                    </label>
                    <label>
                        Введіть опис завдання
                        <input className={style.item} name='description'/>                       
                    </label>
                        Чи виконано завдання
                    <label>так
                        <input type='radio' checked={this.state.isdone === "done"} className={style.item} name='done' onChange={this.chooseCompleteTask}/>
                    </label>
                    <label>ні
                        <input type='radio' checked={this.state.isdone === "notdone"} className={style.item} name='notdone' onChange={this.chooseCompleteTask}/>
                    </label>
                    <button type='submit'>Додати</button>
                </form>
            </div>
        )
    }


}







