import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ApiService from '../../ApiServer/login/ApiService';

import LoginContent  from '../../component/mainLogin/LoginContent';
import InputWithLabel from '../../component/mainLogin/InputWithLabel';
import LoginButton from '../../component/mainLogin/loginButton';
import RightAlignedLink from '../../component/mainLogin/RightAlignedLink';

import * as actions from '../../action/loadingActions';

class Login extends Component {

    constructor(props){
        super(props);
    
        this.state = {
          userId: 'admin',
          userPassword: 'admin'
        }
    
    
      }

      onChange = (e) => {
        this.setState({
          [e.target.name] : e.target.value
        })
      }

      handleLocalLogin = (e) => {
        e.preventDefault();

        let user = {
            userId : this.state.userId,
            userPassword : this.state.userPassword,
        }

        ApiService.loginUser(user)
        .then((response) => {

              if(response.data === ""){   
                  alert("아이디 또는 비밀번호가 올바르지 않습니다.");
                  throw new Error('아이디 또는 비밀번호가 올바르지 않습니다.');     
            
              } else {
                  this.props.LOADING_FALSE();

                  window.sessionStorage.setItem('name', response.data.userId);
                  window.sessionStorage.setItem('id', response.data.id);
                  this.props.history.push('/persion-main/Persion/PersionMain');
         
              }
          })
          .catch(err => {
              console.log('loginUser Err', err);
          })

          // 임시 (반드시 지우기)
         // this.props.history.push('/persion-main/persionMain');
      }


    render() {
        const { handleLocalLogin } = this;

        return (
            <LoginContent title="로그인">
                <InputWithLabel label="아이디" name="userId" placeholder="아이디" value = {this.state.userId} onChange={this.onChange}/>
                <InputWithLabel label="비밀번호" name="userPassword" placeholder="비밀번호" type="password" value = {this.state.userPassword} onChange={this.onChange}/>
                <LoginButton onClick={handleLocalLogin}>로그인</LoginButton>
                <RightAlignedLink to="/main-login/register">회원가입</RightAlignedLink> 
                <RightAlignedLink to="/main-login/findid">아이디 찾기</RightAlignedLink>
                <RightAlignedLink to="/main-login/findpw">비밀번호 찾기</RightAlignedLink>
            </LoginContent>
        );
    }
}



const mapStateToProps = (state) => ({
    storeIsLoading: state.loadingReucer.isLoading ,
  });

const mapDispatchToProps = (dispatch) => ({
  LOADING_FALSE: () => dispatch(actions.loadingFalse()),
});

export default connect(mapStateToProps, mapDispatchToProps) (withRouter(Login));

