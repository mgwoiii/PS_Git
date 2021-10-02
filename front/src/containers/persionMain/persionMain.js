import { Component } from "react";
import PersionContent  from '../../component/persionMain/persionContent';
import Calender from "./Calender/Calender";


class persionMain extends Component{

    render(){
        
        return (
            <PersionContent title ="메인">
                메인
                <Calender/>
            </PersionContent>
        );
    }
}

export default persionMain;