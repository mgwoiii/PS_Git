import React, { Component } from 'react';
import styled from "styled-components";

class IncomTableBody extends Component {

    Test3 = (tables) =>{
        let _DateTables = [];

        for (let i in tables){
        
            let aa = tables[i];
            for (let j in aa){
                _DateTables.push((
                    <DDv>
                         <IncomTableCell2 key={`IncomTableCell2${j}`}>{j}</IncomTableCell2> 
                         <IncomTableCell2 key={`IncomTableCell2_1${j}`}>{aa[j]}</IncomTableCell2>                
                    </DDv>
                 )) 
            }        
        }
        return _DateTables;          
    }

    Test = (obj, index, urlName) => {

        const _IncomTables = [];
        const _DateTables = [];
        const _DateTables2 = [];
        const _DateTables3 = [];

        if(urlName === 'IncomeSearch'){
            for (let i in obj){
                let name = null;

                switch(i){
                    case "username" : 
                        name = "소셜입금"
                        break;
                    
                    case "value4" : 
                    name = "소셜공제"
                    break;

                    case "value5" : 
                    name = "숙박비 (현금)"
                    break;
  
                    case "value6" : 
                    name = "숙박비 (이체)"
                    break;

                    case "value7" : 
                    name = "숙박비 (카드)"
                    break;

                    default : break;
                }

                if((i === "username")||(i === "value4")||(i === "value5")||(i === "value6")||(i === "value7")){  
                    _DateTables.push({[name]: obj[i]});              
                }
            }

            for (let i in obj){

                let name = null;

                switch(i){
                    case "value8" : 
                        name = "바베큐(현금)"
                        break;
                    
                    case "value9" : 
                        name = "바베큐(이체)"
                        break;

                    case "value10" : 
                        name = "바베큐(카드)"
                        break;
  

                    default : break;
                }

                if((i === "value8")||(i === "value9")||(i === "value10")){  
                    _DateTables2.push({[name]: obj[i]});              
                }
            }
            
            for (let i in obj){
                let name = null;

                switch(i){
                    case "value11" : 
                        name = "인원추가(현금)"
                        break;
                    
                    case "value12" : 
                        name = "인원추가(이체)"
                        break;

                    case "value13" : 
                        name = "인원추가(카드)"
                        break;
  

                    default : break;
                }

                if((i === "value11")||(i === "value12")||(i === "value13")){  
                    _DateTables3.push({[name]: obj[i]});              
                }
            }

        }

        for (let i in obj){

                if(i !== "id"){

                    if(urlName === 'IncomeSearch'){

                        if(i === "username"){  

                            _IncomTables.push((
                                <IncomTableCell3 key={`IncomTableCell3_${index}_${i}`}>

                                {this.Test3(_DateTables)}                        
                                </IncomTableCell3>

                                ))
                        }else if((i === "value4")||(i === "value5")||(i === "value6")||(i === "value7")){
                            //console.log('통과')
                        }else if (i === "value8"){

                            _IncomTables.push((
                                <IncomTableCell3 key={`IncomTableCell3_${index}_${i}`}>

                                {this.Test3(_DateTables2)}                        
                                </IncomTableCell3>

                                ))
                                
                        }else if((i === "value9")||(i === "value10")){
                            //console.log('통과')
                        }else if (i === "value11"){

                            _IncomTables.push((
                                <IncomTableCell3 key={`IncomTableCell3_${index}_${i}`}>

                                {this.Test3(_DateTables3)}                        
                                </IncomTableCell3>

                                ))
                                
                        }else if((i === "value12")||(i === "value13")){
                            //console.log('통과')
                        }else{
                        _IncomTables.push((
                            <IncomTableCell3 key={`IncomTableCell3_${index}_${i}`}>
                            {obj[i]}
                            </IncomTableCell3>
                            ))
                        }

                    }else{

                        _IncomTables.push((
                        <IncomTableCell key={`IncomTableCell${index}_${i}`}>{obj[i]}</IncomTableCell>))
                       
                    }
                    }
                    
                    
                }
            return _IncomTables
    } 

    IncomTables = (urlName) => {
        const _IncomTables = [];
        
        this.props && this.props.tsetValue && this.props.tsetValue.map((obj, index)=> {

                _IncomTables.push((
                    <IncomTableRow key={`IncomTableRow${obj.id}`}>
                        {this.Test(obj, index, urlName)}
                    </IncomTableRow>         
                ))
            }

            );

            return _IncomTables;
        } 

        render(){

            return(
                    <>    
                        {this.IncomTables(this.props.urlName)}
                    </>
            )
        }
    }


export default IncomTableBody;

const IncomTableRow = styled.div`
    width: auto;
    display: flex;
    background-color : #cde0c1;
    height : auto;
    line-height: 30px;
    border: 0.5px solid white;

`

const IncomTableCell = styled.div`
    color : rgb(71, 71, 71);
    border: 0.5px solid white;
    width: 20%;
    text-align : center;
`
const IncomTableCell2 = styled.div`
    color : rgb(71, 71, 71);
    border: 0.5px solid white;
    width: 100%;
    text-align : center;
    flex-direction:column;
    word-break:break-all;
    word-wrap:break-word;

    `
    const IncomTableCell3 = styled.div`
    color : rgb(71, 71, 71);
    border: 0.5px solid white;
    width: 20%;
    text-align : center;
    flex-direction:column;

    `
    

const DDv = styled.div`

`