import React, { Component } from 'react';
import styled from "styled-components";
import oc from "open-color";

class Calender extends Component {
    render(){
        return (
            <TastLayout>
                <RCA_APP_CONTAINER>
                    <RCA_HEADER_CONTAINER>
                        <RCA_CALENDER_CONTAINER>
                            ss
                        </RCA_CALENDER_CONTAINER>
                    </RCA_HEADER_CONTAINER>
                </RCA_APP_CONTAINER>

            </TastLayout>
            // <RCA_CALENDER_CONTAINER>
            //     Calender
            // </RCA_CALENDER_CONTAINER>
        )
    }
}

const TastLayout = styled.div`
    width: 100vw;
    height: 80vh;
    border: 1px solid black;
`

const RCA_APP_CONTAINER = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

const RCA_HEADER_CONTAINER = styled.div`
    flex-basis: 50px;
    background-color: rgb(224, 215, 202);
`

const RCA_CALENDER_CONTAINER = styled.div`
    flex-grow: 1;
    background-color: rgb(127, 184, 127);
`

 
 

export default Calender;