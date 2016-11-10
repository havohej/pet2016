import React from 'react';
import ReactDOM from 'react-dom';
import { Button, FormGroup, ControlLabel, FormControl, Row, Col } from 'react-bootstrap';
import TodoList from '../component/TodoList.jsx';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            items: [],
            text: '',
        }
    }
    onChange(e) {
        this.setState({text: e.target.value});      
    }
    handleSubmit(e) {
        e.preventDefault();
        const nextItems = this.state.items.concat([{text: this.state.text, id: Date.now()}]);
        const nextText = '';
        this.setState({items: nextItems, text: nextText});
    }
    render() {
    return (
      <div>	
      	<Row>
	  		<Col sm={10} md={10}>
		        <FormGroup controlId="item">
		          <FormControl
		            type="text"
		            value={this.state.text}
		            placeholder="新增 TODO"
		            onChange={this.onChange}
		          />
		        </FormGroup>
	        </Col>
	        <Col sm={2} md={2}>
	        	<Button onClick={this.handleSubmit}>Add</Button>
	        </Col>
	  	</Row>
        <TodoList items={this.state.items} />
      </div>
    );
    }
}

export default Todo;