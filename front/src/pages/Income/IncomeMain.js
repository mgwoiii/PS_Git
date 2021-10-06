import { Component } from "react";
import { Route } from "react-router";
import IncomeWrapper from "../../component/Income/IncomeWrapper"

import Income from '../../containers/Income/Income';
import IncomeSingUp from '../../containers/Income/IncomeSingUp';
import IncomeSearch from '../../containers/Income/IncomeSearch';
import IncomeSearchList from '../../containers/Income/IncomeSearchList';
import IncomeModify from '../../containers/Income/IncomeModify';





class IncomeMain extends Component {
    render(){
        return (           

            <IncomeWrapper>
                <Route path = "/persion-main/Income/Income" component={Income}/>
                <Route path = "/persion-main/Income/IncomeSingUp" component={IncomeSingUp}/>
                <Route path = "/persion-main/Income/IncomeSearch" component={IncomeSearch}/>
                <Route path = "/persion-main/Income/IncomeSearchList" component={IncomeSearchList}/>
                <Route path = "/persion-main/Income/IncomeModify" component={IncomeModify}/>

                
            </IncomeWrapper>
        );
    }
}

export default IncomeMain;