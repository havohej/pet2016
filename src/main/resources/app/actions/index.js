import {
	createAction
} from 'redux-actions';
import fetch from 'isomorphic-fetch';

export const changeValue = createAction('CHANGE_VALUE');

//export const createUser = createAction('CREATE_USER');
export const createUser = (user) => (
	(dispatch) => {
		fetch('/user/addUser', {
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				method: 'POST',
				body: JSON.stringify(user)
			})
			.then(response => response.json())
			.then((json) => {
				dispatch({
					type: 'CREATE_USER',
					payload: json
				});
				dispatch(findUserList());
			});
	}
);

//export const findUserList = createAction('FIND_USER_LIST');
export const findUserList = () => (
	(dispatch) => {
		fetch('/user/findUserList', {
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				method: 'GET'
			})
			.then(response => response.json())
			.then((json) => {
				console.log(json);
				dispatch({
					type: 'FIND_USER_LIST',
					payload: json
				});
			});
	}
);
