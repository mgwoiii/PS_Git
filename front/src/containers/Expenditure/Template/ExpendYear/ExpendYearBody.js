import React, { Component } from 'react';
import styled from "styled-components";

class ExpendYearBody extends Component {

        render(){
            return(
                <>
                <Row>

                    <Cell2>
                        {this.props.dateTime}년 {this.props.YearReadDate01.monthDate} 월
                    </Cell2>
                    
                    <Cell2>
                        {this.props.YearReadDate01.monthSum}원
                    </Cell2>
                </Row>
                <Row>

                    <Cell2>
                        {this.props.dateTime}년 {this.props.YearReadDate02.monthDate} 월
                    </Cell2>
                    
                    <Cell2>
                        {this.props.YearReadDate02.monthSum}원
                    </Cell2>
                </Row>
                <Row>

                    <Cell2>
                        {this.props.dateTime}년 {this.props.YearReadDate03.monthDate} 월
                    </Cell2>
                    
                    <Cell2>
                        {this.props.YearReadDate03.monthSum}원
                    </Cell2>
                </Row>
                <Row>

                    <Cell2>
                        {this.props.dateTime}년 {this.props.YearReadDate04.monthDate} 월
                    </Cell2>
                    
                    <Cell2>
                        {this.props.YearReadDate04.monthSum}원
                    </Cell2>
                </Row>
                <Row>

                    <Cell2>
                        {this.props.dateTime}년 {this.props.YearReadDate05.monthDate} 월
                    </Cell2>
                    
                    <Cell2>
                        {this.props.YearReadDate05.monthSum}원
                    </Cell2>
                </Row>
                <Row>

                    <Cell2>
                        {this.props.dateTime}년 {this.props.YearReadDate06.monthDate} 월
                    </Cell2>
                    
                    <Cell2>
                        {this.props.YearReadDate06.monthSum}원
                    </Cell2>
                </Row>
                <Row>

                    <Cell2>
                        {this.props.dateTime}년 {this.props.YearReadDate07.monthDate} 월
                    </Cell2>
                    
                    <Cell2>
                        {this.props.YearReadDate07.monthSum}원
                    </Cell2>
                </Row>
                <Row>

                    <Cell2>
                        {this.props.dateTime}년 {this.props.YearReadDate08.monthDate} 월
                    </Cell2>
                    
                    <Cell2>
                        {this.props.YearReadDate08.monthSum}원
                    </Cell2>
                </Row>
                <Row>

                    <Cell2>
                        {this.props.dateTime}년 {this.props.YearReadDate09.monthDate} 월
                    </Cell2>
                    
                    <Cell2>
                        {this.props.YearReadDate09.monthSum}원
                    </Cell2>
                </Row>
                <Row>

                    <Cell2>
                        {this.props.dateTime}년 {this.props.YearReadDate10.monthDate} 월
                    </Cell2>
                    
                    <Cell2>
                        {this.props.YearReadDate10.monthSum}원
                    </Cell2>
                </Row>
                <Row>

                    <Cell2>
                        {this.props.dateTime}년 {this.props.YearReadDate11.monthDate} 월
                    </Cell2>
                    
                    <Cell2>
                        {this.props.YearReadDate11.monthSum}원
                    </Cell2>
                </Row>
                <Row>

                    <Cell2>
                        {this.props.dateTime}년 {this.props.YearReadDate12.monthDate} 월
                    </Cell2>
                    
                    <Cell2>
                        {this.props.YearReadDate12.monthSum}원
                    </Cell2>
                </Row>
            </>
            );
        }
    }


export default ExpendYearBody;

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


const Cell2 = styled.div`
    border : none;
    width: 50%;
    text-align : center;
    word-break:break-all;
    word-wrap:break-word;
    border: 0.5px solid white;


`