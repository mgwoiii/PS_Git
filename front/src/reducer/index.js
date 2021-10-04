import { combineReducers } from 'redux';

import loadingReucer from './loadingReucer';
import loginReucer from './loginReucer';

const rootReducer = combineReducers({
    loadingReucer,
    loginReucer
});

export default rootReducer;