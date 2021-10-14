import { Component } from "react";
import { Route } from "react-router";
import PageMainWrapper from "../component/PageMain/PageMainWrapper";

import PersionPageMain from './Persion/PersionPageMain'
import IncomeMain from './Income/IncomeMain';
import ExpenditureMain from './Expenditure/ExpenditureMain';
import AdminMain from './Admin/AdminMain';



class PageMain extends Component {

    render(){
        return (           

            <PageMainWrapper>
                <Route path = "/persion-main/Persion" component={PersionPageMain}/>
                <Route path = "/persion-main/Income" component={IncomeMain}/>
                <Route path = "/persion-main/Expenditure" component={ExpenditureMain}/>
                <Route path = "/persion-main/Admin" component={AdminMain}/>
            </PageMainWrapper>
        );
    }
}

export default PageMain;