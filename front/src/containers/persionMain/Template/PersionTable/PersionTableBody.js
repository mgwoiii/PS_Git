import React, { Component } from 'react';
import styled from "styled-components";
import oc from 'open-color';



class PersionTableBody extends Component {

    constructor(props){
        super(props)


        this.state = {
            date : this.props.date ,
            newGrade101 : 0,
            newGrade102 : 0,
            newGrade201 : 0,
            newGrade202 : 0,
            newGrade203 : 0,
            newGrade204 : 0,
            newGrade301 : 0,
            newGrade302 : 0,
            newGrade303 : 0,
            newGrade304 : 0

        }
    }

    handleSelect = (e) => {
        this.setState({
            [e.target.name] : e.target.value
          })
      };

        render(){
            
            return(
                <>
                <Row>
                    <Cell>
                        101호 
                    </Cell>

                    <Cell2>
                        <ReadSelect onChange={this.handleSelect} value={this.state.newGrade101} name = "newGrade101">
                            <option value="0">미등록</option>
                            <option value="1">등록</option>
                        </ReadSelect>
                    </Cell2>
                    
                </Row>
                <Row>
                    <Cell>
                        102호
                    </Cell>

                    <Cell2>
                        <ReadSelect onChange={this.handleSelect} value={this.state.newGrade102} name = "newGrade102">
                            <option value="0">미등록</option>
                            <option value="1">등록</option>
                        </ReadSelect>
                    </Cell2>
                    
                </Row>
                <Row>
                    <Cell>
                        201호
                    </Cell>

                    <Cell2>
                        <ReadSelect onChange={this.handleSelect} value={this.state.newGrade201} name = "newGrade201">
                            <option value="0">미등록</option>
                            <option value="1">등록</option>
                        </ReadSelect>
                    </Cell2>
                
                </Row>
                <Row>
                    <Cell>
                        202호
                    </Cell>

                    <Cell2>
                        <ReadSelect onChange={this.handleSelect} value={this.state.newGrade202} name = "newGrade202">
                            <option value="0">미등록</option>
                            <option value="1">등록</option>
                        </ReadSelect>                    
                    </Cell2>
                
                </Row>
                <Row>
                    <Cell>
                        203호
                    </Cell>

                    <Cell2>
                        <ReadSelect onChange={this.handleSelect} value={this.state.newGrade203} name = "newGrade203">
                            <option value="0">미등록</option>
                            <option value="1">등록</option>
                        </ReadSelect>                    
                    </Cell2>
                
                </Row>

                <Row>
                    <Cell>
                        204호
                    </Cell>

                    <Cell2>
                        <ReadSelect onChange={this.handleSelect} value={this.state.newGrade204} name = "newGrade204">
                            <option value="0">미등록</option>
                            <option value="1">등록</option>
                        </ReadSelect>                    
                    </Cell2>
                
                </Row>
                <Row>
                    <Cell>
                        301호
                    </Cell>

                    <Cell2>
                        <ReadSelect onChange={this.handleSelect} value={this.state.newGrade301} name = "newGrade301">
                            <option value="0">미등록</option>
                            <option value="1">등록</option>
                        </ReadSelect>
                    </Cell2>
                
                </Row>
                <Row>
                    <Cell>
                        302호
                    </Cell>

                    <Cell2>
                        <ReadSelect onChange={this.handleSelect} value={this.state.newGrade302} name = "newGrade302">
                            <option value="0">미등록</option>
                            <option value="1">등록</option>
                        </ReadSelect>                    
                    </Cell2>
                
                </Row>
                <Row>
                    <Cell>
                        303호
                    </Cell>

                    <Cell2>
                        <ReadSelect onChange={this.handleSelect} value={this.state.newGrade303} name = "newGrade303">
                            <option value="0">미등록</option>
                            <option value="1">등록</option>
                        </ReadSelect>                    
                    </Cell2>
                
                </Row>

                <Row>
                    <Cell>
                        304호
                    </Cell>

                    <Cell2>
                        <ReadSelect onChange={this.handleSelect} value={this.state.newGrade304}  name = "newGrade304">
                            <option value="0">미등록</option>
                            <option value="1">등록</option>
                        </ReadSelect>                    
                    </Cell2>
                
                </Row>
            </>
            );
        }
    }


export default PersionTableBody;

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
    width: 15%;
    text-align : center;
    word-break:break-all;
    word-wrap:break-word;
    border: 0.5px solid white;
    color : black;


`
const Cell2 = styled.div`
    border : none;
    width: 85%;
    text-align : center;
    word-break:break-all;
    word-wrap:break-word;
    border: 0.5px solid white;
    color : black;

`

const ReadSelect = styled.select`
    margin-top: 1rem;
    margin-bottom: 0.25rem;
    width: 30%;
    
    border: 1px solid ${oc.gray[3]};
    line-height: 30rem;
    font-size: 1.2rem;
`;