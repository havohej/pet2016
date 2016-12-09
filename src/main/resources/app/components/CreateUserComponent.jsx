import React from 'react';
import { Row, Col, Alert, Button } from 'react-bootstrap';

import FieldGroup from './FieldGroup.jsx';

const CreateUserComponent = ({
	// state
	user,
	userValidation,
	alertStyle,
	alertMessage,
	// dispatch
	handleSubmit,
	setValue
}) => (

          	<div>
          		<Row>
          			<Col xs={2} sm={2} md={2}>
				      	<Button onClick={handleSubmit}>
					      Submit
					    </Button>
				    </Col>
				    <Col xs={10} sm={10} md={10}>
						<Alert bsStyle={alertStyle}>
							{alertMessage}
						</Alert>
				    </Col>
			    </Row>
			    <br />
			    <Row>
				    <FieldGroup
				      id="userId"
				      type="text"
				      label="使用者 ID"
				      value={user.get('userId')}
				      placeholder="Enter User ID"
	                  onChange={(id, value) => {
	                      setValue(id, value);
	                  }}
	                  validation={userValidation.get('userId')}
				    />
				    <FieldGroup
				      id="password"
				      type="password"
				      label="密碼"
				      value={user.get('password')}
				      placeholder="Enter Password"
	                  onChange={(id, value) => {
	                      setValue(id, value);
	                  }}
	                  validation={userValidation.get('password')}
				    />
				    <FieldGroup
				      id="role"
				      type="text"
				      label="群組"
				      value={user.get('role')}
				      placeholder="Enter Role"
	                  onChange={(id, value) => {
	                      setValue(id, value);
	                  }}
	                  validation={userValidation.get('role')}
				    />
				    <FieldGroup
				      id="email"
				      type="email"
				      label="Email"
				      value={user.get('email')}
				      placeholder="Enter Email"
	                  onChange={(id, value) => {
	                      setValue(id, value);
	                  }}
	                  validation={userValidation.get('email')}
				    />
              	</Row>   		
        	</div>

);

export default CreateUserComponent;