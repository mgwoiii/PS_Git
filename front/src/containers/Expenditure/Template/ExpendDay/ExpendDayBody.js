import React, { Component } from 'react';
import styled from "styled-components";

class IncomTableBody extends Component {

    
        render(){

            return(
                    <>    
                    <Row>
                        <Cell>
                            초코파이
                        </Cell>
                        <Cell>
                            10000
                        </Cell>
                    </Row>
                    <Row>
                        <Cell>
                            초코파이
                        </Cell>
                        <Cell>
                            10000
                        </Cell>
                    </Row>
                    <Row>
                        <Cell>
                            초코파이
                        </Cell>
                        <Cell>
                            10000
                        </Cell>
                    </Row>
                    </>
            )
        }
    }


export default IncomTableBody;


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
    width: 50%;
    text-align : center;
    word-break:break-all;
    word-wrap:break-word;
    border: 0.5px solid white;
    color : black;

`