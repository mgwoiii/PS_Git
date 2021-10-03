import React, { Component } from 'react';
import styled from "styled-components";
import Header from './Header';
import Calendar from './Calendar';

import moment from 'moment';

class CalenderApp extends Component {

    state = {
        calenderYM : moment(),
        today : moment()
    }

    moveMonth = (month) => {
        this.setState({
            calenderYM : this.state.calenderYM.add(month,'M')
        })
    }

    render(){
        return (
            <TastLayout>
                <RCA_APP_CONTAINER>
                    <Header calenderYM ={this.state.calenderYM.format("YYYY년 MM월")}
                            today = {this.state.today.format("현재 YYYY - MM - DD")}
                            moveMonth={this.moveMonth}
                    />
                    <Calendar YM = {this.state.calenderYM.format("YYYY-MM-DD")}/>
                </RCA_APP_CONTAINER>
            </TastLayout>
        )
    }
}

const TastLayout = styled.div`
    width: 100%;
    height: 80vh;
    border: 1px solid black;
`

const RCA_APP_CONTAINER = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

 
 

export default CalenderApp;