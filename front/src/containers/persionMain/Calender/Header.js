import React, { Component } from 'react';
import styled from "styled-components";

class Header extends Component {
    render(){
        return (
            <RCA_HEADER_CONTAINER>
                       헤드
            </RCA_HEADER_CONTAINER>
        )
    }
}

const RCA_HEADER_CONTAINER = styled.div`
    flex-basis: 50px;
    background-color: rgb(224, 215, 202);
`
export default Header;