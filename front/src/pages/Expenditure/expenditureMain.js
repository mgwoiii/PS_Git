import { Component } from "react";
import { Route } from "react-router";
import ExpenditureWrapper from "../../component/Expenditure/ExpenditureWrapper"

import Expenditure from '../../containers/Expenditure/Expenditure';
import ExpenditureRegister from '../../containers/Expenditure/ExpenditureRegister';
import ExpenditureDayDetail from '../../containers/Expenditure/ExpenditureDayDetail';
import ExpenditureMonth from '../../containers/Expenditure/ExpenditureMonth';
import ExpenditureModify from '../../containers/Expenditure/ExpenditureModify';




class expenditureMain extends Component {
    render(){
        return (           
            <ExpenditureWrapper>
                <Route path = "/persion-main/expenditure/expenditure" component={Expenditure}/>
                <Route path = "/persion-main/Expenditure/ExpenditureRegister" component={ExpenditureRegister}/>
                <Route path = "/persion-main/Expenditure/ExpenditureDayDetail" component={ExpenditureDayDetail}/>                                         
                <Route path = "/persion-main/Expenditure/ExpenditureMonth" component={ExpenditureMonth}/>     
                <Route path = "/persion-main/Expenditure/ExpenditureModify" component={ExpenditureModify}/>     
            </ExpenditureWrapper>
        );
    }
}

export default expenditureMain;