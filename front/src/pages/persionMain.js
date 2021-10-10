import { Component } from "react";
import { Route } from "react-router";
import PersionWrapper from "../component/persionMain/persionWrapper";

import PersionMain from '../containers/persionMain/persionMain';

import IncomeMain from './Income/IncomeMain';
import ExpenditureMain from './Expenditure/ExpenditureMain';
import TaxMain from './Tax/TaxMain';
import AdminMain from './Admin/AdminMain';



class persionMain extends Component {

    render(){
        return (           

            <PersionWrapper>
                <Route path = "/persion-main/persionMain" component={PersionMain}/>
                <Route path = "/persion-main/Income" component={IncomeMain}/>
                <Route path = "/persion-main/Expenditure" component={ExpenditureMain}/>
                <Route path = "/persion-main/Tax" component={TaxMain}/>
                <Route path = "/persion-main/Admin" component={AdminMain}/>
            </PersionWrapper>
        );
    }
}

export default persionMain;