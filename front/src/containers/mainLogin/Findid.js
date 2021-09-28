import React, { Component } from 'react';
import InputWithLabel from '../../component/mainLogin/InputWithLabel';
import LoginButton from '../../component/mainLogin/loginButton';
import LoginContent from '../../component/mainLogin/LoginContent';


class Findid extends Component {

    render(){

        return (
            <LoginContent title = "아이디 찾기">
                <InputWithLabel label="이름" name="username" placeholder="이름"/>
                <InputWithLabel label="전화번호" name="phone" placeholder="전화번호"/>
                <LoginButton>아이디 찾기</LoginButton>

            </LoginContent>
        );
    }
}

export default Findid;