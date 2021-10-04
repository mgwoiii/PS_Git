import { Component } from "react";
import PersionContent  from '../../component/persionMain/persionContent';
import CalenderApp from "./Calender/CalenderApp";


class persionMain extends Component{

    render(){
        
        return (
            <PersionContent>
                <CalenderApp/>
            </PersionContent>
        );
    }
}

export default persionMain;