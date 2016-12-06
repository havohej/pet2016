import React from 'react';
import ReactDOM from 'react-dom';
import { Tab, Row, Col, Nav, NavItem} from 'react-bootstrap';
import About from './view/About.jsx';
import Todo from './view/Todo.jsx';
import Todo2 from './view/Todo2.jsx';
import FormValidation from './view/FormValidation.jsx';
import FormValidation2 from './view/FormValidation2.jsx';
import CrudTemplate from './view/CrudTemplate.jsx';
import { Provider } from 'react-redux';
import store from './store/configureStore'
import rootReducer from './reducers'

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="5">
          <Row className="clearfix">
            <Col xs={4} sm={3} md={2}>
              <Nav bsStyle="pills" stacked>
                <NavItem eventKey="0">
                  about
                </NavItem>
                <NavItem eventKey="1">
                  TodoList (mem)
                </NavItem>
                <NavItem eventKey="2">
                  TodoList (DB)
                </NavItem>
                <NavItem eventKey="3">
                  Form Validation
                  (front end)
                </NavItem>
                <NavItem eventKey="4">
                  Form Validation
                  (back end)
                </NavItem>
                <NavItem eventKey="5">
                  CRUD template
                </NavItem>
              </Nav>
            </Col>
            <Col xs={8} sm={9} md={10}>
              <Tab.Content animation>
                <Tab.Pane eventKey="0">
                  <About />
                </Tab.Pane>
                <Tab.Pane eventKey="1">
                  <Todo />
                </Tab.Pane>
                <Tab.Pane eventKey="2">
                  <Todo2 />
                </Tab.Pane>
                <Tab.Pane eventKey="3">
                  <FormValidation />
                </Tab.Pane>
                <Tab.Pane eventKey="4">
                  <FormValidation2 />
                </Tab.Pane>
                <Tab.Pane eventKey="5">
                  <Provider store={store}>
                    <CrudTemplate />
                  </Provider>
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