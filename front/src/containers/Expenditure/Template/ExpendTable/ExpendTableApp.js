import React, { Component } from 'react';
import styled from "styled-components";
import ExpendTableHeader from "./ExpendTableHeader";
import ExpendTableBody from "./ExpendTableBody";
import moment from "moment";
import ApiService from '../../../../ApiServer/expend/ApiService';


class ExpendTableApp extends Component {

    constructor(props){
        super(props);

        this.state = {
            calenderYM : moment(),
            selected : moment().format("YYYY-MM-DD"),
            monthList : []
        }
    }

    componentDidMount(){
        this.MonthList(this.state.calenderYM.format("YYYY-MM-DD"));
    }

    MonthList = (Monthdate) => {

        ApiService.expenMonthAndDaySumRead(Monthdate)
        .then((res) =>{
            this.setState((state, props) => { return { 
                monthList : res.data
             }}, ()=> {});
            
        }).catch(err => {
            console.log('expenMonthAndDaySumRead() Error!', err);
    
        })
    }

    moveMonth = (month) => {
        this.setState({
            calenderYM : this.state.calenderYM.add(month,'M')
        },()=>{})
        this.MonthList(this.state.calenderYM.format("YYYY-MM-DD"));
    }   

    render(){
            return(        
            <ExpendTable>
                <ExpendTableHeader
                    calenderYM = {this.state.calenderYM.format("YYYY년 MM월")}
                    moveMonth = {this.moveMonth}
                />
                <ExpendTableBody monthList ={this.state.monthList} />
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