import React, { Component } from 'react';
import { withRouter } from 'react-router';
import styled from "styled-components";


class ExpendTableBody extends Component {

        dayDetail = (date) => {
            // this.props.history.push('/persion-main/Expenditure/ExpenditureDayDetail');
             this.props.history.push({
                pathname: '/persion-main/Expenditure/ExpenditureDayDetail',
                date : date,
                
            });                                          
        }
        

        monthData = (monthList) => {

            let _MonthArr = [];

            monthList.map( month => {
                _MonthArr.push(
                <Row key = {`monthList${month.dayDate}`} onClick = {() => this.dayDetail(month.dayDate)}>
                    <Cell>
                        {month.dayDate}
                    </Cell>

                    <Cell2>
                        {month.daySum}
                    </Cell2>      
                </Row>
                )
            })

            return _MonthArr
        }

        render(){
            return(
            <>
                {this.monthData(this.props.monthList)}
            </>
            );
        }
    }


export default withRouter(ExpendTableBody);

const Row = styled.div`
    width: 100%;
    height : auto;
    line-height: 20px;
    word-break:break-all;
    background-color : #cde0c1;
    font-size: 0.8rem;

    color : white;
    display: flex;
    cursor: pointer;   

`

const Cell = styled.div`
    border : none;
    width: 15%;
    text-align : center;
    word-break:break-all;
    word-wrap:break-word;
    border: 0.5px solid white;
    color : black;


`
const Cell2 = styled.div`
    border : none;
    width: 85%;
    text-align : center;
    word-break:break-all;
    word-wrap:break-word;
    border: 0.5px solid white;
    color : black;

`