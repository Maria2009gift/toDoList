
import React, {Component} from 'react'
import style from './Form.module.css'

export class Form extends Component {

    saveDescription = () => {
        console.log();
    }



    render(){

        return(
            <div className={style.modalWindow}>
                <form onSubmit={this.saveDescription} className={style.form}>
                    <input className={style.item}/>
                    <input className={style.item}/>
                    <button>Додати</button>
                </form>
            </div>
        )
    }


}







