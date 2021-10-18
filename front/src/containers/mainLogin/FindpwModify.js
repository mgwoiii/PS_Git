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
                checkPassword : '📝패스워드 입력📝',
                checkPassBool : false
            }
        }
        //input onChange 이벤트
        handleChange = (e) => {
            this.setState({
            [e.target.name]: e.target.value,
            });
            // 파라미터로 받은 event.target.name이 name 아닐 경우에만 handleCheck함수 실행
            // setTimeout으로 딜레이를 준 이유는 딜레이를 주지 않았을 경우 setState 변경된 값이 handleCheck에서 바로 반영되지 않음

            if (e.target.name === 'userPassword' || e.target.name === 'userPassword2') {
                setTimeout(this.handleCheckPw, 100);
            }
 
        };

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
                            checkPassword: '✅',
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



            userPwUpdate = () => {

                if(this.state.checkPassBool){
                        let user = {
                            id : this.props.location.id,
                            userPassword : this.state.userPassword
                        }
    
                ApiService.userPwUpdate(user)
                    .then((response) => {
                        
    
                        alert("비밀번호가 정상적으로 변경 되었습니다.");
                        this.props.history.push('/');
    
                        
                    }).catch(err => {
                        console.log('loginUser Err : ', err);
                    });
    
                }else{
                    alert("올바른 정보를 입력해주세요.");
                }
    
            }

        
    render(){
        return (
            <LoginContent title = "비밀번호 변경">
                <InputWithLabel label="비밀번호" name="userPassword" defaultValue = {this.state.userPassword}  onChange={this.handleChange} 
                                        placeholder="비밀번호" type="password"/>

                <InputWithLabel label="비밀번호 확인" name="userPassword2" defaultValue = {this.state.userPassword2}  onChange={this.handleChange}   
                                        placeholder="비밀번호 확인" type="password"/>
                <Label>
                {this.state.checkPassword}
                </Label>

                <LoginButton onClick={this.userPwUpdate} >비밀번호 변경</LoginButton>

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