import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-top: 1rem;
    padding-top: 0.6rem;
    padding-bottom: 0.5rem;

    background: #758B66;
    color: white;

    text-align: center;
    font-size: 1.25rem;
    font-weight: 500;

    cursor: pointer;
    user-select: none;
    transition: .2s all;

    &:hover {
        background: #829973;
    }

    &:active {
        background: #829973;
    }

`;


const LoginButton = ({children, onClick}) => (
  // console.log(({children, onClick})),
    <Wrapper onClick={onClick}>
        {children}
    </Wrapper>
);

export default LoginButton;