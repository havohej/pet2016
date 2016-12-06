import {
	handleActions
} from 'redux-actions';
import {
	UserState
} from '../constants/models';

import {
	CREATE_USER
} from '../constants/actionTypes';


const userReducer = handleActions({
	CREATE_USER: (state) => {
		return state;
	}
}, UserState);

export default userReducer;