/* eslint-disable no-undef */
import React, { Component } from 'react';
import styled from "styled-components";
import IncomTableSingInHeader from "../IncomTablesSingInApp/IncomTableSingInHeader";
import IncomTableSingInBody from "../IncomTablesSingInApp/IncomTableSingInBody";

import ApiService from '../../../../ApiServer/incom/ApiService';

import moment from 'moment';


class IncomTableSingInApp extends Component {

            constructor(props){
                super(props);
                this.state = {
                    calenderYMD : moment(),
                    selected : moment().format("YYYY-MM-DD"),
                    resPush : [],
                    btnName101 : 0,
                    btnName102 : 0,
                    btnName201 : 0,
                    btnName202 : 0,
                    btnName203 : 0,
                    btnName204 : 0,
                    btnName301 : 0,
                    btnName302 : 0,
                    btnName303 : 0,
                    btnName304 : 0,
                    

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

    btnChanged = (obj, staNumber) => {
        

        if(obj.reserveType_id === 0 ){
            alert("예약 유입 유형이 선택되지 않았습니다.")
            return false;
        }

        if(obj.roomType_id === 0){
            alert("숙소요금 유형이 선택되지 않았습니다.")
            return false;
        }

        if( obj.bbqType_id === 0 ){
            alert("바베큐 유형이 선택되지 않았습니다.")
            return false;
        }

        if(obj.extraPeopleType_id === 0){
            alert("추가인원 유형이 선택되지 않았습니다.")
            return false;
        }

        if(obj.bbqType_id === 7){ // 미구매 선택시 0으로 처리
         
            obj.bbqPrice = 0;
        }
        
        if(obj.extraPeopleType_id === 7){ // 미구매 선택시 0으로 처리
            obj.extraPeoplePrice = 0;
        }

        let time = this.state.calenderYMD.format("YYYY-MM-DD");

        let sum = obj.roomPrice + obj.bbqPrice + obj.extraPeoplePrice;

        let income = {
            className_id : obj.className_id,
            reserveType_id : obj.reserveType_id,
            roomPrice : obj.roomPrice,
            roomType_id : obj.roomType_id,
            bbqPrice : obj.bbqPrice,
            bbqType_id : obj.bbqType_id,
            extraPeoplePrice : obj.extraPeoplePrice,
            extraPeopleType_id : obj.extraPeopleType_id,
            totalPrice : sum,
            note : obj.note,
            guestName : obj.guestName,
            incomeDate : this.state.calenderYMD.format("YYYY-MM-DD")
        }

        // insert
        if(staNumber === 0){
            ApiService.incomeRegister(income)
            .then((response) => {
                
    
                this.setState((state, props) => { return { 
                    [response.data] : 1
                 }});
                
            }).catch(err => {
                console.log('incomeRegister() Error!', err);
        
            })

        // update 
        }else if(staNumber === 1){

            ApiService.incomeDayUpdate(income)
            .then((response) => {
                    
                this.setState((state, props) => { return { 
                    [response.data] : 1
                 }});
                
            }).catch(err => {
                console.log('incomeDayUpdate() Error!', err);
        
            })
             
        // delete
        }else if(staNumber === 2){

            ApiService.incomeDayDelete(income)
            .then((response) => {
                
                this.setState((state, props) => { return { 
                    [response.data] : 0
                 }});
                
                if(response.data === 'btnName101'){
                    this.setState((state) =>{ 
        
                    return {
                            btnName101 : 0,
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
                            }}
        
                , ()=> {});
        
        
                }else if(response.data === 'btnName102'){
                    this.setState((state) =>{ 
        
                        return {
                                btnName102 : 0,
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
                                }}
            
                    , ()=> {});
                }else if(response.data === 'btnName201'){
                    this.setState((state) =>{ 
        
                        return {
                                btnName201 : 0,
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
                                }}
            
                    , ()=> {});
                }else if(response.data === 'btnName202'){
                    this.setState((state) =>{ 
        
                        return {
                                btnName202 : 0,
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
                                }}
            
                    , ()=> {});
                }else if(response.data === 'btnName203'){
                    this.setState((state) =>{ 
        
                        return {
                                btnName203 : 0,
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
                                }}
            
                    , ()=> {});
                }else if(response.data === 'btnName204'){
                    this.setState((state) =>{ 
        
                        return {
                                btnName204 : 0,
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
                                }}
            
                    , ()=> {});
                }else if(response.data === 'btnName301'){
                    this.setState((state) =>{ 
        
                        return {
                                btnName301 : 0,
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
                                }}
            
                    , ()=> {});
                }else if(response.data === 'btnName302'){
                    this.setState((state) =>{ 
        
                        return {
                                btnName302 : 0,
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
                                }}
            
                    , ()=> {});
                }else if(response.data === 'btnName303'){
                    this.setState((state) =>{ 
        
                        return {
                                btnName303 : 0,
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
                                }}
            
                    , ()=> {});
                }else if(response.data === 'btnName304'){
                    this.setState((state) =>{ 
        
                        return {
                                btnName304 : 0,
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
                                }}
            
                    , ()=> {});
                }
               



            }).catch(err => {
                console.log('incomeDayDelete() Error!', err);
        
            })

        }
    
    }




    handleSelectInput = (e) => {

        let nameArr= (e.target.name||'').split('.');

        
        if(nameArr[0] === 'class101'){
            this.setState((state) => { return { 
                [nameArr[0]] :{
                    ...state.class101,
                    [nameArr[1]] : e.target.value
                }
            }}, ()=>{});

        }else if(nameArr[0] === 'class102'){
            this.setState((state) => { return { 
                [nameArr[0]] :{
                    ...state.class102,
                    [nameArr[1]] : e.target.value
                }
            }}, ()=>{});
        }else if(nameArr[0] === 'class201'){
            this.setState((state) => { return { 
                [nameArr[0]] :{
                    ...state.class201,
                    [nameArr[1]] : e.target.value
                }
            }}, ()=>{});
        }else if(nameArr[0] === 'class202'){
            this.setState((state) => { return { 
                [nameArr[0]] :{
                    ...state.class202,
                    [nameArr[1]] : e.target.value
                }
            }}, ()=>{});
        }else if(nameArr[0] === 'class203'){
            this.setState((state) => { return { 
                [nameArr[0]] :{
                    ...state.class203,
                    [nameArr[1]] : e.target.value
                }
            }}, ()=>{});
        }else if(nameArr[0] === 'class204'){
            this.setState((state) => { return { 
                [nameArr[0]] :{
                    ...state.class204,
                    [nameArr[1]] : e.target.value
                }
            }}, ()=>{});
        }else if(nameArr[0] === 'class301'){
            this.setState((state) => { return { 
                [nameArr[0]] :{
                    ...state.class301,
                    [nameArr[1]] : e.target.value
                }
            }}, ()=>{});
        }else if(nameArr[0] === 'class302'){
            this.setState((state) => { return { 
                [nameArr[0]] :{
                    ...state.class302,
                    [nameArr[1]] : e.target.value
                }
            }}, ()=>{});
        }else if(nameArr[0] === 'class303'){
            this.setState((state) => { return { 
                [nameArr[0]] :{
                    ...state.class303,
                    [nameArr[1]] : e.target.value
                }
            }}, ()=>{});
        }else if(nameArr[0] === 'class304'){
            this.setState((state) => { return { 
                [nameArr[0]] :{
                    ...state.class304,
                    [nameArr[1]] : e.target.value
                }
            }}, ()=>{});
        }

        
      }

    handleSelect = (e) => {
        
           let nameArr= (e.target.name||'').split('.');

           const { value } = e.target

           let onlyNumber = value.replace(/[^0-9]/g, '')

            if (onlyNumber === '') { // 값이 빈문자열로 나올 경우 0으로 처리
                onlyNumber = 0;
            }


            

            if(nameArr[0] === 'class101'){
                this.setState((state) => { return { 
                    [nameArr[0]] :{
                        ...state.class101,
                        [nameArr[1]] : parseInt(onlyNumber)
                    }
                }}, ()=>{});

            }else if(nameArr[0] === 'class102'){
                this.setState((state) => { return { 
                    [nameArr[0]] :{
                        ...state.class102,
                        [nameArr[1]] : parseInt(onlyNumber)
                    }
                }}, ()=>{});
            }else if(nameArr[0] === 'class201'){
                this.setState((state) => { return { 
                    [nameArr[0]] :{
                        ...state.class201,
                        [nameArr[1]] : parseInt(onlyNumber)
                    }
                }}, ()=>{});
            }else if(nameArr[0] === 'class202'){
                this.setState((state) => { return { 
                    [nameArr[0]] :{
                        ...state.class202,
                        [nameArr[1]] : parseInt(onlyNumber)
                    }
                }}, ()=>{});
            }else if(nameArr[0] === 'class203'){
                this.setState((state) => { return { 
                    [nameArr[0]] :{
                        ...state.class203,
                        [nameArr[1]] : parseInt(onlyNumber)
                    }
                }}, ()=>{});
            }else if(nameArr[0] === 'class204'){
                this.setState((state) => { return { 
                    [nameArr[0]] :{
                        ...state.class204,
                        [nameArr[1]] : parseInt(onlyNumber)
                    }
                }}, ()=>{});
            }else if(nameArr[0] === 'class301'){
                this.setState((state) => { return { 
                    [nameArr[0]] :{
                        ...state.class301,
                        [nameArr[1]] : parseInt(onlyNumber)
                    }
                }}, ()=>{});
            }else if(nameArr[0] === 'class302'){
                this.setState((state) => { return { 
                    [nameArr[0]] :{
                        ...state.class302,
                        [nameArr[1]] : parseInt(onlyNumber)
                    }
                }}, ()=>{});
            }else if(nameArr[0] === 'class303'){
                this.setState((state) => { return { 
                    [nameArr[0]] :{
                        ...state.class303,
                        [nameArr[1]] : parseInt(onlyNumber)
                    }
                }}, ()=>{});
            }else if(nameArr[0] === 'class304'){
                this.setState((state) => { return { 
                    [nameArr[0]] :{
                        ...state.class304,
                        [nameArr[1]] : parseInt(onlyNumber)
                    }
                }}, ()=>{});
            }
		
        

        };
            
    moveDay = (day) => {
        this.setState({
            calenderYMD : this.state.calenderYMD.add(day,'days')
        })
        
        // (이전일,다음일 버튼 클릭시 해당 날짜 데이터를 불러옴)
        this.incomeDayRead(this.state.calenderYMD.format("YYYY-MM-DD"))
    }


    componentDidMount(){
        // (처음 시작할때 해당 날짜 데이터를 불러옴)
        this.incomeDayRead(this.state.calenderYMD.format("YYYY-MM-DD"));
    }


    incomeDayRead = (DayTime) =>{

     
        ApiService.incomeDayRead(DayTime)
        .then((response) => {
            console.log(response)

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

    dataInsert = (res) =>{
        
        let sum = res.roomPrice + res.bbqPrice + res.extraPeoplePrice;
        
        if(res.className_id === 1 ){
            this.setState((state) =>{ 

            return {
                    btnName101 : 1,
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
                        totalPrice  : sum ,
                        note : res.note ,
                        guestName : res.guestName ,
                        IncomeDate: res.IncomeDate
                    }
                    }}

        , function () {});


        }else if(res.className_id === 2 ){
            this.setState((state) =>{ 

            return {
                btnName102 : 1,
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
                        totalPrice  : sum ,
                        note : res.note ,
                        guestName : res.guestName ,
                        IncomeDate: res.IncomeDate
                    }
                    }}

        , function () {});

        }else if(res.className_id === 3){
            this.setState((state) =>{ 

            return {
                btnName201 : 1,
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
                        totalPrice  : sum ,
                        note : res.note ,
                        guestName : res.guestName ,
                        IncomeDate: res.IncomeDate
                    }
                    }}

        , function () {});

        }else if(res.className_id === 4){
            this.setState((state) =>{ 

            return {
                btnName202 : 1,
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
                        totalPrice  : sum ,
                        note : res.note ,
                        guestName : res.guestName ,
                        IncomeDate: res.IncomeDate
                    }
                    }}

        , function () {});

        }else if(res.className_id === 5){
            this.setState((state) =>{ 

            return {
                btnName203 : 1,
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
                        totalPrice  : sum ,
                        note : res.note ,
                        guestName : res.guestName ,
                        IncomeDate: res.IncomeDate
                    }
                    }}

        , function () {});

        }else if(res.className_id === 6){
            this.setState((state) =>{ 

            return {
                btnName204 : 1,
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
                        totalPrice  : sum ,
                        note : res.note ,
                        guestName : res.guestName ,
                        IncomeDate: res.IncomeDate
                    }
                    }}

        , function () {});

        }else if(res.className_id === 7){
            this.setState((state) =>{ 

            return {
                btnName301 : 1,
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
                        totalPrice  : sum ,
                        note : res.note ,
                        guestName : res.guestName ,
                        IncomeDate: res.IncomeDate
                    }
                    }}

        , function () {});

        }else if(res.className_id === 8){
            this.setState((state) =>{ 

            return {
                btnName302 : 1,
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
                        totalPrice  : sum ,
                        note : res.note ,
                        guestName : res.guestName ,
                        IncomeDate: res.IncomeDate
                    }
                    }}

        , function () {});

        }else if(res.className_id === 9){
            this.setState((state) =>{ 

            return {
                btnName303 : 1,
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
                        totalPrice  : sum ,
                        note : res.note ,
                        guestName : res.guestName ,
                        IncomeDate: res.IncomeDate
                    }
                    }}

        , function () {});

        }else if(res.className_id === 10){
            this.setState((state) =>{ 

            return {
                btnName304 : 1,
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
                        totalPrice  : sum ,
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
                                    btnName101 : 0,
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
                                btnName102 : 0,
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
                                btnName201 : 0,
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
                                btnName202 : 0,
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
                                btnName203 : 0,
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
                                btnName204 : 0,
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
                                btnName301 : 0,
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
                                btnName302 : 0,
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
                                btnName303 : 0,
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
                                btnName304 : 0,
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
    
    render(){
        return(        
            <IncomTable>
                <IncomTableSingInHeader calenderYMD ={this.state.calenderYMD.format("YYYY년 MM월 DD일")}
                                  moveDay={this.moveDay}
                />
                <IncomTableSingInBody 
                
                    calenderYMD = {this.state.calenderYMD.format("YYYY-MM-DD")}
                    handleSelect = {this.handleSelect}
                    handleSelectInput = {this.handleSelectInput}
                    btnChanged = {this.btnChanged}

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

                    btnName101 = {this.state.btnName101} 
                    btnName102 = {this.state.btnName102} 
                    btnName201 = {this.state.btnName201} 
                    btnName202 = {this.state.btnName202} 
                    btnName203 = {this.state.btnName203} 
                    btnName204 = {this.state.btnName204} 
                    btnName301 = {this.state.btnName301} 
                    btnName302 = {this.state.btnName302} 
                    btnName303 = {this.state.btnName303} 
                    btnName304 = {this.state.btnName304} 
                />
            </IncomTable>
        )
    }
}

export default IncomTableSingInApp;

const IncomTable = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border : none;

    width : 100%;

`