import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'react-bootstrap';
import CreateUser from '../containers/CreateUser.jsx'


export default class CrudTemplate extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>
            <CreateUser />
          </div>
        );
    }
}