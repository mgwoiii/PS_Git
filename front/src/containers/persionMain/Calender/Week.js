import moment from 'moment';
import React, { Component } from 'react';
import styled from "styled-components";


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

    mapDaysToComponents = (Days, calenderMonthYear, fn = () => {}) => {

        const thisMonth = moment(calenderMonthYear);

        return Days.map((dayInfo, i) => {
            
            let className = null;


            if(!thisMonth.isSame(dayInfo.yearMonthDayFormat,'month')){
                className = <><DATE_NOT_THIS_MONTH>
                                {dayInfo.getDay}
                              </DATE_NOT_THIS_MONTH>
                              <DATE_NOTE>
                              </DATE_NOTE></>
            }else if( i === 0){
                className = <><DATE_SUN>
                                 {dayInfo.getDay}
                             </DATE_SUN>
                             <DATE_NOTE>
                                 
                             </DATE_NOTE> </>;
            }else if( i === 6 ){
                className = <><DATE_SAT>
                                {dayInfo.getDay}
                              </DATE_SAT>
                              <DATE_NOTE>

                              </DATE_NOTE> </>;
            }else {
                className = <><DATE_WEEKDAY_LABEL>
                                {dayInfo.getDay}
                              </DATE_WEEKDAY_LABEL>
                              <DATE_NOTE>

                              </DATE_NOTE> </>;
             }


    
        return (
            <RCA_CALENDER_DAY key={`RCA_Calender_Week_${i}`} onClick={() => fn(dayInfo.yearMonthDayFormat)}>
                    <RCA_CALENDER_DAY_LABEL>
                        {className}
                    </RCA_CALENDER_DAY_LABEL>
            </RCA_CALENDER_DAY>
                )
            })
    }

        render() {
            return (
                <RCA_CALENDER_WEEK>
                    {this.mapDaysToComponents(this.Days(this.props.firstDayOfThisWeekformat), this.props.ymOfThisCalendar)}
                </RCA_CALENDER_WEEK>
            )
        }
}

export default Week;


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
const DATE_NOT_THIS_MONTH = styled.div`
    color: rgb(255, 255, 255);
    height: 30px;
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
    font-size: 0.5rem;
`
