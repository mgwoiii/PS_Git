import { LOADING_TRUE , LOADING_FALSE } from '../action/loadingActions';

const initialState = {
    isLoading : true,
}

function loadingReucer (state = initialState , action) {

    switch(action.type){
        case LOADING_TRUE : 
            return {
                ...state,
                isLoading : true
            }

        case LOADING_FALSE : 
            return {
                ...state,
                isLoading : false
            } 

        default : 
            return state;
    }

}

export default loadingReucer;
