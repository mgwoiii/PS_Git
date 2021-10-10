import { Component } from "react";
import styled from "styled-components";

class BtnIncomeApp extends Component{

    render(){
        
        return (
            <ButtonIncome onClick={() => {this.props.btnChanged(this.props.btnId)}}>
             {this.props.btnName }
            </ButtonIncome>
         
        );
    }
}

export default BtnIncomeApp;

const ButtonIncome = styled.div `
    font-size: 0.8rem;
    font-weight: bold;
    display: inline-block;
    color: black;
    cursor: pointer;
    padding: 1rem;
    text-align:right;

    &:hover {
        color : #758B66;

    }

    &:active{
        color : #758B66;
    }

`