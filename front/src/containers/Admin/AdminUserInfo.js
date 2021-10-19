import { Component } from "react";
import styled from "styled-components";
import oc from 'open-color';

import ApiService from '../../ApiServer/login/ApiService';

import InputWithLabel from "../../component/mainLogin/InputWithLabel";
import LoginButton from "../../component/mainLogin/loginButton";

import UserModifyContent  from '../../component/userModify/UserModifyContent';
import { withRouter } from "react-router";


class AdminUserInfo extends Component{
   
    constructor(props){
        super(props)


        this.state = {
            userId : '',
            userName : '',
            userPhonNumber : '',
            userBirthday : '',
            grade_id : '',
            newGrade : '',
        }
    }
    componentDidMount(){
      
        this.UserInfo();
        
    }

    UserInfo = () => {
        

        let user = {
            id : window.localStorage.getItem("userId")
        }

        ApiService.userInfoRead(user)
        .then((response) => {
              this.setState({
                userId : response.data.userId ,
                userName : response.data.userName ,
                userPhonNumber : response.data.userPhonNumber ,
                userBirthday : response.data.userBirthday ,
                grade_id : response.data.grade_id,
                newGrade : response.data.grade_id
              })
        })
        .catch(err => {
            console.log('reloadUserList() Error!', err);
        })

    }
     handleSelect = (e) => {
        console.log(e.target.value)
        this.setState({
            newGrade : e.target.value
          })
      };

      userInfoUpdate = () => {

        if(this.state.grade_id === this.state.newGrade){
            alert("현재 상태와 동일합니다.");
        }else{
            let user = {
                id : window.localStorage.getItem("userId"),
                grade_id : this.state.newGrade
            }
    
            
            ApiService.userGradeInsert(user)
            .then((response) => {
                alert("회원 상태가 변경되었습니다.");
                this.props.history.push('/persion-main/Admin/Admin');
               
            })
            .catch(err => {
                console.log('reloadUserList() Error!', err);
            })
        }
        
      }

    render(){

        return (
            <UserModifyContent title="유저 정보 관리">
                <InputWithLabel label="아이디" defaultValue = {this.state.userId} onChange={this.handleChange} 
                name="userId" type="text" disabled />
                
               

                <InputWithLabel label="이름" name="userName" defaultValue = {this.state.userName}  onChange={this.handleChange}  
                                          placeholder="이름" type="text"  disabled />
              
                <InputWithLabel label="전화번호" name="userPhonNumber" defaultValue = {this.state.userPhonNumber} onChange={this.handleChange}  
                                          placeholder="전화번호(010AAAABBBB)" type="text"  disabled />
                
               
                <InputWithLabel label="생년월일" name="userBirthday" defaultValue = {this.state.userBirthday} onChange={this.handleChange}  
                  placeholder="생년월일(YYYYMMDD)" type="text"  disabled  />

                <InputWithLabel label="회원등급" name="grade_id" 
                defaultValue =  {(this.state.grade_id === 2 ? "일반" : 
                                (this.state.grade_id === 3 ? "대기": 
                                (this.state.grade_id === 4 ? "반려":"")))}
                onChange={this.handleChange}  
                  placeholder="생년월일(YYYYMMDD)" type="text"  disabled  />

                <ReadSelect onChange={this.handleSelect} value={this.state.newGrade}>
                    <option value="2">일반</option>
                    <option value="3">대기</option>
                    <option value="4">거절(반려)</option>
                </ReadSelect>
                  
                <LoginButton onClick={this.userInfoUpdate} >회원정보 수정</LoginButton>
            </UserModifyContent>
        );
    }
}

export default withRouter(AdminUserInfo);

const ReadSelect = styled.select`
    margin-top: 1rem;
    margin-bottom: 0.25rem;
    width: 100%;
    
    border: 1px solid ${oc.gray[3]};
    line-height: 30rem;
    font-size: 1.2rem;
`;
