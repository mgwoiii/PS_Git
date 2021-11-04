import { Component } from "react";
import { Route } from "react-router";
import IncomeWrapper from "../../component/Income/IncomeWrapper"

import Income from '../../containers/Income/Income';
import IncomeSingUp from '../../containers/Income/IncomeSingUp';
import IncomeSearch from '../../containers/Income/IncomeSearch';
import IncomeSearchList from '../../containers/Income/IncomeSearchList';
import IncomeSearchListMonth from '../../containers/Income/IncomeSearchListMonth';
import IncomeModify from '../../containers/Income/IncomeModify';
import PrivateRoute from '../../component/common/PrivateRoute';





class IncomeMain extends Component {
    render(){
        return (           

            <IncomeWrapper>
                <PrivateRoute path = "/persion-main/Income/Income" component={Income}/>
                <PrivateRoute path = "/persion-main/Income/IncomeSingUp" component={IncomeSingUp}/>
                <PrivateRoute path = "/persion-main/Income/IncomeSearch" component={IncomeSearch}/>
                <PrivateRoute path = "/persion-main/Income/IncomeSearchList" component={IncomeSearchList}/>
                <PrivateRoute path = "/persion-main/Income/IncomeSearchListMonth" component={IncomeSearchListMonth}/>
                <PrivateRoute path = "/persion-main/Income/IncomeModify" component={IncomeModify}/>

            </IncomeWrapper>
        );
    }
}

export default IncomeMain;