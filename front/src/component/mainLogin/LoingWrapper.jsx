import React from 'react';
import styled from 'styled-components';
import { shadow } from '../lib/styleUtil';
// 화면의 중앙에 위치시킨다
 const Positioner = styled.div`
    display: flex;
    justify-content: center;
    `;

// 너비, 그림자 설정
const ShadowedBox = styled.div`
    width: 500px;
    ${shadow(2)};
    position: absolute;
    top:50%;
    left: 50%;
    margin:-150px 0 0 -250px
`;


// children 이 들어가는 곳
const Contents = styled.div`
    background: white;
    padding: 2rem;
    height: auto;
`;

const LoingWrapper = ({children}) => (
    
    <Positioner>
        <ShadowedBox>
            <Contents>
                {children}
            </Contents>
        </ShadowedBox>
    </Positioner>
);

export default LoingWrapper;