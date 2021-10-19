import React, { Component } from 'react';
import styled from "styled-components";
import AdminHeader from "./AdminHeader";
import AdminBody from "./AdminBody";
import ApiService from'../../../../ApiServer/admin/ApiService';


class AdminApp extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            users : [],
            message : null,
        }
        
    }

    componentDidMount(){
      
        this.reloadUserList();
        
    }

    reloadUserList = () => {
   
        ApiService.userIdListRead()
        .then((response) => {
              this.setState({
                users: response.data ,
              })
        })
        .catch(err => {
            console.log('reloadUserList() Error!', err);
        })
    }

    render(){
        return(        
            <Table>
                <AdminHeader />
                <AdminBody UserDate = {this.state.users} />
            </Table>
        )
    }
}

export default AdminApp;

const Table = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border : none;

    width : 100%;

`