import { Component } from "react";
import { Route } from "react-router";
import PageMainWrapper from "../component/PageMain/PageMainWrapper";

import PersionPageMain from './Persion/PersionPageMain'
import IncomeMain from './Income/IncomeMain';
import ExpenditureMain from './Expenditure/ExpenditureMain';
import AdminMain from './Admin/AdminMain';
import NavBar from "../component/route/NavBar";

import PrivateRoute from '../component/common/PrivateRoute';


class PageMain extends Component {

    render(){
        return (
            <>       
            <NavBar />
            <PageMainWrapper>
                <PrivateRoute path = "/persion-main/Persion" component={PersionPageMain}/>
                <PrivateRoute path = "/persion-main/Income" component={IncomeMain}/>
                <PrivateRoute path = "/persion-main/Expenditure" component={ExpenditureMain}/>
                <PrivateRoute path = "/persion-main/Admin" component={AdminMain}/>
            </PageMainWrapper>
            </>
        );
    }
}

export default PageMain;