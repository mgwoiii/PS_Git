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
            checkId : '📝아이디 입력📝',
            checkName : '📝이름 입력📝',
            checkPhon : '📝휴대전화 번호 입력📝',
            checkBirth : '📝생일 입력📝',

            checkPassBool : false,
            checkIdBool : false,
            checkNameBool : false,
            checkPhonBool : false,
            checkBirthBool : false
        }
    }

        //input onChange 이벤트
        handleChange = (e) => {
            this.setState({
            [e.target.name]: e.target.value,
            });
            // 파라미터로 받은 event.target.name이 name 아닐 경우에만 handleCheck함수 실행
            // setTimeout으로 딜레이를 준 이유는 딜레이를 주지 않았을 경우 setState 변경된 값이 handleCheck에서 바로 반영되지 않음
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
                                checkIdBool : false
                            });
                    // 
                    } else if (this.state.userId === response.data.userId) {
                        if(regExp.test(this.state.userId)){
                            this.setState({
                                checkId: '❌ 이미 등록된 아이디 입니다.❌',
                                checkIdBool : false
                            });
                        }else{
                            this.setState({
                                checkId: '❌ 이메일 형식이 유효하지 않습니다.❌',
                                checkIdBool : false
                            });
                        }
                    // 
                    } else {
                        
                        if(regExp.test(this.state.userId)){
                            this.setState({
                                checkId: '✅사용 가능한 아이디 입니다.✅',
                                checkIdBool : true
                            });
                        }else{
                            this.setState({
                                checkId: '❌ 이메일 형식이 유효하지 않습니다.❌',
                                checkIdBool : false
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

            var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/

            // 비밀번호 무입력 상태일 때와 둘 중에 하나의 값이 입력 상태가 아닐때
            if (userPassword.length < 1 || userPassword2.length < 1) {
                this.setState({
                    checkPassword: '📝패스워드 입력📝',
                });

            // 비밀번호가 같다면 일치
            } else if (userPassword === userPassword2) {
                
                if((regExp.test(this.state.userPassword)) && (regExp.test(this.state.userPassword2))){
                   
                    this.setState({
                        checkPassword: '✅일치 ✅',
                        checkPassBool : true
                    });

                }else{
                    this.setState({
                        checkPassword: '❌비밀번호는 8~10자 영문, 숫자 조합으로 가능합니다.❌',
                        checkPassBool : false
                    });
                }
            // 비밀번호가 같지 않다면 불일치
            } else {
                this.setState({
                    checkPassword: '❌불일치 ❌',
                    checkPassBool : false
                });
            }
        };
        

        // 이름 유효성 체크
        handleCheckName = () => {
            var regExp = /^[가-힣]{3,6}$/;

            

            if(regExp.test(this.state.userName)){

                this.setState({
                    checkName : '✅사용가능✅',
                    checkNameBool: true
                });

            }else{
                if (this.state.userName.length < 1) {
                    this.setState({
                        checkName: '📝이름 입력📝',
                        checkNameBool: false
                    });
                }else{
                    this.setState({
                        checkName : '❌이름은 3 ~ 6, 한글만 사용가능합니다.❌',
                        checkNameBool: false
                    });
                }   
            }
        };
        
        // 휴대폰 번호 체크
        handleCheckNum = (e) =>{
            const regex = /^[0-9\b -]{0,13}$/;
            if(regex.test(e.target.value)){

                if(e.target.value.length === 11){
                    this.setState({
                    [e.target.name]: e.target.value,
                    checkPhon : '✅사용가능 ✅',
                    checkPhonBool : true
                    });
                }else if (e.target.value.length < 1){
                    this.setState({
                        checkPhon : '📝휴대전화 번호 입력📝',
                        checkPhonBool : false
                        });
                }else{
                    this.setState({
                        checkPhon : '❌ 올바르지 않은 번호 입니다.❌',
                        checkPhonBool : false
                        });
                }

            }else{
                this.setState({
                    [e.target.name]: '',
                    checkPhon : '❌ 올바르지 않은 번호 입니다.❌',
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
                            checkBirth : '❌ 올바르지 않은 생년월일 입니다.❌',
                            checkBirthBool : false
                        });

                        return false;
                    }else if(month < 1 || month > 12){

                        this.setState({
                            checkBirth : '❌ 올바르지 않은 생년월일 입니다.❌',
                            checkBirthBool : false
                        });

                        return false;
                    }else if(day < 1 || day > 31){
                        
                        this.setState({
                            checkBirth : '❌ 올바르지 않은 생년월일 입니다.❌',
                            checkBirthBool : false
                        });
                        
                        return false;
                    }else if(((month===4) ||(month===6) ||(month===9) || (month===11)) && day===31){
                        
                        this.setState({
                            checkBirth : '❌ 올바르지 않은 생년월일 입니다.❌',
                            checkBirthBool : false
                        });

                        return false;
                    }else if(month === 2){

                        let isleap = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
                        if (day>29 || (day===29 && !isleap)) {
                           
                            this.setState({
                                checkBirth : '❌ 올바르지 않은 생년월일 입니다.❌',
                                checkBirthBool : false
                            });

                            return false;
                        } else {

                            this.setState({
                                checkBirth : '✅사용가능 ✅',
                                checkBirthBool : true
                            });

                            return true;
                        } 
                    }else {
                        this.setState({
                            checkBirth : '✅사용가능 ✅',
                            checkBirthBool : true
                        });
                        return true;
                    }
                }else{
                   
                    this.setState({
                        checkBirth : '❌ 올바르지 않은 생년월일 입니다.❌',
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
                    alert("회원가입이 정상적으로 되었습니다.");
                    this.props.history.push('/');

                }).catch(err => {
                    console.log('loginUser Err : ', err);
                });

            }else{
                alert("올바른 정보를 입력해주세요.");
            }

        }
            

    render() {

        return (
            <LoginContent title="회원가입">
                <InputWithLabel label="아이디" defaultValue = {this.state.userId} onChange={this.handleChange} 

                name="userId" placeholder="아이디 (★★★@★★★.com)" type="text" />
                
                <Label>
                {this.state.checkId}
                </Label>

                <InputWithLabel label="비밀번호" name="userPassword" defaultValue = {this.state.userPassword}  onChange={this.handleChange} 
                                        placeholder="비밀번호" type="password"/>

                <InputWithLabel label="비밀번호 확인" name="userPassword2" defaultValue = {this.state.userPassword2}  onChange={this.handleChange}   
                                        placeholder="비밀번호 확인" type="password"/>
                <Label>
                {this.state.checkPassword}
                </Label>
                <InputWithLabel label="이름" name="userName" defaultValue = {this.state.userName}  onChange={this.handleChange}  
                                        placeholder="이름" type="text" maxlength = "10"/>
                <Label>
                {this.state.checkName}
                </Label>

                <InputWithLabel label="전화번호" name="userPhonNumber" defaultValue = {this.state.userPhonNumber} onChange={this.handleChange}  
                                        placeholder="전화번호(010AAAABBBB)" type="text"/>

                <Label>
                {this.state.checkPhon}
                </Label>

                <InputWithLabel label="생년월일" name="userBirthday" defaultValue = {this.state.userBirthday} onChange={this.handleChange}  
                placeholder="생년월일(YYYYMMDD)" type="text" />
                
                <Label>
                {this.state.checkBirth}
                </Label>

                <LoginButton onClick={this.RegisterLogin} >회원가입</LoginButton>
            
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