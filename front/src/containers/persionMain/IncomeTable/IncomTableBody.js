import React, { Component } from 'react';
import styled from "styled-components";


const obj = [
    {id : 0 , value : "101호"},
    {id : 1 , value : "102호"},
    {id : 2 , value : "201호"},
    {id : 3 , value : "202호"},
    {id : 4 , value : "203호"},
    {id : 5 , value : "204호"},
    {id : 6 , value : "301호"},
    {id : 7 , value : "302호"},
    {id : 8 , value : "303호"},
    {id : 9 , value : "304호"}    
]

class IncomTableBody extends Component {

    IncomTables = (number) => {

        const _IncomTables = [];

        obj.map( obj => 
            _IncomTables.push((
                  <IncomTableRow key={`TableBody_${obj.id}`}>
                        <IncomTableCell>
                            {obj.value}
                        </IncomTableCell>
                        <IncomTableCell>
                            야놀자 {obj.id}
                        </IncomTableCell>
                        <IncomTableCell>
                            350000 {obj.id}
                        </IncomTableCell>
                        <IncomTableCell>
                            40000 {obj.id}
                        </IncomTableCell>
                        <IncomTableCell>
                            390000 {obj.id}
                        </IncomTableCell>
                    </IncomTableRow>
                ))
        );

        return _IncomTables;
    }
        
    

    render(){
        return(
                <>   
                    {this.IncomTables()}
                </>
        )
    }
                

}

export default IncomTableBody;

const IncomTableRow = styled.div`
    width: 100%;
    display: flex;
`

const IncomTableCell = styled.div`
    border : 0.1px solid blue;
    width: 20%;
    text-align : center;
`
