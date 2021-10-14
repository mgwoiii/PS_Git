import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

import * as actions from '../../action/loadingActions';

import styled from "styled-components";

class NavBar extends Component {

    componentDidMount() {
       // this.componentsHandler(this.props.location.pathname);

        
    }
    


    // componentDidUpdate(prevProps) {
        
    //     if (this.props.location !== prevProps.location) {
    //         this.componentsHandler(this.props.location.pathname)
    //     }
    // }

  //  componentsHandler(menuItem, event) {

        // switch(menuItem){
        //     case '/login-page' :
        //                 if(this.props.storeUsername !== null){
        //                     alert("잘못된 접근입니다.");
        //                     this.mainPage();
        //                     break;
        //                 }
        //                     break;
        //     default :

        // }

        // switch(menuItem){
        //     case '/' :
        //          this.setState({ 
        //              value : window.localStorage.getItem('value')
        //          })
        //         break;

        //     case '/users' :
        //          this.setState({
        //              value : window.localStorage.getItem('value')
        //          })

        //         break;

        //     case '/login-page' :
        //         if(this.state.value !== null){
        //             alert("잘못된 접근입니다.");
        //             this.mainPage();
        //             break;
        //         }
        //             break;
                
                   
        //     default :
            
            
        // }
            
    
 //   }
    

    loginPage = () => {
            this.props.history.push('/login-page');
    }

    mainPage = () => {
        this.props.history.push('/users');
    }

    persinMainPage = () => {
        this.props.history.push('/persion-main/persionMain');
    }

    logOut = () => {
        alert('로그아웃');
   
        window.sessionStorage.clear();
        window.localStorage.clear();
        
        // users 상태에서는 새로고침을 해줘야 한다.
        //if(this.props.location.pathname === '/users'){
        //    window.location.replace("/users")
        //} else {
            this.props.history.push('/main-login/login');
       // }

    }
    gogo = () => {
        this.props.history.push('/main-login/login');
    }
    
    UserModify = () => {
        window.localStorage.setItem('userId', window.sessionStorage.getItem('name'))
        this.props.history.push('/modify-user/userInpoModify');
    }
   
    render(){
        
        const { storeIsLoading, LOADING_TRUE, LOADING_FALSE, } = this.props;
        const usernameSession = window.sessionStorage.getItem('name');
        //const idSession = window.sessionStorage.getItem('id');

        let button, button2, button3= null;

    if (storeIsLoading === true && usernameSession === null) {
       
        button = <LinkBtn 
        onClick={()=> { LOADING_FALSE(); this.gogo(); }} >Login</LinkBtn>;

    }else if (storeIsLoading === false && usernameSession){

        button = <LinkBtn 
        onClick={()=>{ LOADING_FALSE(); this.logOut(); }}>{usernameSession}님 로그 아웃</LinkBtn>;


        if(this.props.location.pathname !== '/modify-user/userInpoModify'){
            button2 = <LinkBtn 
            onClick={()=>{ this.UserModify(); }}>개인정보 수정</LinkBtn>;    
        }

        let patArr = this.props.location.pathname.split("/");

        if(patArr[1] !== 'persion-main'){
            button3 = <LinkBtn 
            onClick={()=>{ this.persinMainPage(0); }}>첫화면으로</LinkBtn>;
        }

    }else if(storeIsLoading === false && usernameSession === null) {
        button = <LinkBtn onClick={()=> { LOADING_TRUE(); this.mainPage(); }}>처음으로</LinkBtn>;
    }

        return(
            <Navbar>
                    {button3}{button2}{button}
                    {/* <LinkBtn onClick={() =>{ LOADING_TRUE(); this.logOut();}}>임시 로그아웃</LinkBtn> */}
            </Navbar>
 
    )
}
}

const Navbar = styled.div`
    background : #758B66;
    color : white;
    padding: 1rem;
    height: auto;
    text-align:right;
    font-weight: bold;

`

const LinkBtn = styled.button`
    background : #758B66;
    padding: 0.5rem;
    color : white;
    border : 0;
    cursor: pointer;
    font-weight: bold;
    font-size: 0.8rem;

    &:hover {
        background: #829973};
    }
`

const mapStateToProps = (state) => ({
    storeIsLoading : state.loadingReucer.isLoading
  });
  
const mapDispatchToProps = (dispatch) => ({
    LOADING_TRUE: () => dispatch(actions.loadingTrue()),
    LOADING_FALSE: () => dispatch(actions.loadingFalse()),
});

  
export default connect(mapStateToProps, mapDispatchToProps) (withRouter(NavBar));
