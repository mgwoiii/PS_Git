
import { Component } from "react";
import styled from "styled-components";
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
                number2: 1
            }

            // 새로고침을 하면 state 초기화가 되므로 페이지도 알맞게 이동
            //this.props.history.push('/persion-main/persionMain');
            this.props.history.push('/persion-main/income');
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
                                return <LiItem className={this.state.number2 === index ? "submenu" : "null"}
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
    width: 100%;
    margin-bottom: 1rem;
`;

const Wrapper = styled.ul`

    .submenu {
        color: #758B66;
        border-bottom: 2px solid #758B66;
    }

`;

const LiItem = styled.li`

    font-size: 1rem;
    font-weight: bold;
    display: inline-block;
    color: black;
    cursor: pointer;
    padding: 1rem;
    border-bottom: 2px solid white;

    &:hover {
        color : #758B66;
        border-bottom: 2px solid #758B66;

    }

    &:active{
        color : #758B66;
        border-bottom: 2px solid #758B66;
    }


`;

  
export default withRouter(Top);
