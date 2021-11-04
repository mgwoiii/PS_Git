import { Component } from "react";
import { Route } from "react-router";
import AdminWrapper from "../../component/Admin/AdminWrapper"

import Admin from '../../containers/Admin/Admin';
import AdminUserInfo from '../../containers/Admin/AdminUserInfo';
import PrivateRoute from '../../component/common/PrivateRoute';




class AdminMain extends Component {
    render(){
        return (           
            <AdminWrapper>
                <PrivateRoute path = "/persion-main/Admin/Admin/:page" component={Admin}/>    
                <PrivateRoute path = "/persion-main/Admin/AdminUserInfo" component={AdminUserInfo}/>    
            </AdminWrapper>
        );
    }
}

export default AdminMain;