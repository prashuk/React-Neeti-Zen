import React, { Component } from "react";
import { Row, Col, Form, Button, Card, Table } from "react-bootstrap";
import Aux from "../../hoc/_Aux";
import MainCard from "../../App/components/MainCard";
import * as firebase from "firebase";
import { getModerators } from "../../store/data";

class AddModerator extends Component {
  state = {
    email: "",
    moderators: [],
  };

  constructor(props) {
    super(props);

    this.showModerator();
  }

  submitHandle = () => {
    this.writeNewPost(this.state.email);
    alert("Moderator Added!");
  };

  writeNewPost(email) {
    var postData = {
      email: email,
    };

    var newPostKey = firebase
      .database()
      .ref()
      .child("loginType/moderator/")
      .push().key;
    var updates = {};
    updates["loginType/moderator/" + newPostKey] = postData;

    return firebase.database().ref().update(updates);
  }

  showModerator = () => {
    var updateData = getModerators();
    updateData.then((result) => {
      this.setState({ moderators: result });
    });
  };

  render() {
    return (
      <Aux>
        <Row>
          <Col>
            <MainCard title="Add Moderator">
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <Form>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          onChange={(text) => {
                            this.setState({ email: text.target.value });
                          }}
                        />
                      </Form.Group>
                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <Button variant="primary" onClick={this.submitHandle}>
                        Submit
                      </Button>
                    </Form>
                  </Col>
                </Row>
              </Card.Body>
            </MainCard>
            <MainCard title="Moderators">
              <Table responsive>
                <tbody>
                  {this.state.moderators.map((moderator) => (
                    <tr key={moderator} value={moderator}>
                      <td>{moderator}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </MainCard>
          </Col>
        </Row>
      </Aux>
    );
  }
}

export default AddModerator;
