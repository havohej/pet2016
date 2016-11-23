import React from 'react';
import { Row, Col, Alert, Button } from 'react-bootstrap';

import FieldGroup from '../component/FieldGroup.jsx';

export default class FormValidation2 extends React.Component {
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

        $.ajax({
            type: "POST",
            url: "/formvalidation/validate", 
            data: this.state.bean,
            success: function(result,status,xhr) {
            	console.log(result)
                this.setState({
                	bean: result.bean,
                	valBean: result.valBean,
                	alertStyle: result.alertStyle,
                	alertMessage: result.alertMessage
                })
            }.bind(this),
            error: function(jqXHR, textStatus, errorThrown) {
                console.log('error = ' + errorThrown);
            }.bind(this)
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
              	</Row>   		
        	</div>
        );
    }
}