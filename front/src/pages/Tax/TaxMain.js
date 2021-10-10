import { Component } from "react";
import { Route } from "react-router";
import TaxWrapper from "../../component/Tax/TaxWrapper"

import Tax from '../../containers/Tax/Tax';
import TaxRegister from '../../containers/Tax/TaxRegister';
import TaxModify from '../../containers/Tax/TaxModify';
import TaxDetail from '../../containers/Tax/TaxDetail';



class TaxMain extends Component {
    render(){
        return (           
            <TaxWrapper>
                <Route path = "/persion-main/Tax/Tax" component={Tax}/>
                <Route path = "/persion-main/Tax/TaxRegister" component={TaxRegister}/>
                <Route path = "/persion-main/Tax/TaxModify" component={TaxModify}/>  
                <Route path = "/persion-main/Tax/TaxDetail" component={TaxDetail}/>                                         
            </TaxWrapper>
        );
    }
}

export default TaxMain;