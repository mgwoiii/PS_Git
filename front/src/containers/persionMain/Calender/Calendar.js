import React, { Component } from 'react';
import styled from "styled-components";

import DateHeader from "./DateHeader";

class Calendar extends Component {
    render(){
        return (
            <RCA_CALENDER_CONTAINER>
                <DateHeader dates={"일, 월, 화, 수, 목, 금, 토"}/>
            </RCA_CALENDER_CONTAINER>
        )
    }
}

export default Calendar;


const RCA_CALENDER_CONTAINER = styled.div`
    flex-grow : 1;
    background-color : rgb(127, 184, 127)
`
