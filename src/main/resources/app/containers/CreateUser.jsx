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
	handleSubmit: (user) => {
		dispatch(createUser(user));
	},
	setValue: (id, value) => {
		dispatch(changeValue({
			id: id,
			value: value
		}))
	}
})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
	user: stateProps.user,
	userValidation: stateProps.userValidation,
	alertStyle: stateProps.alertStyle,
	alertMessage: stateProps.alertMessage,
	handleSubmit: () => dispatchProps.handleSubmit(stateProps.user),
	setValue: dispatchProps.setValue
})

const CreateUser = connect(
	mapStateToProps,
	mapDispatchToProps,
	mergeProps
)(CreateUserComponent)

export default CreateUser;