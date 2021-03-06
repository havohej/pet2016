import React from 'react';
import ReactDOM from 'react-dom';
import { Button, FormGroup, ControlLabel, FormControl, Row, Col } from 'react-bootstrap';
import TodoList from './TodoList.jsx';
import CompletedList from './CompletedList.jsx';

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCompleted = this.handleCompleted.bind(this);
        this.cleanCompleted = this.cleanCompleted.bind(this);
        this.state = {
            items: [],
            completedItems: [],
            text: '',
        }
    }

    onChange(e) {
        this.setState({text: e.target.value});      
    }

    handleSubmit(e) {
        e.preventDefault();
        const items = this.state.items.concat([{TEXT: this.state.text, ID: Date.now()}]);
        const nextText = '';
        this.setState({items: items, text: nextText});
    }

    handleCompleted(event, item, key) {
        const items = this.state.items;
        items.splice(key, 1);
        const completedItems = this.state.completedItems.concat(item);
        this.setState({
            items: items,
            completedItems: completedItems
        })
    }

    cleanCompleted() {
        this.setState({
            completedItems: []
        })
    }

    render() {
        return (
          <div>	
          	<Row>
    	  		<Col sm={9} md={9}>
    		        <FormGroup controlId="item">
    		          <FormControl
    		            type="text"
    		            value={this.state.text}
    		            placeholder="新增 TODO"
    		            onChange={this.onChange}
    		          />
    		        </FormGroup>
    	        </Col>
    	        <Col sm={3} md={3}>
    	        	<Button onClick={this.handleSubmit}>Add</Button>
    	        </Col>
    	  	</Row>
            <Row>
                <Col sm={9} md={9}>
                    <TodoList 
                        items={this.state.items} 
                        handleCompleted={(event, item, key) => {
                            this.handleCompleted(event, item, key);
                        }}
                    />
                </Col>
            </Row>
            <hr />
            <Row>
                <Col sm={9} md={9}>
                </Col>
                <Col sm={3} md={3}>
                    <Button onClick={this.cleanCompleted}>Clean Completed</Button>
                </Col>
            </Row>
            <Row>
                <Col sm={9} md={9}>
                    <CompletedList 
                        items={this.state.completedItems} 
                    />
                </Col>
            </Row>
          </div>
        );
    }
}