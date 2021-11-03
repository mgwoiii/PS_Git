import React, { Component } from 'react';
import styled from "styled-components";


class IncomTableHeader extends Component {


    render(){
        return(
                <>        
                    <IncomTableHeaderRow>
                        <RCA_UL>
                            <RCA_LI onClick={() => {this.props.moveDay(-1)}}>
                                    &lt;
                            </RCA_LI>
                            <RCA_LI2>
                                    {this.props.calenderYMD}
                            </RCA_LI2>
                            <RCA_LI onClick={() => {this.props.moveDay(1)}}>
                                &gt;
                            </RCA_LI>
                        </RCA_UL>       
                    </IncomTableHeaderRow>

                    <Row>
                        <Cell>
                            구매내역
                        </Cell>
                        <Cell>
                            가격
                        </Cell>
                        <Cell2>
                            
                        </Cell2>
                    </Row>
                </>
        )
    }
                

}

export default IncomTableHeader;


const IncomTableHeaderRow = styled.div`
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
    width: 45%;
    text-align : center;
    word-break:break-all;
    word-wrap:break-word;
    border: 0.5px solid white;


`
const Cell2 = styled.div`
    border : none;
    width: 10%;
    text-align : center;
    word-break:break-all;
    word-wrap:break-word;
    border: 0.5px solid white;
    color : black;

`
const RCA_UL = styled.ul`
    display: inline-block;
    list-style:none;
    margin: 0;

`
const RCA_LI = styled.li`
    font-size: 1.5rem;
    font-weight: bold;

    display: flex;
    justify-content: center;
    width : 50px;
    height: 50px;
    cursor: pointer;   
    float: left;
    line-height: 80px;

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