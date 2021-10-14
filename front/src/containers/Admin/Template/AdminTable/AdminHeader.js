import React, { Component } from 'react';
import styled from "styled-components";


class AdminHeader extends Component {


    render(){
        return(
                <>       

                    <Row>
                        <Cell>
                            아이디
                        </Cell>
                        <Cell>
                            사용자 이름 
                        </Cell>

                        <Cell>
                            계정상태
                        </Cell>
                        <Cell>
                            계정상태 조정
                        </Cell>
                    </Row>
                </>
        )
    }
                

}

export default AdminHeader;


const Row = styled.div`
    width: 100%;
    height : auto;
    line-height: 20px;
    word-break:break-all;
    background-color: #a7bd99;
    font-size: 0.8rem;

    color : white;
    display: flex;
`

const Cell = styled.div`
    border : none;
    width: 25%;
    text-align : center;
    word-break:break-all;
    word-wrap:break-word;
    border: 0.5px solid white;


`
