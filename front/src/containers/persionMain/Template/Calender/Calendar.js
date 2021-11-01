import React, { Component } from 'react';
import styled from "styled-components";


import DateHeader from "./DateHeader";
import { withRouter } from 'react-router-dom';




class Calendar extends Component {

            render(){
                return (
                    <RCA_CALENDER_CONTAINER>
                        <DateHeader dates={"일, 월, 화, 수, 목, 금, 토"} />
                       
                        {this.props.Weeks(this.props.YM, this.props.selected, this.props.changeSelected)}

                    </RCA_CALENDER_CONTAINER>
                )
            }
}

export default withRouter(Calendar);


const RCA_CALENDER_CONTAINER = styled.div`
    flex-grow : 1;
    background-color : rgb(127, 184, 127)
`

