import { Button, TextField } from '@material-ui/core';
import React, { Component } from 'react';
import ApiService from '../../ApiService';


import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../../action/loginActions';


class LoginPageComponent extends Component {
    constructor(props){
        super(props);
    
        this.state = {
          username: 'aaaa',
          password: 'bbbb',
        }
        this.LOGIN_USER = this.LOGIN_USER.bind(this);
  
      }

    onChange = (e) => {
        this.setState({
          [e.target.name] : e.target.value
        })
      }

    // loginGo = (e) => {
    //     e.preventDefault();
    //     let user = {
    //         username : this.state.username,
    //         password : this.state.password,
    //     }

    //   ApiService.loginUser(user)
    //   .then((response) => {
    //         if(response.data === ""){   
    //             alert("아이디 또는 비밀번호가 올바르지 않습니다.");
    //             throw new Error('아이디 또는 비밀번호가 올바르지 않습니다.');     
           
    //         } else {
    //             alert(user.username + "님 환영합니다");
    //            // window.localStorage.setItem('value' ,user.username);
    //             this.props.history.push('/users');
    //         }
    //     })
    //     .catch(err => {
    //         console.log('loginUser Err', err);
    //     })


        
    // }

    LOGIN_USER = (e) => {
        e.preventDefault();
        
        let user = {
            username : this.state.username,
            password : this.state.password,
        }
        
      ApiService.loginUser(user)
      .then((response) => {
            if(response.data === ""){   
                alert("아이디 또는 비밀번호가 올바르지 않습니다.");
                throw new Error('아이디 또는 비밀번호가 올바르지 않습니다.');     
          
            } else {

                alert(user.username + "님 환영합니다");
                this.props.history.push('/users');

                // 로그인 정보 저장
                this.props.LOGIN_USER(user.username);
                //window.localStorage.setItem('value' ,user.username);
                
            }
        })
        .catch(err => {
            console.log('loginUser Err', err);
        })
   
    }

    render(){
      
        return(
            <div>
                <form style = {formContainer}>
                <TextField type = "text" placeholder="id 입력" name = "username"
                fullWidth margin="normal" value={this.state.username} onChange={this.onChange}></TextField>

                <TextField type = "password" placeholder="password 입력" name = "password"
                fullWidth margin="normal" value={this.state.password} onChange={this.onChange}></TextField>
                
                <Button variant="contained" color="primary" onClick={
                  this.LOGIN_USER
                  }>로그인</Button>

                </form>
            </div>
        )
    }   
}

const formContainer = {
    display: 'flex',
    flexFlow: 'row wrap'
  }

 const mapStateToProps = (state) => ({
     storeIsLoading: state.loadingReucer.isLoading ,
   });

 const mapDispatchToProps = (dispatch) => ({
  LOGIN_USER: (username) => dispatch(actions.loginUser(username))
 });
  
export default connect(mapStateToProps, mapDispatchToProps) (withRouter(LoginPageComponent));

