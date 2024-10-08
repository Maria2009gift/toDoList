
import React, {Component} from 'react'
import style from './Form.module.css'

export class Form extends Component {




    render(){
        console.log(this.props.onSubmit);
        
        return(
            <div className={style.modalWindow}>
                <form onSubmit={this.props.onSubmit} className={style.form}>
                    <input className={style.item} name='id'/>
                    <input className={style.item} name='description'/>
                    <input className={style.item} name='isdone'/>
                    <button type='submit'>Додати</button>
                </form>
            </div>
        )
    }


}







