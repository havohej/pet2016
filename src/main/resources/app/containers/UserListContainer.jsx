import React from 'react'
import {
	connect
} from 'react-redux'
import SimpleDataTable from '../components/SimpleDataTable.jsx';
import {
	findUserList
} from '../actions';

const mapStateToProps = (state) => ({
	data:state.getIn(['userReducer', 'userList']),
    fields:{
        USER_ID: 'ID',
        ROLE: '群組',
        EMAIL: 'Email'
    }
})

const mapDispatchToProps = (dispatch) => ({
	refresh: () => {
		dispatch(findUserList());
	}
})

const UserListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(SimpleDataTable)

export default UserListContainer;