import React, { Component } from 'react';
import styled from "styled-components";
import oc from 'open-color';


class IncomTableSingInBody extends Component {


   
        render(){
            return(
                <>
                <Row>
                    <Cell3>
                        {(this.props.class101.className_id === 1 ? '101호': null)}
                    </Cell3>
                    <Cell>
                    {   
                            <ReadSelect onChange={this.props.handleSelect} value={this.props.class101.reserveType_id} 
                            name = {"class101.reserveType_id"} >
                            <option value="0">-</option>
                            <option value="1">현금</option>
                            <option value="2">이체</option>
                            <option value="3">카드</option>
                            <option value="4">야놀자</option>
                            <option value="5">여기어때</option>
                            <option value="6">떠나요</option>

                         </ReadSelect>
                        }
                    </Cell>
                    <Cell>                            
                        <Cell2>
                            <Input onChange = {this.props.handleSelect} value = {this.props.class101.roomPrice }
                            name = {"class101.roomPrice"}/>
                            
                        </Cell2>
                        <Cell2>
                        {
                        <ReadSelect onChange={this.props.handleSelect} value={this.props.class101.roomType_id} 
                            name = {"class101.roomType_id"} >
                            <option value="0">-</option>
                            <option value="1">현금</option>
                            <option value="2">이체</option>
                            <option value="3">카드</option>
                            <option value="4">야놀자</option>
                            <option value="5">여기어때</option>
                            <option value="6">떠나요</option>
                         </ReadSelect>
                        }
                        </Cell2>
                    </Cell>
                    <Cell>
                      
                        <Cell2>
                            <Input onChange = {this.props.handleSelect} value = {this.props.class101.bbqPrice }
                            name = {"class101.bbqPrice"}/>
                        </Cell2>
                        <Cell2>
                        {
                            <ReadSelect onChange={this.props.handleSelect} value={this.props.class101.bbqType_id} 
                            name = {"class101.bbqType_id"} >
                            <option value="0">-</option>
                            <option value="1">현금</option>
                            <option value="2">이체</option>
                            <option value="3">카드</option>
                            <option value="7">미구매</option>

                         </ReadSelect>
                        }
                        </Cell2>
                    </Cell>
                    <Cell>
                        <Cell2>
                            <Input onChange = {this.props.handleSelect} value = {this.props.class101.extraPeoplePrice }
                            name = {"class101.extraPeoplePrice"}/>
                        </Cell2>
                        <Cell2>
                        {
                            <ReadSelect onChange={this.props.handleSelect} value={this.props.class101.extraPeopleType_id} 
                            name = {"class101.extraPeopleType_id"} >
                            <option value="0">-</option>
                            <option value="1">현금</option>
                            <option value="2">이체</option>
                            <option value="3">카드</option>
                            <option value="7">미구매</option>

                         </ReadSelect>
                        }
                        </Cell2>
                    </Cell>

                    <Cell>
                    {this.props.class101.roomPrice  + 
                     this.props.class101.bbqPrice + 
                     this.props.class101.extraPeoplePrice }
                    </Cell>

                    <Cell>
                    <Input onChange = {this.props.handleSelectInput} value = {this.props.class101.note }
                            name = {"class101.note"}/>
                    </Cell>


                    <Cell>
                        <Input onChange = {this.props.handleSelectInput} value = {this.props.class101.guestName }
                            name = {"class101.guestName"}/>
                    </Cell>

                    <Cell4>
                        
                           {this.props.btnName101 === 0  ? 
                           <ButtonSing onClick={() => {this.props.btnChanged(this.props.class101, 0 )}}>
                               상태 입력
                           </ButtonSing> :
                           <ButtonSing onClick={() => {this.props.btnChanged(this.props.class101, 1)}}>
                               상태 변경
                           </ButtonSing> 
                            }
                       
                           {this.props.btnName101 === 1  ? 
                            <ButtonSing onClick={() => {this.props.btnChanged(this.props.class101, 2)}}>
                                상태 삭제
                           </ButtonSing>
                           : null }
                        
                    </Cell4>

                </Row>


                <Row>
                    <Cell3>
                        {(this.props.class102.className_id === 2 ? '102호': null)}
                    </Cell3>
                    <Cell>
                    {   
                            <ReadSelect onChange={this.props.handleSelect} value={this.props.class102.reserveType_id} 
                            name = {"class102.reserveType_id"} >
                            <option value="0">-</option>
                            <option value="1">현금</option>
                            <option value="2">이체</option>
                            <option value="3">카드</option>
                            <option value="4">야놀자</option>
                            <option value="5">여기어때</option>
                            <option value="6">떠나요</option>

                         </ReadSelect>
                        }
                    </Cell>
                    <Cell>                            
                        <Cell2>
                            <Input onChange = {this.props.handleSelect} value = {this.props.class102.roomPrice }
                            name = {"class102.roomPrice"}/>
                            
                        </Cell2>
                        <Cell2>
                        {
                        <ReadSelect onChange={this.props.handleSelect} value={this.props.class102.roomType_id} 
                            name = {"class102.roomType_id"} >
                            <option value="0">-</option>
                            <option value="1">현금</option>
                            <option value="2">이체</option>
                            <option value="3">카드</option>
                            <option value="4">야놀자</option>
                            <option value="5">여기어때</option>
                            <option value="6">떠나요</option>
                         </ReadSelect>
                        }
                        </Cell2>
                    </Cell>
                    <Cell>
                      
                        <Cell2>
                            <Input onChange = {this.props.handleSelect} value = {this.props.class102.bbqPrice }
                            name = {"class102.bbqPrice"}/>
                        </Cell2>
                        <Cell2>
                        {
                            <ReadSelect onChange={this.props.handleSelect} value={this.props.class102.bbqType_id} 
                            name = {"class102.bbqType_id"} >
                            <option value="0">-</option>
                            <option value="1">현금</option>
                            <option value="2">이체</option>
                            <option value="3">카드</option>
                            <option value="7">미구매</option>

                         </ReadSelect>
                        }
                        </Cell2>
                    </Cell>
                    <Cell>
                        <Cell2>
                            <Input onChange = {this.props.handleSelect} value = {this.props.class102.extraPeoplePrice }
                            name = {"class102.extraPeoplePrice"}/>
                        </Cell2>
                        <Cell2>
                        {
                            <ReadSelect onChange={this.props.handleSelect} value={this.props.class102.extraPeopleType_id} 
                            name = {"class102.extraPeopleType_id"} >
                            <option value="0">-</option>
                            <option value="1">현금</option>
                            <option value="2">이체</option>
                            <option value="3">카드</option>
                            <option value="7">미구매</option>

                         </ReadSelect>
                        }
                        </Cell2>
                    </Cell>

                    <Cell>
                    {this.props.class102.roomPrice  + 
                     this.props.class102.bbqPrice + 
                     this.props.class102.extraPeoplePrice }
                    </Cell>

                    <Cell>
                    <Input onChange = {this.props.handleSelectInput} value = {this.props.class102.note }
                            name = {"class102.note"}/>
                    </Cell>


                    <Cell>
                        <Input onChange = {this.props.handleSelectInput} value = {this.props.class102.guestName }
                            name = {"class102.guestName"}/>
                    </Cell>

                    <Cell4>
                        
                           {this.props.btnName102 === 0  ? 
                           <ButtonSing onClick={() => {this.props.btnChanged(this.props.class102, 0 )}}>
                               상태 입력
                           </ButtonSing> :
                           <ButtonSing onClick={() => {this.props.btnChanged(this.props.class102, 1)}}>
                               상태 변경
                           </ButtonSing> 
                            }
                       
                           {this.props.btnName102 === 1  ? 
                            <ButtonSing onClick={() => {this.props.btnChanged(this.props.class102, 2)}}>
                                상태 삭제
                           </ButtonSing>
                           : null }
                        
                    </Cell4>

                </Row>
               
                <Row>
                    <Cell3>
                        {(this.props.class201.className_id === 3 ? '201호': null)}
                    </Cell3>
                    <Cell>
                    {   
                            <ReadSelect onChange={this.props.handleSelect} value={this.props.class201.reserveType_id} 
                            name = {"class201.reserveType_id"} >
                            <option value="0">-</option>
                            <option value="1">현금</option>
                            <option value="2">이체</option>
                            <option value="3">카드</option>
                            <option value="4">야놀자</option>
                            <option value="5">여기어때</option>
                            <option value="6">떠나요</option>

                         </ReadSelect>
                        }
                    </Cell>
                    <Cell>                            
                        <Cell2>
                            <Input onChange = {this.props.handleSelect} value = {this.props.class201.roomPrice }
                            name = {"class201.roomPrice"}/>
                            
                        </Cell2>
                        <Cell2>
                        {
                        <ReadSelect onChange={this.props.handleSelect} value={this.props.class201.roomType_id} 
                            name = {"class201.roomType_id"} >
                            <option value="0">-</option>
                            <option value="1">현금</option>
                            <option value="2">이체</option>
                            <option value="3">카드</option>
                            <option value="4">야놀자</option>
                            <option value="5">여기어때</option>
                            <option value="6">떠나요</option>
                         </ReadSelect>
                        }
                        </Cell2>
                    </Cell>
                    <Cell>
                      
                        <Cell2>
                            <Input onChange = {this.props.handleSelect} value = {this.props.class201.bbqPrice }
                            name = {"class201.bbqPrice"}/>
                        </Cell2>
                        <Cell2>
                        {
                            <ReadSelect onChange={this.props.handleSelect} value={this.props.class201.bbqType_id} 
                            name = {"class201.bbqType_id"} >
                            <option value="0">-</option>
                            <option value="1">현금</option>
                            <option value="2">이체</option>
                            <option value="3">카드</option>
                            <option value="7">미구매</option>

                         </ReadSelect>
                        }
                        </Cell2>
                    </Cell>
                    <Cell>
                        <Cell2>
                            <Input onChange = {this.props.handleSelect} value = {this.props.class201.extraPeoplePrice }
                            name = {"class201.extraPeoplePrice"}/>
                        </Cell2>
                        <Cell2>
                        {
                            <ReadSelect onChange={this.props.handleSelect} value={this.props.class201.extraPeopleType_id} 
                            name = {"class201.extraPeopleType_id"} >
                            <option value="0">-</option>
                            <option value="1">현금</option>
                            <option value="2">이체</option>
                            <option value="3">카드</option>
                            <option value="7">미구매</option>

                         </ReadSelect>
                        }
                        </Cell2>
                    </Cell>

                    <Cell>
                    {this.props.class201.roomPrice  + 
                     this.props.class201.bbqPrice + 
                     this.props.class201.extraPeoplePrice }
                    </Cell>

                    <Cell>
                    <Input onChange = {this.props.handleSelectInput} value = {this.props.class201.note }
                            name = {"class201.note"}/>
                    </Cell>


                    <Cell>
                        <Input onChange = {this.props.handleSelectInput} value = {this.props.class201.guestName }
                            name = {"class201.guestName"}/>
                    </Cell>

                    <Cell4>
                        
                           {this.props.btnName201 === 0  ? 
                           <ButtonSing onClick={() => {this.props.btnChanged(this.props.class201, 0 )}}>
                               상태 입력
                           </ButtonSing> :
                           <ButtonSing onClick={() => {this.props.btnChanged(this.props.class201, 1)}}>
                               상태 변경
                           </ButtonSing> 
                            }
                       
                           {this.props.btnName201 === 1  ? 
                            <ButtonSing onClick={() => {this.props.btnChanged(this.props.class201, 2)}}>
                                상태 삭제
                           </ButtonSing>
                           : null }
                        
                    </Cell4>

                </Row>

                <Row>
                    <Cell3>
                        {(this.props.class202.className_id === 4 ? '202호': null)}
                    </Cell3>
                    <Cell>
                    {   
                            <ReadSelect onChange={this.props.handleSelect} value={this.props.class202.reserveType_id} 
                            name = {"class202.reserveType_id"} >
                            <option value="0">-</option>
                            <option value="1">현금</option>
                            <option value="2">이체</option>
                            <option value="3">카드</option>
                            <option value="4">야놀자</option>
                            <option value="5">여기어때</option>
                            <option value="6">떠나요</option>

                         </ReadSelect>
                        }
                    </Cell>
                    <Cell>                            
                        <Cell2>
                            <Input onChange = {this.props.handleSelect} value = {this.props.class202.roomPrice }
                            name = {"class202.roomPrice"}/>
                            
                        </Cell2>
                        <Cell2>
                        {
                        <ReadSelect onChange={this.props.handleSelect} value={this.props.class202.roomType_id} 
                            name = {"class202.roomType_id"} >
                            <option value="0">-</option>
                            <option value="1">현금</option>
                            <option value="2">이체</option>
                            <option value="3">카드</option>
                            <option value="4">야놀자</option>
                            <option value="5">여기어때</option>
                            <option value="6">떠나요</option>
                         </ReadSelect>
                        }
                        </Cell2>
                    </Cell>
                    <Cell>
                      
                        <Cell2>
                            <Input onChange = {this.props.handleSelect} value = {this.props.class202.bbqPrice }
                            name = {"class202.bbqPrice"}/>
                        </Cell2>
                        <Cell2>
                        {
                            <ReadSelect onChange={this.props.handleSelect} value={this.props.class202.bbqType_id} 
                            name = {"class202.bbqType_id"} >
                            <option value="0">-</option>
                            <option value="1">현금</option>
                            <option value="2">이체</option>
                            <option value="3">카드</option>
                            <option value="7">미구매</option>

                         </ReadSelect>
                        }
                        </Cell2>
                    </Cell>
                    <Cell>
                        <Cell2>
                            <Input onChange = {this.props.handleSelect} value = {this.props.class202.extraPeoplePrice }
                            name = {"class202.extraPeoplePrice"}/>
                        </Cell2>
                        <Cell2>
                        {
                            <ReadSelect onChange={this.props.handleSelect} value={this.props.class202.extraPeopleType_id} 
                            name = {"class202.extraPeopleType_id"} >
                            <option value="0">-</option>
                            <option value="1">현금</option>
                            <option value="2">이체</option>
                            <option value="3">카드</option>
                            <option value="7">미구매</option>

                         </ReadSelect>
                        }
                        </Cell2>
                    </Cell>

                    <Cell>
                    {this.props.class202.roomPrice  + 
                     this.props.class202.bbqPrice + 
                     this.props.class202.extraPeoplePrice }
                    </Cell>

                    <Cell>
                    <Input onChange = {this.props.handleSelectInput} value = {this.props.class202.note }
                            name = {"class202.note"}/>
                    </Cell>


                    <Cell>
                        <Input onChange = {this.props.handleSelectInput} value = {this.props.class202.guestName }
                            name = {"class202.guestName"}/>
                    </Cell>

                    <Cell4>
                        
                           {this.props.btnName202 === 0  ? 
                           <ButtonSing onClick={() => {this.props.btnChanged(this.props.class202, 0 )}}>
                               상태 입력
                           </ButtonSing> :
                           <ButtonSing onClick={() => {this.props.btnChanged(this.props.class202, 1)}}>
                               상태 변경
                           </ButtonSing> 
                            }
                       
                           {this.props.btnName202 === 1  ? 
                            <ButtonSing onClick={() => {this.props.btnChanged(this.props.class202, 2)}}>
                                상태 삭제
                           </ButtonSing>
                           : null }
                        
                    </Cell4>

                </Row>

                <Row>
                    <Cell3>
                        {(this.props.class203.className_id === 5 ? '203호': null)}
                    </Cell3>
                    <Cell>
                    {   
                            <ReadSelect onChange={this.props.handleSelect} value={this.props.class203.reserveType_id} 
                            name = {"class203.reserveType_id"} >
                            <option value="0">-</option>
                            <option value="1">현금</option>
                            <option value="2">이체</option>
                            <option value="3">카드</option>
                            <option value="4">야놀자</option>
                            <option value="5">여기어때</option>
                            <option value="6">떠나요</option>

                         </ReadSelect>
                        }
                    </Cell>
                    <Cell>                            
                        <Cell2>
                            <Input onChange = {this.props.handleSelect} value = {this.props.class203.roomPrice }
                            name = {"class203.roomPrice"}/>
                            
                        </Cell2>
                        <Cell2>
                        {
                        <ReadSelect onChange={this.props.handleSelect} value={this.props.class203.roomType_id} 
                            name = {"class203.roomType_id"} >
                            <option value="0">-</option>
                            <option value="1">현금</option>
                            <option value="2">이체</option>
                            <option value="3">카드</option>
                            <option value="4">야놀자</option>
                            <option value="5">여기어때</option>
                            <option value="6">떠나요</option>
                         </ReadSelect>
                        }
                        </Cell2>
                    </Cell>
                    <Cell>
                      
                        <Cell2>
                            <Input onChange = {this.props.handleSelect} value = {this.props.class203.bbqPrice }
                            name = {"class203.bbqPrice"}/>
                        </Cell2>
                        <Cell2>
                        {
                            <ReadSelect onChange={this.props.handleSelect} value={this.props.class203.bbqType_id} 
                            name = {"class203.bbqType_id"} >
                            <option value="0">-</option>
                            <option value="1">현금</option>
                            <option value="2">이체</option>
                            <option value="3">카드</option>
                            <option value="7">미구매</option>

                         </ReadSelect>
                        }
                        </Cell2>
                    </Cell>
                    <Cell>
                        <Cell2>
                            <Input onChange = {this.props.handleSelect} value = {this.props.class203.extraPeoplePrice }
                            name = {"class203.extraPeoplePrice"}/>
                        </Cell2>
                        <Cell2>
                        {
                            <ReadSelect onChange={this.props.handleSelect} value={this.props.class203.extraPeopleType_id} 
                            name = {"class203.extraPeopleType_id"} >
                            <option value="0">-</option>
                            <option value="1">현금</option>
                            <option value="2">이체</option>
                            <option value="3">카드</option>
                            <option value="7">미구매</option>

                         </ReadSelect>
                        }
                        </Cell2>
                    </Cell>

                    <Cell>
                    {this.props.class203.roomPrice  + 
                     this.props.class203.bbqPrice + 
                     this.props.class203.extraPeoplePrice }
                    </Cell>

                    <Cell>
                    <Input onChange = {this.props.handleSelectInput} value = {this.props.class203.note }
                            name = {"class203.note"}/>
                    </Cell>


                    <Cell>
                        <Input onChange = {this.props.handleSelectInput} value = {this.props.class203.guestName }
                            name = {"class203.guestName"}/>
                    </Cell>

                    <Cell4>
                        
                           {this.props.btnName203 === 0  ? 
                           <ButtonSing onClick={() => {this.props.btnChanged(this.props.class203, 0 )}}>
                               상태 입력
                           </ButtonSing> :
                           <ButtonSing onClick={() => {this.props.btnChanged(this.props.class203, 1)}}>
                               상태 변경
                           </ButtonSing> 
                            }
                       
                           {this.props.btnName203 === 1  ? 
                            <ButtonSing onClick={() => {this.props.btnChanged(this.props.class203, 2)}}>
                                상태 삭제
                           </ButtonSing>
                           : null }
                        
                    </Cell4>

                </Row>

                <Row>
                    <Cell3>
                        {(this.props.class204.className_id === 6 ? '204호': null)}
                    </Cell3>
                    <Cell>
                    {   
                            <ReadSelect onChange={this.props.handleSelect} value={this.props.class204.reserveType_id} 
                            name = {"class204.reserveType_id"} >
                            <option value="0">-</option>
                            <option value="1">현금</option>
                            <option value="2">이체</option>
                            <option value="3">카드</option>
                            <option value="4">야놀자</option>
                            <option value="5">여기어때</option>
                            <option value="6">떠나요</option>

                         </ReadSelect>
                        }
                    </Cell>
                    <Cell>                            
                        <Cell2>
                            <Input onChange = {this.props.handleSelect} value = {this.props.class204.roomPrice }
                            name = {"class204.roomPrice"}/>
                            
                        </Cell2>
                        <Cell2>
                        {
                        <ReadSelect onChange={this.props.handleSelect} value={this.props.class204.roomType_id} 
                            name = {"class204.roomType_id"} >
                            <option value="0">-</option>
                            <option value="1">현금</option>
                            <option value="2">이체</option>
                            <option value="3">카드</option>
                            <option value="4">야놀자</option>
                            <option value="5">여기어때</option>
                            <option value="6">떠나요</option>
                         </ReadSelect>
                        }
                        </Cell2>
                    </Cell>
                    <Cell>
                      
                        <Cell2>
                            <Input onChange = {this.props.handleSelect} value = {this.props.class204.bbqPrice }
                            name = {"class204.bbqPrice"}/>
                        </Cell2>
                        <Cell2>
                        {
                            <ReadSelect onChange={this.props.handleSelect} value={this.props.class204.bbqType_id} 
                            name = {"class204.bbqType_id"} >
                            <option value="0">-</option>
                            <option value="1">현금</option>
                            <option value="2">이체</option>
                            <option value="3">카드</option>
                            <option value="7">미구매</option>

                         </ReadSelect>
                        }
                        </Cell2>
                    </Cell>
                    <Cell>
                        <Cell2>
                            <Input onChange = {this.props.handleSelect} value = {this.props.class204.extraPeoplePrice }
                            name = {"class204.extraPeoplePrice"}/>
                        </Cell2>
                        <Cell2>
                        {
                            <ReadSelect onChange={this.props.handleSelect} value={this.props.class204.extraPeopleType_id} 
                            name = {"class204.extraPeopleType_id"} >
                            <option value="0">-</option>
                            <option value="1">현금</option>
                            <option value="2">이체</option>
                            <option value="3">카드</option>
                            <option value="7">미구매</option>

                         </ReadSelect>
                        }
                        </Cell2>
                    </Cell>

                    <Cell>
                    {this.props.class204.roomPrice  + 
                     this.props.class204.bbqPrice + 
                     this.props.class204.extraPeoplePrice }
                    </Cell>

                    <Cell>
                    <Input onChange = {this.props.handleSelectInput} value = {this.props.class204.note }
                            name = {"class204.note"}/>
                    </Cell>


                    <Cell>
                        <Input onChange = {this.props.handleSelectInput} value = {this.props.class204.guestName }
                            name = {"class204.guestName"}/>
                    </Cell>

                    <Cell4>
                        
                           {this.props.btnName204 === 0  ? 
                           <ButtonSing onClick={() => {this.props.btnChanged(this.props.class204, 0 )}}>
                               상태 입력
                           </ButtonSing> :
                           <ButtonSing onClick={() => {this.props.btnChanged(this.props.class204, 1)}}>
                               상태 변경
                           </ButtonSing> 
                            }
                       
                           {this.props.btnName204 === 1  ? 
                            <ButtonSing onClick={() => {this.props.btnChanged(this.props.class204, 2)}}>
                                상태 삭제
                           </ButtonSing>
                           : null }
                        
                    </Cell4>

                </Row>

                <Row>
                    <Cell3>
                        {(this.props.class301.className_id === 7 ? '301호': null)}
                    </Cell3>
                    <Cell>
                    {   
                            <ReadSelect onChange={this.props.handleSelect} value={this.props.class301.reserveType_id} 
                            name = {"class301.reserveType_id"} >
                            <option value="0">-</option>
                            <option value="1">현금</option>
                            <option value="2">이체</option>
                            <option value="3">카드</option>
                            <option value="4">야놀자</option>
                            <option value="5">여기어때</option>
                            <option value="6">떠나요</option>

                         </ReadSelect>
                        }
                    </Cell>
                    <Cell>                            
                        <Cell2>
                            <Input onChange = {this.props.handleSelect} value = {this.props.class301.roomPrice }
                            name = {"class301.roomPrice"}/>
                            
                        </Cell2>
                        <Cell2>
                        {
                        <ReadSelect onChange={this.props.handleSelect} value={this.props.class301.roomType_id} 
                            name = {"class301.roomType_id"} >
                            <option value="0">-</option>
                            <option value="1">현금</option>
                            <option value="2">이체</option>
                            <option value="3">카드</option>
                            <option value="4">야놀자</option>
                            <option value="5">여기어때</option>
                            <option value="6">떠나요</option>
                         </ReadSelect>
                        }
                        </Cell2>
                    </Cell>
                    <Cell>
                      
                        <Cell2>
                            <Input onChange = {this.props.handleSelect} value = {this.props.class301.bbqPrice }
                            name = {"class301.bbqPrice"}/>
                        </Cell2>
                        <Cell2>
                        {
                            <ReadSelect onChange={this.props.handleSelect} value={this.props.class301.bbqType_id} 
                            name = {"class301.bbqType_id"} >
                            <option value="0">-</option>
                            <option value="1">현금</option>
                            <option value="2">이체</option>
                            <option value="3">카드</option>
                            <option value="7">미구매</option>

                         </ReadSelect>
                        }
                        </Cell2>
                    </Cell>
                    <Cell>
                        <Cell2>
                            <Input onChange = {this.props.handleSelect} value = {this.props.class301.extraPeoplePrice }
                            name = {"class301.extraPeoplePrice"}/>
                        </Cell2>
                        <Cell2>
                        {
                            <ReadSelect onChange={this.props.handleSelect} value={this.props.class301.extraPeopleType_id} 
                            name = {"class301.extraPeopleType_id"} >
                            <option value="0">-</option>
                            <option value="1">현금</option>
                            <option value="2">이체</option>
                            <option value="3">카드</option>
                            <option value="7">미구매</option>

                         </ReadSelect>
                        }
                        </Cell2>
                    </Cell>

                    <Cell>
                    {this.props.class301.roomPrice  + 
                     this.props.class301.bbqPrice + 
                     this.props.class301.extraPeoplePrice }
                    </Cell>

                    <Cell>
                    <Input onChange = {this.props.handleSelectInput} value = {this.props.class301.note }
                            name = {"class301.note"}/>
                    </Cell>


                    <Cell>
                        <Input onChange = {this.props.handleSelectInput} value = {this.props.class301.guestName }
                            name = {"class301.guestName"}/>
                    </Cell>

                    <Cell4>
                        
                           {this.props.btnName301 === 0  ? 
                           <ButtonSing onClick={() => {this.props.btnChanged(this.props.class301, 0 )}}>
                               상태 입력
                           </ButtonSing> :
                           <ButtonSing onClick={() => {this.props.btnChanged(this.props.class301, 1)}}>
                               상태 변경
                           </ButtonSing> 
                            }
                       
                           {this.props.btnName301 === 1  ? 
                            <ButtonSing onClick={() => {this.props.btnChanged(this.props.class301, 2)}}>
                                상태 삭제
                           </ButtonSing>
                           : null }
                        
                    </Cell4>

                </Row>

                <Row>
                    <Cell3>
                        {(this.props.class302.className_id === 8 ? '302호': null)}
                    </Cell3>
                    <Cell>
                    {   
                            <ReadSelect onChange={this.props.handleSelect} value={this.props.class302.reserveType_id} 
                            name = {"class302.reserveType_id"} >
                            <option value="0">-</option>
                            <option value="1">현금</option>
                            <option value="2">이체</option>
                            <option value="3">카드</option>
                            <option value="4">야놀자</option>
                            <option value="5">여기어때</option>
                            <option value="6">떠나요</option>

                         </ReadSelect>
                        }
                    </Cell>
                    <Cell>                            
                        <Cell2>
                            <Input onChange = {this.props.handleSelect} value = {this.props.class302.roomPrice }
                            name = {"class302.roomPrice"}/>
                            
                        </Cell2>
                        <Cell2>
                        {
                        <ReadSelect onChange={this.props.handleSelect} value={this.props.class302.roomType_id} 
                            name = {"class302.roomType_id"} >
                            <option value="0">-</option>
                            <option value="1">현금</option>
                            <option value="2">이체</option>
                            <option value="3">카드</option>
                            <option value="4">야놀자</option>
                            <option value="5">여기어때</option>
                            <option value="6">떠나요</option>
                         </ReadSelect>
                        }
                        </Cell2>
                    </Cell>
                    <Cell>
                      
                        <Cell2>
                            <Input onChange = {this.props.handleSelect} value = {this.props.class302.bbqPrice }
                            name = {"class302.bbqPrice"}/>
                        </Cell2>
                        <Cell2>
                        {
                            <ReadSelect onChange={this.props.handleSelect} value={this.props.class302.bbqType_id} 
                            name = {"class302.bbqType_id"} >
                            <option value="0">-</option>
                            <option value="1">현금</option>
                            <option value="2">이체</option>
                            <option value="3">카드</option>
                            <option value="7">미구매</option>

                         </ReadSelect>
                        }
                        </Cell2>
                    </Cell>
                    <Cell>
                        <Cell2>
                            <Input onChange = {this.props.handleSelect} value = {this.props.class302.extraPeoplePrice }
                            name = {"class302.extraPeoplePrice"}/>
                        </Cell2>
                        <Cell2>
                        {
                            <ReadSelect onChange={this.props.handleSelect} value={this.props.class302.extraPeopleType_id} 
                            name = {"class302.extraPeopleType_id"} >
                            <option value="0">-</option>
                            <option value="1">현금</option>
                            <option value="2">이체</option>
                            <option value="3">카드</option>
                            <option value="7">미구매</option>

                         </ReadSelect>
                        }
                        </Cell2>
                    </Cell>

                    <Cell>
                    {this.props.class302.roomPrice  + 
                     this.props.class302.bbqPrice + 
                     this.props.class302.extraPeoplePrice }
                    </Cell>

                    <Cell>
                    <Input onChange = {this.props.handleSelectInput} value = {this.props.class302.note }
                            name = {"class302.note"}/>
                    </Cell>


                    <Cell>
                        <Input onChange = {this.props.handleSelectInput} value = {this.props.class302.guestName }
                            name = {"class302.guestName"}/>
                    </Cell>

                    <Cell4>
                        
                           {this.props.btnName302 === 0  ? 
                           <ButtonSing onClick={() => {this.props.btnChanged(this.props.class302, 0 )}}>
                               상태 입력
                           </ButtonSing> :
                           <ButtonSing onClick={() => {this.props.btnChanged(this.props.class302, 1)}}>
                               상태 변경
                           </ButtonSing> 
                            }
                       
                           {this.props.btnName302 === 1  ? 
                            <ButtonSing onClick={() => {this.props.btnChanged(this.props.class302, 2)}}>
                                상태 삭제
                           </ButtonSing>
                           : null }
                        
                    </Cell4>

                </Row>

                <Row>
                    <Cell3>
                        {(this.props.class303.className_id === 9 ? '303호': null)}
                    </Cell3>
                    <Cell>
                    {   
                            <ReadSelect onChange={this.props.handleSelect} value={this.props.class303.reserveType_id} 
                            name = {"class303.reserveType_id"} >
                            <option value="0">-</option>
                            <option value="1">현금</option>
                            <option value="2">이체</option>
                            <option value="3">카드</option>
                            <option value="4">야놀자</option>
                            <option value="5">여기어때</option>
                            <option value="6">떠나요</option>

                         </ReadSelect>
                        }
                    </Cell>
                    <Cell>                            
                        <Cell2>
                            <Input onChange = {this.props.handleSelect} value = {this.props.class303.roomPrice }
                            name = {"class303.roomPrice"}/>
                            
                        </Cell2>
                        <Cell2>
                        {
                        <ReadSelect onChange={this.props.handleSelect} value={this.props.class303.roomType_id} 
                            name = {"class303.roomType_id"} >
                            <option value="0">-</option>
                            <option value="1">현금</option>
                            <option value="2">이체</option>
                            <option value="3">카드</option>
                            <option value="4">야놀자</option>
                            <option value="5">여기어때</option>
                            <option value="6">떠나요</option>
                         </ReadSelect>
                        }
                        </Cell2>
                    </Cell>
                    <Cell>
                      
                        <Cell2>
                            <Input onChange = {this.props.handleSelect} value = {this.props.class303.bbqPrice }
                            name = {"class303.bbqPrice"}/>
                        </Cell2>
                        <Cell2>
                        {
                            <ReadSelect onChange={this.props.handleSelect} value={this.props.class303.bbqType_id} 
                            name = {"class303.bbqType_id"} >
                            <option value="0">-</option>
                            <option value="1">현금</option>
                            <option value="2">이체</option>
                            <option value="3">카드</option>
                            <option value="7">미구매</option>

                         </ReadSelect>
                        }
                        </Cell2>
                    </Cell>
                    <Cell>
                        <Cell2>
                            <Input onChange = {this.props.handleSelect} value = {this.props.class303.extraPeoplePrice }
                            name = {"class303.extraPeoplePrice"}/>
                        </Cell2>
                        <Cell2>
                        {
                            <ReadSelect onChange={this.props.handleSelect} value={this.props.class303.extraPeopleType_id} 
                            name = {"class303.extraPeopleType_id"} >
                            <option value="0">-</option>
                            <option value="1">현금</option>
                            <option value="2">이체</option>
                            <option value="3">카드</option>
                            <option value="7">미구매</option>

                         </ReadSelect>
                        }
                        </Cell2>
                    </Cell>

                    <Cell>
                    {this.props.class303.roomPrice  + 
                     this.props.class303.bbqPrice + 
                     this.props.class303.extraPeoplePrice }
                    </Cell>

                    <Cell>
                    <Input onChange = {this.props.handleSelectInput} value = {this.props.class303.note }
                            name = {"class303.note"}/>
                    </Cell>


                    <Cell>
                        <Input onChange = {this.props.handleSelectInput} value = {this.props.class303.guestName }
                            name = {"class303.guestName"}/>
                    </Cell>

                    <Cell4>
                        
                           {this.props.btnName303 === 0  ? 
                           <ButtonSing onClick={() => {this.props.btnChanged(this.props.class303, 0 )}}>
                               상태 입력
                           </ButtonSing> :
                           <ButtonSing onClick={() => {this.props.btnChanged(this.props.class303, 1)}}>
                               상태 변경
                           </ButtonSing> 
                            }
                       
                           {this.props.btnName303 === 1  ? 
                            <ButtonSing onClick={() => {this.props.btnChanged(this.props.class303, 2)}}>
                                상태 삭제
                           </ButtonSing>
                           : null }
                        
                    </Cell4>

                </Row>

                <Row>
                    <Cell3>
                        {(this.props.class304.className_id === 10 ? '304호': null)}
                    </Cell3>
                    <Cell>
                    {   
                            <ReadSelect onChange={this.props.handleSelect} value={this.props.class304.reserveType_id} 
                            name = {"class304.reserveType_id"} >
                            <option value="0">-</option>
                            <option value="1">현금</option>
                            <option value="2">이체</option>
                            <option value="3">카드</option>
                            <option value="4">야놀자</option>
                            <option value="5">여기어때</option>
                            <option value="6">떠나요</option>

                         </ReadSelect>
                        }
                    </Cell>
                    <Cell>                            
                        <Cell2>
                            <Input onChange = {this.props.handleSelect} value = {this.props.class304.roomPrice }
                            name = {"class304.roomPrice"}/>
                            
                        </Cell2>
                        <Cell2>
                        {
                        <ReadSelect onChange={this.props.handleSelect} value={this.props.class304.roomType_id} 
                            name = {"class304.roomType_id"} >
                            <option value="0">-</option>
                            <option value="1">현금</option>
                            <option value="2">이체</option>
                            <option value="3">카드</option>
                            <option value="4">야놀자</option>
                            <option value="5">여기어때</option>
                            <option value="6">떠나요</option>
                         </ReadSelect>
                        }
                        </Cell2>
                    </Cell>
                    <Cell>
                      
                        <Cell2>
                            <Input onChange = {this.props.handleSelect} value = {this.props.class304.bbqPrice }
                            name = {"class304.bbqPrice"}/>
                        </Cell2>
                        <Cell2>
                        {
                            <ReadSelect onChange={this.props.handleSelect} value={this.props.class304.bbqType_id} 
                            name = {"class304.bbqType_id"} >
                            <option value="0">-</option>
                            <option value="1">현금</option>
                            <option value="2">이체</option>
                            <option value="3">카드</option>
                            <option value="7">미구매</option>

                         </ReadSelect>
                        }
                        </Cell2>
                    </Cell>
                    <Cell>
                        <Cell2>
                            <Input onChange = {this.props.handleSelect} value = {this.props.class304.extraPeoplePrice }
                            name = {"class304.extraPeoplePrice"}/>
                        </Cell2>
                        <Cell2>
                        {
                            <ReadSelect onChange={this.props.handleSelect} value={this.props.class304.extraPeopleType_id} 
                            name = {"class304.extraPeopleType_id"} >
                            <option value="0">-</option>
                            <option value="1">현금</option>
                            <option value="2">이체</option>
                            <option value="3">카드</option>
                            <option value="7">미구매</option>

                         </ReadSelect>
                        }
                        </Cell2>
                    </Cell>

                    <Cell>
                    {this.props.class304.roomPrice  + 
                     this.props.class304.bbqPrice + 
                     this.props.class304.extraPeoplePrice }
                    </Cell>

                    <Cell>
                    <Input onChange = {this.props.handleSelectInput} value = {this.props.class304.note }
                            name = {"class304.note"}/>
                    </Cell>


                    <Cell>
                        <Input onChange = {this.props.handleSelectInput} value = {this.props.class304.guestName }
                            name = {"class304.guestName"}/>
                    </Cell>

                    <Cell4>
                        
                           {this.props.btnName304 === 0  ? 
                           <ButtonSing onClick={() => {this.props.btnChanged(this.props.class304, 0 )}}>
                               상태 입력
                           </ButtonSing> :
                           <ButtonSing onClick={() => {this.props.btnChanged(this.props.class304, 1)}}>
                               상태 변경
                           </ButtonSing> 
                            }
                       
                           {this.props.btnName304 === 1  ? 
                            <ButtonSing onClick={() => {this.props.btnChanged(this.props.class304, 2)}}>
                                상태 삭제
                           </ButtonSing>
                           : null }
                        
                    </Cell4>

                </Row>
                </>
            );
        }
    }


export default IncomTableSingInBody;


const ReadSelect = styled.select`
    margin-bottom: 0.25rem;
    width: 80%;
    
    border: 1px solid ${oc.gray[3]};
    line-height: auto;
    font-size: 0.8rem;
`;


const Row = styled.div`
    width: auto;
    display: flex;
    background-color : #cde0c1;
    height : auto;
    border: 0.5px solid white;

`

const Cell = styled.div`
    color : rgb(71, 71, 71);
    border: 0.5px solid white;
    width: 20%;
    text-align : center;
    line-height: 60px;

`
const Cell2 = styled.div`
    color : rgb(71, 71, 71);
    border: 0.5px solid white;
    width: 100%;
    text-align : center;
    flex-direction:column;
    word-break:break-all;
    word-wrap:break-word;
    line-height: 30px;


    `
    const Cell3 = styled.div`
    color : rgb(71, 71, 71);
    border: 0.5px solid white;
    width: 15%;
    line-height: 60px;

    text-align : center;
    flex-direction:column;

    `

    const Cell4 = styled.div`
    color : rgb(71, 71, 71);
    border: 0.5px solid white;
    width: 15%;
    line-height: 30px;

    text-align : center;
    flex-direction:column;

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
