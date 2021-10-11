import React, { Component } from 'react';
import styled from "styled-components";

class ExpendYearBody extends Component {

        render(){
            return(
                <Row>
                    <Cell>
                        1
                    </Cell>

                    <Cell2>
                        2021년 1월
                    </Cell2>
                    
                    <Cell2>
                        650000
                    </Cell2>
               </Row>
            );
        }
    }


export default ExpendYearBody;

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
    width: 6%;
    text-align : center;
    word-break:break-all;
    word-wrap:break-word;
    border: 0.5px solid white;


`
const Cell2 = styled.div`
    border : none;
    width: 47%;
    text-align : center;
    word-break:break-all;
    word-wrap:break-word;
    border: 0.5px solid white;


`