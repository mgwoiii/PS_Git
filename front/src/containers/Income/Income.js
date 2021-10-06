import { Component } from "react";
import PersionContent  from '../../component/persionMain/persionContent';

import IncomTableApp from './IncomeTable/IncomTableApp';

class Income extends Component{

    render(){
        
        return (
            <PersionContent>
                 <IncomTableApp />
            </PersionContent>
        );
    }
}

export default Income;