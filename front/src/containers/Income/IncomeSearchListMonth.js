import { Component } from "react";
import IncomeContent  from '../../component/Income/IncomeContent';
import IncomeListMonthApp from './Template/IncomeListMonth/IncomeListMonthApp'
class IncomeSearchListMonth extends Component{
    render(){
        return (
            <IncomeContent>
            
               <IncomeListMonthApp />

            </IncomeContent>
        );
    }
}

export default IncomeSearchListMonth;
