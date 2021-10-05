import React, { Component } from 'react';
import styled from "styled-components";
import IncomTableHeader from "./IncomTableHeader";
import IncomTableBody from "./IncomTableBody";

import moment from 'moment';


class IncomTableApp extends Component {

    state = {
        calenderYMD : moment(),
        selected : moment().format("YYYY-MM-DD")
    }

    moveDay = (day) => {
        this.setState({
            calenderYMD : this.state.calenderYMD.add(day,'days')
        })
    }
    
    render(){
        return(        
            <IncomTable>
                <IncomTableHeader calenderYMD ={this.state.calenderYMD.format("YYYY년 MM월 DD일")}
                                  moveDay={this.moveDay} />
            
                <IncomTableBody />
         
            </IncomTable>
        )
    }
}

export default IncomTableApp;

const IncomTable = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border : 0.1px solid black;

    width : 100%;

`