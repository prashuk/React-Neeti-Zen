import React, { Component } from "react";
import { Row, Col, Form, Button, Card, Table } from "react-bootstrap";
import Aux from "../../hoc/_Aux";
import MainCard from "../../App/components/MainCard";
import * as firebase from "firebase";
import ApiKeys from "../../store/ApiKeys";
import { getModerators } from "../../store/data";
import ReactToPrint from "react-to-print";

class ComponentToPrint extends Component {
  state = {
    moderators: [],
  };

  constructor(props) {
    super(props);

    if (!firebase.apps.length) {
      firebase.initializeApp(ApiKeys.FirebaseConfig);
    }
    console.log(this.props.params.ticketId);
    this.showModerator();
  }

  showModerator = () => {
    var updateData = getModerators();
    updateData.then((result) => {
      this.setState({ moderators: Object.values(result) });
    });
  };

  render() {
    return (
      <Aux>
        <Row>
          <Col>
            <MainCard title="Ticket Number: 101">
              <Card.Body>
                <Table responsive>
                  <tbody>
                    <tr>
                      <th scope="row" width="180">
                        Name of Person
                      </th>
                      <td>Test123</td>
                    </tr>
                    <tr>
                      <th scope="row">Date Submitted</th>
                      <td>Jan 01, 2020</td>
                    </tr>
                    <tr>
                      <th scope="row">Assigned To</th>
                      <td>
                        <Col md={3}>
                          <Form.Control size="sm" as="select">
                            {this.state.moderators.map((moderator) => (
                              <option key={moderator} value={moderator}>
                                {moderator}
                              </option>
                            ))}
                          </Form.Control>
                        </Col>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Current Status</th>
                      <td>
                        <Col md={3}>
                          <Form.Control size="sm" as="select">
                            <option>Open</option>
                            <option>In Progress</option>
                            <option>Closed</option>
                          </Form.Control>
                        </Col>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Ticket Type</th>
                      <td>Suggest</td>
                    </tr>
                  </tbody>
                </Table>
                <Button variant="primary">Submit</Button>
              </Card.Body>
            </MainCard>
            <MainCard title="Ticket Details">
              <Card.Body>
                <Table responsive>
                  <tbody>
                    <tr>
                      <th scope="row" width="180">
                        Notes
                      </th>
                      <td>Testing 123</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </MainCard>
          </Col>
        </Row>
      </Aux>
    );
  }
}

class TicketInfo extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          content={() => this.componentRef}
          trigger={() => <a href="#">Download</a>}
        />
        <ComponentToPrint ref={(el) => (this.componentRef = el)} />
      </div>
    );
  }
}

export default TicketInfo;
