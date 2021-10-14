import { Component } from "react";
import ApiService from "../../ApiService";
import InputWithLabel from "../../component/mainLogin/InputWithLabel";
import LoginButton from "../../component/mainLogin/loginButton";

import UserModifyContent  from '../../component/userModify/UserModifyContent';

import SignIn from "./SignIn";


class userInpoModify extends Component{
   
    constructor(props){
        super(props);
    
        this.state = {
          username: '',
          firstName: '',
          age: '',
          isModalOpen : false,
        }
    
    
      }

      componentDidMount(){
        this.loadUser();
      }

      loadUser = () => {

        let user = {
            username : window.localStorage.getItem('userId'),
            password: 'bbbb'
        }

        ApiService.loginUser(user)
        .then(response => {
            this.setState({

                username : response.data.username,
                firstName : response.data.firstName,
                age : response.data.age
            })

          }).catch(err => {
              console.log('loginUser Err', err);
          })

      }

      onChange = (e) => {
        this.setState({
          [e.target.name] : e.target.value
        });
      }

      openModal = () => {
        this.setState({ isModalOpen: true });
      };
    
      closeModal = () => {
        this.setState({ isModalOpen: false });
      };
    
    render(){

        // let a = window.localStorage.getItem('userId');

       

        return (
            <UserModifyContent>
                <InputWithLabel label="이메일" name="email" placeholder="이메일" value={this.state.username} onChange={this.onChange}/>
                <InputWithLabel label="이름" name="username" placeholder="이름" value={this.state.firstName} onChange={this.onChange}/>
                <InputWithLabel label="전화번호" name="phone" placeholder="전화번호" value={this.state.age} onChange={this.onChange} />
                
                <>
                  <LoginButton onClick={this.openModal}>비밀번호 변경</LoginButton>
                  <SignIn isOpen={this.state.isModalOpen} close={this.closeModal} />
                </>
                <LoginButton>정보수정</LoginButton>
            </UserModifyContent>
        );
    }
}

export default userInpoModify;