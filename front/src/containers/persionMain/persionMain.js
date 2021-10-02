import { Component } from "react";
import PersionContent  from '../../component/persionMain/persionContent';
import CalenderApp from "./Calender/CalenderApp";


class persionMain extends Component{

    render(){
        
        return (
            <PersionContent title ="메인">
                메인
                <CalenderApp/>
            </PersionContent>
        );
    }
}

export default persionMain;