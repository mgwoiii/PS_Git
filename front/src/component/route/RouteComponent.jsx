import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserListComponent from '../../containers/UserListContainer';
import AddUserComponent from '../user/AddUserComponent'
import EditUserComponent from '../user/EditUserComponent';
import LoginPageComponent from '../login/LoginPageComponent';
import NavBar from '../route/NavBar';
//import PrivateRoute from '../../lib/PrivateRoute';

import MainLogin from '../../pages/mainLogin';
import persionMain from '../../pages/persionMain';
import UserModify from '../../pages/userModify';

class AppRouter extends Component{

    constructor(props) {
        super(props);

        this.state = {
            isLoading : true,
            username : null,
            id : null
            // username : window.sessionStorage.getItem('name'),
            // id : window.sessionStorage.getItem('id')
        }


    }

    render(){
        return (
        <div>
            
            <Router>
                <div style = {style}>
                    <NavBar username ={this.state.username} id = {this.state.id} />
                    <Switch>
                        <Route exact path="/" component={UserListComponent} />
                        <Route path="/persion-main" component = {persionMain}/>
                        <Route path="/users" component={UserListComponent} />
                        <Route path="/add-user" component={AddUserComponent} />
                        <Route path="/edit-user" component={EditUserComponent} />
                        
                        <Route path="/main-login" component = {MainLogin}/>
                        <Route path="/modify-user" component={UserModify} />
                        <Route puth="/login-page" component={LoginPageComponent} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
        }
}

const style = {
    color: 'black',
    margin: '10px'
    
  }

  export default AppRouter;