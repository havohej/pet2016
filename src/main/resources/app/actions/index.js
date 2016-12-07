import {
	createAction
} from 'redux-actions';

export const changeValue = createAction('CHANGE_VALUE');
//export const createUser = createAction('CREATE_USER');

export const createUser = (user) => (
	(dispatch) => {
		console.log(user);
		fetch('/user/addUser', {
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				method: 'PUT',
				body: JSON.stringify(user)
			})
			.then(response => response.json())
			.then((json) => {
				dispatch({
					type: 'CREATE_USER',
					payload: json
				});
			})
	}
);