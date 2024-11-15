import React, { Component } from 'react'
import style from "./Modal.module.css"
import { Timer } from '../Timer/Timer'

export class Modal extends Component {

    state = {
        timerTime: null
    }

    handleModal = (event) => {
        if (event.code === "Escape") {
            this.props.closeModal()
        }
    }

    componentDidMount() {
        window.addEventListener("keydown", this.handleModal)
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleModal)
    }

    closeModal = (event) => {
        if (event.currentTarget === event.target) {
            this.props.closeModal()
        }
    }

    render() {
        return (
            <div onClick={this.closeModal} className={style.backdrop}>
                <div className={style.modal}>
                    {this.props.children}
                    <Timer/>
                </div>
            </div>
        )
    }
}

