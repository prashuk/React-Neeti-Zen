import React, { Component } from "react";
import { Row, Col, Form, Button, Card, Table } from "react-bootstrap";
import Aux from "../../hoc/_Aux";
import MainCard from "../../App/components/MainCard";
import * as firebase from "firebase";
import { getModerators } from "../../store/data";

class AddModerator extends Component {
  state = {
    name: "",
    email: "",
    moderatorsEmail: [],
    moderatorsName: [],
  };

  constructor(props) {
    super(props);

    this.showModerator();
  }

  submitHandle = () => {
    if (this.state.email === "" || this.state.name === "") {
      alert("Please all fields!");
      return;
    }
    this.writeNewPost(this.state.email, this.state.name);
    alert("Moderator Added!");
    this.setState({ name: "", email: "" });
  };

  writeNewPost(email, name) {
    var postData = {
      name: name,
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
      this.setState({
        moderatorsEmail: Object.keys(result),
        moderatorsName: Object.values(result),
      });
    });
  };

  showEmail = () => {
    return this.state.moderatorsEmail.map((email) => <tr>{email}</tr>);
  };

  showName = () => {
    return this.state.moderatorsName.map((name) => <tr>{name}</tr>);
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
                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Name"
                          onChange={(text) => {
                            this.setState({ name: text.target.value });
                          }}
                          value={this.state.name}
                        />
                      </Form.Group>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Email"
                          onChange={(text) => {
                            this.setState({ email: text.target.value });
                          }}
                          value={this.state.email}
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
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  <td>{this.showName()}</td>
                  <td>{this.showEmail()}</td>
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
