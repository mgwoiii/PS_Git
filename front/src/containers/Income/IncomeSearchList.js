import { Component } from "react";
import IncomeContent  from '../../component/Income/IncomeContent';
import BtnIncomeApp from './BtnIncome/BtnIncomeApp';

const obj = [
    {id : 0 , value : "수입일지 월 상세조회"}
]

class IncomeSearchList extends Component{

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
           case 0 :  return  this.props.history.push('/persion-main/Income/IncomeSearchListMonth');      
           default : return ;
        }
    }

    render(){
        
        return (
            <IncomeContent>
               {this.btnSeleted()} 수입일지 월별 조회 [21년 1월 ~ 12월]
            </IncomeContent>
        );
    }
}

export default IncomeSearchList;
