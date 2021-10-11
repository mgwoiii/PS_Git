import React, { Component } from 'react';
import styled from "styled-components";
import ExpendYearHeader from "./ExpendYearHeader";
import ExpendYearBody from "./ExpendYearBody";

import moment from 'moment';


class ExpendYearApp extends Component {

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
            <ExpendtYear>
                <ExpendYearHeader calenderY ={this.state.calenderY.format("YYYY년")}
                                  moveYear={this.moveYear}
                />
                <ExpendYearBody />
            </ExpendtYear>
        )
    }
}

export default ExpendYearApp;

const ExpendtYear = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border : none;

    width : 100%;

`