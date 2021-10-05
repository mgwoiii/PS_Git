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
    text-align : center;

`

const IncomTableRow = styled.div`
    width: 100%;
    display: flex;
`

const IncomTableCell = styled.div`
    border : 0.1px solid blue;
    width: 20%;
    text-align : center;
`

const RCA_UL = styled.ul`
    display: inline-block;
    list-style:none;
    margin: 0;

`
const RCA_LI = styled.li`
    font-size: 2rem;
    font-weight: bold;

    display: flex;
    justify-content: center;
    width : 50px;
    height: 80px;
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