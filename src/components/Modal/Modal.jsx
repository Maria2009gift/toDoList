import React, { Component } from 'react'
import style from "./Modal.module.css"

export class Modal extends Component {


    render() {
        return (
            <div className={style.backdrop}>
                <div className={style.modal}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

