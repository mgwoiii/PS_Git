import React, { Component } from 'react';
import styled from 'styled-components';
import InputWithLabel from '../../component/mainLogin/InputWithLabel';
import LoginButton from '../../component/mainLogin/loginButton';
import LoginContent from '../../component/mainLogin/LoginContent';
import ApiService from '../../ApiServer/login/ApiService';


class Register extends Component {

    constructor(props){
        super(props);

        this.state = {
            userId : '',
            userPassword : '',
            userPassword2 : '',
            userName : '',
            userPhonNumber : '',
            userBirthday : '',
            checkPassword : '📝패스워드 입력📝',
            checkId : '📝아이디 입력📝'
        }
    }

        //input onChange 이벤트
        handleChange = (e) => {
            this.setState({
            [e.target.name]: e.target.value,
            });
            // 파라미터로 받은 event.target.name이 name 아닐 경우에만 handleCheck함수 실행
            // setTimeout으로 딜레이를 준 이유는 딜레이를 주지 않았을 경우 setState 변경된 값이 handleCheck에서 바로 반영되지 않음
            if (e.target.name !== 'userId') {
                setTimeout(this.handleCheckPw, 100);
            }

            if (e.target.name === 'userId') {
                //setTimeout(this.handleCheck, 100);
                setTimeout(this.handleCheckId, 100);

            }

        };

        // id 체크
        handleCheckId = () => {

            let user = {
                userId : this.state.userId
            }
            let regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
           
             ApiService.loginChk(user)
            .then((response) => {
                
                    // 
                    if (this.state.userId.length < 1) {
                        
                            this.setState({
                                checkId: '📝아이디 입력📝',
                            });
                     
                        

                    // 
                    } else if (this.state.userId === response.data.userId) {
                        if(regExp.test(this.state.userId)){
                            this.setState({
                                checkId: '❌ 이미 등록된 아이디 입니다.❌',
                            });
                        }else{
                            this.setState({
                                checkId: '❌ 이메일 형식이 유효하지 않습니다.❌',
                            });
                        }
                        

                    // 
                    } else {
                        
                        if(regExp.test(this.state.userId)){
                            this.setState({
                                checkId: '✅사용 가능한 아이디 입니다.✅ ',
                            });
                        }else{
                            this.setState({
                                checkId: '❌ 이메일 형식이 유효하지 않습니다.❌',
                            });
                        }
                    }

              })
              .catch(err => {
                  console.log('loginUser Err : ', err);
              })


        
            
        }

        // 비밀번호 체크
        handleCheckPw = () => {
            const { userPassword, userPassword2 } = this.state;

            // 비밀번호 무입력 상태일 때와 둘 중에 하나의 값이 입력 상태가 아닐때
            if (userPassword.length < 1 || userPassword2.length < 1) {
                this.setState({
                    checkPassword: '📝패스워드 입력📝',
                });

            // 비밀번호가 같다면 일치
            } else if (userPassword === userPassword2) {
                this.setState({
                    checkPassword: '✅일치 ✅',
                });

            // 비밀번호가 같지 않다면 불일치
            } else {
                this.setState({
                    checkPassword: '❌불일치 ❌',
                });
            }
        };

    render() {
        return (
            <LoginContent title="회원가입">
                <InputWithLabel label="아이디" defaultValue = {this.state.userId} onChange={this.handleChange} 

                name="userId" placeholder="아이디 (★★★@★★★.com) 형식" type="text" />
                
                <Label>
                    {this.state.checkId}
                </Label>

                <InputWithLabel label="비밀번호" name="userPassword" defaultValue = {this.state.userPassword}  onChange={this.handleChange} 
                                        placeholder="비밀번호" type="password"/>

                <InputWithLabel label="비밀번호 확인" name="userPassword2" defaultValue = {this.state.userPassword2}  onChange={this.handleChange}   
                                        placeholder="비밀번호 확인" type="password"/>
                <Label>
                    일치여부 : {this.state.checkPassword}
                </Label>
                <InputWithLabel label="이름" name="userName" defaultValue = {this.state.userName}  onChange={this.onChange}  
                                        placeholder="비밀번호 확인" type="text"/>

                <InputWithLabel label="전화번호" name="userPhonNumber" defaultValue = {this.state.userPhonNumber}  onChange={this.onChange}  
                                        placeholder="전화번호" type="text"/>

                <InputWithLabel label="생년월일" name="userBirthday" defaultValue = {this.state.userBirthday}  onChange={this.onChange}  
                placeholder="생년월일(YYMMDD)" type="text"/>

                <LoginButton onClick={this.ths} >회원가입</LoginButton>
            
            </LoginContent>
        );
    }
}


export default Register;

const Label = styled.div`
    

    width: 100%;
    outline: none;
    border-radius: 0px;
    line-height: 2.5rem;
    font-size: 1.2rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;

`;