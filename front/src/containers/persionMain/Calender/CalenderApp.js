import React, { Component } from 'react';
import styled from "styled-components";
import Header from './Header';
import Calendar from './Calendar';

class CalenderApp extends Component {
    render(){
        return (
            <TastLayout>
                <RCA_APP_CONTAINER>
                    <Header/>
                    <Calendar/>
                </RCA_APP_CONTAINER>
            </TastLayout>
        )
    }
}

const TastLayout = styled.div`
    width: 100%;
    height: 80vh;
    border: 1px solid black;
`

const RCA_APP_CONTAINER = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

 
 

export default CalenderApp;