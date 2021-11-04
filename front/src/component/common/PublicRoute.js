import React from 'react';
import {Redirect, Route} from 'react-router-dom';



const PublicRoute = ({ component : Component, ...rest  }) => {

return(
        <Route
        {...rest}
        render = {props =>
          window.sessionStorage.getItem('grade_id') === null ? (
            <Component {...props} />
          ) : ( 
            alert('잘못된 접근 입니다.'),
            <Redirect to ="/persion-main/Persion/PersionMain" />
          )
        }
        />
    );

}


export default PublicRoute;