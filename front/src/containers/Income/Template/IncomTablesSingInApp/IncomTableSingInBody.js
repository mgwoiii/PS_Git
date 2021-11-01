import React, { Component } from 'react';
import styled from "styled-components";



class IncomTableSingInBody extends Component {


    test = (obj, value) => {
        const _IncomTables = [];

        obj.map((obj)=> 
            _IncomTables.push((
                <IncomTableCell3 key={`IncomTableCell3${obj.id}`}>
                    {this.IncomeTable2(obj.value, value)}
                </IncomTableCell3>
            ))

        )

        return _IncomTables;
    }

    IncomeTable2 = (obj, value) => {

        let deValue = 0;

        if((obj === 14) || (obj === 15)){
            deValue = "-";
        }
        const _IncomTables = [];
                _IncomTables.push((      
                    <InputWithLabel key={`InputWithLabel${obj}`}  label={obj} name={obj+value} placeholder="입력칸" defaultValue = {deValue}/>
                ))
                return _IncomTables;
    }


    IncomeTable_1 = (value) => {

        const _IncomTables = [];

        const _DateTables = [];
        const _DateTables2 = [];
        const _DateTables3 = [];

        const obj = this.props.IncomTableHeaderObj;

        for (let i in obj){
            if((i === "2")||(i === "3")||(i === "4")||(i === "5")||(i === "6")){  
                _DateTables.push(obj[i]);              
            }
        }

        for (let i in obj){
            if((i === "7")||(i === "8")||(i === "9")){  
                _DateTables2.push(obj[i]);              
            }
        }

        for (let i in obj){
            if((i === "10")||(i === "11")||(i === "12")){  
                _DateTables3.push(obj[i]);              
            }
        }

       this.props.IncomTableHeaderObj.map((obj)=> {

            if(obj.id === 0){
                _IncomTables.push((
                            <IncomTableCell key={`IncomTableCell${obj.id}`}>
                                <IncomTableCell3 key={`IncomTableCell3${obj.id}`}>
                                    <IncomTableCell2  key={`IncomTableCell2${obj.id}1`}>
                                        호수
                                    </IncomTableCell2>                                    
                                    <IncomTableCell2 key={`IncomTableCell2_1${obj.id}2`}>
                                        {value}
                                    </IncomTableCell2>
                                </IncomTableCell3>
                            </IncomTableCell>
                ))
            }else if((obj.id === 1) || (obj.id === 13)||(obj.id === 14) || (obj.id === 15) ){
                _IncomTables.push((
                    <IncomTableCell key={`IncomTableCell${obj.id}`}>
                        <IncomTableCell3 key={`IncomTableCell3${obj.id}`}>
                            {this.IncomeTable2(obj.value, value)}
                        </IncomTableCell3>
                    </IncomTableCell>
                 ))
            }else if(obj.id === 2){
                _IncomTables.push((
                    <IncomTableCell key={`IncomTableCell${obj.id}`}>
                        {this.test(_DateTables, value)}
                    </IncomTableCell>
                 ))

            }else if(obj.id === 7){
                _IncomTables.push((
                    <IncomTableCell key={`IncomTableCell${obj.id}`}>
                        {this.test(_DateTables2, value)}
                    </IncomTableCell>
                 ))

            }else if(obj.id === 10){
                _IncomTables.push((
                    <IncomTableCell key={`IncomTableCell${obj.id}`}>
                        {this.test(_DateTables3, value)}
                    </IncomTableCell>
                 ))

            }
      
    
            })

       
        return _IncomTables;
    }

    IncomeTable = () => {
        const _IncomTables = [];

        this.props && this.props.classNumObj && this.props.classNumObj.map((obj)=> 
                _IncomTables.push((
                   <IncomTableRow key={`IncomTableRow${obj.id}`}>
                       {this.IncomeTable_1(obj.value)}
                    </IncomTableRow>
                ))
            
            );

            return _IncomTables;
        

    }

        render(){
            return(
                <>
                {this.IncomeTable()}
               </>
            );
        }
    }


export default IncomTableSingInBody;

const IncomTableRow = styled.div`
    width: auto;
    display: flex;
    background-color : #cde0c1;
    height : auto;
    border: 1px solid red;
    border: 0.5px solid white;

`
//border: 1px solid black;

const IncomTableCell = styled.div`
    color : rgb(71, 71, 71);
    width: 20%;
    text-align : center;
    border: 0.5px solid white;

`
const IncomTableCell2 = styled.div`
    color : rgb(71, 71, 71);
    width: 100%;
    text-align : center;
    word-break:break-all;
    word-wrap:break-word;
    border: 0.5px solid white;

    `
    const IncomTableCell3 = styled.div`
    color : rgb(71, 71, 71);
    width: 100%;
    height : auto;

    text-align : center;

    `

    const InputWithLabel = ({label, ...rest}) => (
        <Wrapper>
            <Label>{label}</Label>
            <Input {...rest}/>
        </Wrapper>
    );
    // 두개가 함께 있을땐 상단 (그 사이) 에 여백을 준다
    const Wrapper = styled.div`
    & + & {
        margin-top: 1rem;
    }
    `;

    const Label = styled.div`
    font-size: 1rem;
    color : rgb(71, 71, 71);
    margin-bottom: 0.25rem;
    `;

    const Input = styled.input`
    width: 80%;
    border: 1px solid white;
    outline: none;
    border-radius: 0px;
    line-height: 1rem;
    font-size: 0.8rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    background-color: #758B66;
    color : white;
    `;
