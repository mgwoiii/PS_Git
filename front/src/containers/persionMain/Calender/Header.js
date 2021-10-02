import React, { Component } from 'react';
import styled from "styled-components";

class Header extends Component {
    render(){
        return (
            <RCA_HEADER_CONTAINER>
                       <H2>{this.props.calenderYM}</H2>
                       <H3>{this.props.today}</H3>
            </RCA_HEADER_CONTAINER>
        )
    }
}

const H2 = styled.h2`
    display: flex;
    justify-content: center
`

const H3 = styled.h3`
    display: flex;
    justify-content: center
`


const RCA_HEADER_CONTAINER = styled.div`
    flex-basis: 50px;
    background-color: rgb(224, 215, 202);
`
export default Header;