import {
	handleActions
} from 'redux-actions';
import {
	UserState
} from '../constants/models';

const userReducer = handleActions({
	CHANGE_VALUE: (state, { payload }) => {
		
		let user = state.get('user');
		return state.merge({
			user: user.set(payload.id, payload.value),
		})
	},

	CREATE_USER: (state, { payload }) => {

		return state.merge({
			user: payload.bean,
			userValidation: payload.valBean,
			alertStyle: payload.alertStyle,
			alertMessage: payload.alertMessage,
		})
	}
}, UserState);

export default userReducer;