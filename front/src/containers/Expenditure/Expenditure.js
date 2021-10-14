import { Component } from "react";
import ExpenditureContent  from '../../component/Expenditure/ExpenditureContent';
import BtnIncomeApp from "./Template/BtnIncome/BtnIncomeApp";
import ExpendTableApp from "./Template/ExpendTable/ExpendTableApp";
import moment from "moment";

const obj = [
    {id : 0 , value : "지출일지 등록"},
    {id : 1 , value : "지출일지 조회(일별)"},
    {id : 2 , value : "지출일지 조회(월별)"}
]

class Expenditure extends Component{

    constructor(props){
        super(props);

        this.state = {
            calenderYM : moment(),
            selected : moment().format("YYYY-MM-DD"),
        }
    }

    moveMonth = (month) => {
        this.setState({
            calenderYM : this.state.calenderYM.add(month,'M')
        })
    }   
    
    moveDay = (day) => {
        this.setState({
            calenderYM : moment(day,'YYYY MM DD')
        })
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
                    <ExpendTableApp  calenderYM = {this.state.calenderYM.format("YYYY년 MM월")} moveMonth = {this.moveMonth}/>

            </ExpenditureContent>
        );
    }
}

export default Expenditure;

