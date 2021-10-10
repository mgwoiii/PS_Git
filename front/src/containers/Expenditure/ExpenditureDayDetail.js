import { Component } from "react";
import ExpenditureContent  from '../../component/Expenditure/ExpenditureContent';
import BtnIncomeApp from "../Income/BtnIncome/BtnIncomeApp";

const obj = [
    {id : 0 , value : "지출일지 수정"}
]


class ExpenditureDayDetail extends Component{

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
           case 0 :  return  this.props.history.push('/persion-main/Expenditure/ExpenditureModify');    

           default : return ;
        }
    }
  
    render(){
        return (
            <ExpenditureContent>
                {this.btnSeleted()}

                ExpenditureDayDetail
            </ExpenditureContent>
        );
    }
}

export default ExpenditureDayDetail;

