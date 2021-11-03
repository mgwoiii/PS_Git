import React, { Component } from 'react';
import styled from "styled-components";
import ExpendYearHeader from "./ExpendYearHeader";
import ExpendYearBody from "./ExpendYearBody";

import moment from 'moment';
import ApiService from '../../../../ApiServer/expend/ApiService';


class ExpendYearApp extends Component {

    constructor(props){
        super(props);
        this.state = {
            calenderY : moment(),
            selected : moment().format("YYYY-MM-DD"),
            resPush : []
            ,
            YearReadDate01 : {
                monthDate : 1,
                monthSum : 0,
            }

            ,
            YearReadDate02 : {
                monthDate : 2,
                monthSum : 0,
            }

            ,
            YearReadDate03 : {
                monthDate : 3,
                monthSum : 0,
            }
            ,
            YearReadDate04 : {
                monthDate : 4,
                monthSum : 0,
            }
            ,
            YearReadDate05 : {
                monthDate : 5,
                monthSum : 0,
            }
            ,
            YearReadDate06 : {
                monthDate : 6,
                monthSum : 0,
            }
            ,
            YearReadDate07 : {
                monthDate : 7,
                monthSum : 0,
            }

            ,
            YearReadDate08 : {
                monthDate : 8,
                monthSum : 0,
            }

            ,
            YearReadDate09 : {
                monthDate : 9,
                monthSum : 0,
            }
            ,
            YearReadDate10 : {
                monthDate : 10,
                monthSum : 0,
            }
            ,
            YearReadDate11 : {
                monthDate : 11,
                monthSum : 0,
            }
            ,
            YearReadDate12 : {
                monthDate : 12,
                monthSum : 0,
            }
        }

    }
    
    componentDidMount(){

        let time = this.state.calenderY.format("YYYY")
        this.yearMonthData(time);
    }

    moveYear = (Year) => {
        this.setState({
            calenderY : this.state.calenderY.add(Year,'year')
        },()=>{})

        let time = this.state.calenderY.format("YYYY")
        this.yearMonthData(time);
    }
    
    yearMonthData = (time) => {

        let expenDateStart = time+"-01-01";
        let expenDateEnd = time+"-12-31";

        ApiService.expenMonthRead(expenDateStart, expenDateEnd)
        .then((res)=> {

            // 배열 초기화
            this.setState((state, props) => { return { 
                resPush:[] 
             }});

            res.data.map(res =>{
                this.setState((state, props) => { return { 
                    resPush: [...this.state.resPush, res.monthDate] 
                }});
            })
            
            // 빈번호 체크 후 빈 값 부여
            this.resPushChk(this.state.resPush);

            this.dataAdd(res.data);


        }).catch(err => {console.log(err)})

    }
    

