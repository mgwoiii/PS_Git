import { Component } from "react";
import { Route } from "react-router";
import PersionWrapper from "../component/persionMain/persionWrapper";

import PersionMain from '../containers/persionMain/persionMain';
import Expenditure from '../containers/persionMain/Expenditure';
import Tax from '../containers/persionMain/Tax';
import Admin from '../containers/persionMain/Admin';

import IncomeMain from './Income/IncomeMain';




class persionMain extends Component {

    // 페이지에 진입할 때
    componentDidMount(){

    }

    // 페이지에서 벗어 날 때
    // componentWillUnmount(){

    // }

    render(){
        return (           

            <PersionWrapper>
                <Route path = "/persion-main/persionMain" component={PersionMain}/>
                <Route path = "/persion-main/Income" component={IncomeMain}/>
                <Route path = "/persion-main/expenditure" component={Expenditure}/>
                <Route path = "/persion-main/tax" component={Tax}/>
                <Route path = "/persion-main/admin" component={Admin}/>
            </PersionWrapper>
        );
    }
}

export default persionMain;