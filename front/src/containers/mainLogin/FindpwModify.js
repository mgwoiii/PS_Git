import React, { Component } from 'react';
import styled from 'styled-components';
import InputWithLabel from '../../component/mainLogin/InputWithLabel';
import LoginButton from '../../component/mainLogin/loginButton';
import LoginContent from '../../component/mainLogin/LoginContent';
import ApiService from '../../ApiServer/login/ApiService';


class FindpwModify extends Component {
        constructor(props){
            super(props);

            this.state = {
                userId : '',
                userPassword : '',
                userPassword2 : '',
                checkPassword : '๐ํจ์ค์๋ ์๋ ฅ๐',
                checkPassBool : false
            }
        }
        //input onChange ์ด๋ฒคํธ
        handleChange = (e) => {
            this.setState({
            [e.target.name]: e.target.value,
            });
            // ํ๋ผ๋ฏธํฐ๋ก ๋ฐ์ event.target.name์ด name ์๋ ๊ฒฝ์ฐ์๋ง handleCheckํจ์ ์คํ
            // setTimeout์ผ๋ก ๋๋ ์ด๋ฅผ ์ค ์ด์ ๋ ๋๋ ์ด๋ฅผ ์ฃผ์ง ์์์ ๊ฒฝ์ฐ setState ๋ณ๊ฒฝ๋ ๊ฐ์ด handleCheck์์ ๋ฐ๋ก ๋ฐ์๋์ง ์์

            if (e.target.name === 'userPassword' || e.target.name === 'userPassword2') {
                setTimeout(this.handleCheckPw, 100);
            }
 
        };

            // ๋น๋ฐ๋ฒํธ ์ฒดํฌ
            handleCheckPw = () => {
                const { userPassword, userPassword2 } = this.state;
    
                var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/
    
                // ๋น๋ฐ๋ฒํธ ๋ฌด์๋ ฅ ์ํ์ผ ๋์ ๋ ์ค์ ํ๋์ ๊ฐ์ด ์๋ ฅ ์ํ๊ฐ ์๋๋
                if (userPassword.length < 1 || userPassword2.length < 1) {
                    this.setState({
                        checkPassword: '๐ํจ์ค์๋ ์๋ ฅ๐',
                    });
    
                // ๋น๋ฐ๋ฒํธ๊ฐ ๊ฐ๋ค๋ฉด ์ผ์น
                } else if (userPassword === userPassword2) {
                    
                    if((regExp.test(this.state.userPassword)) && (regExp.test(this.state.userPassword2))){
                       
                        this.setState({
                            checkPassword: 'โ',
                            checkPassBool : true
                        });
    
                    }else{
                        this.setState({
                            checkPassword: 'โ๋น๋ฐ๋ฒํธ๋ 8~10์ ์๋ฌธ, ์ซ์ ์กฐํฉ์ผ๋ก ๊ฐ๋ฅํฉ๋๋ค.โ',
                            checkPassBool : false
                        });
                    }
                // ๋น๋ฐ๋ฒํธ๊ฐ ๊ฐ์ง ์๋ค๋ฉด ๋ถ์ผ์น
                } else {
                    this.setState({
                        checkPassword: 'โ๋ถ์ผ์น โ',
                        checkPassBool : false
                    });
                }
            };



            userPwUpdate = () => {

                if(this.state.checkPassBool){
                        let user = {
                            id : this.props.location.id,
                            userPassword : this.state.userPassword
                        }
    
                ApiService.userPwUpdate(user)
                    .then((response) => {
                        
    
                        alert("๋น๋ฐ๋ฒํธ๊ฐ ์ ์์ ์ผ๋ก ๋ณ๊ฒฝ ๋์์ต๋๋ค.");
                        this.props.history.push('/');
    
                        
                    }).catch(err => {
                        console.log('loginUser Err : ', err);
                    });
    
                }else{
                    alert("์ฌ๋ฐ๋ฅธ ์ ๋ณด๋ฅผ ์๋ ฅํด์ฃผ์ธ์.");
                }
    
            }

        
    render(){
        return (
            <LoginContent title = "๋น๋ฐ๋ฒํธ ๋ณ๊ฒฝ">
                <InputWithLabel label="๋น๋ฐ๋ฒํธ" name="userPassword" defaultValue = {this.state.userPassword}  onChange={this.handleChange} 
                                        placeholder="๋น๋ฐ๋ฒํธ" type="password"/>

                <InputWithLabel label="๋น๋ฐ๋ฒํธ ํ์ธ" name="userPassword2" defaultValue = {this.state.userPassword2}  onChange={this.handleChange}   
                                        placeholder="๋น๋ฐ๋ฒํธ ํ์ธ" type="password"/>
                <Label>
                {this.state.checkPassword}
                </Label>

                <LoginButton onClick={this.userPwUpdate} >๋น๋ฐ๋ฒํธ ๋ณ๊ฒฝ</LoginButton>

            </LoginContent>
        );
    }
}

export default FindpwModify;

const Label = styled.div`
    

    width: 100%;
    outline: none;
    border-radius: 0px;
    line-height: 2.5rem;
    font-size: 1.03rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;

`;