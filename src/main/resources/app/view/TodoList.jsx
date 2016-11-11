import React, { PropTypes } from 'react';
import { Checkbox } from 'react-bootstrap';

export default class TodoList extends React.Component {
	constructor(props) {
    	super(props);
  	}

	render() {
	  	return (
		  	<div>
		        {
		            this.props.items.map((item, key) => (
		                <span key={item.id}><Checkbox onChange={(event) => {
		                	this.props.handleCompleted(event, item, key)}
		                }>{item.text}</Checkbox></span>
		            ))
		        }
		    </div>
	    )
  	}
}
