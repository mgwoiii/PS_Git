import React, { Component } from 'react';
import styled from "styled-components";
import Header from './Header';
import Calendar from './Calendar';

import moment from 'moment';
import { withRouter } from 'react-router-dom';


class CalenderApp extends Component {

    constructor(props){
        super(props);

        let dateNumber = moment();
        let year2 = dateNumber.format("YYYY");
        let month2 = (dateNumber.format("MM")); 
        let day2 = dateNumber.format("DD");
    
        this.state = {
            calenderYM : moment(),
            selected : moment().format("YYYY-MM-DD"),
            startDate : new Date(year2,month2 -1 ,day2)
        }
    }
   
    moveMonth = (month) => {
        this.setState({
            calenderYM : this.state.calenderYM.add(month,'M')
        })
    }   
    
    moveDay = (day) => {
        this.setState({
            calenderYM : moment(day,'YYYY MM DD')
        })
    }

    static defaultProps = {
        clickFn : () => {}
    }

    changeSelected = (clickedDate, value) => {

        if(value === "header"){
            if(moment(clickedDate).isSame(this.state.selected,'day')){
                this.props.clickFn(clickedDate);
                return;
            }

            this.setState({
                selected : clickedDate,
            }, () => {
                // setState 이후 실행됨
            // setState 한 후 처리할 비지니스 로직 혹은 메서드 호출하면 동기식으로 처리 가능
            })

            this.props.clickFn(clickedDate)

            if(moment(clickedDate).isBefore(this.state.calenderYM,'month')){
                this.moveMonth(-1)
            }else if(moment(clickedDate).isAfter(this.state.calenderYM,'month')){
                this.moveMonth(1)
            }

            // label 업데이트 
            let aa = clickedDate.split('-');

            // 0(year) , 1(month), 2(day)
            this.setStartDate(aa[0], aa[1], aa[2]);

        }else{
           this.props.history.push({
                pathname: '/persion-main/Persion/PersionMainDayDetail',
                clickedDate : clickedDate,
                
            });
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

    render(){
        return (
                <RCA_APP_CONTAINER>
                    <Header calenderYM ={ this.state.calenderYM.format("YYYY년 MM월")}
                            calenderYMD = {this.state.calenderYM}
                            moveDay = {this.moveDay}
                            changeSelected ={this.changeSelected}
                            startDate = {this.state.startDate}
                            setStartDate = {this.setStartDate}
                    />
                    <Calendar YM = { this.state.calenderYM.format("YYYY-MM-DD")}
                              selected = {this.state.selected} 
                              changeSelected = {this.changeSelected}
                    />
                </RCA_APP_CONTAINER>
        )
    }
}

const RCA_APP_CONTAINER = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border : none;
    
`


export default withRouter(CalenderApp);
