import React, { Component } from 'react';
import styled from "styled-components";
import IncomTableSingInHeader from "../IncomTablesSingInApp/IncomTableSingInHeader";
import IncomTableSingInBody from "../IncomTablesSingInApp/IncomTableSingInBody";

import moment from 'moment';


class IncomTableSingInApp extends Component {

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
                <IncomTableSingInHeader calenderYMD ={this.state.calenderYMD.format("YYYY년 MM월 DD일")}
                                  moveDay={this.moveDay}
                                  IncomTableHeaderObj = {this.props.IncomTableHeaderObj}
                />
                <IncomTableSingInBody classNumObj = {this.props.classNumObj} IncomTableHeaderObj = {this.props.IncomTableHeaderObj} />
            </IncomTable>
        )
    }
}

export default IncomTableSingInApp;

const IncomTable = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border : none;

    width : 100%;

`