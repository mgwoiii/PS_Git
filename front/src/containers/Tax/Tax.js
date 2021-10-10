import { Component } from "react";
import TaxContent  from '../../component/Tax/TaxContent';
import BtnIncomeApp from "../Income/BtnIncome/BtnIncomeApp";

const obj = [
    {id : 0 , value : "공과금 등록"},
    {id : 1 , value : "공과금 조회"}
]

class Tax extends Component{

    btnChanged = (number) => {
        switch (number){            
            case 0 : return  this.props.history.push('/persion-main/Tax/TaxRegister');
            case 1 : return  this.props.history.push('/persion-main/Tax/TaxDetail');                                          
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
            <TaxContent>
                    {this.btnSeleted()}
                    texMain

            </TaxContent>
        );
    }
}

export default Tax;

