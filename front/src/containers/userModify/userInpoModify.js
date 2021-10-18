import { Component } from "react";
import styled from "styled-components";
import ApiService from '../../ApiServer/login/ApiService';
import InputWithLabel from "../../component/mainLogin/InputWithLabel";
import LoginButton from "../../component/mainLogin/loginButton";

import UserModifyContent  from '../../component/userModify/UserModifyContent';

import SignIn from "./SignIn";


class userInpoModify extends Component{
   
            constructor(props){
                  super(props);

                  this.state = {
                        userId : '',
                        userName : '',
                        userPhonNumber :'',
                        userBirthday :'',

                        checkName : '✅',
                        checkNameBool : true,

                        checkPhon : '✅',
                        checkPhonBool : true,

                        checkBirth : '✅',
                        checkBirthBool : true,

                        isModalOpen : false,
                    }

                    
            }

            componentDidMount(){
              this.userInfoRead();
            }

            userInfoRead = () => {

              let user = {
                  id : window.sessionStorage.getItem('id')
              }

            ApiService.userInfoRead(user)
            .then(response => {
                  console.log(response.data);

                  this.setState({
                      userId : response.data.userId,
                      userName : response.data.userName,
                      userPhonNumber : response.data.userPhonNumber,
                      userBirthday : response.data.userBirthday,

                      checkIdBool : true,
                  });

            }).catch(err => {
                console.log('loginUser Err', err);
            })

            }

            //input onChange 이벤트
            handleChange = (e) => {
                this.setState({
                    [e.target.name]: e.target.value,
                });
            // 파라미터로 받은 event.target.name이 name 아닐 경우에만 handleCheck함수 실행
            // setTimeout으로 딜레이를 준 이유는 딜레이를 주지 않았을 경우 setState 변경된 값이 handleCheck에서 바로 반영되지 않음


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

            // 이름 유효성 체크
            handleCheckName = () => {
                var regExp = /^[가-힣]{3,6}$/;



                if(regExp.test(this.state.userName)){

                      this.setState({
                        checkName : '✅',
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
                      //console.log(e.target.value.slice(0,3));
                      
                          if(e.target.value.slice(0,3) === '010'){
                                this.setState({
                                    [e.target.name]: e.target.value,
                                    checkPhon : '✅',
                                    checkPhonBool : true
                                });
                          }else{
                            this.setState({
                              checkPhon : '❌ 올바르지 않은 번호 입니다.❌',
                              checkPhonBool : false
                          });
                          }
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
                                  checkBirth : '✅',
                                  checkBirthBool : true
                            });

                            return true;
                            } 

                }else {
                      this.setState({
                          checkBirth : '✅',
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

      userInfoUpdate = () => {
              if(this.state.checkNameBool && this.state.checkPhonBool && this.state.checkBirthBool){
                    let user = {
                        id : window.sessionStorage.getItem('id'),
                        userName : this.state.userName,
                        userPhonNumber : this.state.userPhonNumber,
                        userBirthday : this.state.userBirthday
                    }

                ApiService.userInfoUpdate(user)
                    .then(() => {
                      alert("정상적으로 변경되었습니다.");
                      this.props.history.push('/persion-main/Persion/PersionMain');

                    }).catch(err => {
                        console.log('loginUser Err : ', err);
                    });

            }else{
                alert("올바른 정보를 입력해주세요.");
            }
      }

      openModal = () => {
        this.setState({ isModalOpen: true });
      };
    
      closeModal = () => {
        this.setState({ isModalOpen: false });
      };
    
    render(){

        // let a = window.localStorage.getItem('userId');
       // console.log(window.sessionStorage.getItem('id'))

       
        return (
            <UserModifyContent>
                <InputWithLabel label="아이디" defaultValue = {this.state.userId} onChange={this.handleChange} 
                name="userId" type="text" disabled />
                
               

                <InputWithLabel label="이름" name="userName" defaultValue = {this.state.userName}  onChange={this.handleChange}  
                                          placeholder="이름" type="text"/>
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
                <>
                  <LoginButton onClick={this.openModal}>비밀번호 변경</LoginButton>
                  <SignIn isOpen={this.state.isModalOpen} close={this.closeModal} />
                </>
                <LoginButton onClick={this.userInfoUpdate} >정보수정</LoginButton>
            </UserModifyContent>
        );
    }
}

export default userInpoModify;

const Label = styled.div`
    

    width: 100%;
    outline: none;
    border-radius: 0px;
    line-height: 2.5rem;
    font-size: 1.03rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;

`;