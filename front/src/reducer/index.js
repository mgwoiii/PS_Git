import { combineReducers } from 'redux';

import loadingReucer from './loadingReucer';
import loginReucer from './loginReucer';
import tabNumberReucer from './tabNumberReucer';

const rootReducer = combineReducers({
    loadingReucer,
    loginReucer,
    tabNumberReucer    
});

export default rootReducer;