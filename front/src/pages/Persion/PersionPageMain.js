import { Component } from "react";
import { Route } from "react-router";
import PersionWrapper from "../../component/Persion/PersionWrapper"

import PersionMain from '../../containers/PersionMain/PersionMain';
import PersionMainDayDetail from '../../containers/PersionMain/PersionMainDayDetail';
import PersionMainInsert from '../../containers/PersionMain/PersionMainInsert';




class PageMain extends Component {
    render(){
        return (           
            <PersionWrapper>
                <Route path = "/persion-main/Persion/PersionMain" component={PersionMain}/>
                <Route path = "/persion-main/Persion/PersionMainDayDetail" component={PersionMainDayDetail}/>    
                <Route path = "/persion-main/Persion/PersionMainInsert" component={PersionMainInsert}/>    

                
            </PersionWrapper>
        );
    }
}

export default PageMain;