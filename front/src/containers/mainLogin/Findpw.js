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

            checkId : '📝아이디 입력📝',
            checkName : '📝이름 입력📝',
            checkPhon : '📝휴대전화 번호 입력📝',
            checkBirth : '📝생일 입력📝',

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
            e.preventDefault();
            // 파라미터로 받은 event.target.name이 name 아닐 경우에만 handleCheck함수 실행
            // setTimeout으로 딜레이를 준 이유는 딜레이를 주지 않았을 경우 setState 변경된 값이 handleCheck에서 바로 반영되지 않음
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

        // id 체크
        handleCheckId = () => {

            let regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
               
                    if (this.state.userId.length < 1) {
                            this.setState({
                                checkId: '📝아이디 입력📝',
                                checkIdBool : false
                            });

                    }else {
                        
                        if(regExp.test(this.state.userId)){
                            this.setState({
                                checkId: '✅정상.✅',
                                checkIdBool : true
                            });
                        }else{
                            this.setState({
                                checkId: '❌ 이메일 형식이 유효하지 않습니다.❌',
                                checkIdBool : false
                            });
                        }
                    }       
        }

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
                                checkBirth : '✅정상 ✅',
                                checkBirthBool : true
                            });

                            return true;
                        } 
                    }else {
                        this.setState({
                            checkBirth : '✅정상 ✅',
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
                        alert("입력하신 정보가 올바르지 않습니다.")
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
                alert("올바른 정보를 입력해주세요.");
            }

        }
    render(){
        return (
            <LoginContent title = "비밀번호 찾기">
                 <InputWithLabel label="아이디" defaultValue = {this.state.userId} onChange={this.handleChange} 

                name="userId" placeholder="아이디 (★★★@★★★.com)" type="text" />
                
                <Label>
                {this.state.checkId}
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

                <LoginButton onClick={this.userFindpw} >비밀번호 찾기</LoginButton>

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