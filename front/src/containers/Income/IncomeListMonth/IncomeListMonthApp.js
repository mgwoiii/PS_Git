import React, { Component } from 'react';
import styled from "styled-components";
import IncomeListMonthHeader from "./IncomeListMonthHeader";
import IncomeListMonthBody from "./IncomeListMonthBody";

import moment from 'moment';


class IncomeListMonthApp extends Component {

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
                <IncomeListMonthHeader calenderYMD ={this.state.calenderYMD.format("YYYY년 MM월 DD일")}
                                  moveDay={this.moveDay}
                />
                <IncomeListMonthBody />
            </IncomTable>
        )
    }
}

export default IncomeListMonthApp;

const IncomTable = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border : none;

    width : 100%;

`