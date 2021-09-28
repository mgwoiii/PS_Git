

import { TABNUMBER } from '../action/tabNumberActions';


const initialState = {
    number : 0,

}

function tabNumberReucer (state = initialState , action) {
    switch(action.type){
        case TABNUMBER : 
            return {
                ...state,
                number : action.payload
            }
        default : 
            return state;
    }

}

export default tabNumberReucer;