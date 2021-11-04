import { Component } from "react";
import { Route } from "react-router";
import ExpenditureWrapper from "../../component/Expenditure/ExpenditureWrapper"

import Expenditure from '../../containers/Expenditure/Expenditure';
import ExpenditureDayDetail from '../../containers/Expenditure/ExpenditureDayDetail';
import ExpenditureMonth from '../../containers/Expenditure/ExpenditureMonth';
import PrivateRoute from '../../component/common/PrivateRoute';

class expenditureMain extends Component {
    render(){
        return (           
            <ExpenditureWrapper>
                <PrivateRoute path = "/persion-main/expenditure/Expenditure" component={Expenditure}/>
                <PrivateRoute path = "/persion-main/Expenditure/ExpenditureDayDetail" component={ExpenditureDayDetail}/>                                         
                <PrivateRoute path = "/persion-main/Expenditure/ExpenditureMonth" component={ExpenditureMonth}/>     
            </ExpenditureWrapper>
        );
    }
}

export default expenditureMain;