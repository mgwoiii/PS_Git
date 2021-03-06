import React from 'react';
import styled from 'styled-components';
import { shadow } from '../lib/styleUtil';
//import { Link } from 'react-router-dom';
// 화면의 중앙에 위치시킨다
 const Positioner = styled.div`
    
    padding: 1rem;
    display: flex;
    justify-content: center;
    
    `;

// 너비, 그림자 설정
const ShadowedBox = styled.div`
    width: 500px;
    ${shadow(2)}
`;

// 로고
const LogoWrapper = styled.div`
    background: #758B66;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.div`
    color: white;
    font-family: 'Rajdhani';
    font-size: 2.4rem;
    letter-spacing: 5px;
    text-decoration: none;
`;

// children 이 들어가는 곳
const Contents = styled.div`
    background: white;
    padding: 2rem;
    height: auto;
`;

const UserModifyWrapper = ({children}) => (
    
    <Positioner>
        <ShadowedBox>
            <LogoWrapper>
                <Logo>개인정보 변경</Logo>
            </LogoWrapper>
            <Contents>
                {children}
            </Contents>
        </ShadowedBox>
    </Positioner>
);

export default UserModifyWrapper;