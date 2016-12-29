import React from 'react';
import ReactDOM from 'react-dom';
import { Button, FormGroup, ControlLabel, FormControl, Row, Col } from 'react-bootstrap';
import TodoList from './TodoList.jsx';
import CompletedList from './CompletedList.jsx';

export default class Todo2 extends React.Component {
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

    componentDidMount() {
        $.ajax({
            type: "GET",
            url: "/todolist/reload", 
            success: function(result,status,xhr) {
                this.setState({
                    items : result.items,
                    completedItems : result.completedItems
                })
            }.bind(this),
            error: function(jqXHR, textStatus, errorThrown) {
                console.log('error = ' + errorThrown);
            }.bind(this)
        });
    }

    componentWillUnmount() {
    }

    onChange(e) {
        this.setState({text: e.target.value});      
    }

    handleSubmit(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "/todolist/addTodo", 
            data: {text: this.state.text},
            success: function(result,status,xhr) {
                this.setState({
                    items : result.items,
                    completedItems : result.completedItems,
                    text: ''
                })
            }.bind(this),
            error: function(jqXHR, textStatus, errorThrown) {
                console.log('error = ' + errorThrown);
            }.bind(this)
        });
    }

    handleCompleted(event, item, key) {
        $.ajax({
            type: "PUT",
            url: "/todolist/completeTodo", 
            data: {id: item.ID},
            success: function(result,status,xhr) {
                this.setState({
                    items : result.items,
                    completedItems : result.completedItems
                })
            }.bind(this),
            error: function(jqXHR, textStatus, errorThrown) {
                console.log('error = ' + errorThrown);
            }.bind(this)
        });
    }

    cleanCompleted() {
        $.ajax({
            type: "DELETE",
            url: "/todolist/cleanCompleted",
            success: function(result,status,xhr) {
                this.setState({
                    items : result.items,
                    completedItems : result.completedItems
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