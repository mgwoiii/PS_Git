import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link } from 'react-router-dom';

// const Aligner = styled.div `
//     rext-align : right;
//     width:"100px",
//     height:"100px"
// `;

const StyleLink = styled(Link)`
    color : ${oc.gray[6]};
    margin : 5px;
    rext-align : center;
    &:hover {
        color : ${oc.gray[7]};
    }
`

const RightAlignedLink = ({ to, children}) => (
    //<Aligner>
        <StyleLink to = {to}>{children}</StyleLink>
    //</Aligner>
);

export default RightAlignedLink