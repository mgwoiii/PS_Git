import React, { Component } from 'react';
import styled from "styled-components";
import IncomeListMonthHeader from "./IncomeListMonthHeader";
import IncomeListMonthBody from "./IncomeListMonthBody";
import ApiService from '../../../../ApiServer/incom/ApiService';


import moment from 'moment';


class IncomeListMonthApp extends Component {

    constructor(props){
        super(props);
        this.state = {
            calenderYM : moment(),
            selected : moment().format("YYYY-MM-DD"),
            MonthData : [],
        }

    }
    
    componentDidMount(){
        this.monthDate(this.state.calenderYM.format("YYYY-MM-DD"));
    }

    // 해당월 1~31일 데이터를 전부 가져온다.
    monthDate = (Monthdate) =>{

        ApiService.incomeMonthAndDaySumRead(Monthdate)
        .then((res)=>{
            this.setState((state, props) => { return { 
                MonthData : res.data
             }},()=>{});
        }).catch(err => {
            console.log('incomeMonthAndDaySumRead() Error!', err);
    
        })
    }

    moveMonth = (month) => {
        this.setState({
            calenderYMD : this.state.calenderYM.add(month,'M')
        })
        this.monthDate(this.state.calenderYM.format("YYYY-MM-DD"));
    }
    
    render(){
        return(        
            <IncomTable>
                <IncomeListMonthHeader calenderYM ={this.state.calenderYM.format("YYYY년 MM월")}
                                  moveMonth={this.moveMonth}
                />
                <IncomeListMonthBody MonthData ={this.state.MonthData} />
            </IncomTable>
        )
    }
}

export default IncomeListMonthApp;

const IncomTable = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border : none;

    width : 100%;

`