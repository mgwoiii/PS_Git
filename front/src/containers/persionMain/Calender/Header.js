import React, { Component } from 'react';
import styled from "styled-components";

class Header extends Component {
    render(){
        return (
            <RCA_HEADER_CONTAINER>

                        <H2_RCA_Header_CalendarYM>
                            <RCA_Header_Middle>
                               {this.props.calenderYM}
                            </RCA_Header_Middle>
                        </H2_RCA_Header_CalendarYM>

                        <H3_RCA_Header_Today>
                           <RCA_Header_Middle>
                              {this.props.today}
                           </RCA_Header_Middle>
                        </H3_RCA_Header_Today>
                       
                        <RCA_Header_Middle>
                            <RCA_UL>
                                    <RCA_LI onClick={() => {this.props.moveMonth(-1)}}>
                                         &lt;
                                    </RCA_LI>

                                    <RCA_LI>
                                        이동
                                    </RCA_LI>
                                    <RCA_LI onClick={() => {this.props.moveMonth(1)}}>
                                        &gt;
                                    </RCA_LI>
                            </RCA_UL>
                        </RCA_Header_Middle>
                        

            </RCA_HEADER_CONTAINER>
        )
    }
}

const H2_RCA_Header_CalendarYM = styled.div`
    font-size: 1.5em;
    box-sizing : border-box;
    padding-left : 5px;
    flex-grow : 1;
    
`
const H3_RCA_Header_Today = styled.div`
    font-size: 1em;
    display: flex;
    justify-content: center
`

const RCA_Header_Middle = styled.div`
`

const RCA_HEADER_CONTAINER = styled.div`
    flex-basis: 50px;
    background-color: rgb(224, 215, 202);
    display : flex;
    line-height: 80px;   

`

const RCA_UL = styled.ul`
    padding-left: 0;
    list-style-type: none;
    margin: 0;
    
    cursor: pointer;   
    float:left; 
    text-align:center;
    

`
const RCA_LI = styled.li`
    float: left;
    width : 50px;
    height: 80px;
    line-height: 80px;   
    font-size: 20px;
`

// const RCA_Header_Buttons = styled.div`
//     flex-basis: 120px;
//     padding-left: 0;
//     padding-top: 4px;
//     display: block;
//     list-style-type: none;
//     margin: 0;
// `


export default Header;