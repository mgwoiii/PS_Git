import { Component } from "react";
import TaxContent  from '../../component/Tax/TaxContent';
import BtnIncomeApp from "../Income/BtnIncome/BtnIncomeApp";


const obj = [
    {id : 0 , value : "공과금 정보 수정"}
]
class TaxDetail extends Component{

    btnChanged = (number) => {
        switch (number){            
            case 0 : return  this.props.history.push('/persion-main/Tax/TaxModify');
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
                    TexDetail
            </TaxContent>
        );
    }
}

export default TaxDetail;

