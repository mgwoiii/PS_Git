import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
//import {bindActionCreators} from 'redux';
//import * as baseActions from 'redux/modules/base';
//import { AuthWrapper } from 'components/Auth';
import LoginWrapper from '../component/mainLogin/LoingWrapper';

import Login from '../containers/mainLogin/Login';
import Register from '../containers/mainLogin/Register';
import Findid from '../containers/mainLogin/Findid';
import FindIdResult from '../containers/mainLogin/FindIdResult';
import Findpw from '../containers/mainLogin/Findpw';
import FindpwModify from '../containers/mainLogin/FindpwModify';
import PublicRoute from '../component/common/PublicRoute';

class MainLogin extends Component {

    
    render() {
    return (
                <LoginWrapper>
                    <PublicRoute exact path="/" component = {Login}/>
                    <PublicRoute path="/main-login/login" component = {Login}/>
                    <PublicRoute path="/main-login/register" component = {Register}/>
                    <PublicRoute path="/main-login/findid" component = {Findid}/>
                    <PublicRoute path="/main-login/FindIdResult" component = {FindIdResult}/>
                    <PublicRoute path="/main-login/Findpw" component = {Findpw}/>
                    <PublicRoute path="/main-login/FindpwModify" component = {FindpwModify}/>
                    
                    
                </LoginWrapper>
        );
    }
}

export default connect(
    (state) => ({

    }),
    (dispatch) => ({
       // BaseActions: bindActionCreators(baseActions, dispatch)
    })
)(MainLogin);