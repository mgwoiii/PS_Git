import { LOGIN_USER } from '../action/loginActions';
import { LOGOUT_USER } from '../action/loginActions';

const initialState = {
    // inputs : {}
    username : null
}

function loginReucer (state = initialState , action) {
   
    //console.log(action.type +" : action "+ state.username + " : 임다" + action.payload);
    switch(action.type){

        case LOGIN_USER : 
            return {
                ...state,
                username : action.payload,
                
            }

            // return {
            //     ...state,
            //    inputs : {
            //        ...state.inputs,
            //        [action.name] : action.value
            //    }
                
            // }
        
        case LOGOUT_USER :
            return {
                ...state,
                username : null
            }

        default : 
            return state;
    }

}

export default loginReucer;
