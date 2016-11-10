import React from 'react';
import ReactDOM from 'react-dom';
import { Tab, Row, Col, Nav, NavItem} from 'react-bootstrap';
import Todo from './view/Todo.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="1">
          <Row className="clearfix">
            <Col xs={4} sm={3} md={2}>
              <Nav bsStyle="pills" stacked>
                <NavItem eventKey="1">
                  TodoList without DB
                </NavItem>
                <NavItem eventKey="2">
                  CRUD with H2DB
                </NavItem>
              </Nav>
            </Col>
            <Col xs={8} sm={9} md={10}>
              <Tab.Content animation>
                <Tab.Pane eventKey="1">
                  <Todo />
                </Tab.Pane>
                <Tab.Pane eventKey="2">
                
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));