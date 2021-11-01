import React, { Component } from 'react';
import styled from "styled-components";

class IncomTableBody extends Component {

        render(){
            return(
                <>
                    <Row>
                        <Cell3>
                            {(this.props.class101.className_id === 1 ? '101호': null)}
                        </Cell3>
                        <Cell>
                            {(
                                this.props.class101.reserveType_id === 1 ? "현금":
                                    (   this.props.class101.reserveType_id === 2 ? "이체" :
                                        (   this.props.class101.reserveType_id === 3 ? "카드" :    
                                            (   this.props.class101.reserveType_id === 4 ? "야놀자" :    
                                                (   this.props.class101.reserveType_id === 5 ? "여기어때" :    
                                                    (   this.props.class101.reserveType_id === 6 ? "떠나요" :    
                                            "-"
                                                    )
                                                )
                                            )
                                        )
                                    )
                            )}
                        </Cell>
                        <Cell>
                            {(this.props.class101.roomPrice + this.props.class101.extraPeoplePrice === 0 ?
                                 "-":this.props.class101.roomPrice + this.props.class101.extraPeoplePrice ) }
                        </Cell>
                        <Cell>
                            {(this.props.class101.bbqPrice === 0 ?
                                 "-":this.props.class101.bbqPrice ) }
                        </Cell>
                        <Cell>
                            {(this.props.class101.totalPrice === 0 ?
                                 "-":this.props.class101.totalPrice ) }

                        </Cell>
                    </Row>

                    <Row>
                        <Cell3>
                        {(this.props.class102.className_id === 2 ? '102호': null)}
                        </Cell3>
                        <Cell>
                        {(
                                this.props.class102.reserveType_id === 1 ? "현금":
                                    (   this.props.class102.reserveType_id === 2 ? "이체" :
                                        (   this.props.class102.reserveType_id === 3 ? "카드" :    
                                            (   this.props.class102.reserveType_id === 4 ? "야놀자" :    
                                                (   this.props.class102.reserveType_id === 5 ? "여기어때" :    
                                                    (   this.props.class102.reserveType_id === 6 ? "떠나요" :    
                                            "-"
                                                    )
                                                )
                                            )
                                        )
                                    )
                            )}
                        </Cell>
                        <Cell>                            
                            {(this.props.class102.roomPrice + this.props.class102.extraPeoplePrice === 0 ?
                                 "-":this.props.class102.roomPrice + this.props.class102.extraPeoplePrice ) }
                        </Cell>
                        <Cell>
                            {(this.props.class102.bbqPrice === 0 ?
                                 "-":this.props.class102.bbqPrice ) }
                        </Cell>
                        <Cell>
                            {(this.props.class102.totalPrice === 0 ?
                                 "-":this.props.class102.totalPrice ) }
                        </Cell>
                    </Row>


                    <Row>
                        <Cell3>
                            {(this.props.class201.className_id === 3 ? '201호': null)}
                        </Cell3>
                        <Cell>
                            {(
                                this.props.class201.reserveType_id === 1 ? "현금":
                                    (   this.props.class201.reserveType_id === 2 ? "이체" :
                                        (   this.props.class201.reserveType_id === 3 ? "카드" :    
                                            (   this.props.class201.reserveType_id === 4 ? "야놀자" :    
                                                (   this.props.class201.reserveType_id === 5 ? "여기어때" :    
                                                    (   this.props.class201.reserveType_id === 6 ? "떠나요" :    
                                            "-"
                                                    )
                                                )
                                            )
                                        )
                                    )
                            )}
                        </Cell>
                        <Cell>
                            {(this.props.class201.roomPrice + this.props.class201.extraPeoplePrice === 0 ?
                                 "-":this.props.class201.roomPrice + this.props.class201.extraPeoplePrice ) }
                        </Cell>
                        <Cell>
                            {(this.props.class201.bbqPrice === 0 ?
                                 "-":this.props.class201.bbqPrice ) }
                        </Cell>
                        <Cell>
                            {(this.props.class201.totalPrice === 0 ?
                                 "-":this.props.class201.totalPrice ) }

                        </Cell>
                    </Row>


                    <Row>
                        <Cell3>
                            {(this.props.class202.className_id === 4 ? '202호': null)}
                        </Cell3>
                        <Cell>
                            {(
                                this.props.class202.reserveType_id === 1 ? "현금":
                                    (   this.props.class202.reserveType_id === 2 ? "이체" :
                                        (   this.props.class202.reserveType_id === 3 ? "카드" :    
                                            (   this.props.class202.reserveType_id === 4 ? "야놀자" :    
                                                (   this.props.class202.reserveType_id === 5 ? "여기어때" :    
                                                    (   this.props.class202.reserveType_id === 6 ? "떠나요" :    
                                            "-"
                                                    )
                                                )
                                            )
                                        )
                                    )
                            )}
                        </Cell>
                        <Cell>
                            {(this.props.class202.roomPrice + this.props.class202.extraPeoplePrice === 0 ?
                                 "-":this.props.class202.roomPrice + this.props.class202.extraPeoplePrice ) }
                        </Cell>
                        <Cell>
                            {(this.props.class202.bbqPrice === 0 ?
                                 "-":this.props.class202.bbqPrice ) }
                        </Cell>
                        <Cell>
                            {(this.props.class202.totalPrice === 0 ?
                                 "-":this.props.class202.totalPrice ) }

                        </Cell>
                    </Row>


                    <Row>
                        <Cell3>
                            {(this.props.class203.className_id === 5 ? '203호': null)}
                        </Cell3>
                        <Cell>
                            {(
                                this.props.class203.reserveType_id === 1 ? "현금":
                                    (   this.props.class203.reserveType_id === 2 ? "이체" :
                                        (   this.props.class203.reserveType_id === 3 ? "카드" :    
                                            (   this.props.class203.reserveType_id === 4 ? "야놀자" :    
                                                (   this.props.class203.reserveType_id === 5 ? "여기어때" :    
                                                    (   this.props.class203.reserveType_id === 6 ? "떠나요" :    
                                            "-"
                                                    )
                                                )
                                            )
                                        )
                                    )
                            )}
                        </Cell>
                        <Cell>
                            {(this.props.class203.roomPrice + this.props.class203.extraPeoplePrice === 0 ?
                                 "-":this.props.class203.roomPrice + this.props.class203.extraPeoplePrice ) }
                        </Cell>
                        <Cell>
                            {(this.props.class203.bbqPrice === 0 ?
                                 "-":this.props.class203.bbqPrice ) }
                        </Cell>
                        <Cell>
                            {(this.props.class203.totalPrice === 0 ?
                                 "-":this.props.class203.totalPrice ) }

                        </Cell>
                    </Row>
                   
                    <Row>
                        <Cell3>
                            {(this.props.class204.className_id === 6 ? '204호': null)}
                        </Cell3>
                        <Cell>
                            {(
                                this.props.class204.reserveType_id === 1 ? "현금":
                                    (   this.props.class204.reserveType_id === 2 ? "이체" :
                                        (   this.props.class204.reserveType_id === 3 ? "카드" :    
                                            (   this.props.class204.reserveType_id === 4 ? "야놀자" :    
                                                (   this.props.class204.reserveType_id === 5 ? "여기어때" :    
                                                    (   this.props.class204.reserveType_id === 6 ? "떠나요" :    
                                            "-"
                                                    )
                                                )
                                            )
                                        )
                                    )
                            )}
                        </Cell>
                        <Cell>
                            {(this.props.class204.roomPrice + this.props.class204.extraPeoplePrice === 0 ?
                                 "-":this.props.class204.roomPrice + this.props.class204.extraPeoplePrice ) }
                        </Cell>
                        <Cell>
                            {(this.props.class204.bbqPrice === 0 ?
                                 "-":this.props.class204.bbqPrice ) }
                        </Cell>
                        <Cell>
                            {(this.props.class204.totalPrice === 0 ?
                                 "-":this.props.class204.totalPrice ) }

                        </Cell>
                    </Row>




                    <Row>
                        <Cell3>
                            {(this.props.class301.className_id === 7 ? '301호': null)}
                        </Cell3>
                        <Cell>
                            {(
                                this.props.class301.reserveType_id === 1 ? "현금":
                                    (   this.props.class301.reserveType_id === 2 ? "이체" :
                                        (   this.props.class301.reserveType_id === 3 ? "카드" :    
                                            (   this.props.class301.reserveType_id === 4 ? "야놀자" :    
                                                (   this.props.class301.reserveType_id === 5 ? "여기어때" :    
                                                    (   this.props.class301.reserveType_id === 6 ? "떠나요" :    
                                            "-"
                                                    )
                                                )
                                            )
                                        )
                                    )
                            )}
                        </Cell>
                        <Cell>
                            {(this.props.class301.roomPrice + this.props.class301.extraPeoplePrice === 0 ?
                                 "-":this.props.class301.roomPrice + this.props.class301.extraPeoplePrice ) }
                        </Cell>
                        <Cell>
                            {(this.props.class301.bbqPrice === 0 ?
                                 "-":this.props.class301.bbqPrice ) }
                        </Cell>
                        <Cell>
                            {(this.props.class301.totalPrice === 0 ?
                                 "-":this.props.class301.totalPrice ) }

                        </Cell>
                    </Row>


                    <Row>
                        <Cell3>
                            {(this.props.class302.className_id === 8 ? '302호': null)}
                        </Cell3>
                        <Cell>
                            {(
                                this.props.class302.reserveType_id === 1 ? "현금":
                                    (   this.props.class302.reserveType_id === 2 ? "이체" :
                                        (   this.props.class302.reserveType_id === 3 ? "카드" :    
                                            (   this.props.class302.reserveType_id === 4 ? "야놀자" :    
                                                (   this.props.class302.reserveType_id === 5 ? "여기어때" :    
                                                    (   this.props.class302.reserveType_id === 6 ? "떠나요" :    
                                            "-"
                                                    )
                                                )
                                            )
                                        )
                                    )
                            )}
                        </Cell>
                        <Cell>
                            {(this.props.class302.roomPrice + this.props.class302.extraPeoplePrice === 0 ?
                                 "-":this.props.class302.roomPrice + this.props.class302.extraPeoplePrice ) }
                        </Cell>
                        <Cell>
                            {(this.props.class302.bbqPrice === 0 ?
                                 "-":this.props.class302.bbqPrice ) }
                        </Cell>
                        <Cell>
                            {(this.props.class302.totalPrice === 0 ?
                                 "-":this.props.class302.totalPrice ) }

                        </Cell>
                    </Row>


                    <Row>
                        <Cell3>
                            {(this.props.class303.className_id === 9 ? '303호': null)}
                        </Cell3>
                        <Cell>
                            {(
                                this.props.class303.reserveType_id === 1 ? "현금":
                                    (   this.props.class303.reserveType_id === 2 ? "이체" :
                                        (   this.props.class303.reserveType_id === 3 ? "카드" :    
                                            (   this.props.class303.reserveType_id === 4 ? "야놀자" :    
                                                (   this.props.class303.reserveType_id === 5 ? "여기어때" :    
                                                    (   this.props.class303.reserveType_id === 6 ? "떠나요" :    
                                            "-"
                                                    )
                                                )
                                            )
                                        )
                                    )
                            )}
                        </Cell>
                        <Cell>
                            {(this.props.class303.roomPrice + this.props.class303.extraPeoplePrice === 0 ?
                                 "-":this.props.class303.roomPrice + this.props.class303.extraPeoplePrice ) }
                        </Cell>
                        <Cell>
                            {(this.props.class303.bbqPrice === 0 ?
                                 "-":this.props.class303.bbqPrice ) }
                        </Cell>
                        <Cell>
                            {(this.props.class303.totalPrice === 0 ?
                                 "-":this.props.class303.totalPrice ) }

                        </Cell>
                    </Row>
                   
                    <Row>
                        <Cell3>
                            {(this.props.class304.className_id === 10 ? '304호': null)}
                        </Cell3>
                        <Cell>
                            {(
                                this.props.class304.reserveType_id === 1 ? "현금":
                                    (   this.props.class304.reserveType_id === 2 ? "이체" :
                                        (   this.props.class304.reserveType_id === 3 ? "카드" :    
                                            (   this.props.class304.reserveType_id === 4 ? "야놀자" :    
                                                (   this.props.class304.reserveType_id === 5 ? "여기어때" :    
                                                    (   this.props.class304.reserveType_id === 6 ? "떠나요" :    
                                            "-"
                                                    )
                                                )
                                            )
                                        )
                                    )
                            )}
                        </Cell>
                        <Cell>
                            {(this.props.class304.roomPrice + this.props.class304.extraPeoplePrice === 0 ?
                                 "-":this.props.class304.roomPrice + this.props.class304.extraPeoplePrice ) }
                        </Cell>
                        <Cell>
                            {(this.props.class304.bbqPrice === 0 ?
                                 "-":this.props.class304.bbqPrice ) }
                        </Cell>
                        <Cell>
                            {(this.props.class304.totalPrice === 0 ?
                                 "-":this.props.class304.totalPrice ) }

                        </Cell>
                    </Row>


                    </>
            )
        }
    }


export default IncomTableBody;

const Row = styled.div`
    width: auto;
    display: flex;
    background-color : #cde0c1;
    height : auto;
    line-height: 30px;
    border: 0.5px solid white;

`

const Cell = styled.div`
    color : rgb(71, 71, 71);
    border: 0.5px solid white;
    width: 20%;
    text-align : center;
`
const Cell2 = styled.div`
    color : rgb(71, 71, 71);
    border: 0.5px solid white;
    width: 100%;
    text-align : center;
    flex-direction:column;
    word-break:break-all;
    word-wrap:break-word;

    `
    const Cell3 = styled.div`
    color : rgb(71, 71, 71);
    border: 0.5px solid white;
    width: 20%;
    text-align : center;
    flex-direction:column;

    `