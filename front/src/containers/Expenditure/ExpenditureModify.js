import { Component } from "react";
import ExpenditureContent  from '../../component/Expenditure/ExpenditureContent';
import ExpendDayApp from "./Template/ExpendDay/ExpendDayApp";

class ExpenditureModify extends Component{

    render(){
        return (
            <ExpenditureContent>
                    ExpenditureModify
                    <ExpendDayApp />
            </ExpenditureContent>
        );
    }
}

export default ExpenditureModify;

