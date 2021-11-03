import { Component } from "react";
import ExpenditureContent  from '../../component/Expenditure/ExpenditureContent';
import BtnIncomeApp from "./Template/BtnIncome/BtnIncomeApp";
import ExpendTableApp from "./Template/ExpendTable/ExpendTableApp";

const obj = [
    {id : 1 , value : "지출일지 상태관리"},
    {id : 2 , value : "지출일지 조회(월별)"}
]

class Expenditure extends Component{



    btnChanged = (number) => {
        switch (number){            
            case 1 : return  this.props.history.push('/persion-main/Expenditure/ExpenditureDayDetail');                                          
            case 2 : return  this.props.history.push('/persion-main/Expenditure/ExpenditureMonth');        
            default : return ;
        }
    }

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

    render(){

        return (
            <ExpenditureContent>
                    {this.btnSeleted()}
                    <ExpendTableApp />

            </ExpenditureContent>
        );
    }
}

export default Expenditure;

