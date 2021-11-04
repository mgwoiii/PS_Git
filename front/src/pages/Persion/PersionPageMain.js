import { Component } from "react";
import { Route } from "react-router";
import PersionWrapper from "../../component/Persion/PersionWrapper"

import PersionMain from '../../containers/PersionMain/PersionMain';
import PersionMainDayDetail from '../../containers/PersionMain/PersionMainDayDetail';
import PrivateRoute from '../../component/common/PrivateRoute';




class PageMain extends Component {
    render(){
        return (           
            <PersionWrapper>
                <PrivateRoute path = "/persion-main/Persion/PersionMain" component={PersionMain}/>
                <PrivateRoute path = "/persion-main/Persion/PersionMainDayDetail" component={PersionMainDayDetail}/>    
            </PersionWrapper>
        );
    }
}                


export default PageMain;