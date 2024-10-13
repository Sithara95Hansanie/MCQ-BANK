import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import blogReducer from './blogReducer';
import userReducer from './userReducer';

export default combineReducers({
    item: itemReducer,
    blog:blogReducer,
    user:userReducer
});
