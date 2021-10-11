import React, { Component } from 'react';
import styled from "styled-components";
import IncomeListYearHeader from "./IncomeListYearHeader";
import IncomeListYearBody from "./IncomeListYearBody";

import moment from 'moment';


class IncomeListYearApp extends Component {

    constructor(props){
        super(props);
        this.state = {
            calenderY : moment(),
            selected : moment().format("YYYY-MM-DD")
        }

    }
    

    moveYear = (Year) => {
        this.setState({
            calenderY : this.state.calenderY.add(Year,'year')
        })
    } 
    
    render(){
        return(        
            <IncomeListYear>
                <IncomeListYearHeader calenderY ={this.state.calenderY.format("YYYY년")}
                                  moveYear={this.moveYear}
                />
                <IncomeListYearBody />
            </IncomeListYear>
        )
    }
}

export default IncomeListYearApp;

const IncomeListYear = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border : none;

    width : 100%;

`