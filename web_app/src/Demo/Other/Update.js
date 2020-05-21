import React, { Component } from "react";
import { Row, Col, Form, Button, Card, Table } from "react-bootstrap";
import Aux from "../../hoc/_Aux";
import MainCard from "../../App/components/MainCard";
import ApiKeys from "../../store/ApiKeys";
import * as firebase from "firebase";
import { getModerators } from "../../store/data";

class Update extends Component {
  state = {
    name: "",
    email: "",
    link: "",
    note: "",
    moderatorsEmail: [],
    moderatorsName: [],
  };

  constructor(props) {
    super(props);

    if (!firebase.apps.length) {
      firebase.initializeApp(ApiKeys.FirebaseConfig);
    }

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

  showModerator = () => {};

  render() {
    return (
      <Aux>
        <Row>
          <Col>
            <MainCard title="Update Link" isOption>
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <Form>
                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Notes</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Word Limit: 100 words"
                          onChange={(text) => {
                            this.setState({ note: text.target.value });
                          }}
                          as="textarea"
                          rows="3"
                          value={this.state.note}
                        />
                      </Form.Group>
                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Link</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Optional"
                          onChange={(text) => {
                            this.setState({ link: text.target.value });
                          }}
                          value={this.state.link}
                        />
                      </Form.Group>
                      <Button variant="primary" onClick={this.submitHandle}>
                        Submit
                      </Button>
                    </Form>
                  </Col>
                </Row>
              </Card.Body>
            </MainCard>
            <MainCard title="Past Updates">
              <Table responsive>
                <tbody>
                  <tr>
                    <tr>Notes: </tr>
                    <tr>Link: </tr>
                  </tr>
                </tbody>
                <tbody>
                  <br />
                  <tr>
                    <tr>Notes: </tr>
                    <tr>Link: </tr>
                  </tr>
                </tbody>
              </Table>
            </MainCard>
          </Col>
        </Row>
      </Aux>
    );
  }
}

export default Update;
