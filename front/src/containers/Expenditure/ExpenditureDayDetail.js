import { Component } from "react";
import ExpenditureContent  from '../../component/Expenditure/ExpenditureContent';
import ExpendDayApp from "./Template/ExpendDay/ExpendDayApp";
import { withRouter } from 'react-router';




class ExpenditureDayDetail extends Component{



    render(){
        return (
            <ExpenditureContent>

                <ExpendDayApp date ={this.props.location.date} />
            </ExpenditureContent>
        );
    }
}

export default withRouter(ExpenditureDayDetail);

