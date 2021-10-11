import React, { Component } from 'react';
import styled from "styled-components";


class IncomTableSingInHeader extends Component {

    IncomHeader = () => {

        const _IncomHeader = [];

        this.props && this.props.IncomTableHeaderObj && this.props.IncomTableHeaderObj.map( obj => 

               
              
                    _IncomHeader.push((
                        <IncomTableCell key={`IncomHeader${obj.id}`}>
                            {obj.value}
                        </IncomTableCell> ))
                
        );

        return _IncomHeader;
    }

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
                           예약유입 경로
                        </IncomTableCell>
                        <IncomTableCell>
                           숙소요금
                        </IncomTableCell>
                        <IncomTableCell>
                           바베큐
                        </IncomTableCell>
                        <IncomTableCell>
                           추가인원
                        </IncomTableCell>
                        <IncomTableCell>
                            계  
                        </IncomTableCell>
                        <IncomTableCell>
                           비고
                        </IncomTableCell>
                        <IncomTableCell>
                           예약자 성함
                        </IncomTableCell>
                    </IncomTableRow>
                </>
        )
    }
                

}

export default IncomTableSingInHeader;


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
    width: 20%;
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