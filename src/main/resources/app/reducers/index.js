import {
	combineReducers
} from 'redux-immutable';
import userReducer from './userReducer';

const rootReducer = combineReducers({
	userReducer
});

export default rootReducer;