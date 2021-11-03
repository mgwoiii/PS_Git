import React, { Component } from 'react';
import styled from "styled-components";

class IncomTableBody extends Component {


        expend = (object) => {

            let _ExpendArr = [];
            // for(let obj in object){
            //     console.log(object[obj].id);
            //     _ExpendArr.push(
            //              <Row key = {object[obj].id}>
                      
            //                  <Cell key={`cell${object[obj].id}`} >
            //                      {object[obj].expenNote}
            //                 </Cell>
            //                  <Cell key = {`cell2${object[obj].id}`}>
            //                  {object[obj].expenPrice}
            //                  </Cell>
            //                  <Cell2 key={`cell3${object[obj].id}`}>
            //                      <ButtonSing onClick={() => {this.props.btnChanged(object[obj].id)}}>
            //                              내역 삭제
            //                      </ButtonSing>
            //                  </Cell2>
            //              </Row>
                    
            //     )

                
            //     if(object.length === parseInt(obj)+1){
            //         _ExpendArr.push(
            //             <Row key = {"Rowkey"}>
                    
            //             <Cell key = {"Cellkey1"} >
            //                 <Input onChange = {this.props.handleSelectStr} value = {this.props.expen.expenNote}
            //                 name = {"expen.expenNote"}/> 
            //             </Cell>
            //             <Cell key = {"Cellkey2"}  >
            //                 <Input onChange = {this.props.handleSelectNum} value = {this.props.expen.expenPrice }
            //                 name = {"expen.expenPrice"}/>
            //             </Cell>
            //             <Cell2 key = {"Cellkey3"}  >
            //                 <ButtonAdd onClick={() => {this.props.cellAdd(this.props.expen, this.props.calenderYMD)}}>
            //                 내역 추가
            //                 </ButtonAdd>
            //             </Cell2>
            //         </Row>
            //         )
            //     }
                

            // }

            object.map( obj => {

                _ExpendArr.push(

                        <Row key = {obj.id}>
                      
                            <Cell key={`cell${obj.id}`} >
                                {obj.expenNote}
                            </Cell>
                            <Cell key = {`cell2${obj.id}`}>
                            {obj.expenPrice}
                            </Cell>
                            <Cell2 key={`cell3${obj.id}`}>
                                <ButtonSing onClick={() => {this.props.onRemove(obj.id)}}>
                                        내역 삭제
                                </ButtonSing>
                            </Cell2>
                        </Row>
                        
               )
            })

            return _ExpendArr;
        }

        render(){


            return(
                    <div>    
                    {this.expend(this.props.expendArr)}


                        <Row key = {"Rowkey"}>
                        
                            <Cell key = {"Cellkey1"} >
                                <Input onChange = {this.props.handleSelectStr} value = {this.props.expen.expenNote}
                                name = {"expen.expenNote"}/> 
                            </Cell>
                            <Cell key = {"Cellkey2"}  >
                                <Input onChange = {this.props.handleSelectNum} value = {this.props.expen.expenPrice }
                                name = {"expen.expenPrice"}/>
                            </Cell>
                            <Cell2 key = {"Cellkey3"}  >
                                <ButtonAdd onClick={() => {this.props.cellAdd(this.props.expen, this.props.calenderYMD)}}>
                                내역 추가
                                </ButtonAdd>
                            </Cell2>
                        </Row>
                        

                    </div>
            )
        }
    }


export default IncomTableBody;


const Row = styled.div`
    width: 100%;
    height : auto;
    line-height: 20px;
    word-break:break-all;
    background-color : #cde0c1;
    font-size: 0.8rem;

    color : white;
    display: flex;
`

const Cell = styled.div`
    border : none;
    width: 45%;
    text-align : center;
    word-break:break-all;
    word-wrap:break-word;
    border: 0.5px solid white;
    color : black;

`
const Cell2 = styled.div`
    border : none;
    width: 10%;
    text-align : center;
    word-break:break-all;
    word-wrap:break-word;
    border: 0.5px solid white;
    color : black;

`
const ButtonSing = styled.div `
    font-size: 0.8rem;
    font-weight: bold;
    display: inline-block;
    color: black;
    cursor: pointer;
    text-align:right;

    &:hover {
        color : #758B66;

    }

    &:active{
        color : #758B66;
    }
    `


    const ButtonAdd = styled.div `
    font-size: 0.8rem;
    font-weight: bold;
    display: inline-block;
    color: rgb(71, 71, 71);
    cursor: pointer;
    text-align:right;

    &:hover {
        color : #758B66;

    }

    &:active{
        color : #758B66;
    }
    `

    const Input = styled.input`
    width: 60%;
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