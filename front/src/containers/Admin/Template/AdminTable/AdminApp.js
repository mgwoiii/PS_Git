import React, { Component } from 'react';
import styled from "styled-components";
import AdminHeader from "./AdminHeader";
import AdminBody from "./AdminBody";



class AdminApp extends Component {
    
    render(){
        return(        
            <IncomTable>
                <AdminHeader />
                <AdminBody classNumObj = {this.props.classNumObj} 
                IncomTableHeaderObj = {this.props.IncomTableHeaderObj}
                tsetValue = {this.props.tsetValue} urlName ={this.props.urlName}
                />
            </IncomTable>
        )
    }
}

export default AdminApp;

const IncomTable = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border : none;

    width : 100%;

`