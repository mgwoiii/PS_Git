import React from "react";
import { Route, Redirect } from "react-router-dom";


const PrivateRoute = ({ component: Component, ...rest }) => {

    return(
        <Route
        {...rest}
        render = {props =>
        window.sessionStorage.getItem('grade_id') === '3' || window.sessionStorage.getItem('grade_id') === '4' 
        ? (
            alert("가입대기중이거나 아이디 이용이 불가능합니다."),
            <Redirect to ="/" />
        ) : (
                (
                    window.sessionStorage.getItem('grade_id') === null ?
                    (alert('잘못된 접근 입니다.'),
                    <Redirect to ="/" />)
                    :
                    (<Component {...props} />)
                )
        )
                }
                />
    )
}

export default PrivateRoute;