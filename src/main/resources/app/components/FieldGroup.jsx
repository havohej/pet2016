import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

export default class FieldGroup extends React.Component {
    
  constructor(props) {
    super(props);
  }

  render() {
      
      let validationState = null;
      let helpBlock = null;
      
      if (this.props.validation) {
          validationState = this.props.validation.get('validationState');
          helpBlock = this.props.validation.get('helpBlock');
      }
      
      return (
        <FormGroup 
            controlId={this.props.id}
            validationState={validationState} >
          <ControlLabel>{this.props.label}</ControlLabel>
          <FormControl
            type={this.props.type}
            value={this.props.value}
            placeholder={this.props.placeholder}
            onChange={(event) => {
              this.props.onChange(this.props.id, event.target.value);
            }}
            disabled={this.props.disabled}
            maxLength={this.props.maxLength}
          />
          <FormControl.Feedback />
          <HelpBlock>{helpBlock}</HelpBlock>
        </FormGroup>
      );
    }
}

