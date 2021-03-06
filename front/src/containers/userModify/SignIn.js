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
            tocheckPassword : '๐ํจ์ค์๋ ์๋ ฅ๐',
            tocheckPassBool : false,

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
                tocheckPassword: '๐ํจ์ค์๋ ์๋ ฅ๐',
            });

        }else {
                    ApiService.userPwSearch(user)
                    .then((response) => {
                        if(response.data !== ''){

                            this.setState({
                                tocheckPassword: 'โ',
                                tocheckPassBool : true
                            });

                        }else{

                            this.setState({
                                tocheckPassword: 'โ๋น๋ฐ๋ฒํธ๊ฐ ์ฌ๋ฐ๋ฅด์ง ์์ต๋๋ค.โ',
                                tocheckPassBool : false
                            });
                        }
                        
                    }).catch(err => {
                        console.log('loginUser Err : ', err);
                    });
   

        }
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



        userPwUpdate = () => {

            if(this.state.checkPassBool){
                    let user = {
                        id : this.props.Id,
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
                            
                    
                            alert("๋น๋ฐ๋ฒํธ๊ฐ ์ ์์ ์ผ๋ก ๋ณ๊ฒฝ ๋์์ต๋๋ค.");
                            this.props.history.push('/persion-main/Persion/PersionMain');
                    
                            
                        }).catch(err => {
                            console.log('loginUser Err : ', err);
                        });

                }else{
                    alert("์ฌ๋ฐ๋ฅธ ์ ๋ณด๋ฅผ ์๋ ฅํด์ฃผ์ธ์.");
                }
      }

    render() {
        const { isOpen, close } = this.props;   //์๊น ๋ฒํผ์์ props๋ก ๊ฐ์ ธ์จ๊ฒ
       
        return (
            <>
            {isOpen ? (
    
             ////๋ง์ฝ isopen(this.state.isModalOpen)์ด true์ผ๋ ์ฝ๋๋ฅผ ์คํ false๋ฉด  null
            /// <div onClick={close}> ๋ก๊ทธ์ธ์ฐฝ ๋ง๊ณ  ํ์ ๋ฐํ์ ๋๋ฅผ์ ๋ชจ๋ฌ์ด ๊บผ์ง๊ฒ ๋ง๋ฌ
              ///<span className="close" onClick={close}>&times;</span> x๋ฒํผ ๋๋ฅผ์ ๊บผ์ง
            ////<div className="modalContents" onClick={isOpen}> ๋ก๊ทธ์ธ ํ๋ฉด์ ๋ฒํผ ํด๋ฆญํด์ ๋ค์ด์ค๋ฉด
             /// true์ธ ์ํ๋ก ์์ด์ ํ๋ฉด์ด ์๊บผ์ง๋ค.
          
              <Modal>
                <IsModal>
                    <BoxModal onClick = {() => isOpen}>
                        <ModalHeader onClick = {() => isOpen}>

                            <SpanClose onClick={close}>
                            &times;
                            </SpanClose>
                    
                        </ModalHeader>

                        <ModalContents onClick = {() => isOpen}>
                        <InputWithLabel label="ํ์ฌ ๋น๋ฐ๋ฒํธ" name="toUserPassword" defaultValue = {this.state.toUserPassword}  onChange={this.handleChange} 
                                        placeholder="๋น๋ฐ๋ฒํธ" type="password"/>
                        <Label>
                         {this.state.tocheckPassword}
                        </Label>

                        <InputWithLabel label="๋น๋ฐ๋ฒํธ" name="userPassword" defaultValue = {this.state.userPassword}  onChange={this.handleChange} 
                                        placeholder="๋น๋ฐ๋ฒํธ" type="password"/>

                        <InputWithLabel label="๋น๋ฐ๋ฒํธ ํ์ธ" name="userPassword2" defaultValue = {this.state.userPassword2}  onChange={this.handleChange}   
                                                placeholder="๋น๋ฐ๋ฒํธ ํ์ธ" type="password"/>
                        <Label>
                        {this.state.checkPassword}
                        </Label>

                            <LoginButton onClick={this.passwordUpdate}>๋น๋ฐ๋ฒํธ ๋ณ๊ฒฝ</LoginButton>
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