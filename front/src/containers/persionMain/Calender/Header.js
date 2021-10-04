import React, { Component } from 'react';
import styled from "styled-components";

class Header extends Component {
    render(){
        return (
            <RCA_HEADER_CONTAINER>              
                        <RCA_UL>
                                    <RCA_LI onClick={() => {this.props.moveMonth(-1)}}>
                                         &lt;
                                    </RCA_LI>
                                    <RCA_LI2>
                                         {this.props.calenderYM}
                                    </RCA_LI2>
                                    <RCA_LI onClick={() => {this.props.moveMonth(1)}}>
                                        &gt;
                                    </RCA_LI>
                        </RCA_UL>       
            </RCA_HEADER_CONTAINER>
        )
    }
}

const RCA_HEADER_CONTAINER = styled.div`
    background-color: rgb(224, 215, 202);
    text-align : center;
    width: 100%
    
`

const RCA_UL = styled.ul`
    display: inline-block;
    list-style:none;
    margin: 0;

`
const RCA_LI = styled.li`
    font-size: 2rem;
    font-weight: bold;

    display: flex;
    justify-content: center;
    width : 50px;
    height: 80px;
    cursor: pointer;   
    float: left;
    line-height: 80px;

`
const RCA_LI2 = styled.li`
    font-size: 2rem;
    font-weight: bold;
    display: inline-block;

    width : 200px;
    height: 80px;
    float: left;
    line-height: 80px;

`

export default Header;