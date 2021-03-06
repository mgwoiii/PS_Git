import React, { Component } from 'react';
import styled from 'styled-components';
import InputWithLabel from '../../component/mainLogin/InputWithLabel';
import LoginButton from '../../component/mainLogin/loginButton';
import LoginContent from '../../component/mainLogin/LoginContent';
import ApiService from '../../ApiServer/login/ApiService';


class Findpw extends Component {
    constructor(props){
        super(props);

        this.state = {
            userId : '',
            userName : '',
            userPhonNumber : '',
            userBirthday : '',

            checkId : '๐์์ด๋ ์๋ ฅ๐',
            checkName : '๐์ด๋ฆ ์๋ ฅ๐',
            checkPhon : '๐ํด๋์ ํ ๋ฒํธ ์๋ ฅ๐',
            checkBirth : '๐์์ผ ์๋ ฅ๐',

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
            e.preventDefault();
            // ํ๋ผ๋ฏธํฐ๋ก ๋ฐ์ event.target.name์ด name ์๋ ๊ฒฝ์ฐ์๋ง handleCheckํจ์ ์คํ
            // setTimeout์ผ๋ก ๋๋ ์ด๋ฅผ ์ค ์ด์ ๋ ๋๋ ์ด๋ฅผ ์ฃผ์ง ์์์ ๊ฒฝ์ฐ setState ๋ณ๊ฒฝ๋ ๊ฐ์ด handleCheck์์ ๋ฐ๋ก ๋ฐ์๋์ง ์์
            if (e.target.name === 'userId') {
                setTimeout(this.handleCheckId, 100);
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

            let regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
               
                    if (this.state.userId.length < 1) {
                            this.setState({
                                checkId: '๐์์ด๋ ์๋ ฅ๐',
                                checkIdBool : false
                            });

                    }else {
                        
                        if(regExp.test(this.state.userId)){
                            this.setState({
                                checkId: 'โ',
                                checkIdBool : true
                            });
                        }else{
                            this.setState({
                                checkId: 'โ ์ด๋ฉ์ผ ํ์์ด ์ ํจํ์ง ์์ต๋๋ค.โ',
                                checkIdBool : false
                            });
                        }
                    }       
        }

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
                                checkBirth : 'โ',
                                checkBirthBool : true
                            });

                            return true;
                        } 
                    }else {
                        this.setState({
                            checkBirth : 'โ',
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

        userFindpw = () => {
            
            if(this.state.checkIdBool && this.state.checkNameBool 
                &&this.state.checkPhonBool &&this.state.checkBirthBool){
                    let user = {
                        userId : this.state.userId,
                        userName : this.state.userName,
                        userPhonNumber : this.state.userPhonNumber,
                        userBirthday : this.state.userBirthday
                    }

            ApiService.userFindpw(user)
                .then((response) => {
                    

                    if(response.data === ''){
                        alert("์๋ ฅํ์  ์ ๋ณด๊ฐ ์ฌ๋ฐ๋ฅด์ง ์์ต๋๋ค.")
                    }else{
                        console.log(response.data.id)
                      
                        this.props.history.push({
                            pathname: '/main-login/FindpwModify',
                            id : response.data.id,
                        });

                    }
                }).catch(err => {
                    console.log('loginUser Err : ', err);
                });

            }else{
                alert("์ฌ๋ฐ๋ฅธ ์ ๋ณด๋ฅผ ์๋ ฅํด์ฃผ์ธ์.");
            }

        }
    render(){
        return (
            <LoginContent title = "๋น๋ฐ๋ฒํธ ์ฐพ๊ธฐ">
                 <InputWithLabel label="์์ด๋" defaultValue = {this.state.userId} onChange={this.handleChange} 

                name="userId" placeholder="์์ด๋ (โโโ@โโโ.com)" type="text" />
                
                <Label>
                {this.state.checkId}
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

                <LoginButton onClick={this.userFindpw} >๋น๋ฐ๋ฒํธ ์ฐพ๊ธฐ</LoginButton>

            </LoginContent>
        );
    }
}

export default Findpw;

const Label = styled.div`
    

    width: 100%;
    outline: none;
    border-radius: 0px;
    line-height: 2.5rem;
    font-size: 1.03rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;

`;