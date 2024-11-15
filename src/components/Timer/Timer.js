import React, { Component } from 'react';


export class Timer extends Component {

    state = {
        timerTime: 0
    }

    time = null
    componentDidMount() {
        this.intervalId = setInterval(() => {
            
            this.setState((prevState) => ({timerTime: prevState.timerTime+=1}))
            console.log(this.state.timerTime);
            
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

    render() {
        return(
            <>
                <p>Пройшло секунд з відкриття модалки: <span>{this.state.timerTime}</span></p>
            </>
        )
    }

}