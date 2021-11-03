import { Component } from "react";
import { Route } from "react-router";
import ExpenditureWrapper from "../../component/Expenditure/ExpenditureWrapper"

import Expenditure from '../../containers/Expenditure/Expenditure';
import ExpenditureDayDetail from '../../containers/Expenditure/ExpenditureDayDetail';
import ExpenditureMonth from '../../containers/Expenditure/ExpenditureMonth';

class expenditureMain extends Component {
    render(){
        return (           
            <ExpenditureWrapper>
                <Route path = "/persion-main/expenditure/Expenditure" component={Expenditure}/>
                <Route path = "/persion-main/Expenditure/ExpenditureDayDetail" component={ExpenditureDayDetail}/>                                         
                <Route path = "/persion-main/Expenditure/ExpenditureMonth" component={ExpenditureMonth}/>     
            </ExpenditureWrapper>
        );
    }
}

export default expenditureMain;