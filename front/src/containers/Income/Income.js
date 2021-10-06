import { Component } from "react";
import IncomeContent  from '../../component/Income/IncomeContent';

import IncomTableApp from './IncomeTable/IncomTableApp';
import BtnIncomeApp from './BtnIncome/BtnIncomeApp';

const obj = [
    {id : 0 , value : "수입일지 등록"},
    {id : 1 , value : "일지 조회"},
    {id : 2 , value : "기간별 조회"}
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
            case 0 :  return  this.props.history.push('/persion-main/Income/IncomeSingUp');
            case 1 :  return  alert(number);//this.props.history.push('www.gogle.com');
            case 2 :  return  alert(number);//this.props.history.push('/users');            
            default : return ;
        }
    }

    render(){
        
        return (
            <IncomeContent>
                    {this.btnSeleted()}
                    <IncomTableApp />
            </IncomeContent>
        );
    }
}

export default Income;
