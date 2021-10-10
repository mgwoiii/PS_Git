

import React from 'react';
import styled from 'styled-components';
import { shadow } from '../lib/styleUtil';

import Top from '../Top/Top';


const PersionWrapper = ({children}) => (
    <Positioner>
        <ShadowedBox>
            <Top/>
            <Contents>
                {children}
            </Contents>
        </ShadowedBox>
    </Positioner>
);

export default PersionWrapper;

// 화면의 중앙에 위치시킨다
const Positioner = styled.div`
display: flex;
justify-content: center;
`;

// 너비, 그림자 설정
const ShadowedBox = styled.div`
    width: 100%;
    ${shadow(2)}
`;

// children 이 들어가는 곳
const Contents = styled.div`
background: white;
padding: 2rem;
`;