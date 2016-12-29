import React from 'react';
import { Row, Col, Alert, Button } from 'react-bootstrap';

import FieldGroup from './FieldGroup.jsx';

export default class FormValidation extends React.Component {
	constructor(props) {
		super(props);
		this.setValue = this.setValue.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			bean: {
				formText: '',
				formNumber: '',
				formEmail: ''
			},
			valBean: {
				formText:{validationState:null, helpBlock: null},
				formNumber:{validationState:null, helpBlock: null},
				formEmail:{validationState:null, helpBlock: null}
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
			formText:{validationState:null, helpBlock: null},
			formNumber:{validationState:null, helpBlock: null},
			formEmail:{validationState:null, helpBlock: null}
		};
		let alertStyle = null;
		let alertMessage = null;

		console.log(this.state.bean);
		let textValue = this.state.bean.formText;
		let numberValue = this.state.bean.formNumber;
		let emailValue = this.state.bean.formEmail;
		let invalid = false;

		if (!textValue) {
			valBean.formText.validationState = 'error';
			valBean.formText.helpBlock = 'Required';
			invalid = true;
		} else if (textValue.length > 15) {
			valBean.formText.validationState = 'error';
			valBean.formText.helpBlock = 'Must be 15 characters or less';
			invalid = true;
		}

		if (!numberValue) {
			valBean.formNumber.validationState = 'error';
			valBean.formNumber.helpBlock = 'Required';
			invalid = true;
		} else if (isNaN(Number(numberValue))) {
			valBean.formNumber.validationState = 'error';
			valBean.formNumber.helpBlock = 'Must be a number';
			invalid = true;
		}

		if (!emailValue) {
			valBean.formEmail.validationState = 'error';
			valBean.formEmail.helpBlock = 'Required';
			invalid = true;
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailValue)) {
			valBean.formEmail.validationState = 'error';
			valBean.formEmail.helpBlock = 'Invalid email address';
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
			        <Col xs={11} sm={11} md={11}>
				    <FieldGroup
				      id="formText"
				      type="text"
				      label="Text"
				      value={this.state.formText}
				      placeholder="Enter text"
	                  onChange={(id, value) => {
	                      this.setValue(id, value);
	                  }}
	                  validation={this.state.valBean.formText}
				    />
				    <FieldGroup
				      id="formNumber"
				      type="number"
				      label="Number"
				      value={this.state.formNumber}
				      placeholder="Enter number"
	                  onChange={(id, value) => {
	                      this.setValue(id, value);
	                  }}
	                  validation={this.state.valBean.formNumber}
				    />
				    <FieldGroup
				      id="formEmail"
				      type="email"
				      label="Email address"
				      value={this.state.formEmail}
				      placeholder="Enter email"
	                  onChange={(id, value) => {
	                      this.setValue(id, value);
	                  }}
	                  validation={this.state.valBean.formEmail}
				    />
				    </Col>  		
              	</Row>   		
        	</div>
        );
    }
}