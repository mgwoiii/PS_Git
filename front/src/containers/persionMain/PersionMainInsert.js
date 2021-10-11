import { Component } from "react";
import PersionContent  from '../../component/Persion/PersionContent';
import PersionTableApp from "./Template/PersionTable/PersionTableApp";


class PersionMainInsert extends Component{

    render(){

        return (
            <PersionContent>
                입실 등록 페이지
               <PersionTableApp date = {this.props.location.clickedDate} />
            </PersionContent>
        );
    }
}

export default PersionMainInsert;