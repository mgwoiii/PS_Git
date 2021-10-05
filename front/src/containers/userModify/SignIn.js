import React, { Component } from "react";
import styled from "styled-components";

import InputWithLabel from "../../component/mainLogin/InputWithLabel";
import LoginButton from "../../component/mainLogin/loginButton";



class SignIn extends Component {

    mouseClick = () => {
        this.setState({ isModalOpen: true });
      };

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
                        <SpanClose onClick={close}>
                        &times;
                        </SpanClose>
                        <ModalContents onClick = {() => isOpen}>
                        <InputWithLabel label="현재 비밀번호" name="password" placeholder="비밀번호" type="password"/>
                            <InputWithLabel label="비밀번호" name="password" placeholder="비밀번호" type="password"/>
                            <InputWithLabel label="비밀번호 확인" name="password" placeholder="비밀번호 확인" type="password"/>
                            <LoginButton onClick={this.openModal}>비밀번호 변경</LoginButton>
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

export default SignIn;