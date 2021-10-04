import moment from 'moment';
import React, { Component } from 'react';
import styled from "styled-components";

import DateHeader from "./DateHeader";

class Week extends Component {
 
    state = {}
   
    Days = (firstDayFormat) => {
        console.log(firstDayFormat);                

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

    mapDaysToComponents = (Days, fn = () => {}) => {

        return Days.map((dayInfo, i) => {
            
            let className = null;

            if( i === 0){
                className = <><DATE_SUN> {dayInfo.getDay} </DATE_SUN> <DATE_NOTE> 본문내용 </DATE_NOTE> </>;
            }else if( i === 6 ){
                className = <><DATE_SAT> {dayInfo.getDay} </DATE_SAT> <DATE_NOTE> 본문내용 </DATE_NOTE> </>;
            }else {
                className = <><DATE_WEEKDAY_LABEL>{dayInfo.getDay}</DATE_WEEKDAY_LABEL> <DATE_NOTE>본문 내용</DATE_NOTE> </>;
             }


    
        return (
            <RCA_CALENDER_DAY className = {"RCA_CALENDER_DAY" + className} onClick={() => fn(dayInfo.yearMonthDayFormat)}>
                    <RCA_CALENDER_DAY_LABEL>
                        {className}
                    </RCA_CALENDER_DAY_LABEL>
                    
                    { /* <label className="RCA_calender_day">{dayInfo.getDay}</label> */}
            </RCA_CALENDER_DAY>
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
                // const lastDayOfThisCalendar = dayOfThisCalendar.clone().add('d', 6 * 7);
            
                const _Weeks = [];
            
                for (let i = 0; i < 6; i++) {
                _Weeks.push((
                    <Week key={`RCA-calendar-week-${i}`} firstDayOfThisWeekformat={firstDayOfWeek.clone().add('d', i *7).format("YYYY-MM-DD")} />
                ))
                }
                return _Weeks
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
    
    flex-basis: 14.2857143%;
    border: 0.1px solid white;
    background-color: rgb(225,224,224);
    vertical-align: top;

    &:nth-child(odd){
        border-left : none;
        border-right: none;
    }
`
const RCA_CALENDER_WEEK = styled.div`
    display: flex;
    flex-grow: 1;
` 

const RCA_CALENDER_DAY_LABEL = styled.div`
    border: 0.5px solid white;


` 

const DATE_WEEKDAY_LABEL = styled.div`
    color : rgb(71, 71, 71);
    height: 30px;
    text-align: right;
    font-size: 1.2rem;

` 

const DATE_SUN = styled.div`
    color : tomato;
    height: 30px;
    text-align: right;
    font-size: 1.2rem;

 
`
const DATE_SAT = styled.div`
    color : skyblue;
    height: 30px;
    text-align: right;
    font-size: 1.2rem;

`
const DATE_NOTE = styled.div`
    color : black;
    height: 130px;
    font-size: 1.2rem;


`
