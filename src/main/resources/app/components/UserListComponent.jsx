import React from 'react';
import { Row, Col, Table, Button } from 'react-bootstrap';

import SimpleDataTable from './SimpleDataTable.jsx';

const UserListComponents = ({
	// state
	dataList,
	//fields,
	//activePage,
	//itemPerPage,
	//totalPage

	// dispatch
	refresh
}) => (
<div>
	<Button onClick={refresh}>Refresh</Button>
      <SimpleDataTable
        data={dataList}
        fields={{
            USER_ID: 'ID',
            ROLE: '群組',
            EMAIL: 'Email'
        }}
      />
</div>
);

export default UserListComponents;