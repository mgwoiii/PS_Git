import React, { Component } from 'react';
import styled from "styled-components";
import ExpendDayHeader from "./ExpendDayHeader";
import ExpendDayBody from "./ExpendDayBody";

import moment from 'moment';
import ApiService from '../../../../ApiServer/expend/ApiService';


class ExpendDayApp extends Component {

    constructor(props){
        super(props);
        this.state = {
            calenderYMD : moment(),
            selected : moment().format("YYYY-MM-DD"),
            expendArr : [],
            expen : {
                expenNote : '',
                expenPrice : 0
            }
        }

    }
    
    componentDidMount(){
        
        if(this.props.date !== undefined){
            this.setState((state, props) => { return { 
                calenderYMD : moment(this.props.date,'YYYY MM DD'),
                
            }}, ()=>{});
            this.DateSearch(this.props.date)

        }else{
            this.DateSearch()
        }
    }

    moveDay = (day) => {
        this.setState({
            calenderYMD : this.state.calenderYMD.add(day,'days')
        }, ()=>{})

        this.DateSearch(this.state.calenderYMD.format('YYYY-MM-DD'))

    }

    DateSearch = (dateSearch) => {

    
        if(dateSearch === undefined){
            let ss = this.state.calenderYMD.format('YYYY-MM-DD');
            dateSearch = ss;
        }


        ApiService.expenDateSearch(dateSearch)
        .then((res) => {   

            this.setState((state) => { return { 
                expendArr : res.data,
                expen : {
                    ...state.expen,
                    expenNote : '',
                    expenPrice : 0
                }
            }
            }, ()=>{});

        }).catch(err => {
            console.log('expenDateSearch() Error!', err);        
        })
    
    }

     onRemove = (id) => {
        // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
        // = user.id 가 id 인 것을 제거함
        //setUsers(users.filter(user => user.id !== id));

        this.setState((state) => { return { 
            expendArr : state.expendArr.filter(expend => expend.id !== id),
         
        }
        }, ()=>{});

        ApiService.expenDayDelete(id)
        .then(() => {       
            this.DateSearch();

        }).catch(err => {
            console.log('expenDateSearch() Error!', err);        
        })

      };

   
    
    handleSelectStr = (e) => {

        let nameArr= (e.target.name||'').split('.');

        this.setState((state) => { return { 
            [nameArr[0]] :{
                ...state.expen,
                [nameArr[1]] : e.target.value
            }
        }}, ()=>{});

    }

    handleSelectNum = (e) => {

        let nameArr= (e.target.name||'').split('.');

           const { value } = e.target

           let onlyNumber = value.replace(/[^0-9]/g, '')

            if (onlyNumber === '') { // 값이 빈문자열로 나올 경우 0으로 처리
                onlyNumber = 0;
            }

            this.setState((state) => { return { 
                [nameArr[0]] :{
                    ...state.expen,
                [nameArr[1]] : parseInt(onlyNumber)
                }
            }}, ()=>{});

    }

    cellAdd = (obj, date) =>{


        if(obj.expenNote === '' && obj.expenNote === null &&  obj.expenNote === undefined){
            alert("값이 비어있습니다.")
            return false;
        }

        
        if(obj.expenPrice === 0){
            alert("0원은 입력이 불가능합니다.")
            return false;
        }


        let expen = {
            expenDate : date,
            expenNote : obj.expenNote,
            expenPrice : obj.expenPrice
        }

        ApiService.expenRegister(expen)
        .then(()=>{
            this.DateSearch()

       

        }).catch(err => console.log(err))


    }

    render(){
        return(        
            <IncomTable>
                <ExpendDayHeader calenderYMD ={this.state.calenderYMD.format("YYYY년 MM월 DD일")}
                                  moveDay={this.moveDay}
                />
                <ExpendDayBody 
                btnChanged ={this.btnChanged}
                cellAdd = {this.cellAdd}
                handleSelectStr = {this.handleSelectStr}
                handleSelectNum = {this.handleSelectNum}
                onRemove = {this.onRemove}


                expen = {this.state.expen}

                calenderYMD ={this.state.calenderYMD.format("YYYY-MM-DD")}
                expendArr = {this.state.expendArr}
                
                />
            </IncomTable>
        )
    }
}

export default ExpendDayApp;

const IncomTable = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border : none;

    width : 100%;

`

const Row = styled.div`
    width: 100%;
    height : auto;
    line-height: 20px;
    word-break:break-all;
    background-color : #cde0c1;
    font-size: 0.8rem;

    color : white;
    display: flex;
`

const Cell = styled.div`
    border : none;
    width: 45%;
    text-align : center;
    word-break:break-all;
    word-wrap:break-word;
    border: 0.5px solid white;
    color : black;

`
const Cell2 = styled.div`
    border : none;
    width: 10%;
    text-align : center;
    word-break:break-all;
    word-wrap:break-word;
    border: 0.5px solid white;
    color : black;

`