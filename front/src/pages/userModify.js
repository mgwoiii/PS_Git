import { Component } from "react";
import { Route } from "react-router";

import UserModifyWrapper from "../component/userModify/UserModifyWrapper";
import UserInpoModify from '../containers/userModify/userInpoModify';



class userModify extends Component {

    // 페이지에 진입할 때
    componentDidMount(){

    }

    // 페이지에서 벗어 날 때
    // componentWillUnmount(){

    // }

    render(){
        return (
            <UserModifyWrapper>
                <Route path = "/modify-user/userInpoModify" component={UserInpoModify}/>
            </UserModifyWrapper>
        );
    }
}

export default userModify;