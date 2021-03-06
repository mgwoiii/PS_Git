import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserListComponent from '../user/UserListComponent';
import AddUserComponent from '../user/AddUserComponent'
import EditUserComponent from '../user/EditUserComponent';

import MainLogin from '../../pages/MainLogin';
import PageMain from '../../pages/PageMain';
import UserModify from '../../pages/userModify';

class AppRouter extends Component{

    render(){
        return (            
            <Router>
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