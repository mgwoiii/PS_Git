import React, { Component } from 'react';
import styled from "styled-components";

class IncomeListYearBody extends Component {

        render(){
            return(
                <IncomTableRow>
                    <IncomTableCell>
                        1
                    </IncomTableCell>

                    <IncomTableCell2>
                        2021년 1월
                    </IncomTableCell2>
                    
                    <IncomTableCell2>
                        650000
                    </IncomTableCell2>
               </IncomTableRow>
            );
        }
    }


export default IncomeListYearBody;

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

    const InputWithLabel = ({label, ...rest}) => (
        <Wrapper>
            <Label>{label}</Label>
            <Input {...rest}/>
        </Wrapper>
    );
    // 두개가 함께 있을땐 상단 (그 사이) 에 여백을 준다
    const Wrapper = styled.div`
    & + & {
        margin-top: 1rem;
    }
    `;

    const Label = styled.div`
    font-size: 1rem;
    color : rgb(71, 71, 71);
    margin-bottom: 0.25rem;
    `;

    const Input = styled.input`
    width: 80%;
    border: 1px solid white;
    outline: none;
    border-radius: 0px;
    line-height: 1rem;
    font-size: 0.8rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    background-color: #758B66;
    color : white;
    `;
