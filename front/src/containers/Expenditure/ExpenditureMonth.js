import { Component } from "react";
import ExpenditureContent  from '../../component/Expenditure/ExpenditureContent';
import ExpendYearApp from "./Template/ExpendYear/ExpendYearApp";

class ExpenditureMonth extends Component{

    render(){
        return (
            <ExpenditureContent>
                    <ExpendYearApp />
            </ExpenditureContent>
        );
    }
}

export default ExpenditureMonth;

