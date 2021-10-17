import React, { Component } from 'react';
import InputWithLabel from '../../component/mainLogin/InputWithLabel';
import LoginButton from '../../component/mainLogin/loginButton';
import LoginContent from '../../component/mainLogin/LoginContent';

class Register extends Component {

    constructor(props){
        super(props);

        this.state = {
            userId : null,
        }
    }
    render() {
        return (
            <LoginContent title="회원가입">
                <InputWithLabel label="아이디" value = {this.state.userId} name="userId" placeholder="아이디 (★★★@★★★.com) 형식"/>
                <InputWithLabel label="비밀번호" name="userPassword" placeholder="비밀번호" type="userPassword"/>
                <InputWithLabel label="비밀번호 확인" name="userPassword2" placeholder="비밀번호 확인" type="userPassword2"/>
                <InputWithLabel label="이메일" name="userId" placeholder="이메일"  onChange={this.onChange}/>
                <InputWithLabel label="이름" name="userName" placeholder="이름"  onChange={this.onChange}/>
                <InputWithLabel label="전화번호" name="userPhonNumber" placeholder="전화번호"/>
                <InputWithLabel label="생년월일" name="userBirthday" placeholder="생년월일(YYMMDD)"/>

                <LoginButton>회원가입</LoginButton>
            
            </LoginContent>
        );
    }
}


export default Register;