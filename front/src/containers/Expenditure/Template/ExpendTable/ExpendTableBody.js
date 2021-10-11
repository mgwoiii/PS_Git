import React, { Component } from 'react';
import styled from "styled-components";



class ExpendTableBody extends Component {

        render(){
            return(
                <>
                <Row>
                    <Cell>
                        1
                    </Cell>

                    <Cell2>
                        구매내역
                    </Cell2>

                    
                    <Cell2>
                        100000
                    </Cell2>
                    
                </Row>
                <Row>
                    <Cell>
                        2
                    </Cell>

                    <Cell2>
                        구매내역1
                    </Cell2>

                    
                    <Cell2>
                        100000
                    </Cell2>
                    
                </Row>
            </>
            );
        }
    }


export default ExpendTableBody;

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
    width: 42.5%;
    text-align : center;
    word-break:break-all;
    word-wrap:break-word;
    border: 0.5px solid white;
    color : black;

`