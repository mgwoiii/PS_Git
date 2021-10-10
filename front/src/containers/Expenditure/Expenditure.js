import { Component } from "react";
import ExpenditureContent  from '../../component/Expenditure/ExpenditureContent';
import BtnIncomeApp from "../Income/BtnIncome/BtnIncomeApp";

const obj = [
    {id : 0 , value : "지출일지 등록"},
    {id : 1 , value : "지출일지 조회(일별)"},
    {id : 2 , value : "지출일지 조회(월별)"}
]

class Expenditure extends Component{

    btnChanged = (number) => {
        switch (number){            
            case 0 : return  this.props.history.push('/persion-main/Expenditure/ExpenditureRegister');
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
                    ExpenditureContent

            </ExpenditureContent>
        );
    }
}

export default Expenditure;

