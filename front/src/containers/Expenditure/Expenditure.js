import { Component } from "react";
import ExpenditureContent  from '../../component/Expenditure/ExpenditureContent';
import BtnIncomeApp from "../Income/BtnIncome/BtnIncomeApp";
import ExpendTableApp from "./ExpendTable/ExpendTableApp";
import moment from "moment";

const obj = [
    {id : 0 , value : "지출일지 등록"},
    {id : 1 , value : "지출일지 조회(일별)"},
    {id : 2 , value : "지출일지 조회(월별)"}
]

class Expenditure extends Component{

    constructor(props){
        super(props);

        let dateNumber = moment();
        let year2 = dateNumber.format("YYYY");
        let month2 = (dateNumber.format("MM")); 
        let day2 = dateNumber.format("DD");
    
        this.state = {
            calenderYM : moment(),
            selected : moment().format("YYYY-MM-DD"),
            startDate : new Date(year2,month2 -1 ,day2)
        }
    }


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
                    <ExpendTableApp  date = {this.state.selected}/>

            </ExpenditureContent>
        );
    }
}

export default Expenditure;

