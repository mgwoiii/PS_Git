import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route} from 'react-router-dom';

function PrivateRoute({ component : Component , username, ...rest}){
    return (
    <Route
        {...rest}
        render = { props => {
                if(username === null){
                    return <Component {...props} />
                }else{
                    alert("잘못된 접근입니다!!");
                    return <Redirect to = "/" />
                }
            }
        }
    />
    );
}

const mapStateToProps = state => ({
    username: state.loginReucer.username
});
 
export default  connect(mapStateToProps)(PrivateRoute);