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
import Findpw from '../containers/mainLogin/Findpw';

class mainLogin extends Component {

    
    render() {
        return (
                <LoginWrapper>
                    <Route path="/main-login/login" component = {Login}/>
                    <Route path="/main-login/register" component = {Register}/>
                    <Route path="/main-login/findid" component = {Findid}/>
                    <Route path="/main-login/Findpw" component = {Findpw}/>
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
)(mainLogin);