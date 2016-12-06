import React from 'react'
import {
	connect
} from 'react-redux'
import CreateUserComponent from '../components/CreateUserComponent.jsx';
import {
	createUser
} from '../actions';

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

const CreateUser = connect(
	mapStateToProps,
	mapDispatchToProps
)(CreateUserComponent)

export default CreateUser;