import { Component } from "react";
import styled from "styled-components";

class BtnPersionApp extends Component{

    render(){
        
        return (
            <ButtonPersion onClick={() => {this.props.btnChanged(this.props.btnId)}}>
             {this.props.btnName }
            </ButtonPersion>
         
        );
    }
}

export default BtnPersionApp;

const ButtonPersion = styled.div `
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