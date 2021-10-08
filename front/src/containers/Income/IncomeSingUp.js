import { Component } from "react";
import IncomeContent  from '../../component/Income/IncomeContent';
import IncomTableApp from "./IncomeTable/IncomTableApp";


class IncomeSingUp extends Component{

    render(){
        
        return (
            <IncomeContent>
               수입일지 등록
               <IncomTableApp />
            </IncomeContent>
        );
    }
}

export default IncomeSingUp;
