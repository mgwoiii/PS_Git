import React, { Component } from 'react';
import styled from "styled-components";
import IncomTableHeader from "./IncomTableHeader";
import IncomTableBody from "./IncomTableBody";

import moment from 'moment';
import ApiService from '../../../../ApiServer/incom/ApiService';



class IncomTableApp extends Component {

    constructor(props){
        super(props);
        this.state = {
            calenderYMD : moment(),
            selected : moment().format("YYYY-MM-DD"),
            resPush : [],
            class101 : {
                className_id: 1,
                reserveType_id: 0,

                roomPrice: 0,
                roomType_id: 0,

                bbqPrice: 0,
                bbqType_id: 0 ,

                extraPeoplePrice: 0,
                extraPeopleType_id: 0,

                totalPrice: 0,
                note: "-",

                guestName: "",
                incomeDate: "",
            },

            class102 : {
                className_id: 2,
                reserveType_id: 0,

                roomPrice: 0,
                roomType_id: 0,

                bbqPrice: 0,
                bbqType_id: 0 ,

                extraPeoplePrice: 0,
                extraPeopleType_id: 0,

                totalPrice: 0,
                note: "-",

                guestName: "",
                incomeDate: "",
            }
            ,

            class201 : {
                className_id: 3,
                reserveType_id: 0,

                roomPrice: 0,
                roomType_id: 0,

                bbqPrice: 0,
                bbqType_id: 0 ,

                extraPeoplePrice: 0,
                extraPeopleType_id: 0,

                totalPrice: 0,
                note: "-",

                guestName: "",
                incomeDate: "",
            }

            ,

            class202 : {
                className_id: 4,
                reserveType_id: 0,

                roomPrice: 0,
                roomType_id: 0,

                bbqPrice: 0,
                bbqType_id: 0 ,

                extraPeoplePrice: 0,
                extraPeopleType_id: 0,

                totalPrice: 0,
                note: "-",

                guestName: "",
                incomeDate: "",
            }
            


            ,

            class203 : {
                className_id: 5,
                reserveType_id: 0,

                roomPrice: 0,
                roomType_id: 0,

                bbqPrice: 0,
                bbqType_id: 0 ,

                extraPeoplePrice: 0,
                extraPeopleType_id: 0,

                totalPrice: 0,
                note: "-",

                guestName: "",
                incomeDate: "",
            }

            ,

            class204 : {
                className_id: 6,
                reserveType_id: 0,

                roomPrice: 0,
                roomType_id: 0,

                bbqPrice: 0,
                bbqType_id: 0 ,

                extraPeoplePrice: 0,
                extraPeopleType_id: 0,

                totalPrice: 0,
                note: "-",

                guestName: "",
                incomeDate: "",
            }

            ,

            class301 : {
                className_id: 7,
                reserveType_id: 0,

                roomPrice: 0,
                roomType_id: 0,

                bbqPrice: 0,
                bbqType_id: 0 ,

                extraPeoplePrice: 0,
                extraPeopleType_id: 0,

                totalPrice: 0,
                note: "-",

                guestName: "",
                incomeDate: "",
            }
            ,

            class302 : {
                className_id: 8,
                reserveType_id: 0,

                roomPrice: 0,
                roomType_id: 0,

                bbqPrice: 0,
                bbqType_id: 0 ,

                extraPeoplePrice: 0,
                extraPeopleType_id: 0,

                totalPrice: 0,
                note: "-",

                guestName: "",
                incomeDate: "",
            }
            ,

            class303 : {
                className_id: 9,
                reserveType_id: 0,

                roomPrice: 0,
                roomType_id: 0,

                bbqPrice: 0,
                bbqType_id: 0 ,

                extraPeoplePrice: 0,
                extraPeopleType_id: 0,

                totalPrice: 0,
                note: "-",

                guestName: "",
                incomeDate: "",
            },

            class304 : {
                className_id: 10,
                reserveType_id: 0,

                roomPrice: 0,
                roomType_id: 0,

                bbqPrice: 0,
                bbqType_id: 0 ,

                extraPeoplePrice: 0,
                extraPeopleType_id: 0,

                totalPrice: 0,
                note: "-",

                guestName: "",
                incomeDate: "",
            }
        }

    }
    

