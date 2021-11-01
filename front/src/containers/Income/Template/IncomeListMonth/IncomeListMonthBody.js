import React, { Component } from 'react';
import styled from "styled-components";



class IncomeListMonthBody extends Component {

        render(){
            return(
            <>
                <IncomTableRow>
                    <IncomTableCell>
                        1
                    </IncomTableCell>

                    <IncomTableCell2>
                        1일
                    </IncomTableCell2>
                    
                    <IncomTableCell2>
                        650000
                    </IncomTableCell2>
                    
               </IncomTableRow>
               <IncomTableRow>

                <IncomTableCell>
                2
                </IncomTableCell>
                
                <IncomTableCell2>
                    2일
                </IncomTableCell2>
                
                <IncomTableCell2>
                    650000
                </IncomTableCell2>
                </IncomTableRow>
             </>

            );
        }
    }


export default IncomeListMonthBody;

const IncomTableRow = styled.div`
    width: 100%;
    height : auto;
    line-height: 20px;
    word-break:break-all;
    background-color : #cde0c1;
    font-size: 0.8rem;

    color : white;
    display: flex;
`

const IncomTableCell = styled.div`
    border : none;
    width: 6%;
    text-align : center;
    word-break:break-all;
    word-wrap:break-word;
    border: 0.5px solid white;


`
const IncomTableCell2 = styled.div`
    border : none;
    width: 47%;
    text-align : center;
    word-break:break-all;
    word-wrap:break-word;
    border: 0.5px solid white;
`