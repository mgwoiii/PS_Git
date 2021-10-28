import React, { Component } from 'react';
import styled from "styled-components";
import Header from './Header';
import Calendar from './Calendar';

import { withRouter } from 'react-router-dom';



class CalenderApp extends Component {

    render(){
        return (
                <RCA_APP_CONTAINER>
                    <Header calenderYM ={ this.props.calenderYMHeader}
                            calenderYMD = {this.props.calenderYM}
                            moveDay = {this.props.moveDay}
                            changeSelected ={this.props.changeSelected}
                            startDate = {this.props.startDate}
                            setStartDate = {this.props.setStartDate}
                    />
                    <Calendar YM = { this.props.YM}
                              selected = {this.props.selected} 
                              changeSelected = {this.props.changeSelected}
                              CalSelect = {this.props.CalSelect}

                              Weeks = {this.props.Weeks}
                    />

                </RCA_APP_CONTAINER>
        )
    }
}

const RCA_APP_CONTAINER = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border : none;
    
`


export default withRouter(CalenderApp);
