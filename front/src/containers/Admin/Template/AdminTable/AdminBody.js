import React, { Component } from 'react';
import { withRouter } from 'react-router';
import styled from "styled-components";

class AdminBody extends Component {

    constructor(props){
        super(props)

        this.state = {
            Number : 2,
        }
    }
    userInfoPage = (user) => {
        window.localStorage.setItem("userId", user.id);

        this.props.history.push({
            pathname: '/persion-main/Admin/AdminUserInfo'
        });    

        
    }
        render(){
            return(
                    <>
                     {this.props && this.props.UserDate && this.props.UserDate.map( user => 
                        <Row key = {user.id} onClick={()=> this.userInfoPage(user)}>
                            <Cell>
                            {user.userId}
                            </Cell>  
                            <Cell>
                            {user.userName}
                            </Cell>
                            
                            <Cell>
                            {user.userPhonNumber}    
                            </Cell>

                            <Cell>
                            {user.userBirthday}
                            </Cell>
                            <Cell>
                            {(user.grade_id === 2 ? "일반" : 
                              (user.grade_id === 3 ? "대기": 
                              (user.grade_id === 4 ? "반려":"")))}
                            </Cell>
                        </Row>

                     )
                     }
                     
                    </>
            )
        }
    }


export default withRouter(AdminBody);


const Row = styled.div`
    width: 100%;
    height : auto;
    line-height: 20px;
    word-break:break-all;
    background-color : #cde0c1;
    font-size: 0.8rem;

    color : white;
    display: flex;
    cursor: pointer;



`

const Cell = styled.div`
    border : none;
    width: 50%;
    text-align : center;
    word-break:break-all;
    word-wrap:break-word;
    border: 0.5px solid white;
    color : black;

`