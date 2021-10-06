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

                    <IncomTableRow>
                        <IncomTableCell>
                            호수
                        </IncomTableCell>
                        <IncomTableCell>
                            예약유입경로
                        </IncomTableCell>
                        <IncomTableCell>
                            숙박 비용
                        </IncomTableCell>
                        <IncomTableCell>
                            바베큐 비용
                        </IncomTableCell>
                        <IncomTableCell>
                            계
                        </IncomTableCell>
                    </IncomTableRow>
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

const IncomTableRow = styled.div`
    width: 100%;
    height : 40px;
    line-height: 40px;

    background-color: #a7bd99;
    border-bottom: 0.5px solid white;
    color : white;
    display: flex;
`

const IncomTableCell = styled.div`
    border : none;
    width: 20%;
    text-align : center;
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
    float: left;
    line-height: 80px;

`