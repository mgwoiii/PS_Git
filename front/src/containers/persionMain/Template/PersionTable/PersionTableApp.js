import React, { Component } from 'react';
import styled from "styled-components";
import PersionTableHeader from "./PersionTableHeader";
import PersionTableBody from "./PersionTableBody";
import ApiService from '../../../../ApiServer/Persion/ApiService';


class PersionTableApp extends Component {
    
    constructor(props){
        super(props);

        // label 업데이트 
        let aa = this.props.date.split('-');
        let bb = this.props.date;

        this.state = {
            startDate : new Date(aa[0],aa[1] -1 ,aa[2]),
            dateApp : bb,
            newGrade101 : 0,
            newGrade102 : 0,
            newGrade201 : 0,
            newGrade202 : 0,
            newGrade203 : 0,
            newGrade204 : 0,
            newGrade301 : 0,
            newGrade302 : 0,
            newGrade303 : 0,
            newGrade304 : 0,
            DayList : [],
            dateApp2 : ''

        }
    }

    componentDidMount(){
        this.startList(this.state.dateApp, 0);
    }

    setStartDate = (year,month,day) => {
        let yearND = null;
        let monthND = month;
        monthND++;
        
        if(monthND <10 )
            yearND = year+"-0"+monthND        
        else
            yearND = year+"-"+monthND
        
        if(day <10)
            yearND = yearND + "-0"+day;
        else
            yearND = yearND + "-"+day;
        this.setState(() => {
            return { startDate : new Date(year,month,day),};
                    });
        this.startList(yearND,1);

    }
  
    NotNullPointe = (data) => {
        data.map((dat)=> {

            if(dat.className_id === 1 ){
                this.setState(() => {
                    return {newGrade101: 1};
                });
            }else if(dat.className_id === 2){
                this.setState(() => {
                    return {newGrade102: 1};
                });
            }else if(dat.className_id === 3){
                this.setState(() => {
                    return {newGrade201: 1};
                });
            }else if(dat.className_id === 4){
                this.setState(() => {
                    return {newGrade202: 1};
                });
            }else if(dat.className_id === 5){
                this.setState(() => {
                    return {newGrade203: 1};
                });
            }else if(dat.className_id === 6){
                this.setState(() => {
                    return {newGrade204: 1};
                });
            }else if(dat.className_id === 7){
                this.setState(() => {
                    return {newGrade301: 1};
                });
            }else if(dat.className_id === 8){
                this.setState(() => {
                    return {newGrade302: 1};
                });
            }else if(dat.className_id === 9){
                this.setState(() => {
                    return {newGrade303: 1};
                });
            }else if(dat.className_id === 10){
                this.setState(() => {
                    return {newGrade304: 1};
                });
            }
        })
    }

    NullPointe = () => {
            this.setState(() => {
                return {
                    newGrade101 : 0,
                    newGrade102 : 0,
                    newGrade201 : 0,
                    newGrade202 : 0,
                    newGrade203 : 0,
                    newGrade204 : 0,
                    newGrade301 : 0,
                    newGrade302 : 0,
                    newGrade303 : 0,
                    newGrade304 : 0
                };
            });
    }
    
    startList = (datee, number) => {
        ApiService.chkinDateOverlap_Day(datee)
        .then((response) => {

            if(response.data.length === 0 ){
                this.NullPointe();

            }else{
                this.NotNullPointe(response.data);
            }
        }).catch(err => {
            console.log('WeekList() Error!', err);
    
        })

    }

    handleSelect = (e) => {
        this.setState({
            [e.target.name] : e.target.value
          })
      };


