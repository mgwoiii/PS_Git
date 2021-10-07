import React, { Component } from 'react';
import styled from "styled-components";
import Header from './Header';
import Calendar from './Calendar';

import moment from 'moment';

class CalenderApp extends Component {

    state = {
        calenderYM : moment(),
        selected : moment().format("YYYY-MM-DD"),
    }

    

    moveMonth = (month) => {
        this.setState({
            calenderYM : this.state.calenderYM.add(month,'M')
        })
    }   
    
    moveDay = (day) => {
        this.setState({
            calenderYM : this.state.calenderYM.add(day,'day')
            
        })
    }
                    //this.state.calenderYM.moment(date).format('YYYY MM DD HH:mm:ss')
                     //  moment('2019-08-10').format('YYYY MM DD HH:mm:ss'));
    static defaultProps = {
        clickFn : () => {}
    }

    changeSelected = (clickedDate) => {

        if(moment(clickedDate).isSame(this.state.selected,'day')){
            this.props.clickFn(clickedDate);
            return;
        }

        this.setState({
            selected : clickedDate
        })

        this.props.clickFn(clickedDate)

        if(moment(clickedDate).isBefore(this.state.calenderYM,'month')){
            this.moveMonth(-1)
        }else if(moment(clickedDate).isAfter(this.state.calenderYM,'month')){
            this.moveMonth(1)
        }
    }


    render(){
        return (
                <RCA_APP_CONTAINER>
                    <Header calenderYM ={ this.state.calenderYM.format("YYYY년 MM월")}
                            calenderYMD = {this.state.calenderYM}
                            calenderYMDD = {this.state.calenderYM.format("YYYY-MM-DD")}
                            moveMonth={this.moveMonth} moveDay = {this.moveDay}
                    />
                    <Calendar YM = { this.state.calenderYM.format("YYYY-MM-DD")}
                              selected = {this.state.selected} 
                              changeSelected = {this.changeSelected}
                    />
                </RCA_APP_CONTAINER>
        )
    }
}

const RCA_APP_CONTAINER = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border : none;
    
`

 
 

export default CalenderApp;