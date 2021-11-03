import React, { Component } from 'react';
import styled from "styled-components";



class IncomeListMonthBody extends Component {

        MonthDate = (object) =>{
            
            let _MonthArr =[];

            object.map(obj =>{
                _MonthArr.push(
                    <Row>
                        <Cell>
                        {obj.dateDate}
                        </Cell>
                        <Cell>
                        {obj.dateSum}
                        </Cell>
                    </Row>
                )
            })


            return _MonthArr;
        }

        render(){
            return(
                <>
                {this.MonthDate(this.props.MonthData)}
                
                </>
    
            );
        }
    }


export default IncomeListMonthBody;

const Row = styled.div`
    width: 100%;
    height : auto;
    line-height: 20px;
    word-break:break-all;
    background-color : #cde0c1;
    font-size: 0.8rem;

    color : black;
    display: flex;
`
const Cell = styled.div`
    border : none;
    width: 50%;
    text-align : center;
    word-break:break-all;
    word-wrap:break-word;
    border: 0.5px solid white;
`