    btnChanged = (btnId, btnState) => {
        
        let date = this.state.startDate;

        let year = date.getFullYear();
        let month = date.getMonth() ; 
        let day =  date.getDate();
        let yearND = null;
                                                    
        month ++;

        if(month === 13){
            year++;
            month = '1';
        }

        if(month === 0){
            year--;
            month = 12;
        }

        if(month <10 )
            yearND = year+"-0"+month        
        else
            yearND = year+"-"+month
        
        if(day <10)
            yearND = yearND + "-0"+day;
        else
            yearND = yearND + "-"+day;
        
     
        ApiService.chkinDateOverlap(yearND, btnId)
        .then((response) => {
            if(response.data){
                
                alert("상태가 등록되었습니다.")
                if(btnId === 1 ){
                    this.setState((state) =>{ return {newGrade101: state.newGrade101+1}}, function () {
                    });
                }else if(btnId === 2){
                    this.setState((state) =>{ return {newGrade102: state.newGrade102+1}}, function () {
                    });
                 }else if(btnId === 3){
                    this.setState((state) =>{ return {newGrade201: state.newGrade201+1}}, function () {
                    });
                 }else if(btnId === 4){
                    this.setState((state) =>{ return {newGrade202: state.newGrade202+1}}, function () {
                    });        
                 }else if(btnId === 5){     
                    this.setState((state) =>{ return {newGrade203: state.newGrade203+1}}, function () {
                    });
                 }else if(btnId === 6){
                    this.setState((state) =>{ return {newGrade204: state.newGrade204+1}}, function () {
                    });
                 }else if(btnId === 7){
                    this.setState((state) =>{ return {newGrade301: state.newGrade301+1}}, function () {
                    });
                 }else if(btnId === 8){
                    this.setState((state) =>{ return {newGrade302: state.newGrade302+1}}, function () {
                    });
                 }else if(btnId === 9){
                    this.setState((state) =>{ return {newGrade303: state.newGrade303+1}}, function () {
                    });
                 }else if(btnId === 10){
                    this.setState((state) =>{ return {newGrade304: state.newGrade304+1}}, function () {
                    });
                 }


            }else{
                alert("상태가 삭제되었습니다.")

                if(btnId === 1 ){
                    this.setState((state) =>{ return {newGrade101: state.newGrade101-1}}, function () {
                    });
                }else if(btnId === 2){
                    this.setState((state) =>{ return {newGrade102: state.newGrade102-1}}, function () {
                    });
                 }else if(btnId === 3){
                    this.setState((state) =>{ return {newGrade201: state.newGrade201-1}}, function () {
                    });
                 }else if(btnId === 4){
                    this.setState((state) =>{ return {newGrade202: state.newGrade202-1}}, function () {
                    });        
                 }else if(btnId === 5){     
                    this.setState((state) =>{ return {newGrade203: state.newGrade203-1}}, function () {
                    });
                 }else if(btnId === 6){
                    this.setState((state) =>{ return {newGrade204: state.newGrade204-1}}, function () {
                    });
                 }else if(btnId === 7){
                    this.setState((state) =>{ return {newGrade301: state.newGrade301-1}}, function () {
                    });
                 }else if(btnId === 8){
                    this.setState((state) =>{ return {newGrade302: state.newGrade302-1}}, function () {
                    });
                 }else if(btnId === 9){
                    this.setState((state) =>{ return {newGrade303: state.newGrade303-1}}, function () {
                    });
                 }else if(btnId === 10){
                    this.setState((state) =>{ return {newGrade304: state.newGrade304-1}}, function () {
                    });
                 }
        
            }

        }).catch(err => {
            console.log('WeekList() Error!', err);
    
        })
        
       
    }


    render(){
        return(        
            <PersionTable>
                <PersionTableHeader
                    startDate = {this.state.startDate}
                    setStartDate = {this.setStartDate}
                    date = {this.props.date} />

                <PersionTableBody 
                    btnChanged = {this.btnChanged}
                    handleSelect = {this.handleSelect}
                    startList = {this.startList}

                    date = {this.props.date}
                    newGrade101 = {this.state.newGrade101}
                    newGrade102 = {this.state.newGrade102}
                    newGrade201 = {this.state.newGrade201}
                    newGrade202 = {this.state.newGrade202}
                    newGrade203 = {this.state.newGrade203}
                    newGrade204 = {this.state.newGrade204}
                    newGrade301 = {this.state.newGrade301}
                    newGrade302 = {this.state.newGrade302}
                    newGrade303 = {this.state.newGrade303}
                    newGrade304 = {this.state.newGrade304}
                    DayList = {this.state.DayList}
                    />
            </PersionTable>
        )
    }
}

export default PersionTableApp;

const PersionTable = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border : none;
    width : 100%;

`

