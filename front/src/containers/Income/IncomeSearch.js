import { Component } from "react";

import IncomTableSingInApp from "./Template/IncomTablesSingInApp/IncomTableSingInApp";

class IncomeSearch extends Component{

    render(){

        return (
            <>
            수입일지 상태 변경 
            <IncomTableSingInApp />
            </>
        );
    }
}

export default IncomeSearch;