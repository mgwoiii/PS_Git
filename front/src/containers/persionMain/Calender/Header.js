import React, { Component } from 'react';
import styled from "styled-components";
import DatePicker from "react-datepicker";
import { ko } from 'date-fns/esm/locale';

import "react-datepicker/dist/react-datepicker.css";

class Header extends Component {

    constructor(props){
        super(props);

        let dateNumber = this.props.calenderYMD;
        let year2 = dateNumber.format("YYYY");
        let month2 = (dateNumber.format("MM")); 
        let day2 = dateNumber.format("DD");

        this.state = {
            startDate : new Date(year2,month2 -1 ,day2)
        }
    }


    setStartDate = (year,month,day) => {

        this.setState({
            startDate : new Date(year,month -1 ,day),
          }, () => {
            // setState 이후 실행됨
           // setState 한 후 처리할 비지니스 로직 혹은 메서드 호출하면 동기식으로 처리 가능
          })

    }

    ClickCalender = (dateObj, number) => {

        let date = (dateObj ? dateObj: this.state.startDate);

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

            this.props.moveDay(yearND)
            this.setStartDate(year,month,day );
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
                                            selected={this.state.startDate}
                                                onChange = {(date) => 
                                                    {   
                                                        this.ClickCalender(date, 0);

                                                        // let year = date.getFullYear();
                                                        // let month = (date.getMonth()); 
                                                        // let day = date.getDate();
                                                        // let yearND = null;
                                                                                                   
                                                        // month ++;
                                                        //     if(month <10 ){
                                                        //         yearND = year+"-0"+month
                                                        //         if(day <10)
                                                        //             yearND = yearND + "-0"+day;
                                                        //         else
                                                        //             yearND = yearND + "-"+day;  
                                                        //     }else{
                                                        //         yearND = year+"-"+month+"-"+ day;
                                                        //     }
                                                        //     this.props.moveDay(yearND)
                                                        //     this.setStartDate(year,month,day );
                                                    }
                                                }
                        
                                            locale={ko}

                                            />
                                    </RCA_LI3>
                                    <RCA_LI onClick={() => {this.ClickCalender(null, 1);}}>
                                        &gt; 
                                    </RCA_LI>
                                    <RCA_LI3>
                                        
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