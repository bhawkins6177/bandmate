import  { combineReducers } from 'redux';

import Songs from './songs';

export default combineReducers({
    Songs,     // since key and value are the same I do not need to do Songs: Songs 
})