import React, { Component } from 'react';
import styled from "styled-components";
import DatePicker from "react-datepicker";
import { ko } from 'date-fns/esm/locale';


class PersionTableHeader extends Component {

    ClickCalender = (date) => {


        let year = date.getFullYear();
        let month = date.getMonth(); 
        let day = date.getDate();
        
         this.props.setStartDate(year,month,day);
    }
    
    render(){
        
        return(
                <>        
                    <HeaderRow>
                        <RCA_UL>
                            <RCA_LI2>
                                    <DatePicker
                                            selected={this.props.startDate}
                                            onChange = {date => this.ClickCalender(date)}
                                            locale={ko} 
                                            dateFormat="선택한 날짜 : yyyy-MM-dd"                                 
                                            />
                            </RCA_LI2>
                        </RCA_UL>       
                    </HeaderRow>

                    <Row>
                        <Cell>
                           호수
                        </Cell>
                        <Cell2>
                           체크인 상태
                        </Cell2>
                        <Cell3>
                           상태변경
                        </Cell3>
                    </Row>
                </>
        )
    }
                

}

export default PersionTableHeader;


const HeaderRow = styled.div`
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
    width: 20%;
    text-align : center;
    word-break:break-all;
    word-wrap:break-word;
    border: 0.5px solid white;


`

const Cell2 = styled.div`
    border : none;
    width: 60%;
    text-align : center;
    word-break:break-all;
    word-wrap:break-word;
    border: 0.5px solid white;

`

const Cell3 = styled.div`
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
const RCA_LI2 = styled.li`
    font-size: 2rem;
    font-weight: bold;
    display: inline-block;

    width : 300px;
    height: 80px;
    line-height: 80px;
    float: left;

`