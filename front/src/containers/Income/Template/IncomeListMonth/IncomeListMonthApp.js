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

/*


select DATE(IncomeDate)  AS dayDate,
		sum(totalPrice) AS MonthSum
from IncomeTable
where DATE(IncomeDate) BETWEEN 2021-11-01 and 2021-11-31
group by date
order by IncomeDate asc

SELECT DATE(IncomeDate) AS dayDate,
       sum(totalPrice) AS MonthSum
  FROM IncomeTable
 WHERE DATE(IncomeDate) >= 
 LAST_DAY(STR_TO_DATE('2021-11-03', '%Y-%m-%d') - interval 1 month) + interval 1 DAY 
   AND DATE(IncomeDate) <= 
   LAST_DAY(STR_TO_DATE('2021-11-05', '%Y-%m-%d'))
 GROUP BY dayDate
 order by IncomeDate asc

select
from incometable
where 

*/
export default IncomeListMonthApp;

const IncomTable = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border : none;

    width : 100%;

`