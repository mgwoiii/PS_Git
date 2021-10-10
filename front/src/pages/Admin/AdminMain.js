import { Component } from "react";
import { Route } from "react-router";
import AdminWrapper from "../../component/Admin/AdminWrapper"

import Admin from '../../containers/Admin/Admin';




class AdminMain extends Component {
    render(){
        return (           
            <AdminWrapper>
                <Route path = "/persion-main/Admin/Admin" component={Admin}/>    
            </AdminWrapper>
        );
    }
}

export default AdminMain;