import { Component } from "react";
import PersionContent  from '../../component/Persion/PersionContent';
import PersionTableApp from "./PersionTable/PersionTableApp";


class PersionMainDayDetail extends Component{

    render(){
       // console.log(this.props.location.clickedDate.clickedDate)
        return (
            <PersionContent>
                [입실 상태 수정]
               <PersionTableApp date = {this.props.location.clickedDate} />
            </PersionContent>
        );
    }
}

export default PersionMainDayDetail;