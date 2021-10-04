import moment from 'moment';
import React, { Component } from 'react';
import styled from "styled-components";

import DateHeader from "./DateHeader";
import Week from "./Week";

class Calendar extends Component {
    
            Weeks = (monthYear) => {
                const firstDayOfMonth = moment(monthYear).startOf('month');
                const firstDateOfMonth = firstDayOfMonth.get('d');
                const firstDayOfWeek = firstDayOfMonth.clone().add('d', -firstDateOfMonth);
                const _Weeks = [];
            
                for (let i = 0; i < 6; i++) {
                _Weeks.push((
                    <Week key={`RCA_Calender_Week_${i}`}
                    ymOfThisCalendar = {firstDayOfMonth.format("YYYY-MM")}
                    firstDayOfThisWeekformat={firstDayOfWeek.clone().add('d', i *7).format("YYYY-MM-DD")} />
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

