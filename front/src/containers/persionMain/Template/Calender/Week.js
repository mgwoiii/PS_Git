import moment from 'moment';
import React, { Component } from 'react';
import styled from "styled-components";
import ApiService from '../../../../ApiServer/Persion/ApiService';
import { withRouter } from 'react-router-dom';

class Week extends Component {
    constructor(props){
        super(props)

        this.state = {
            arrayy : [],
            ssg : ''
        }

    }

    Days = (firstDayFormat) => {

      const _days = [];

      for (let i = 0; i < 7; i++){

        let chkinsert = this.props.CalSelect(i);

        const Day = moment(firstDayFormat).add( i,'day');

      let _ChkDate = [];
      let str = '';

    ApiService.WeekList(chkinsert)
        .then((response) => {
            response.data.map((oo) => 
               {

                   if(Day.format("YYYY-MM-DD") === oo.chkDate){
                   
                    if(parseInt(oo.className_id) === 1){
                        str = str + `101호 : 입실\n`;
                                
                    }else if(parseInt(oo.className_id) === 2){
                        str = str + `102호 : 입실\n`;
                    
                    }else if(parseInt(oo.className_id) ===  3){
                        str =str + "201호 : 입실 \n";
    
                    }else if(parseInt(oo.className_id) ===  4){
                        str =str + "202호 : 입실 \n";
    
                    }else if(parseInt(oo.className_id) === 5){
                        str = str + "203호 : 입실\n";
    
                    }else if(parseInt(oo.className_id) === 6){
                        str = str + "204호 : 입실\n";
                    
                    }else if(parseInt(oo.className_id) === 7){
                        str = str + "301호 : 입실\n";
                    
                    }else if(parseInt(oo.className_id) === 8){
                        str = str + "302호 : 입실\n";
            
                    }else if(parseInt(oo.className_id) === 9){
                        str = str + "303호 : 입실\n";
    
                    }else if(parseInt(oo.className_id) === 10){
                        str = str + "304호 : 입실\n";
    
                    }
               }

            })
            
            _ChkDate.push(Day.format("YYYY-MM-DD"), str)

        }).catch(err => {
            console.log('WeekList() Error!', err);
    
        })

        _days.push({
          yearMonthDayFormat: Day.format("YYYY-MM-DD"),
          getDay: Day.format('D'),
          isHolyDay: false,
          ChkDate : _ChkDate
        });
      }


      return _days;
    }

    mapDaysToComponents = (Days, calenderMonthYear,selectedDayFormat, fn = () => {} ) => {

        const thisMonth = moment(calenderMonthYear);

        return Days.map((dayInfo, i) => {

            // console.log("==dayInfo=====")
            // console.log(dayInfo.ChkDate)

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

             if(moment(dayInfo.yearMonthDayFormat).isSame(selectedDayFormat, 'day')){
                className = <>
                                <SELECTED>{dayInfo.getDay}</SELECTED>
                                <SELECTED_DATE_NOTE>
                                    
                                </SELECTED_DATE_NOTE>
                            </>
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
                    {this.mapDaysToComponents
                        (
                            this.Days(this.props.firstDayOfThisWeekformat,
                            this.props.ArrData),
                            this.props.ymOfThisCalendar,
                            this.props.selected,
                            this.props.fn
                        )
                     }
                </RCA_CALENDER_WEEK>
            )
        }
}

export default withRouter(Week);


const RCA_CALENDER_DAY = styled.div`
    
    flex-basis: 14.2857143%;
    border: 0.1px solid white;
    background-color : #cde0c1;
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
    color: white;
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

const SELECTED = styled.div`
    background-color: rgb(49,50,50);
    color: orange;
    text-align: right;
    font-size: 1.2rem;
    height: 30px;
`

const SELECTED_DATE_NOTE = styled.div`
    background-color: rgb(49,50,50);
    height: 130px;
    font-size: 0.5rem;
`