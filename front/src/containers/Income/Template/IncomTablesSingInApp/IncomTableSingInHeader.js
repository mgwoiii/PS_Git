import React, { Component } from 'react';
import styled from "styled-components";


class IncomTableSingInHeader extends Component {


    render(){
        return(
                <>        
                    <Row>
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
                    </Row>

                    <InRow>
                        <Cell3>
                           호수
                        </Cell3>
                        <Cell2>
                           예약유입 <br/> 경로
                        </Cell2>
                        <Cell>
                           숙소요금
                        </Cell>
                        <Cell>
                           바베큐
                        </Cell>
                        <Cell>
                           추가인원
                        </Cell>
                        <Cell>
                            계  
                        </Cell>
                        <Cell>
                           비고
                        </Cell>
                        <Cell>
                           예약자 성함
                        </Cell>
                        <Cell3>
                            상태변경
                        </Cell3>
                    </InRow>
                </>
        )
    }
                

}

export default IncomTableSingInHeader;

const Cell = styled.div`
    border : none;
    width: 20%;
    text-align : center;
    word-break:break-all;
    word-wrap:break-word;
    
    border: 0.5px solid white;
    line-height: 60px;
`
const Cell2 = styled.div`
    border: 0.5px solid white;
    width: 20%;
    text-align : center;
    flex-direction:column;
    word-break:break-all;
    word-wrap:break-word;
    line-height: 30px;


    `
    const Cell3 = styled.div`
    border: 0.5px solid white;
    width: 15%;
    line-height: 60px;
    text-align : center;
    flex-direction:column;

    `

const Row = styled.div`
    width: 100%;
    background-color: #758B66;
    border-bottom: 0.5px solid white;
    color : white;
    text-align : center;

`

const InRow = styled.div`
    width: 100%;
    height : auto;
    word-break:break-all;
    background-color: #a7bd99;
    font-size: 0.8rem;

    color : white;
    display: flex;
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