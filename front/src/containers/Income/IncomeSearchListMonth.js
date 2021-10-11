import { Component } from "react";
import IncomeContent  from '../../component/Income/IncomeContent';
import IncomeListMonthApp from './Template/IncomeListMonth/IncomeListMonthApp'
class IncomeSearchListMonth extends Component{
    render(){
        return (
            <IncomeContent>
               수입일지  [21년 ㅇㅇ월] 조회
               <IncomeListMonthApp />

            </IncomeContent>
        );
    }
}

export default IncomeSearchListMonth;
