import moment, { fn } from 'moment';
import React, { Component } from 'react';
import styled from "styled-components";

import DateHeader from "./DateHeader";

class Week extends Component {
 
    state = {}
   
    Days = (firstDayFormat) => {
      const _days = [];
   
      for (let i = 0; i < 7; i++){
   
        const Day = moment(firstDayFormat).add('d', i);
        _days.push({
          yearMonthDayFormat: Day.format("YYYY-MM-DD"),
          getDay: Day.format('D'),
          isHolyDay: false
        });
      }

      return _days;
    }

    mapDaysToComponents = (Days, fn = () => { }) => {

        return Days.map((dayInfo, i) => {
            let className = "date-weekday-label";

            if( i === 0){
                className = "date-sun";
            }else if( i === 6 ){
                className ="date-set";
            }
      
        
        return (
            <div className = {"RCA_calender_day" + className} onClick={() => fn(dayInfo.yearMonthDayFormat)}>
                <label className = "RCA_calender-day-label">
                    {dayInfo.getDay}
                </label>
                { /* <label className="RCA_calender_day">{dayInfo.getDay}</label> */}
            </div>
                )
            })
    }

        render() {
            return (
                <RCA_CALENDER_WEEK>
                    {this.mapDaysToComponents(this.Days(this.props.firstDayOfThisWeekformat))}
                </RCA_CALENDER_WEEK>
            )
        }
}

class Calendar extends Component {
    
    Weeks = (monthYear) => {
        const firstDayOfMonth = moment(monthYear).startOf('month');
        const firstDateOfMonth = firstDayOfMonth.get('d');

        const firstDayOfWeek = firstDayOfMonth.clone().add('d', -firstDateOfMonth);
        // const lastDayOfThisCalender = dayOfThisCalender.clone().add('d', 6 * 7);
        
        const _Weeks = [];

        for( let i = 0; i < 6 ; i++){
            _Weeks.push((
                <Week key={`RCA_CALENDER_WEEK_${i}`} firstDayOfThisWeekformat = 
                {firstDayOfWeek.clone().add('d', i * 7).format("YYYY-MM-DD")} />

            ))
        }
    
    
    }
    render(){
        return (
            <RCA_CALENDER_CONTAINER>
                <DateHeader dates={"일, 월, 화, 수, 목, 금, 토"}/>
                {this.Weeks(this.props.YM)}
            </RCA_CALENDER_CONTAINER>
        )
    }
}

export default Calendar;


const RCA_CALENDER_CONTAINER = styled.div`
    flex-grow : 1;
    background-color : rgb(127, 184, 127)
`

const RCA_CALENDER_DAY_CONTAINER = styled.div`
    flex-grow: 1;
    display : flex;
    flex-wrap: wrap;
`

const RCA_CALENDER_DAY = styled.div`
    box-sizing: border-box;
    position: relative;
    flex-basis: 14.2857143%;
    border: 0.1px solid white;
    border-top: none;
    background-color: rgb(225,224,224);

    &:nth-child(odd){
        border-left : none;
        border-right: none;
`
const RCA_CALENDER_WEEK = styled.div`
    display: flex;
    flex-grow: 1;
` 

const RCA_CALENDER_DAY_LABEL = styled.div`
    display: inline-block;
    font-size: 1.2rem;
    position: absolute;
    text-align: center;
    line-height: 25px;
    top : 5px;
    right: 5px;
` 

const DATE_WEEKDAY_LABEL = styled.div`
    color : rgb(71, 71, 71)

` 