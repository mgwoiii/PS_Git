import { Component } from "react";
import { Route } from "react-router";
import ExpenditureWrapper from "../../component/Expenditure/ExpenditureWrapper"

import Expenditure from '../../containers/Expenditure/Expenditure';




class expenditureMain extends Component {
    render(){
        return (           
            <ExpenditureWrapper>
                    <Route path = "/persion-main/expenditure/expenditure" component={Expenditure}/>
            </ExpenditureWrapper>
        );
    }
}

export default expenditureMain;