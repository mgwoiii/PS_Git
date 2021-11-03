import React, { Component } from 'react';
import styled from "styled-components";

class IncomeListYearBody extends Component {

        render(){
            return(
                <>
                <Row>
                    <Cell>
                        1
                    </Cell>

                    <Cell2>
                       {this.props.dateTime}년 {this.props.YearReadDate01.monthDate} 월
                    </Cell2>
                    
                    <Cell2>
                    {this.props.YearReadDate01.monthSum}
                    </Cell2>
                </Row>     


                <Row>
                    <Cell>
                        2
                    </Cell>

                    <Cell2>
                       {this.props.dateTime}년 {this.props.YearReadDate02.monthDate} 월
                    </Cell2>
                    
                    <Cell2>
                    {this.props.YearReadDate02.monthSum}
                    </Cell2>
                </Row>

                
                <Row>
                    <Cell>
                        3
                    </Cell>

                    <Cell2>
                       {this.props.dateTime}년 {this.props.YearReadDate03.monthDate} 월
                    </Cell2>
                    
                    <Cell2>
                    {this.props.YearReadDate03.monthSum}
                    </Cell2>
                </Row>

                
                <Row>
                    <Cell>
                        4
                    </Cell>

                    <Cell2>
                       {this.props.dateTime}년 {this.props.YearReadDate04.monthDate} 월
                    </Cell2>
                    
                    <Cell2>
                    {this.props.YearReadDate04.monthSum}
                    </Cell2>
                </Row>

                
                <Row>
                    <Cell>
                        5
                    </Cell>

                    <Cell2>
                       {this.props.dateTime}년 {this.props.YearReadDate05.monthDate} 월
                    </Cell2>
                    
                    <Cell2>
                    {this.props.YearReadDate05.monthSum}
                    </Cell2>
                </Row>

                
                <Row>
                    <Cell>
                        6
                    </Cell>

                    <Cell2>
                       {this.props.dateTime}년 {this.props.YearReadDate06.monthDate} 월
                    </Cell2>
                    
                    <Cell2>
                    {this.props.YearReadDate06.monthSum}
                    </Cell2>
                </Row>

                
                <Row>
                    <Cell>
                        7
                    </Cell>

                    <Cell2>
                       {this.props.dateTime}년 {this.props.YearReadDate07.monthDate} 월
                    </Cell2>
                    
                    <Cell2>
                    {this.props.YearReadDate07.monthSum}
                    </Cell2>
                </Row>

                
                <Row>
                    <Cell>
                        8
                    </Cell>

                    <Cell2>
                       {this.props.dateTime}년 {this.props.YearReadDate08.monthDate} 월
                    </Cell2>
                    
                    <Cell2>
                    {this.props.YearReadDate08.monthSum}
                    </Cell2>
                </Row>

                
                <Row>
                    <Cell>
                        9
                    </Cell>

                    <Cell2>
                       {this.props.dateTime}년 {this.props.YearReadDate09.monthDate} 월
                    </Cell2>
                    
                    <Cell2>
                    {this.props.YearReadDate09.monthSum}
                    </Cell2>
                </Row>

                
                <Row>
                    <Cell>
                        10
                    </Cell>

                    <Cell2>
                       {this.props.dateTime}년 {this.props.YearReadDate10.monthDate} 월
                    </Cell2>
                    
                    <Cell2>
                    {this.props.YearReadDate10.monthSum}
                    </Cell2>
                </Row>

                
                <Row>
                    <Cell>
                        11
                    </Cell>

                    <Cell2>
                       {this.props.dateTime}년 {this.props.YearReadDate11.monthDate} 월
                    </Cell2>
                    
                    <Cell2>
                    {this.props.YearReadDate11.monthSum}
                    </Cell2>
                </Row>

                
                <Row>
                    <Cell>
                        12
                    </Cell>

                    <Cell2>
                       {this.props.dateTime}년 {this.props.YearReadDate12.monthDate} 월
                    </Cell2>
                    
                    <Cell2>
                    {this.props.YearReadDate12.monthSum}
                    </Cell2>
                </Row>
                </>
            );
        }
    }



export default IncomeListYearBody;

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
    width: 6%;
    text-align : center;
    word-break:break-all;
    word-wrap:break-word;
    border: 0.5px solid white;


`
const Cell2 = styled.div`
    border : none;
    width: 47%;
    text-align : center;
    word-break:break-all;
    word-wrap:break-word;
    border: 0.5px solid white;


`
