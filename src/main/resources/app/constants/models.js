import Immutable from 'immutable';

export const UserState = Immutable.fromJS({
	'user': {
		userId: '',
		password: '',
		role: '',
		email: ''
	},
	'userValidation': {
		userId: {
			validationState: null,
			helpBlock: null
		},
		password: {
			validationState: null,
			helpBlock: null
		},
		role: {
			validationState: null,
			helpBlock: null
		},
		email: {
			validationState: null,
			helpBlock: null
		}
	},
	alertStyle: null,
	alertMessage: null,
	userList: null
});