import React, { Component } from 'react';
import styled from "styled-components";
import IncomeListMonthHeader from "./IncomeListMonthHeader";
import IncomeListMonthBody from "./IncomeListMonthBody";

import moment from 'moment';


class IncomeListMonthApp extends Component {

    constructor(props){
        super(props);
        this.state = {
            calenderYM : moment(),
            selected : moment().format("YYYY-MM-DD")
        }

    }
    

    moveMonth = (month) => {
        this.setState({
            calenderYMD : this.state.calenderYM.add(month,'M')
        })
    }
    
    render(){
        return(        
            <IncomTable>
                <IncomeListMonthHeader calenderYM ={this.state.calenderYM.format("YYYY년 MM월")}
                                  moveMonth={this.moveMonth}
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