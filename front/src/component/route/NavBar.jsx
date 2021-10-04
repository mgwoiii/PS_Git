import React, { Component } from 'react';

import { withRouter } from 'react-router-dom'

// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

import { connect } from 'react-redux';

import * as actions from '../../action/loadingActions';

import * as actionsLogin from '../../action/loginActions';

import styled from "styled-components";
import oc from 'open-color';

class NavBar extends Component {

    
    constructor(props) {
        super(props);

        this.state = {
            isLoading : true,
            username : null
        }


    }

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

        // window.localStorage.removeItem('value');
        // window.localStorage.clear();
        
        this.props.LOGOUT_USER();
        window.sessionStorage.clear();

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
        window.localStorage.setItem('userId', this.props.storeUsername)
        this.props.history.push('/modify-user/userInpoModify');
    }
   
    render(){
        
        const { storeIsLoading, storeUsername, LOADING_TRUE, LOADING_FALSE } = this.props;
        let button, button2, button3= null;

    if (storeIsLoading === true && storeUsername === null) {
       
        button = <LinkBtn 
        onClick={()=> { LOADING_FALSE(); this.gogo(); }} >Login</LinkBtn>;

    }else if (storeIsLoading === false && storeUsername){

        button = <LinkBtn 
        onClick={()=>{ LOADING_FALSE(); this.logOut(); }}>{storeUsername} 로그 아웃</LinkBtn>;


        if(this.props.location.pathname !== '/modify-user/userInpoModify'){
            button2 = <LinkBtn 
            onClick={()=>{ this.UserModify(); }}>개인정보 수정</LinkBtn>;    
        }
        
        button3 = <LinkBtn 
        onClick={()=>{ this.persinMainPage(); }}>첫화면으로</LinkBtn>;

    }else if(storeIsLoading === false && storeUsername === null) {
        button = <LinkBtn onClick={()=> { LOADING_TRUE(); this.mainPage(); }}>처음으로</LinkBtn>;
    }
  




// ---------------------------------------------------------------------------------------

        console.log(window.sessionStorage.getItem('name'));
        console.log(window.sessionStorage.getItem('id'));

        return(
        <div>
            {/* <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="Menu">
                            <MenuIcon/>
                        </IconButton>

                        <Typography variant="h6" style = {style}>
                            React User Application 
                        </Typography>
                        <form>
                        {button}
                        </form>

                        <form>
                        <Button onClick={() =>{ LOADING_TRUE(); this.logOut();}}>임시 로그아웃</Button>
                        <Button onClick={() =>{ this.gogo();}}> 고고 </Button>
                        </form>
                    </Toolbar>
                </AppBar>
            </div> */}

            <Navbar>
                <form>
                    {button3}{button2}{button}
                    {/* <LinkBtn onClick={() =>{ LOADING_TRUE(); this.logOut();}}>임시 로그아웃</LinkBtn> */}
                </form>
            </Navbar>
        </div>
    )
}
}

const Navbar = styled.div`
    background : ${oc.teal[6]};
    color : white;
    font-size: 1rem;
    padding: 1rem;
    height: auto;
    text-align:right;

`

const LinkBtn = styled.button`
    background : ${oc.teal[6]};
    padding: 0.5rem;
    color : white;
    border : 0;
    cursor: pointer;
    &:hover {
        background: ${oc.teal[5]};
    }
`

// const style = {
//     flexGrow : 1
// }

const mapStateToProps = (state) => ({
    storeIsLoading : state.loadingReucer.isLoading ,
    storeUsername : state.loginReucer.username
  });
  
const mapDispatchToProps = (dispatch) => ({
    LOADING_TRUE: () => dispatch(actions.loadingTrue()),
    LOADING_FALSE: () => dispatch(actions.loadingFalse()),
    LOGOUT_USER : () => dispatch(actionsLogin.logoutUser())
});

  
export default connect(mapStateToProps, mapDispatchToProps) (withRouter(NavBar));
