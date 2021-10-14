import React, { Component } from 'react';
import InputWithLabel from '../../component/mainLogin/InputWithLabel';
import LoginButton from '../../component/mainLogin/loginButton';
import LoginContent from '../../component/mainLogin/LoginContent';


class Findpw extends Component {

    render(){

        return (
            <LoginContent title = "비밀번호 찾기">
                <InputWithLabel label="아이디" name="userId" placeholder="아이디"/>
                <InputWithLabel label="이름" name="userName" placeholder="이름"/>
                <InputWithLabel label="전화번호" name="userPhonNumber" placeholder="전화번호"/>
                <InputWithLabel label="생년월일" name="userBirthday" placeholder="생년월일"/>
                <LoginButton>비밀번호 찾기</LoginButton>

            </LoginContent>
        );
    }
}

export default Findpw;