import React, { Component } from 'react'
import { Info, Wrapper } from './StatisticsStyled'

export class Statistics extends Component {

    render(){
        return(
            <Wrapper>
                <Info>Кількість ваших справ: {this.props.lenght}</Info>
                <Info>Кількість виконаних справ: {this.props.complete}</Info>
                <Info>Кількість запланованих справ: {this.props.notcomplete}</Info>
            </Wrapper>
        )
    }







}
