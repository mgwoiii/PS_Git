import React, { Component } from 'react';
import styled from "styled-components";


class ExpendTableHeader extends Component {

    render(){
        return(
                <>        
                    <HeaderRow>
                        <RCA_UL>
                                    <RCA_LI onClick={() => {this.props.moveMonth(-1);}}>
                                         &lt;
                                    </RCA_LI>
                                    <RCA_LI2>
                                         {this.props.calenderYM}
                                    </RCA_LI2>
                                    <RCA_LI onClick={() => {this.props.moveMonth(1);}}>
                                        &gt; 
                                    </RCA_LI>

                        </RCA_UL>       
                    </HeaderRow>

                    <Row>
                        <Cell>
                           순서
                        </Cell>
                        <Cell2>
                           지출내용
                        </Cell2>
                        <Cell2>
                           원
                        </Cell2>
                       
                    </Row>
                </>
        )
    }
                

}

export default ExpendTableHeader;


const HeaderRow = styled.div`
    width: 100%;
    background-color: #758B66;
    border-bottom: 0.5px solid white;
    color : white;
    text-align : center;

`

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
    width: 15%;
    text-align : center;
    word-break:break-all;
    word-wrap:break-word;
    border: 0.5px solid white;


`
const Cell2 = styled.div`
    border : none;
    width: 42.5%;
    text-align : center;
    word-break:break-all;
    word-wrap:break-word;
    border: 0.5px solid white;
`


const RCA_UL = styled.ul`
    display: inline-block;
    list-style:none;
    margin: 0;

`
const RCA_LI = styled.li`
    font-size: 2rem;
    color : white;

    display: flex;
    justify-content: center;
    height: 80px;
    line-height: 80px;
    cursor: pointer;   
    float: left;

`

const RCA_LI2 = styled.li`
    font-size: 2rem;
    font-weight: bold;
    display: inline-block;

    width : 300px;
    height: 80px;
    line-height: 80px;
    float: left;

`