import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserListComponent from '../user/UserListComponent';
import AddUserComponent from '../user/AddUserComponent'
import EditUserComponent from '../user/EditUserComponent';
import NavBar from '../route/NavBar';

import MainLogin from '../../pages/MainLogin';
import Login from '../../containers/mainLogin/Login';
import Register from '../../containers/mainLogin/Register';
import Findid from '../../containers/mainLogin/Findid';
import Findpw from '../../containers/mainLogin/Findpw';


import LoingWrapper from '../../component/mainLogin/LoingWrapper';

import PageMain from '../../pages/PageMain';
import UserModify from '../../pages/userModify';

class AppRouter extends Component{

    render(){
        return (            
            <Router>
                    <NavBar />
                    <Switch>
                        <Route exact path="/" component = {MainLogin}/>
                        <Route path="/persion-main" component = {PageMain}/>
                        <Route path="/main-login" component = {MainLogin}/>
                        <Route path="/modify-user" component={UserModify} />

                        <Route path="/users" component={UserListComponent} />
                        <Route path="/add-user" component={AddUserComponent} />
                        <Route path="/edit-user" component={EditUserComponent} />
                        
                    </Switch>
            </Router>
    );
        }
}



  export default AppRouter;