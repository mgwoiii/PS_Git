import React, { Component } from 'react';
import styled from "styled-components";
import DatePicker from "react-datepicker";
import { ko } from 'date-fns/esm/locale';

import "react-datepicker/dist/react-datepicker.css";

class Header extends Component {

    ClickCalender = (dateObj, number) => {

        let date = (dateObj ? dateObj: this.props.startDate);

        let year = date.getFullYear();
        let month = (date.getMonth() + number); 
        let day = (dateObj ? date.getDate(): '1');
        let yearND = null;
                                                    
        month ++;

        if(month === 13){
            year++;
            month = '1';
        }

        if(month === 0){
            year--;
            month = 12;
        }

        if(month <10 )
            yearND = year+"-0"+month        
        else
            yearND = year+"-"+month
        
        if(day <10)
            yearND = yearND + "-0"+day;
        else
            yearND = yearND + "-"+day;

            
            this.props.moveDay(yearND);
            this.props.changeSelected(yearND, "header");
            this.props.setStartDate(year,month,day);
    }
    

    render(){
      
        return (
            <RCA_HEADER_CONTAINER>              
                        <RCA_UL>
                                    <RCA_LI onClick={() => {this.ClickCalender(null, -1);}}>
                                         &lt;
                                    </RCA_LI>
                                    <RCA_LI2>
                                         {this.props.calenderYM}
                                    </RCA_LI2>
                                    <RCA_LI3>
                                        <DatePicker
                                            selected={this.props.startDate}
                                            onChange = {date => this.ClickCalender(date, 0)}
                                            locale={ko} 
                                            dateFormat="선택한 날짜 : yyyy-MM-dd"                                 
                                            />

                                    </RCA_LI3>
                                    <RCA_LI onClick={() => {this.ClickCalender(null, 1);}}>
                                        &gt; 
                                    </RCA_LI>
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
    height: 80px;
    line-height: 80px;

`
const RCA_LI = styled.li`
    font-size: 2rem;
    color : white;

    display: flex;
    justify-content: center;
    width : 50px;
    cursor: pointer;   
    float: left;

`
const RCA_LI2 = styled.li`
    font-size: 2rem;
    font-weight: bold;
    color : white;

    display: inline-block;
    justify-content: center;

    width : 200px;
    float: left;

`

const RCA_LI3 = styled.li`
    width : 200px;
    float: left;

`


export default Header;