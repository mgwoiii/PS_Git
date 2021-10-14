import React, { Component } from 'react';
import styled from "styled-components";
import PersionTableHeader from "./PersionTableHeader";
import PersionTableBody from "./PersionTableBody";

class PersionTableApp extends Component {
    
    constructor(props){
        super(props);

        // label 업데이트 
        let aa = this.props.date.split('-');
    
        this.state = {
            startDate : new Date(aa[0],aa[1] -1 ,aa[2])
        }
    }


    setStartDate = (year,month,day) => {
        this.setState({
            startDate : new Date(year,month,day),
          }, () => {
            // setState 이후 실행됨
           // setState 한 후 처리할 비지니스 로직 혹은 메서드 호출하면 동기식으로 처리 가능
          })

    }


    render(){
        return(        
            <PersionTable>
                <PersionTableHeader
                    startDate = {this.state.startDate}
                    setStartDate = {this.setStartDate}/>
                <PersionTableBody />
            </PersionTable>
        )
    }
}

export default PersionTableApp;

const PersionTable = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border : none;
    width : 100%;

`