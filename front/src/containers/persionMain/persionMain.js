import { Component } from "react";
import PersionContent  from '../../component/Persion/PersionContent';
import CalenderApp from "./Template/Calender/CalenderApp";
import BtnPersionApp from './Template/BtnPersion/BtnPersionApp';
import moment from "moment";


const obj = [
    {id : 0 , value : "입실 등록"}
]


class PersionMain extends Component{

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

    btnSeleted = () => {
        const _BtnTables = [];

        obj.map(obj =>
            _BtnTables.push((
                <BtnPersionApp 
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
            case 0 : return  this.props.history.push({
                pathname: '/persion-main/Persion/PersionMainInsert',
                clickedDate : this.state.selected,
                
            });                                         
            default : return ;
        }
    }

    render(){
        return (
            <PersionContent>
                    {this.btnSeleted()}
                <CalenderApp/>
            </PersionContent>
        );
    }
}

export default PersionMain;