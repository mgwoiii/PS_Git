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

            checkPassword : '๐ํจ์ค์๋ ์๋ ฅ๐',
            checkId : '๐์์ด๋ ์๋ ฅ๐',
            checkName : '๐์ด๋ฆ ์๋ ฅ๐',
            checkPhon : '๐ํด๋์ ํ ๋ฒํธ ์๋ ฅ๐',
            checkBirth : '๐์์ผ ์๋ ฅ๐',

            checkPassBool : false,
            checkIdBool : false,
            checkNameBool : false,
            checkPhonBool : false,
            checkBirthBool : false
        }
    }                          

        //input onChange ์ด๋ฒคํธ
        handleChange = (e) => {
            this.setState({
            [e.target.name]: e.target.value,
            });
            // ํ๋ผ๋ฏธํฐ๋ก ๋ฐ์ event.target.name์ด name ์๋ ๊ฒฝ์ฐ์๋ง handleCheckํจ์ ์คํ
            // setTimeout์ผ๋ก ๋๋ ์ด๋ฅผ ์ค ์ด์ ๋ ๋๋ ์ด๋ฅผ ์ฃผ์ง ์์์ ๊ฒฝ์ฐ setState ๋ณ๊ฒฝ๋ ๊ฐ์ด handleCheck์์ ๋ฐ๋ก ๋ฐ์๋์ง ์์
            if (e.target.name === 'userId') {
                setTimeout(this.handleCheckId, 100);
            }

            if (e.target.name === 'userPassword' || e.target.name === 'userPassword2') {
                setTimeout(this.handleCheckPw, 100);
            }

            if (e.target.name === 'userName') {
                setTimeout(this.handleCheckName, 100);
            }

            
            if (e.target.name === 'userPhonNumber') {
                setTimeout(this.handleCheckNum(e), 100);
            }

            if (e.target.name === 'userBirthday') {
                setTimeout(this.handleCheckBirth(e), 100);
            }
        };



        // id ์ฒดํฌ
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
                                checkId: '๐์์ด๋ ์๋ ฅ๐',
                                checkIdBool : false
                            });
                    // 
                    } else if (this.state.userId === response.data.userId) {
                        if(regExp.test(this.state.userId)){
                            this.setState({
                                checkId: 'โ ์ด๋ฏธ ๋ฑ๋ก๋ ์์ด๋ ์๋๋ค.โ',
                                checkIdBool : false
                            });
                        }else{
                            this.setState({
                                checkId: 'โ ์ด๋ฉ์ผ ํ์์ด ์ ํจํ์ง ์์ต๋๋ค.โ',
                                checkIdBool : false
                            });
                        }
                    // 
                    } else {
                        
                        if(regExp.test(this.state.userId)){
                            this.setState({
                                checkId: 'โ์ฌ์ฉ ๊ฐ๋ฅํ ์์ด๋ ์๋๋ค.โ',
                                checkIdBool : true
                            });
                        }else{
                            this.setState({
                                checkId: 'โ ์ด๋ฉ์ผ ํ์์ด ์ ํจํ์ง ์์ต๋๋ค.โ',
                                checkIdBool : false
                            });
                        }
                    }

              })
              .catch(err => {
                  console.log('loginUser Err : ', err);
              })       
        }

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
        

        // ์ด๋ฆ ์ ํจ์ฑ ์ฒดํฌ
        handleCheckName = () => {
            var regExp = /^[๊ฐ-ํฃ]{3,6}$/;

            

            if(regExp.test(this.state.userName)){

                this.setState({
                    checkName : 'โ',
                    checkNameBool: true
                });

            }else{
                if (this.state.userName.length < 1) {
                    this.setState({
                        checkName: '๐์ด๋ฆ ์๋ ฅ๐',
                        checkNameBool: false
                    });
                }else{
                    this.setState({
                        checkName : 'โ์ด๋ฆ์ 3 ~ 6, ํ๊ธ๋ง ์ฌ์ฉ๊ฐ๋ฅํฉ๋๋ค.โ',
                        checkNameBool: false
                    });
                }   
            }
        };
        
       // ํด๋ํฐ ๋ฒํธ ์ฒดํฌ
       handleCheckNum = (e) =>{
        const regex = /^[0-9\b -]{0,13}$/;
        if(regex.test(e.target.value)){

             if(e.target.value.length === 11){
               //console.log(e.target.value.slice(0,3));
               
                   if(e.target.value.slice(0,3) === '010'){
                         this.setState({
                             [e.target.name]: e.target.value,
                             checkPhon : 'โ',
                             checkPhonBool : true
                         });
                   }else{
                     this.setState({
                       checkPhon : 'โ ์ฌ๋ฐ๋ฅด์ง ์์ ๋ฒํธ ์๋๋ค.โ',
                       checkPhonBool : false
                   });
                   }
               }else if (e.target.value.length < 1){
                   this.setState({
                       checkPhon : '๐ํด๋์ ํ ๋ฒํธ ์๋ ฅ๐',
                       checkPhonBool : false
                   });
               }else{
                   this.setState({
                       checkPhon : 'โ ์ฌ๋ฐ๋ฅด์ง ์์ ๋ฒํธ ์๋๋ค.โ',
                       checkPhonBool : false
                   });
               }

         }else{
             this.setState({
                   [e.target.name]: '',
                   checkPhon : 'โ ์ฌ๋ฐ๋ฅด์ง ์์ ๋ฒํธ ์๋๋ค.โ',
                   checkPhonBool : false
             });
         }
     }



        handleCheckBirth = (e) => {
            
            // 19930923
            let birth = e.target.value;
            let year = birth.slice(0,4);
            let month = birth.slice(4,6);
            let day = birth.slice(6,8);

            var today = new Date();
            let yearNow = today.getFullYear();

           

            if(e.target.value.length === 8){

                    if(1900 > year || year > yearNow){

                        this.setState({
                            checkBirth : 'โ ์ฌ๋ฐ๋ฅด์ง ์์ ์๋์์ผ ์๋๋ค.โ',
                            checkBirthBool : false
                        });

                        return false;
                    }else if(month < 1 || month > 12){

                        this.setState({
                            checkBirth : 'โ ์ฌ๋ฐ๋ฅด์ง ์์ ์๋์์ผ ์๋๋ค.โ',
                            checkBirthBool : false
                        });

                        return false;
                    }else if(day < 1 || day > 31){
                        
                        this.setState({
                            checkBirth : 'โ ์ฌ๋ฐ๋ฅด์ง ์์ ์๋์์ผ ์๋๋ค.โ',
                            checkBirthBool : false
                        });
                        
                        return false;
                    }else if(((month===4) ||(month===6) ||(month===9) || (month===11)) && day===31){
                        
                        this.setState({
                            checkBirth : 'โ ์ฌ๋ฐ๋ฅด์ง ์์ ์๋์์ผ ์๋๋ค.โ',
                            checkBirthBool : false
                        });

                        return false;
                    }else if(month === 2){

                        let isleap = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
                        if (day>29 || (day===29 && !isleap)) {
                           
                            this.setState({
                                checkBirth : 'โ ์ฌ๋ฐ๋ฅด์ง ์์ ์๋์์ผ ์๋๋ค.โ',
                                checkBirthBool : false
                            });

                            return false;
                        } else {

                            this.setState({
                                checkBirth : 'โ์ฌ์ฉ๊ฐ๋ฅ โ',
                                checkBirthBool : true
                            });

                            return true;
                        } 
                    }else {
                        this.setState({
                            checkBirth : 'โ์ฌ์ฉ๊ฐ๋ฅ โ',
                            checkBirthBool : true
                        });
                        return true;
                    }
                }else{
                   
                    this.setState({
                        checkBirth : 'โ ์ฌ๋ฐ๋ฅด์ง ์์ ์๋์์ผ ์๋๋ค.โ',
                        checkBirthBool : false
                    });

                    return false;
                }
        }

        RegisterLogin = () => {

            if(this.state.checkIdBool && this.state.checkPassBool && this.state.checkNameBool 
                &&this.state.checkPhonBool &&this.state.checkBirthBool){
                    let user = {
                        userId : this.state.userId,
                        userPassword : this.state.userPassword,
                        userName : this.state.userName,
                        userPhonNumber : this.state.userPhonNumber,
                        userBirthday : this.state.userBirthday
                    }
            ApiService.userRegister(user)
                .then((response) => {
                    alert("ํ์๊ฐ์์ด ์ ์์ ์ผ๋ก ๋์์ต๋๋ค.");
                    this.props.history.push('/');

                }).catch(err => {
                    console.log('loginUser Err : ', err);
                });

            }else{
                alert("์ฌ๋ฐ๋ฅธ ์ ๋ณด๋ฅผ ์๋ ฅํด์ฃผ์ธ์.");
            }

        }
            

    render() {

        return (
            <LoginContent title="ํ์๊ฐ์">
                <InputWithLabel label="์์ด๋" defaultValue = {this.state.userId} onChange={this.handleChange} 

                name="userId" placeholder="์์ด๋ (โโโ@โโโ.com)" type="text" />
                
                <Label>
                {this.state.checkId}
                </Label>

                <InputWithLabel label="๋น๋ฐ๋ฒํธ" name="userPassword" defaultValue = {this.state.userPassword}  onChange={this.handleChange} 
                                        placeholder="๋น๋ฐ๋ฒํธ" type="password"/>

                <InputWithLabel label="๋น๋ฐ๋ฒํธ ํ์ธ" name="userPassword2" defaultValue = {this.state.userPassword2}  onChange={this.handleChange}   
                                        placeholder="๋น๋ฐ๋ฒํธ ํ์ธ" type="password"/>
                <Label>
                {this.state.checkPassword}
                </Label>
                <InputWithLabel label="์ด๋ฆ" name="userName" defaultValue = {this.state.userName}  onChange={this.handleChange}  
                                        placeholder="์ด๋ฆ" type="text" maxlength = "10"/>
                <Label>
                {this.state.checkName}
                </Label>

                <InputWithLabel label="์ ํ๋ฒํธ" name="userPhonNumber" defaultValue = {this.state.userPhonNumber} onChange={this.handleChange}  
                                        placeholder="์ ํ๋ฒํธ(010AAAABBBB)" type="text"/>

                <Label>
                {this.state.checkPhon}
                </Label>

                <InputWithLabel label="์๋์์ผ" name="userBirthday" defaultValue = {this.state.userBirthday} onChange={this.handleChange}  
                placeholder="์๋์์ผ(YYYYMMDD)" type="text" />
                
                <Label>
                {this.state.checkBirth}
                </Label>

                <LoginButton onClick={this.RegisterLogin} >ํ์๊ฐ์</LoginButton>
            
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
    font-size: 1.03rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;

`;