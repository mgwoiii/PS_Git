import React, { Component } from 'react';
import styled from "styled-components";

class DateHeader extends Component {

    dateToArray = (dates) => {
        if(Array.isArray(dates)){
          return dates
        }else if(typeof dates === "string"){
          return dates.split(',')
        }else{
          return ["일", "월", "화", "수", "목", "금", "토"]
        }
      }

    mapArrayToDate = (dateArray) => {
        try{
            if(dateArray.length !== 7){
                console.log(new Error("dates props must be hed 7 date "))
                dateArray =  ["일", "월", "화", "수", "목", "금", "토"]
            }

            return dateArray.map((date, index) => {
            
                const className = () => {
                    let className = null;
                    if(index === 0){
                        return className = <DATE_SUN >{date}</DATE_SUN>
                    }else if(index === 6) {
                        return className = <DATE_SAT>{date}</DATE_SAT>
                    }else {
                        return className = <DATE_WEEKDAY>{date}</DATE_WEEKDAY>
                    }
                }

                return (
                    <RCA_CALENDER_DATE_COMPONENT key={index}>
                      {className()}
                    </RCA_CALENDER_DATE_COMPONENT>
                )
            })
        }catch{
            throw new Error ("date must be string or component")
        }
    }

    render(){
        return (
            <RCA_CALENDER_DATE_HEADER>
                {this.mapArrayToDate(this.dateToArray(this.props.dates))}
            </RCA_CALENDER_DATE_HEADER>
        )
    }

}

export default DateHeader;


const RCA_CALENDER_DATE_HEADER = styled.div`
    display: flex;
    height: 50px;
    background-color: green;
`

const RCA_CALENDER_DATE_COMPONENT = styled.div`
    text-align : center;
    box-sizing : border-box;
    background-color : rgb(107, 107, 108);
    border : 0.1px solid white;
    font-size : 1.5rem;
    line-height : 50px;
    width :14.28571428571429%;

    &:nth-child(odd){
        border-left : none;
        border-right: none;
    }
`

const DATE_WEEKDAY = styled.div `
    color : rgba( 255, 255, 255, 0.603)
`

const DATE_SUN = styled.div`
    color : tomato;   
 
`
const DATE_SAT = styled.div`
    color : skyblue;
`