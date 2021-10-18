import React, { Component } from "react";
import styled from "styled-components";
import { withRouter } from 'react-router-dom';

import InputWithLabel from "../../component/mainLogin/InputWithLabel";
import LoginButton from "../../component/mainLogin/loginButton";
import ApiService from '../../ApiServer/login/ApiService';



class SignIn extends Component {



    constructor(props){
        super(props);

        this.state = {
            userId : '',
            toUserPassword : '',
            tocheckPassword : '📝패스워드 입력📝',
            tocheckPassBool : false,

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

        if (e.target.name === 'toUserPassword') {
            setTimeout(this.handleCheckPwChk, 100);
        }
    };

    handleCheckPwChk = () => {
        const { toUserPassword } = this.state;

        let user = {
            id : this.props.Id,
            userPassword : toUserPassword
        }

        if (toUserPassword.length < 1) {
            this.setState({
                tocheckPassword: '📝패스워드 입력📝',
            });

        }else {
                    ApiService.userPwSearch(user)
                    .then((response) => {
                        if(response.data !== ''){

                            this.setState({
                                tocheckPassword: '✅',
                                tocheckPassBool : true
                            });

                        }else{

                            this.setState({
                                tocheckPassword: '❌비밀번호가 올바르지 않습니다.❌',
                                tocheckPassBool : false
                            });
                        }
                        
                    }).catch(err => {
                        console.log('loginUser Err : ', err);
                    });
   

        }
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
                        id : this.props.Id,
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

    mouseClick = () => {
        this.setState({ isModalOpen: true });
      };

    passwordUpdate = () => {

                    if(this.state.tocheckPassBool && this.state.checkPassBool){
                        let user = {
                            id : this.props.Id,
                            userPassword : this.state.userPassword
                        }

                        ApiService.userPwUpdate(user)
                        .then((response) => {
                            
                    
                            alert("비밀번호가 정상적으로 변경 되었습니다.");
                            this.props.history.push('/persion-main/Persion/PersionMain');
                    
                            
                        }).catch(err => {
                            console.log('loginUser Err : ', err);
                        });

                }else{
                    alert("올바른 정보를 입력해주세요.");
                }
      }

    render() {
        const { isOpen, close } = this.props;   //아까 버튼에서 props로 가져온것
       
        return (
            <>
            {isOpen ? (
    
             ////만약 isopen(this.state.isModalOpen)이 true일때 코드를 실행 false면  null
            /// <div onClick={close}> 로그인창 말고 회색 바탕을 누를시 모달이 꺼지게 만듬
              ///<span className="close" onClick={close}>&times;</span> x버튼 누를시 꺼짐
            ////<div className="modalContents" onClick={isOpen}> 로그인 화면은 버튼 클릭해서 들어오면
             /// true인 상태로 있어서 화면이 안꺼진다.
          
              <Modal>
                <IsModal>
                    <BoxModal onClick = {() => isOpen}>
                        <ModalHeader onClick = {() => isOpen}>

                            <SpanClose onClick={close}>
                            &times;
                            </SpanClose>
                    
                        </ModalHeader>

                        <ModalContents onClick = {() => isOpen}>
                        <InputWithLabel label="현재 비밀번호" name="toUserPassword" defaultValue = {this.state.toUserPassword}  onChange={this.handleChange} 
                                        placeholder="비밀번호" type="password"/>
                        <Label>
                         {this.state.tocheckPassword}
                        </Label>

                        <InputWithLabel label="비밀번호" name="userPassword" defaultValue = {this.state.userPassword}  onChange={this.handleChange} 
                                        placeholder="비밀번호" type="password"/>

                        <InputWithLabel label="비밀번호 확인" name="userPassword2" defaultValue = {this.state.userPassword2}  onChange={this.handleChange}   
                                                placeholder="비밀번호 확인" type="password"/>
                        <Label>
                        {this.state.checkPassword}
                        </Label>

                            <LoginButton onClick={this.passwordUpdate}>비밀번호 변경</LoginButton>
                        </ModalContents>
                    
                    </BoxModal>
                </IsModal>
                
              </Modal>
            ) : null}
          </>

        );
    }
}



const Modal =  styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6); 
`

const IsModal = styled.div`
`
const BoxModal = styled.div`
    width: 480px;
    height: 500px;
    background-color: white;
    position: relative;
    box-sizing: border-box;
    margin: 50px auto;
    padding: 20px;
    background: #fff;     
`

const SpanClose = styled.span`
    float: right;
    font-size: 25px;
    cursor: pointer;

`
const ModalHeader = styled.div`
    width: 50px;
    height: 100px;
    float: right;

`

const ModalContents = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 300px;
    position: relative;
    padding: 0 20px 32px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

const Label = styled.div`
    

    width: 100%;
    outline: none;
    border-radius: 0px;
    line-height: 2.5rem;
    font-size: 0.9rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;

`;

export default withRouter(SignIn);