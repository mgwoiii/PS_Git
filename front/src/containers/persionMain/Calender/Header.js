import React, { Component } from 'react';
import styled from "styled-components";
import DatePicker from "react-datepicker";
import { ko } from 'date-fns/esm/locale';
import moment from 'moment';

import "react-datepicker/dist/react-datepicker.css";

       
class Header extends Component {

    constructor(props){
        super(props);

        let dateNumber = this.props.calenderYMD;

        let year2 = dateNumber.format("YYYY");
        let month2 = (dateNumber.format("MM") -1); 
        let day2 = dateNumber.format("DD");

        

        console.log(year2 +"::" + month2 + ";;" + day2);

        this.state = {
            startDate : new Date(year2,month2,day2),
            openDatePicker : false,
        }
    }


    setStartDate = (date) => {
        this.setState = {
            startDate : date
        }
    }

    render(){
      
        return (
            <RCA_HEADER_CONTAINER>              
                        <RCA_UL>
                                    <RCA_LI onClick={() => {this.props.moveMonth(-1)}}>
                                         &lt;
                                    </RCA_LI>
                                    <RCA_LI2>
                                         {this.props.calenderYM}
                                    </RCA_LI2>
                                    <RCA_LI2>
                                         {this.props.calenderYMDD}
                                    </RCA_LI2>
                                    <RCA_LI onClick={() => {this.props.moveMonth(1)}}>
                                        &gt; 
                                    </RCA_LI>
                                    <RCA_LI3>
                                        <DatePicker
                                        selected={this.state.startDate}
                                        

                                        onChange = {(date) => 
                                            {   
                                                let year = date.getFullYear();
                                                let month = (date.getMonth()); 
                                                let day = date.getDate();
                                                
                                                const dateString = new Date(year, month, day);
                                                const dateStringOne = new Date(year, month, 1);

                                                let staYear = this.state.startDate.getFullYear();
                                                let staMonth = (this.state.startDate.getMonth()); 
                                                let staDay = this.state.startDate.getDate();

                                                const staDateString = new Date(staYear, staMonth, day);
                                                const staDateStringOne = new Date(staYear, staMonth, 1);
                                               
                                                console.log(dateString);
                                                console.log(staDateString);

                                                let btMs = dateString.getTime() - staDateString.getTime() ;
                                                let btDay = btMs / (1000*60*60*24) ;
                                                let btMon = Math.floor(btDay / 30);

                                                
                                                if(dateStringOne > staDateStringOne){

                                                    console.log( btMon + "(월 차이) 선택한 날짜가 크다");
                                                    console.log( btDay + "(일 차이) 선택한 날짜가 크다");

                                                    this.props.moveMonth(btMon)
                                                    this.props.moveDay(btDay)
                                                    
                                                }else if(dateStringOne < staDateStringOne){

                                                    console.log( btMon + "(월 차이) 선택한 날짜가 작다");
                                                    console.log( " 선택한 날짜가 작다");
                                                    
                                                    this.props.moveMonth(btMon)
                                                    this.props.moveDay(btDay)

                                                }else{
                                                    console.log( " 같다");

                                                }
                                                    console.log( "date : " + date);

                                                this.setStartDate(date);
                                            }
                                            }
                    
                                        locale={ko}

                                        />
                                    </RCA_LI3>
                        </RCA_UL>       
            </RCA_HEADER_CONTAINER>
        )
    }
}


const RCA_HEADER_CONTAINER = styled.div`
    background-color: #758B66;
    text-align : center;
    width: 100%
    font-weight: bold;

`

const RCA_UL = styled.ul`
    display: inline-block;
    list-style:none;
    margin: 0;

`
const RCA_LI = styled.li`
    font-size: 2rem;
    color : white;

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
    color : white;

    display: inline-block;

    width : 200px;
    height: 80px;
    float: left;
    line-height: 80px;

`

const RCA_LI3 = styled.li`

`

export default Header;