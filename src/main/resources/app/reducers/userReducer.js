import {
	handleActions
} from 'redux-actions';
import {
	UserState
} from '../constants/models';

const userReducer = handleActions({
	CHANGE_VALUE: (state, { payload }) => {
		let user = state.get('user');
		return state.set('user', user.set(payload.id, payload.value));
	},
	CREATE_USER: (state) => {
		let user = state.get('user');
		console.log(user);
		let userId = state.get('user').get('userId');
		console.log(userId);
		return state;
	}
}, UserState);

export default userReducer;