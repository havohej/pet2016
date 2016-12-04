import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'react-bootstrap';

export default class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>	
            <br />
    	  		<Col sm={9} md={9}>
                    <div>
                    <Row>
                        <Col sm={12} md={12}>
                        <h4>havohej's pet project</h4><br />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={12}>
                        <p>use technology/framework/tool:</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={3} md={3}>
                        <p>general:</p>
                        </Col>
                        <Col sm={9} md={9}>
                        <p>Spring Boot, logback</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={3} md={3}>
                        <p>TodoList (mem):</p>
                        </Col>
                        <Col sm={9} md={9}>
                        <p>ReactJs, react-bootstrap</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={3} md={3}>
                        <p>TodoList (DB):</p>
                        </Col>
                        <Col sm={9} md={9}>
                        <p>ReactJs, react-bootstrap, RESTful API, H2 DataBase, MyBatis</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={3} md={3}>
                        <p>Form Validation (front end):</p>
                        </Col>
                        <Col sm={9} md={9}>
                        <p>ReactJs, react-bootstrap</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={3} md={3}>
                        <p>Form Validation (back end):</p>
                        </Col>
                        <Col sm={9} md={9}>
                        <p>ReactJs, react-bootstrap, RESTful API, H2 DataBase, MyBatis, Spring Validation</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={3} md={3}>
                        <p>CRUD template:</p>
                        </Col>
                        <Col sm={9} md={9}>
                        <p>ReactJs, react-bootstrap, Redux</p>
                        </Col>
                    </Row>
                    </div>
    	        </Col>
          </div>
        );
    }
}