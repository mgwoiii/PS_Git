import React, { Component } from 'react';
import styled from "styled-components";
import ExpendTableHeader from "./ExpendTableHeader";
import ExpendTableBody from "./ExpendTableBody";

class ExpendTableApp extends Component {
    
    render(){
        
        return(        
            <ExpendTable>
                <ExpendTableHeader
                    calenderYM = {this.props.calenderYM}
                    moveMonth = {this.props.moveMonth}
                />
                <ExpendTableBody />
            </ExpendTable>
        )
    }
}

export default ExpendTableApp;

const ExpendTable = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border : none;
    width : 100%;

`