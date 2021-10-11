import { Component } from "react";
import AdminContent  from '../../component/Admin/AdminContent';
import AdminApp from "./Template/AdminTable/AdminApp";

class Admin extends Component{

    render(){
        return (
            <AdminContent>
                    관리자 페이지
            <AdminApp />
            </AdminContent>
        );
    }
}

export default Admin;