    resPushChk = (arr) => {
        for(let number = 1; number <= 12 ;number++){

            let bool = false;

            for(let str in arr){

                if(number === arr[str]){
                    bool = true;
                }
            }
                if(bool === false){

                    if( number === 1){

                        this.setState((state) =>{ 
                            return {
                                    YearReadDate01 : {
                                        ...state.YearReadDate01,
                                        monthDate : 1,
                                        monthSum : 0,
                                    }
                        }})
                    }else if( number === 2){

                        this.setState((state) =>{ 
                            return {
                                YearReadDate02 : {
                                    ...state.YearReadDate02,
                                    monthDate : 2,
                                    monthSum : 0,
                                }
                        }})
                    }else if( number === 3){

                        this.setState((state) =>{ 
                            return {
                                  
                                YearReadDate03 : {
                                    ...state.YearReadDate03,
                                    monthDate : 3,
                                    monthSum : 0,
                                }
                        }})
                    }else if( number === 4){

                        this.setState((state) =>{ 
                            return {
                                YearReadDate04 : {
                                    ...state.YearReadDate04,
                                    monthDate : 4,
                                    monthSum : 0,
                                }
                        }})
                    }else if( number === 5){

                        this.setState((state) =>{ 
                            return {
                                   
                                YearReadDate05 : {
                                    ...state.YearReadDate05,
                                    monthDate : 5,
                                    monthSum : 0,
                                }
                        }})
                    }else if( number === 6){

                        this.setState((state) =>{ 
                            return {
                                YearReadDate06 : {
                                    ...state.YearReadDate06,
                                    monthDate : 6,
                                    monthSum : 0,
                                }
                        }})
                    }else if( number === 7){

                        this.setState((state) =>{ 
                            return {
                                YearReadDate07 : {
                                    ...state.YearReadDate06,
                                    monthDate : 7,
                                    monthSum : 0,
                                }
                        }})
                    }else if( number === 8){

                        this.setState((state) =>{ 
                            return {
                                YearReadDate08 : {
                                    ...state.YearReadDate06,
                                    monthDate : 8,
                                    monthSum : 0,
                                }
                        }})
                    }else if( number === 9){

                        this.setState((state) =>{ 
                            return {
                                YearReadDate09 : {
                                    ...state.YearReadDate09,
                                    monthDate : 9,
                                    monthSum : 0,
                                }
                        }})
                    }else if( number === 10){

                        this.setState((state) =>{ 
                            return {
                                YearReadDate10 : {
                                    ...state.YearReadDate10,
                                    monthDate : 10,
                                    monthSum : 0,
                                }
                        }})
                    }else if( number === 11){

                        this.setState((state) =>{ 
                            return {
                                YearReadDate11 : {
                                    ...state.YearReadDate11,
                                    monthDate : 11,
                                    monthSum : 0,
                                }
                        }})
                    }else if( number === 12){

                        this.setState((state) =>{ 
                            return {
                                YearReadDate12 : {
                                    ...state.YearReadDate12,
                                    monthDate : 12,
                                    monthSum : 0,
                                }
                        }})
                    }
                }

            
        }
        
       
 }

 
 dataAdd = (object) => {


    object.map( obj => {
        if(obj.monthDate === 1){
            this.setState((state, props) => { return { 
                YearReadDate01 : {
                    ...state.YearReadDate01,
                    monthDate : obj.monthDate,
                    monthSum : obj.monthSum
            }}},()=> {});

        }else if(obj.monthDate === 2){
            this.setState((state, props) => { return { 
                YearReadDate02 : {
                    ...state.YearReadDate02,
                    monthDate : obj.monthDate,
                    monthSum : obj.monthSum
            }}},()=> {});
        }else if(obj.monthDate === 3){
            this.setState((state, props) => { return { 
                YearReadDate03 : {
                    ...state.YearReadDate03,
                    monthDate : obj.monthDate,
                    monthSum : obj.monthSum
            }}},()=> {});
        }else if(obj.monthDate === 4){
            this.setState((state, props) => { return { 
                YearReadDate04 : {
                    ...state.YearReadDate04,
                    monthDate : obj.monthDate,
                    monthSum : obj.monthSum
            }}},()=> {});
        }else if(obj.monthDate === 5){
            this.setState((state, props) => { return { 
                YearReadDate05 : {
                    ...state.YearReadDate05,
                    monthDate : obj.monthDate,
                    monthSum : obj.monthSum
            }}},()=> {});
        }else if(obj.monthDate === 6){
            this.setState((state, props) => { return { 
                YearReadDate06 : {
                    ...state.YearReadDate06,
                    monthDate : obj.monthDate,
                    monthSum : obj.monthSum
            }}},()=> {});
        }else if(obj.monthDate === 7){
            this.setState((state, props) => { return { 
                YearReadDate07 : {
                    ...state.YearReadDate07,
                    monthDate : obj.monthDate,
                    monthSum : obj.monthSum
            }}},()=> {});
        }else if(obj.monthDate === 8){
            this.setState((state, props) => { return { 
                YearReadDate08 : {
                    ...state.YearReadDate08,
                    monthDate : obj.monthDate,
                    monthSum : obj.monthSum
            }}},()=> {});
        }else if(obj.monthDate === 9){
            this.setState((state, props) => { return { 
                YearReadDate09 : {
                    ...state.YearReadDate09,
                    monthDate : obj.monthDate,
                    monthSum : obj.monthSum
            }}},()=> {});
        }else if(obj.monthDate === 10){
            this.setState((state, props) => { return { 
                YearReadDate10 : {
                    ...state.YearReadDate10,
                    monthDate : obj.monthDate,
                    monthSum : obj.monthSum
            }}},()=> {});
        }else if(obj.monthDate === 11){
            this.setState((state, props) => { return { 
                YearReadDate11 : {
                    ...state.YearReadDate11,
                    monthDate : obj.monthDate,
                    monthSum : obj.monthSum
            }}},()=> {});
        }else if(obj.monthDate === 12){
            this.setState((state, props) => { return { 
                YearReadDate12 : {
                    ...state.YearReadDate12,
                    monthDate : obj.monthDate,
                    monthSum : obj.monthSum
            }}},()=> {});
        }
    
    })


}

    render(){
        return(        
            <ExpendtYear>
                <ExpendYearHeader calenderY ={this.state.calenderY.format("YYYY년")}
                                  moveYear={this.moveYear}
                />
                <ExpendYearBody
                 
                 dateTime = {this.state.calenderY.format("YYYY")}

                 YearReadDate01 = {this.state.YearReadDate01}
                 YearReadDate02 = {this.state.YearReadDate02}
                 YearReadDate03 = {this.state.YearReadDate03}
                 YearReadDate04 = {this.state.YearReadDate04}
                 YearReadDate05 = {this.state.YearReadDate05}
                 YearReadDate06 = {this.state.YearReadDate06}
                 YearReadDate07 = {this.state.YearReadDate07}
                 YearReadDate08 = {this.state.YearReadDate08}
                 YearReadDate09 = {this.state.YearReadDate09}
                 YearReadDate10 = {this.state.YearReadDate10}
                 YearReadDate11 = {this.state.YearReadDate11}
                 YearReadDate12 = {this.state.YearReadDate12}
                
                
                />
            </ExpendtYear>
        )
    }
}

export default ExpendYearApp;

const ExpendtYear = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border : none;

    width : 100%;

`