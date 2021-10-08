import { Component } from "react";
import IncomeContent  from '../../component/Income/IncomeContent';

import IncomTableApp from './IncomeTable/IncomTableApp';
import BtnIncomeApp from './BtnIncome/BtnIncomeApp';

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
            case  0 : return  this.props.history.push('/persion-main/Income/IncomeSingUp');
            case  1 : return  this.props.history.push('/persion-main/Income/IncomeSearch');
            case  2 : return  this.props.history.push('/persion-main/Income/IncomeSearchList');        
            default : return ;
        }
    }

    IncomTableHeaderObj = () => {
        return IncomTableHeaderObj;
    }
    render(){
        return (
            <IncomeContent>
                    {this.btnSeleted()}
                    <IncomTableApp IncomTableHeaderObj={this.IncomTableHeaderObj()}/>
            </IncomeContent>
        );
    }
}

export default Income;

