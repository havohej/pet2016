import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'react-bootstrap';
import UserListContainer from '../containers/UserListContainer.jsx'
import CreateUserContainer from '../containers/CreateUserContainer.jsx'


export default class CrudTemplate extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>
            <UserListContainer />
            <CreateUserContainer />
          </div>
        );
    }
}