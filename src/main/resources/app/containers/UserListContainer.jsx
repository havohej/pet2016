import React from 'react'
import {
	connect
} from 'react-redux'
import UserListComponent from '../components/UserListComponent.jsx';
import {
	findUserList
} from '../actions';

const mapStateToProps = (state) => ({
	dataList:state.getIn(['userReducer', 'userList']),
})

const mapDispatchToProps = (dispatch) => ({
	refresh: () => {
		dispatch(findUserList());
	}
})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
	dataList: stateProps.dataList,
	refresh: dispatchProps.refresh
})

const UserListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(UserListComponent)

export default UserListContainer;