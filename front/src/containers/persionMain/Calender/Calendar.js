import React, { Component } from 'react';
import styled from "styled-components";

class Calendar extends Component {
    render(){
        return (
            <RCA_CALENDER_CONTAINER>
                몸통
            </RCA_CALENDER_CONTAINER>
        )
    }
}

const RCA_CALENDER_CONTAINER = styled.div`
    flex-grow: 1;
    background-color: rgb(127, 184, 127);
`
export default Calendar;