import { Component } from "react";
import IncomeContent  from '../../component/Income/IncomeContent';

import IncomTableApp from './Template/IncomeTable/IncomTableApp';
import BtnIncomeApp from './Template/BtnIncome/BtnIncomeApp';

const obj = [
    {id : 0 , value : "수입일지 등록"},
    {id : 1 , value : "일지 조회(일별)"},
    {id : 2 , value : "기간별 조회(월별)"}
]

const IncomTableHeaderObj = [
    {id : 0 , value : "호수"},
    {id : 1 , value : "예약유입경로"},
    {id : 2 , value : "숙박 비용"},
    {id : 3 , value : "바베큐 비용"},
    {id : 4 , value : "계"}
]

const tsetValue = [
    {id : 0 , value : "101호", value2 : "야놀자", value3 :"1000", value4 :"850", value5 :"850"},
    {id : 1 , value : "102호", value2 : "야놀자", value3 :"1000", value4 :"850", value5 :"850"},
    {id : 2 , value : "201호", value2 : "야놀자", value3 :"1000", value4 :"850", value5 :"850"},
    {id : 3 , value : "202호", value2 : "야놀자", value3 :"1000", value4 :"850", value5 :"850"},
    {id : 4 , value : "203호", value2 : "야놀자", value3 :"1000", value4 :"850", value5 :"850"},
    {id : 5 , value : "204호", value2 : "야놀자", value3 :"1000", value4 :"850", value5 :"850"}
]

const classNumObj = [
    {id : 0 , value : "101호"},
    {id : 1 , value : "102호"},
    {id : 2 , value : "201호"},
    {id : 3 , value : "202호"},
    {id : 4 , value : "203호"},
    {id : 5 , value : "204호"},
    {id : 6 , value : "301호"},
    {id : 7 , value : "302호"},
    {id : 8 , value : "303호"},
    {id : 9 , value : "304호"}    
]

const IncomTableHeaderObj2 = [
    {id : 0 , value : "호수"},
    {id : 1 , value : "예약유입 경로"},
    {id : 2 , value : "소셜입금"},
    {id : 3 , value : "소셜공제"},
    {id : 4 , value : "숙소비용 (현금)"},
    {id : 5 , value : "숙소비용 (무통장)"},
    {id : 6 , value : "숙소비용 (카드)"},
    {id : 7 , value : "바베큐 (현금)"},
    {id : 8 , value : "바베큐 (이체)"},
    {id : 9 , value : "바베큐 (카드)"},
    {id : 10 , value : "인원추가 (현금)"},
    {id : 11 , value : "인원추가 (이체)"},
    {id : 12 , value : "인원추가 (카드)"},
    {id : 13 , value : "계"},
    {id : 14 , value : "비고"},
    {id : 15 , value : "예약자 성함"}
]


const tsetValue2 = [

    {id : 0 , value : "101호", value2 : "야놀자", value3 :"1000", value4 :"850",value5 :"1000",
    value6 :"0", value7 :"00001", value8 :"1000", value9 :"0", value10 :"0", value11 :"0", value12 :"0",
    value13 :"0", value14 :"30000", value15 :"-", value16 :"박xx"},

    {id : 1 , value : "102호", value2 : "야놀자", value3 :"1000", value4 :"850",value5 :"1000",
    value6 :"0", value7 :"00001", value8 :"1000", value9 :"0", value10 :"0", value11 :"0", value12 :"0",
    value13 :"0", value14 :"30000", value15 :"-", value16 :"박xx"},

    {id : 2 , value : "201호", value2 : "야놀자", value3 :"1000", value4 :"850",value5 :"1000",
    value6 :"0", value7 :"00001", value8 :"1000", value9 :"0", value10 :"0", value11 :"0", value12 :"0",
    value13 :"0", value14 :"30000", value15 :"-", value16 :"박xx"},


    {id : 3 , value : "202호", value2 : "야놀자", value3 :"1000", value4 :"850",value5 :"1000",
    value6 :"0", value7 :"00001", value8 :"1000", value9 :"0", value10 :"0", value11 :"0", value12 :"0",
    value13 :"0", value14 :"30000", value15 :"-", value16 :"박xx"},

    {id : 4 , value : "203호", value2 : "야놀자", value3 :"1000", value4 :"850",value5 :"1000",
    value6 :"0", value7 :"00001", value8 :"1000", value9 :"0", value10 :"0", value11 :"0", value12 :"0",
    value13 :"0", value14 :"30000", value15 :"-", value16 :"박xx"},

    {id : 5 , value : "204호", value2 : "야놀자", value3 :"1000", value4 :"850",value5 :"1000",
    value6 :"0", value7 :"00001", value8 :"1000", value9 :"0", value10 :"0", value11 :"0", value12 :"0",
    value13 :"0", value14 :"30000", value15 :"-", value16 :"박xx"},

    {id : 6 , value : "301호", value2 : "야놀자", value3 :"1000", value4 :"850",value5 :"1000",
    value6 :"0", value7 :"00001", value8 :"1000", value9 :"0", value10 :"0", value11 :"0", value12 :"0",
    value13 :"0", value14 :"30000", value15 :"-", value16 :"박xx"},


    {id : 7 , value : "302호", value2 : "야놀자", value3 :"1000", value4 :"850",value5 :"1000",
    value6 :"0", value7 :"00001", value8 :"1000", value9 :"0", value10 :"0", value11 :"0", value12 :"0",
    value13 :"0", value14 :"30000", value15 :"-", value16 :"박xx"},

    {id : 8 , value : "303호", value2 : "야놀자", value3 :"1000", value4 :"850",value5 :"1000",
    value6 :"0", value7 :"00001", value8 :"1000", value9 :"0", value10 :"0", value11 :"0", value12 :"0",
    value13 :"0", value14 :"30000", value15 :"-", value16 :"박xx"},

    {id : 9 , value : "304호", value2 : "야놀자", value3 :"1000", value4 :"850",value5 :"1000",
    value6 :"0", value7 :"00001", value8 :"1000", value9 :"0", value10 :"0", value11 :"0", value12 :"0",
    value13 :"0", value14 :"30000", value15 :"-", value16 :"박xx"},
]

class Income extends Component{

    btnSeleted = () => {
        const _BtnTables = [];

        obj.map(obj =>
            _BtnTables.push((
                <BtnIncomeApp 
                    btnName = {obj.value}
                    btnId = {obj.id}
                    btnChanged = {this.btnChanged}
                    key={`TableBtn_${obj.id}`} />
            ))
            )

        return _BtnTables;
    }

    btnChanged = (number) => {
        switch (number){            
            //case  0 : return  this.props.history.push('/persion-main/Income/IncomeSingUp');
            case 0: return this.props.history.push({
                                                        pathname: '/persion-main/Income/IncomeSingUp',
                                                        IncomTableHeaderObj : IncomTableHeaderObj2,
                                                        classNumObj : classNumObj,
                                                        tsetValue : tsetValue2
                                                        
                                                    });
            case 1 : return  this.props.history.push('/persion-main/Income/IncomeSearch');                                          
            case  2 : return  this.props.history.push('/persion-main/Income/IncomeSearchList');        
            default : return ;
        }
    }



    classNumObj = () => {
        return classNumObj;
    }
    
    tsetValue = () => {
        return tsetValue;
    }

    render(){
        return (
            <IncomeContent>
                    {this.btnSeleted()}
                    <IncomTableApp
                        classNumObj={this.classNumObj()} 
                        tsetValue = {this.tsetValue()}
                        urlName = {"Income"}
                    />
            </IncomeContent>
        );
    }
}

export default Income;

