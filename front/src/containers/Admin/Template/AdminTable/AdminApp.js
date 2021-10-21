import React, { Component } from 'react';
import styled from "styled-components";
import AdminHeader from "./AdminHeader";
import AdminBody from "./AdminBody";
import ApiService from'../../../../ApiServer/admin/ApiService';
import { withRouter } from 'react-router';


class AdminApp extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            users : [],
            message : null,
            page: 1, 
            perPageNum: '', 
            pageStart: '',
            displayPageNum: '',
            endPage: '',
            next: '',
            prev: '',
            startPage: '',
            totalCount: ''
        }
        this.props.history.push('/persion-main/Admin/Admin/1');

    }

    componentDidMount(){
        this.reloadUserList();
    }

    reloadUserList = (number) => {

        if(number === undefined)
            number = 1;
            
        ApiService.userIdListRead(number)
        .then((response) => {
              this.setState({
                users: response.data ,
              })
        })
        .catch(err => {
            console.log('reloadUserList() Error!', err);
        });

        ApiService.pageMaker(number)
        .then((response) => {

             this.setState({
                page: response.data.cri.page, 
                perPageNum: response.data.cri.perPageNum, 
                pageStart: response.data.cri.pageStart,
                displayPageNum: response.data.displayPageNum,
                endPage: response.data.endPage,
                next: response.data.next,
                prev: response.data.prev,
                startPage: response.data.startPage,
                totalCount: response.data.totalCount
              })

        }).catch(err => {
            console.log('userInfoRead() Error!', err);
        })

    }

    NumberPage = (i) =>{

            this.props.history.push('/persion-main/Admin/Admin/'+i);
            this.reloadUserList(i);
    
    }

    
    render(){
        return(        
            <Table>
                <AdminHeader />
                <AdminBody 
                    UserDate = {this.state.users}
                    page = {this.state.page}
                    perPageNum = {this.state.perPageNum}
                    pageStart = {this.state.pageStart}
                    displayPageNum = {this.state.displayPageNum}
                    endPage = {this.state.endPage}
                    next ={this.state.next}
                    prev ={this.state.prev}
                    startPage ={this.state.startPage}
                    totalCount ={this.state.totalCount}

                    prevPage = {this.prevPage}
                    nextPage = {this.nextPage}
                    NumberPage = {this.NumberPage}
                />
            </Table>
        )
    }
}

export default withRouter(AdminApp);

const Table = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border : none;

    width : 100%;

`