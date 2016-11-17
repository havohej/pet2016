import React from 'react';
import { Row, Col, Alert, Button } from 'react-bootstrap';

import FieldGroup from '../component/FieldGroup.jsx';

export default class FormValidation extends React.Component {
	constructor(props) {
		super(props);
		this.setValue = this.setValue.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			bean: {
				formControlsText: '',
				formControlsNumber: '',
				formControlsEmail: ''
			},
			valBean: {
				formControlsText:{validationState:null, helpBlock: null},
				formControlsNumber:{validationState:null, helpBlock: null},
				formControlsEmail:{validationState:null, helpBlock: null}
			},
			alertStyle: null,
			alertMessage: null
		}
	}

	setValue(id, value) {
		let bean = this.state.bean;
		bean[id] = value;
		this.setState({
			bean: bean
		});
	}

	handleSubmit() {
		let valBean = {
			formControlsText:{validationState:null, helpBlock: null},
			formControlsNumber:{validationState:null, helpBlock: null},
			formControlsEmail:{validationState:null, helpBlock: null}
		};
		let alertStyle = null;
		let alertMessage = null;

		console.log(this.state.bean);
		let textValue = this.state.bean.formControlsText;
		let numberValue = this.state.bean.formControlsNumber;
		let emailValue = this.state.bean.formControlsEmail;
		let invalid = false;

		if (!textValue) {
			valBean.formControlsText.validationState = 'error';
			valBean.formControlsText.helpBlock = 'Required';
			invalid = true;
		} else if (textValue.length > 15) {
			valBean.formControlsText.validationState = 'error';
			valBean.formControlsText.helpBlock = 'Must be 15 characters or less';
			invalid = true;
		}

		if (!numberValue) {
			valBean.formControlsNumber.validationState = 'error';
			valBean.formControlsNumber.helpBlock = 'Required';
			invalid = true;
		} else if (isNaN(Number(numberValue))) {
			valBean.formControlsNumber.validationState = 'error';
			valBean.formControlsNumber.helpBlock = 'Must be a number';
			invalid = true;
		}

		if (!emailValue) {
			valBean.formControlsEmail.validationState = 'error';
			valBean.formControlsEmail.helpBlock = 'Required';
			invalid = true;
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailValue)) {
			valBean.formControlsEmail.validationState = 'error';
			valBean.formControlsEmail.helpBlock = 'Invalid email address';
			invalid = true;
		}

		if (!invalid) {
			alertStyle = "success";
			alertMessage = "validate success";
		}

		this.setState({
			valBean: valBean,
			alertStyle: alertStyle,
			alertMessage: alertMessage
		});
	}

    render() {
        return (
          	<div>
          		<Row>
          			<Col xs={2} sm={2} md={2}>
				      	<Button onClick={this.handleSubmit}>
					      Submit
					    </Button>
				    </Col>
				    <Col xs={10} sm={10} md={10}>
						<Alert bsStyle={this.state.alertStyle}>
							{this.state.alertMessage}
						</Alert>
				    </Col>
			    </Row>
			    <br />
			    <Row>
				    <FieldGroup
				      id="formControlsText"
				      type="text"
				      label="Text"
				      value={this.state.formControlsText}
				      placeholder="Enter text"
	                  onChange={(id, value) => {
	                      this.setValue(id, value);
	                  }}
	                  validation={this.state.valBean.formControlsText}
				    />
				    <FieldGroup
				      id="formControlsNumber"
				      type="number"
				      label="Number"
				      value={this.state.formControlsNumber}
				      placeholder="Enter number"
	                  onChange={(id, value) => {
	                      this.setValue(id, value);
	                  }}
	                  validation={this.state.valBean.formControlsNumber}
				    />
				    <FieldGroup
				      id="formControlsEmail"
				      type="email"
				      label="Email address"
				      value={this.state.formControlsEmail}
				      placeholder="Enter email"
	                  onChange={(id, value) => {
	                      this.setValue(id, value);
	                  }}
	                  validation={this.state.valBean.formControlsEmail}
				    />
              	</Row>   		
        	</div>
        );
    }
}