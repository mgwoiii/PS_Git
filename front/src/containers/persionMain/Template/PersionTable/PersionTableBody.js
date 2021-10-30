import React, { Component } from 'react';
import styled from "styled-components";
import oc from 'open-color';
import BtnPersionApp from './BtnPersion/BtnPersionApp';


class PersionTableBody extends Component {


        render(){
            return(
             

                <>
                <Row>
                    <Cell>
                        101호 
                    </Cell>

                    <Cell2>
                        {(this.props.newGrade101===1 ?"등록" : "미등록")}
                    </Cell2>
                    <Cell3>
                        <BtnPersionApp 
                        btnName = {"상태변경"}
                        btnId = {1}
                        btnState = {this.props.newGrade101}
                        btnChanged = {this.props.btnChanged}
                         />
                    </Cell3>
                    
                </Row>
                <Row>
                    <Cell>
                        102호
                    </Cell>

                    <Cell2>
                    {(this.props.newGrade102===1 ?"등록" : "미등록")}

                    </Cell2>
                    <Cell3>
                    <BtnPersionApp 
                        btnName = {"상태변경"}
                        btnId = {2}
                        btnState = {this.props.newGrade102}
                        btnChanged = {this.props.btnChanged}
                         />                   
                     </Cell3>
                </Row>
                <Row>
                    <Cell>
                        201호
                    </Cell>

                    <Cell2>
                    {(this.props.newGrade201===1 ?"등록" : "미등록")}

                    </Cell2>
                    <Cell3>
                    <BtnPersionApp 
                        btnName = {"상태변경"}
                        btnId = {3}
                        btnState = {this.props.newGrade201}
                        btnChanged = {this.props.btnChanged}
                         />                    
                    </Cell3>
                </Row>
                <Row>
                    <Cell>
                        202호
                    </Cell>

                    <Cell2>
                    {(this.props.newGrade202===1 ?"등록" : "미등록")}
                  
                    </Cell2>
                    <Cell3>
                    <BtnPersionApp 
                        btnName = {"상태변경"}
                        btnId = {4}
                        btnState = {this.props.newGrade202}
                        btnChanged = {this.props.btnChanged}
                         />                    
                    </Cell3>
                </Row>
                <Row>
                    <Cell>
                        203호
                    </Cell>

                    <Cell2>
                    {(this.props.newGrade203===1 ?"등록" : "미등록")}
                   
                    </Cell2>
                    <Cell3>
                    <BtnPersionApp 
                        btnName = {"상태변경"}
                        btnId = {5}
                        btnState = {this.props.newGrade203}
                        btnChanged = {this.props.btnChanged}
                         />                      
                    </Cell3>
                </Row>

                <Row>
                    <Cell>
                        204호
                    </Cell>

                    <Cell2>
                    {(this.props.newGrade204===1 ?"등록" : "미등록")}
                  
                    </Cell2>
                    <Cell3>
                    <BtnPersionApp 
                        btnName = {"상태변경"}
                        btnId = {6}
                        btnState = {this.props.newGrade204}
                        btnChanged = {this.props.btnChanged}
                         />                     
                    </Cell3>
                </Row>
                <Row>
                    <Cell>
                        301호
                    </Cell>

                    <Cell2>
                    {(this.props.newGrade301===1 ?"등록" : "미등록")}

                    </Cell2>
                    <Cell3>
                    <BtnPersionApp 
                        btnName = {"상태변경"}
                        btnId = {7}
                        btnState = {this.props.newGrade301}
                        btnChanged = {this.props.btnChanged}
                         />                       
                     </Cell3>
                </Row>
                <Row>
                    <Cell>
                        302호
                    </Cell>

                    <Cell2>
                    {(this.props.newGrade302===1 ?"등록" : "미등록")}
                 
                    </Cell2>
                    <Cell3>
                    <BtnPersionApp 
                        btnName = {"상태변경"}
                        btnId = {8}
                        btnState = {this.props.newGrade302}
                        btnChanged = {this.props.btnChanged}
                         />                       
                    </Cell3>
                </Row>
                <Row>
                    <Cell>
                        303호
                    </Cell>

                    <Cell2>
                    {(this.props.newGrade303===1 ?"등록" : "미등록")}
          
                    </Cell2>
                    <Cell3>
                    <BtnPersionApp 
                        btnName = {"상태변경"}
                        btnId = {9}
                        btnState = {this.props.newGrade303}
                        btnChanged = {this.props.btnChanged}
                         />                       
                    </Cell3>
                </Row>

                <Row>
                    <Cell>
                        304호
                    </Cell>

                    <Cell2>
                    {(this.props.newGrade304===1 ?"등록" : "미등록")}
                    
                    </Cell2>
                    <Cell3>
                    <BtnPersionApp 
                        btnName = {"상태변경"}
                        btnId = {10}
                        btnState = {this.props.newGrade304}
                        btnChanged = {this.props.btnChanged}
                         />                       
                    </Cell3>
                </Row>
                
            </>
            );
        }
    }


export default PersionTableBody;

const Row = styled.div`
    width: 100%;
    height : 50px;
    
    word-break:break-all;
    background-color : #cde0c1;
    font-size: 0.8rem;

    color : white;
    display: flex;
`

const Cell = styled.div`
    border : none;
    width: 20%;
    line-height: 50px;
    
    text-align : center;
    word-break:break-all;
    word-wrap:break-word;
    border: 0.5px solid white;
    color : black;
    font-size: 0.8rem;
    font-weight: bold;
`
const Cell2 = styled.div`
    border : none;
    width: 60%;
    line-height: 50px;

    text-align : center;
    word-break:break-all;
    word-wrap:break-word;
    border: 0.5px solid white;
    color : black;
    font-size: 0.8rem;
    font-weight: bold;

`
const Cell3 = styled.div`
    border : none;
    width: 20%;
    text-align : center;
    word-break:break-all;
    word-wrap:break-word;
    border: 0.5px solid white;
    color : black;
    font-size: 0.8rem;
    font-weight: bold;
`