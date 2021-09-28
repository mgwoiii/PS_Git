
import { Component } from "react";
import styled from "styled-components";
import oc from 'open-color';
import { withRouter } from "react-router";
import { connect } from "react-redux";

import * as actions from '../../action/tabNumberActions';

const obj = [
        {id : 0 , value : "메인"},
        {id : 1 , value : "수입일지"},
        {id : 2 , value : "지출일지"},
        {id : 3 , value : "공과금납부"},
        {id : 4 , value : "관리모드"}    
]

class Top extends Component{

    clickLi = (number) => {

            // tab 번호 저장
            this.props.TAB_NUMBER(number);

     
            switch(number){
                case 0 :  return  this.props.history.push('/persion-main/persionMain');
                case 1 :  return  this.props.history.push('/persion-main/income');
                case 2 :  return  this.props.history.push('/persion-main/expenditure');
                case 3 :  return  this.props.history.push('/persion-main/tax');
                case 4 :  return  this.props.history.push('/persion-main/admin');
                default : return ;
            }
        }

    render(){
        const { storeTabNumber } = this.props;
        return (
            <Wrap>
                <MenuBar>
                    <Wrapper>
                        {
                           //console.log( 'reducer : ' + storeTabNumber),
                            obj.map((obj, index) => {
                                return <LiItem className={storeTabNumber === index ? "null" : "submenu"}
                                         key = {obj.id} onClick = {() => {this.clickLi(obj.id)}}>
                                        {obj.value}</LiItem>})
                        }
                    </Wrapper>      
                </MenuBar>
            </Wrap>
            
        );
    }
}

const Wrap = styled.div`
    background: white;
    padding: 0.5rem;
    height: auto;
`;

const MenuBar = styled.div`
    /* padding: 1rem; */
    background: ${oc.teal[6]};
    width: 100%;
    margin-bottom: 1rem;
`;

const Wrapper = styled.ul`

    .submenu {
        color: white;
        background-color:  ${oc.teal[6]};
    }

`;

const LiItem = styled.li`

    font-size: 1rem;
    font-weight: bold;
    display: inline-block;
    color: white;
    background: ${oc.teal[5]};
    cursor: pointer;
    padding: 1rem;

    &:hover {
        background: ${oc.teal[5]};
    }

    &:active{
        color: white;
        background:  ${oc.teal[6]};
        height: 100%;
    }


`;

const mapStateToProps = (state) => ({
    storeTabNumber : state.tabNumberReucer.number,
  });
  
const mapDispatchToProps = (dispatch) => ({
    TAB_NUMBER: (number) => dispatch(actions.tabNumber(number))
});

  
export default connect(mapStateToProps, mapDispatchToProps) (withRouter(Top));
