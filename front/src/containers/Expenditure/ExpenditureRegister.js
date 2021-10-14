import { Component } from "react";
import ExpenditureContent  from '../../component/Expenditure/ExpenditureContent';
import ExpendDayApp from "./Template/ExpendDay/ExpendDayApp";


class ExpenditureRegister extends Component{


    render(){
        return (
            <ExpenditureContent>
                   <ExpendDayApp />
            </ExpenditureContent>
        );
    }
}

export default ExpenditureRegister;

