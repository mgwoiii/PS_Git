import { Component } from "react";
import { Route } from "react-router";
import PersionWrapper from "../component/persionMain/persionWrapper";

import PersionMain from '../containers/persionMain/persionMain';
import Tax from '../containers/persionMain/Tax';
import Admin from '../containers/persionMain/Admin';

import IncomeMain from './Income/IncomeMain';
import ExpenditureMain from './Expenditure/expenditureMain';

class persionMain extends Component {

    render(){
        return (           

            <PersionWrapper>
                <Route path = "/persion-main/persionMain" component={PersionMain}/>
                <Route path = "/persion-main/Income" component={IncomeMain}/>
                <Route path = "/persion-main/expenditure" component={ExpenditureMain}/>
                <Route path = "/persion-main/tax" component={Tax}/>
                <Route path = "/persion-main/admin" component={Admin}/>
            </PersionWrapper>
        );
    }
}

export default persionMain;