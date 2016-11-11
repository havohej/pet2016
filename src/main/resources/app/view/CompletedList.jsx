import React, { PropTypes } from 'react';

export default class CompletedList extends React.Component {
	constructor(props) {
    	super(props);
  	}

	render() {
	  	return (
		  	<div>
		        {
		            this.props.items.map((item, key) => (
		                <div key={item.id}><del><p style={{color:'gray'}}>{item.text}</p></del></div>
		            ))
		        }
		    </div>
	    )
  	}
}
