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
		                <div key={item.ID}><del><p style={{color:'gray'}}>{item.TEXT}</p></del></div>
		            ))
		        }
		    </div>
	    )
  	}
}
