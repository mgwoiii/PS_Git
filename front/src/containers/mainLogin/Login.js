import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ApiService from '../../ApiService';
import LoginContent  from '../../component/mainLogin/LoginContent';
import InputWithLabel from '../../component/mainLogin/InputWithLabel';
import LoginButton from '../../component/mainLogin/loginButton';
import RightAlignedLink from '../../component/mainLogin/RightAlignedLink';

import * as actions from '../../action/loadingActions';
import * as actionsLogin from '../../action/loginActions';

// class Login extends Component {
    
//     render() {
//         return (
//             <AuthContent title="로그인">
//                 <InputWithLabel label="아이디" name="username" placeholder="아이디"/>
//                 <InputWithLabel label="비밀번호" name="password" placeholder="비밀번호" type="password"/>
//                 <LoginButton >로그인</LoginButton>
            
//                 <RightAlignedLink to="/main-login/register">회원가입</RightAlignedLink> 
//                 <RightAlignedLink to="/add-user">아이디 찾기</RightAlignedLink>
//                 <RightAlignedLink to="/add-user">비밀번호 찾기</RightAlignedLink>
//             </AuthContent>
//         );
//     }
// }


// export default Login;

class Login extends Component {

    constructor(props){
        super(props);
    
        this.state = {
          username: 'aaaa',
          password: 'bbbb'
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
                  // this.props.history.push('/users');
                  this.props.history.push('/persion-main/persionMain');
  
                  // 로그인 정보 저장
                  this.props.LOGIN_USER(user.username);
                  //window.localStorage.setItem('value' ,user.username);
                  this.props.LOADING_FALSE();
                  
              }
          })
          .catch(err => {
              console.log('loginUser Err', err);
          })
      }


    render() {
        const { handleLocalLogin } = this;

        return (
            <LoginContent title="로그인">
                <InputWithLabel label="아이디" name="username" placeholder="아이디" value = {this.state.username} onChange={this.onChange}/>
                <InputWithLabel label="비밀번호" name="password" placeholder="비밀번호" type="password"value = {this.state.password} onChange={this.onChange}/>
                <LoginButton onClick={handleLocalLogin}>로그인</LoginButton>
                <RightAlignedLink to="/main-login/register">회원가입</RightAlignedLink> 
                <RightAlignedLink to="/main-login/findid">아이디 찾기</RightAlignedLink>
                <RightAlignedLink to="/main-login/findpw">비밀번호 찾기</RightAlignedLink>
            </LoginContent>
        );
    }
}


//export default Login;

const mapStateToProps = (state) => ({
    storeIsLoading: state.loadingReucer.isLoading ,
  });

const mapDispatchToProps = (dispatch) => ({

  LOADING_FALSE: () => dispatch(actions.loadingFalse()),
  LOGIN_USER : (user) => dispatch(actionsLogin.loginUser(user))
     
});
 
export default connect(mapStateToProps, mapDispatchToProps) (withRouter(Login));

