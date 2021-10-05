
import { Component } from "react";
import styled from "styled-components";
import oc from 'open-color';
import { withRouter } from "react-router";

const obj = [
        {id : 0 , value : "메인"},
        {id : 1 , value : "수입일지"},
        {id : 2 , value : "지출일지"},
        {id : 3 , value : "공과금납부"},
        {id : 4 , value : "관리모드"}    
]

class Top extends Component{

        constructor(props){
            super(props);
        
            this.state = {
                number2: 0
            }

            // 새로고침을 하면 state 초기화가 되므로 페이지도 알맞게 이동
            this.props.history.push('/persion-main/persionMain');
        }

    clickLi = (number2) => {

            this.setState({
                number2 : number2
            });

            switch(number2){
                case 0 :  return  this.props.history.push('/persion-main/persionMain');
                case 1 :  return  this.props.history.push('/persion-main/income');
                case 2 :  return  this.props.history.push('/persion-main/expenditure');
                case 3 :  return  this.props.history.push('/persion-main/tax');
                case 4 :  return  this.props.history.push('/persion-main/admin');
                default : return ;
            }
        }

    render(){
        return (
            <Wrap>
                <MenuBar>
                    <Wrapper>
                        {
                            obj.map((obj, index) => {
                                return <LiItem className={this.state.number2 === index ? "null" : "submenu"}
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

  
export default withRouter(Top);
