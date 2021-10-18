import React, { Component } from 'react';
import styled from 'styled-components';
import LoginButton from '../../component/mainLogin/loginButton';
import LoginContent from '../../component/mainLogin/LoginContent';


class FindIdResult extends Component {
 
    ResultIdList = (object) => {
        const _IncomTables = [];
        
                 object.map((obj )=> {
                _IncomTables.push((
                    <Label key={`Label_${obj.userId}_${obj.id}`}>
                        {obj.userId}
                    </Label>         
                ))
            }

            );

            return _IncomTables;
        }

        Check = () => {
            this.props.history.push('/');
        }
    render(){

        return (
            <LoginContent title = "아이디 찾기 결과">
                {this.ResultIdList(this.props.location.ResultId)}
                <LoginButton onClick={this.Check} >확인</LoginButton>
            </LoginContent>
        );
    }
}

export default FindIdResult;

const Label = styled.div`
    

    width: 100%;
    color : black;
    outline: none;
    border-radius: 0px;
    line-height: 2.5rem;
    font-size: 1.03rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;

`;