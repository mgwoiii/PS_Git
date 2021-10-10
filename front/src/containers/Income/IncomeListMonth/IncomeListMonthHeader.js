import React, { Component } from 'react';
import styled from "styled-components";


class IncomeListMonthHeader extends Component {


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

                    <IncomTableRow>
                        <IncomTableCell>
                           　
                        </IncomTableCell>
                        <IncomTableCell2>
                           날짜
                        </IncomTableCell2>
                        <IncomTableCell2>
                           계
                        </IncomTableCell2>
                       
                    </IncomTableRow>
                </>
        )
    }
                

}

export default IncomeListMonthHeader;


const IncomTableHeaderRow = styled.div`
    width: 100%;
    background-color: #758B66;
    border-bottom: 0.5px solid white;
    color : white;
    text-align : center;

`

const IncomTableRow = styled.div`
    width: 100%;
    height : auto;
    line-height: 20px;
    word-break:break-all;
    background-color: #a7bd99;
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