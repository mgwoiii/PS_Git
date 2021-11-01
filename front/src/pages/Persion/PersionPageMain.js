import { Component } from "react";
import { Route } from "react-router";
import PersionWrapper from "../../component/Persion/PersionWrapper"

import PersionMain from '../../containers/PersionMain/PersionMain';
import PersionMainDayDetail from '../../containers/PersionMain/PersionMainDayDetail';




class PageMain extends Component {
    render(){
        return (           
            <PersionWrapper>
                <Route path = "/persion-main/Persion/PersionMain" component={PersionMain}/>
                <Route path = "/persion-main/Persion/PersionMainDayDetail" component={PersionMainDayDetail}/>    
            </PersionWrapper>
        );
    }
}                


export default PageMain;