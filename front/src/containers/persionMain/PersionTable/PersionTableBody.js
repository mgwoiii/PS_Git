import React, { Component } from 'react';
import styled from "styled-components";



class PersionTableBody extends Component {

        render(){
            return(
                <>
                <Row>
                    <Cell>
                        101호
                    </Cell>

                    <Cell2>
                        체크박스
                    </Cell2>
                    
                </Row>
                <Row>
                    <Cell>
                        201호
                    </Cell>

                    <Cell2>
                        체크박스
                    </Cell2>
                
                </Row>
                <Row>
                    <Cell>
                        202호
                    </Cell>

                    <Cell2>
                        체크박스
                    </Cell2>
                
                </Row>
            </>
            );
        }
    }


export default PersionTableBody;

const Row = styled.div`
    width: 100%;
    height : auto;
    line-height: 20px;
    word-break:break-all;
    background-color : #cde0c1;
    font-size: 0.8rem;

    color : white;
    display: flex;
`

const Cell = styled.div`
    border : none;
    width: 15%;
    text-align : center;
    word-break:break-all;
    word-wrap:break-word;
    border: 0.5px solid white;
    color : black;


`
const Cell2 = styled.div`
    border : none;
    width: 85%;
    text-align : center;
    word-break:break-all;
    word-wrap:break-word;
    border: 0.5px solid white;
    color : black;

`