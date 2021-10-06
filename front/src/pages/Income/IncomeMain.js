import { Component } from "react";
import { Route } from "react-router";
import IncomeWrapper from "../../component/Income/IncomeWrapper"

import Income from '../../containers/Income/Income';
import IncomeSingUp from '../../containers/Income/IncomeSingUp';

class IncomeMain extends Component {
    render(){
        return (           

            <IncomeWrapper>
                <Route path = "/persion-main/Income/Income" component={Income}/>
                <Route path = "/persion-main/Income/IncomeSingUp" component={IncomeSingUp}/>
            </IncomeWrapper>
        );
    }
}

export default IncomeMain;