import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import blogReducer from './blogReducer';

export default combineReducers({
    item: itemReducer,
    blog:blogReducer
});