    componentDidMount(){
                // (처음 시작할때 해당 날짜 데이터를 불러옴)

        this.incomeDayRead(this.state.calenderYMD.format("YYYY-MM-DD"));
    }

    moveDay = (day) => {
        this.setState({
            calenderYMD : this.state.calenderYMD.add(day,'days')
        })
        // (이전일,다음일 버튼 클릭시 해당 날짜 데이터를 불러옴)
        this.incomeDayRead(this.state.calenderYMD.format("YYYY-MM-DD"))
    }
    
    dataInsert = (res) =>{
        
        
        if(res.className_id === 1 ){
            this.setState((state) =>{ 

            return {
                    class101 :{
                        ...state.class101,
                        reserveType_id: res.reserveType_id,
                        roomPrice : res.roomPrice ,
                        className_id : res.className_id ,
                        roomType_id : res.roomType_id ,
                        bbqPrice : res.bbqPrice ,
                        bbqType_id  : res.bbqType_id ,
                        extraPeoplePrice : res.extraPeoplePrice ,
                        extraPeopleType_id : res.extraPeopleType_id ,
                        totalPrice  : res.totalPrice ,
                        note : res.note ,
                        guestName : res.guestName ,
                        IncomeDate: res.IncomeDate
                    }
                    }}

        , function () {});


        }else if(res.className_id === 2 ){
            this.setState((state) =>{ 

            return {
                    class102 :{
                        ...state.class102,
                        reserveType_id: res.reserveType_id,
                        roomPrice : res.roomPrice ,
                        className_id : res.className_id ,
                        roomType_id : res.roomType_id ,
                        bbqPrice : res.bbqPrice ,
                        bbqType_id  : res.bbqType_id ,
                        extraPeoplePrice : res.extraPeoplePrice ,
                        extraPeopleType_id : res.extraPeopleType_id ,
                        totalPrice  : res.totalPrice ,
                        note : res.note ,
                        guestName : res.guestName ,
                        IncomeDate: res.IncomeDate
                    }
                    }}

        , function () {});

        }else if(res.className_id === 3){
            this.setState((state) =>{ 

            return {
                    class201 :{
                        ...state.class201,
                        reserveType_id: res.reserveType_id,
                        roomPrice : res.roomPrice ,
                        className_id : res.className_id ,
                        roomType_id : res.roomType_id ,
                        bbqPrice : res.bbqPrice ,
                        bbqType_id  : res.bbqType_id ,
                        extraPeoplePrice : res.extraPeoplePrice ,
                        extraPeopleType_id : res.extraPeopleType_id ,
                        totalPrice  : res.totalPrice ,
                        note : res.note ,
                        guestName : res.guestName ,
                        IncomeDate: res.IncomeDate
                    }
                    }}

        , function () {});

        }else if(res.className_id === 4){
            this.setState((state) =>{ 

            return {
                    class202 :{
                        ...state.class202,
                        reserveType_id: res.reserveType_id,
                        roomPrice : res.roomPrice ,
                        className_id : res.className_id ,
                        roomType_id : res.roomType_id ,
                        bbqPrice : res.bbqPrice ,
                        bbqType_id  : res.bbqType_id ,
                        extraPeoplePrice : res.extraPeoplePrice ,
                        extraPeopleType_id : res.extraPeopleType_id ,
                        totalPrice  : res.totalPrice ,
                        note : res.note ,
                        guestName : res.guestName ,
                        IncomeDate: res.IncomeDate
                    }
                    }}

        , function () {});

        }else if(res.className_id === 5){
            this.setState((state) =>{ 

            return {
                    class203 :{
                        ...state.class203,
                        reserveType_id: res.reserveType_id,
                        roomPrice : res.roomPrice ,
                        className_id : res.className_id ,
                        roomType_id : res.roomType_id ,
                        bbqPrice : res.bbqPrice ,
                        bbqType_id  : res.bbqType_id ,
                        extraPeoplePrice : res.extraPeoplePrice ,
                        extraPeopleType_id : res.extraPeopleType_id ,
                        totalPrice  : res.totalPrice ,
                        note : res.note ,
                        guestName : res.guestName ,
                        IncomeDate: res.IncomeDate
                    }
                    }}

        , function () {});

        }else if(res.className_id === 6){
            this.setState((state) =>{ 

            return {
                    class204 :{
                        ...state.class204,
                        reserveType_id: res.reserveType_id,
                        roomPrice : res.roomPrice ,
                        className_id : res.className_id ,
                        roomType_id : res.roomType_id ,
                        bbqPrice : res.bbqPrice ,
                        bbqType_id  : res.bbqType_id ,
                        extraPeoplePrice : res.extraPeoplePrice ,
                        extraPeopleType_id : res.extraPeopleType_id ,
                        totalPrice  : res.totalPrice ,
                        note : res.note ,
                        guestName : res.guestName ,
                        IncomeDate: res.IncomeDate
                    }
                    }}

        , function () {});

        }else if(res.className_id === 7){
            this.setState((state) =>{ 

            return {
                    class301 :{
                        ...state.class301,
                        reserveType_id: res.reserveType_id,
                        roomPrice : res.roomPrice ,
                        className_id : res.className_id ,
                        roomType_id : res.roomType_id ,
                        bbqPrice : res.bbqPrice ,
                        bbqType_id  : res.bbqType_id ,
                        extraPeoplePrice : res.extraPeoplePrice ,
                        extraPeopleType_id : res.extraPeopleType_id ,
                        totalPrice  : res.totalPrice ,
                        note : res.note ,
                        guestName : res.guestName ,
                        IncomeDate: res.IncomeDate
                    }
                    }}

        , function () {});

        }else if(res.className_id === 8){
            this.setState((state) =>{ 

            return {
                    class302 :{
                        ...state.class302,
                        reserveType_id: res.reserveType_id,
                        roomPrice : res.roomPrice ,
                        className_id : res.className_id ,
                        roomType_id : res.roomType_id ,
                        bbqPrice : res.bbqPrice ,
                        bbqType_id  : res.bbqType_id ,
                        extraPeoplePrice : res.extraPeoplePrice ,
                        extraPeopleType_id : res.extraPeopleType_id ,
                        totalPrice  : res.totalPrice ,
                        note : res.note ,
                        guestName : res.guestName ,
                        IncomeDate: res.IncomeDate
                    }
                    }}

        , function () {});

        }else if(res.className_id === 9){
            this.setState((state) =>{ 

            return {
                    class303 :{
                        ...state.class303,
                        reserveType_id: res.reserveType_id,
                        roomPrice : res.roomPrice ,
                        className_id : res.className_id ,
                        roomType_id : res.roomType_id ,
                        bbqPrice : res.bbqPrice ,
                        bbqType_id  : res.bbqType_id ,
                        extraPeoplePrice : res.extraPeoplePrice ,
                        extraPeopleType_id : res.extraPeopleType_id ,
                        totalPrice  : res.totalPrice ,
                        note : res.note ,
                        guestName : res.guestName ,
                        IncomeDate: res.IncomeDate
                    }
                    }}

        , function () {});

        }else if(res.className_id === 10){
            this.setState((state) =>{ 

            return {
                    class304 :{
                        ...state.class304,
                        reserveType_id: res.reserveType_id,
                        roomPrice : res.roomPrice ,
                        className_id : res.className_id ,
                        roomType_id : res.roomType_id ,
                        bbqPrice : res.bbqPrice ,
                        bbqType_id  : res.bbqType_id ,
                        extraPeoplePrice : res.extraPeoplePrice ,
                        extraPeopleType_id : res.extraPeopleType_id ,
                        totalPrice  : res.totalPrice ,
                        note : res.note ,
                        guestName : res.guestName ,
                        IncomeDate: res.IncomeDate
                    }
                    }}

        , function () {});

        }
    }

