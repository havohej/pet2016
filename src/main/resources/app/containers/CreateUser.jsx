import React from 'react'
import {
	connect
} from 'react-redux'
import CreateUserComponent from '../components/CreateUserComponent.jsx';
import {
	changeValue,
	createUser
} from '../actions';

const mapStateToProps = (state) => ({
	user: state.getIn(['userReducer', 'user']),
	userValidation: state.getIn(['userReducer', 'userValidation']),
	alertStyle: state.getIn(['userReducer', 'alertStyle']),
	alertMessage: state.getIn(['userReducer', 'alertMessage']),
})

const mapDispatchToProps = (dispatch) => ({
	handleSubmit: (event) => {
		dispatch(createUser());
	},
	setValue: (id, value) => {
		dispatch(changeValue({
			id: id,
			value: value
		}))
	}
})

const CreateUser = connect(
	mapStateToProps,
	mapDispatchToProps
)(CreateUserComponent)

export default CreateUser;