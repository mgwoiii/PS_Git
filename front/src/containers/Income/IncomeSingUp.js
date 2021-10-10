import { Component } from "react";
import IncomeContent  from '../../component/Income/IncomeContent';
import IncomTableSingInApp  from './IncomTablesSingInApp/IncomTableSingInApp';

const classNumObj = [
    {id : 0 , value : "101호"},
    {id : 1 , value : "102호"},
    {id : 2 , value : "201호"},
    {id : 3 , value : "202호"},
    {id : 4 , value : "203호"},
    {id : 5 , value : "204호"},
    {id : 6 , value : "301호"},
    {id : 7 , value : "302호"},
    {id : 8 , value : "303호"},
    {id : 9 , value : "304호"}    
]

const IncomTableHeaderObj = [
    {id : 0 , value : "호수"},
    {id : 1 , value : "예약유입 경로"},
    {id : 2 , value : "소셜입금"},
    {id : 3 , value : "소셜공제"},
    {id : 4 , value : "숙소비용 (현금)"},
    {id : 5 , value : "숙소비용 (무통장)"},
    {id : 6 , value : "숙소비용 (카드)"},
    {id : 7 , value : "바베큐 (현금)"},
    {id : 8 , value : "바베큐 (이체)"},
    {id : 9 , value : "바베큐 (카드)"},
    {id : 10 , value : "인원추가 (현금)"},
    {id : 11 , value : "인원추가 (이체)"},
    {id : 12 , value : "인원추가 (카드)"},
    {id : 13 , value : "계"},
    {id : 14 , value : "비고"},
    {id : 15 , value : "예약자 성함"}
]

class IncomeSingUp extends Component{

    classNumObj = () => {
        return classNumObj;
    }

    IncomTableHeaderObj = () => {
        return IncomTableHeaderObj;

    }

    render(){        
       

        return (
            <IncomeContent>
               수입일지 등록
              <IncomTableSingInApp  classNumObj={this.classNumObj()} IncomTableHeaderObj = {this.IncomTableHeaderObj()}/>
            </IncomeContent>
        );
    }
}

export default IncomeSingUp;