    resPushChk = (arr) => {

            for(let number = 1; number <= 10 ;number++){

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
                                        class101 :{
                                            ...state.class101,
                                                className_id: 1,
                                                reserveType_id: 0,
                                
                                                roomPrice: 0,
                                                roomType_id: 0,
                                
                                                bbqPrice: 0,
                                                bbqType_id: 0 ,
                                
                                                extraPeoplePrice: 0,
                                                extraPeopleType_id: 0,
                                
                                                totalPrice: 0,
                                                note: "-",
                                
                                                guestName: "",
                                                incomeDate: "",
                                            }
                            }})
                        }else if( number === 2){

                            this.setState((state) =>{ 
                                return {
                                        class102 :{
                                            ...state.class102,
                                                className_id: 2,
                                                reserveType_id: 0,
                                
                                                roomPrice: 0,
                                                roomType_id: 0,
                                
                                                bbqPrice: 0,
                                                bbqType_id: 0 ,
                                
                                                extraPeoplePrice: 0,
                                                extraPeopleType_id: 0,
                                
                                                totalPrice: 0,
                                                note: "-",
                                
                                                guestName: "",
                                                incomeDate: "",
                                            }
                            }})
                        }else if( number === 3){

                            this.setState((state) =>{ 
                                return {
                                        class201 :{
                                            ...state.class201,
                                                className_id: 3,
                                                reserveType_id: 0,
                                
                                                roomPrice: 0,
                                                roomType_id: 0,
                                
                                                bbqPrice: 0,
                                                bbqType_id: 0 ,
                                
                                                extraPeoplePrice: 0,
                                                extraPeopleType_id: 0,
                                
                                                totalPrice: 0,
                                                note: "-",
                                
                                                guestName: "",
                                                incomeDate: "",
                                            }
                            }})
                        }else if( number === 4){

                            this.setState((state) =>{ 
                                return {
                                        class202 :{
                                            ...state.class202,
                                                className_id: 4,
                                                reserveType_id: 0,
                                
                                                roomPrice: 0,
                                                roomType_id: 0,
                                
                                                bbqPrice: 0,
                                                bbqType_id: 0 ,
                                
                                                extraPeoplePrice: 0,
                                                extraPeopleType_id: 0,
                                
                                                totalPrice: 0,
                                                note: "-",
                                
                                                guestName: "",
                                                incomeDate: "",
                                            }
                            }})
                        }else if( number === 5){

                            this.setState((state) =>{ 
                                return {
                                        class203 :{
                                            ...state.class203,
                                                className_id: 5,
                                                reserveType_id: 0,
                                
                                                roomPrice: 0,
                                                roomType_id: 0,
                                
                                                bbqPrice: 0,
                                                bbqType_id: 0 ,
                                
                                                extraPeoplePrice: 0,
                                                extraPeopleType_id: 0,
                                
                                                totalPrice: 0,
                                                note: "-",
                                
                                                guestName: "",
                                                incomeDate: "",
                                            }
                            }})
                        }else if( number === 6){

                            this.setState((state) =>{ 
                                return {
                                        class204 :{
                                            ...state.class204,
                                                className_id: 6,
                                                reserveType_id: 0,
                                
                                                roomPrice: 0,
                                                roomType_id: 0,
                                
                                                bbqPrice: 0,
                                                bbqType_id: 0 ,
                                
                                                extraPeoplePrice: 0,
                                                extraPeopleType_id: 0,
                                
                                                totalPrice: 0,
                                                note: "-",
                                
                                                guestName: "",
                                                incomeDate: "",
                                            }
                            }})
                        }else if( number === 7){

                            this.setState((state) =>{ 
                                return {
                                        class301 :{
                                            ...state.class301,
                                                className_id: 7,
                                                reserveType_id: 0,
                                
                                                roomPrice: 0,
                                                roomType_id: 0,
                                
                                                bbqPrice: 0,
                                                bbqType_id: 0 ,
                                
                                                extraPeoplePrice: 0,
                                                extraPeopleType_id: 0,
                                
                                                totalPrice: 0,
                                                note: "-",
                                
                                                guestName: "",
                                                incomeDate: "",
                                            }
                            }})
                        }else if( number === 8){

                            this.setState((state) =>{ 
                                return {
                                        class302 :{
                                            ...state.class302,
                                                className_id: 8,
                                                reserveType_id: 0,
                                
                                                roomPrice: 0,
                                                roomType_id: 0,
                                
                                                bbqPrice: 0,
                                                bbqType_id: 0 ,
                                
                                                extraPeoplePrice: 0,
                                                extraPeopleType_id: 0,
                                
                                                totalPrice: 0,
                                                note: "-",
                                
                                                guestName: "",
                                                incomeDate: "",
                                            }
                            }})
                        }else if( number === 9){

                            this.setState((state) =>{ 
                                return {
                                        class303 :{
                                            ...state.class303,
                                                className_id: 9,
                                                reserveType_id: 0,
                                
                                                roomPrice: 0,
                                                roomType_id: 0,
                                
                                                bbqPrice: 0,
                                                bbqType_id: 0 ,
                                
                                                extraPeoplePrice: 0,
                                                extraPeopleType_id: 0,
                                
                                                totalPrice: 0,
                                                note: "-",
                                
                                                guestName: "",
                                                incomeDate: "",
                                            }
                            }})
                        }else if( number === 10){

                            this.setState((state) =>{ 
                                return {
                                        class304 :{
                                            ...state.class304,
                                                className_id: 10,
                                                reserveType_id: 0,
                                
                                                roomPrice: 0,
                                                roomType_id: 0,
                                
                                                bbqPrice: 0,
                                                bbqType_id: 0 ,
                                
                                                extraPeoplePrice: 0,
                                                extraPeopleType_id: 0,
                                
                                                totalPrice: 0,
                                                note: "-",
                                
                                                guestName: "",
                                                incomeDate: "",
                                            }
                            }})
                        }
                    }

                
            }
            
           
     }

    incomeDayRead = (DayTime) =>{

     
        ApiService.incomeDayRead(DayTime)
        .then((response) => {

            // 배열 초기화
            this.setState((state, props) => { return { 
                resPush:[] 
             }});

            response.data.map(res =>{
                this.setState((state, props) => { return { 
                    resPush: [...this.state.resPush, res.className_id] 
                }});
            })

            response.data.map(res =>{
                this.dataInsert(res)

            })
    
            // 빈번호 체크 후 빈 값 부여
            this.resPushChk(this.state.resPush);

        }).catch(err => {
            console.log('incomeDayRead() Error!', err);
    
        })
        
    }
 






    render(){

        return(        
            <IncomTable>
                <IncomTableHeader calenderYMD ={this.state.calenderYMD.format("YYYY년 MM월 DD일")}
                                  moveDay={this.moveDay}
                                  IncomTableHeaderObj = {this.props.IncomTableHeaderObj}
                />
                <IncomTableBody 
                calenderYMD = {this.state.calenderYMD.format("YYYY-MM-DD")}

                class101 = {this.state.class101}
                class102 = {this.state.class102}

                class201 = {this.state.class201}
                class202 = {this.state.class202}
                class203 = {this.state.class203}
                class204 = {this.state.class204}

                
                class301 = {this.state.class301}
                class302 = {this.state.class302}
                class303 = {this.state.class303}
                class304 = {this.state.class304}
                />
            </IncomTable>
        )
    }
}

export default IncomTableApp;

const IncomTable = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border : none;

    width : 100%;

`