import React, { Component } from 'react';
import styled from "styled-components";
import ExpendDayHeader from "./ExpendDayHeader";
import ExpendDayBody from "./ExpendDayBody";

import moment from 'moment';


class ExpendDayApp extends Component {

    constructor(props){
        super(props);
        this.state = {
            calenderYMD : moment(),
            selected : moment().format("YYYY-MM-DD")
        }

    }
    

    moveDay = (day) => {
        this.setState({
            calenderYMD : this.state.calenderYMD.add(day,'days')
        })
    }
    
    render(){
        return(        
            <IncomTable>
                <ExpendDayHeader calenderYMD ={this.state.calenderYMD.format("YYYY년 MM월 DD일")}
                                  moveDay={this.moveDay}
                                  IncomTableHeaderObj = {this.props.IncomTableHeaderObj}
                />
                <ExpendDayBody classNumObj = {this.props.classNumObj} 
                IncomTableHeaderObj = {this.props.IncomTableHeaderObj}
                tsetValue = {this.props.tsetValue} urlName ={this.props.urlName}
                />
            </IncomTable>
        )
    }
}

export default ExpendDayApp;

const IncomTable = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border : none;

    width : 100%;

`