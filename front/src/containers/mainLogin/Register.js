import React, { Component } from 'react';
import InputWithLabel from '../../component/mainLogin/InputWithLabel';
import LoginButton from '../../component/mainLogin/loginButton';
import LoginContent from '../../component/mainLogin/LoginContent';

class Register extends Component {
    render() {
        return (
            <LoginContent title="회원가입">
                <InputWithLabel label="아이디" name="email" placeholder="아이디 (★★★@★★★.com) 형식"/>
                <InputWithLabel label="비밀번호" name="password" placeholder="비밀번호" type="password"/>
                <InputWithLabel label="비밀번호 확인" name="password" placeholder="비밀번호 확인" type="password"/>
                <InputWithLabel label="이름" name="username" placeholder="이름"/>
                <InputWithLabel label="전화번호" name="phone" placeholder="전화번호"/>
                <InputWithLabel label="생년월일" name="phone" placeholder="생년월일(YYMMDD)"/>
                
                <LoginButton>회원가입</LoginButton>
            
            </LoginContent>
        );
    }
}


export default Register;