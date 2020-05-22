import React, { Component } from "react";
import { Row, Col, Form, Button, Card, Table } from "react-bootstrap";
import Aux from "../../hoc/_Aux";
import MainCard from "../../App/components/MainCard";
import ApiKeys from "../../store/ApiKeys";
import * as firebase from "firebase";
import { getJanTv } from "../../store/data";

class JanTv extends Component {
  state = {
    type: "Parliament",
    link: "",
    note: "",
    jantvData: [],
  };

  constructor(props) {
    super(props);

    if (!firebase.apps.length) {
      firebase.initializeApp(ApiKeys.FirebaseConfig);
    }

    this.showJantv();
  }

  submitHandle = () => {
    if (
      this.state.type === "" ||
      this.state.link === "" ||
      this.state.note === ""
    ) {
      alert("Please all fields!");
      return;
    }
    this.writeNewPost(this.state.type, this.state.link, this.state.note);
    alert("JAN TV Data Uploaded!");
    this.setState({ type: "", link: "", note: "" });
  };

  writeNewPost(type, link, note) {
    var postData = {
      type: type,
      link: link,
      note: note,
    };

    var newPostKey = firebase.database().ref().child("jantv/").push().key;
    var updates = {};
    updates["jantv/" + newPostKey] = postData;

    return firebase.database().ref().update(updates);
  }

  showJantv = () => {
    var updatedData = getJanTv();
    updatedData.then((result) => {
      this.setState({
        jantvData: Object.values(result),
      });
    });
  };

  render() {
    return (
      <Aux>
        <Row>
          <Col>
            <MainCard title="Jan TV Link">
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <Form>
                      <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Upload Type</Form.Label>
                        <Form.Control
                          as="select"
                          onChange={(text) => {
                            this.setState({ type: text.target.value });
                          }}
                          value={this.state.type}
                        >
                          <option>Parliament</option>
                          <option>Other</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Link</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Link"
                          onChange={(text) => {
                            this.setState({ link: text.target.value });
                          }}
                          value={this.state.link}
                        />
                      </Form.Group>
                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Notes</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Word Limit: 100 words"
                          onChange={(text) => {
                            this.setState({ note: text.target.value });
                          }}
                          as="textarea"
                          rows="5"
                          value={this.state.note}
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
            <MainCard title="Past Uploads">
              <Table responsive>
                {this.state.jantvData.map((res) => {
                  return (
                    <tbody key={res.link}>
                      <br />
                      <tr>
                        <tr>Type: {res.type}</tr>
                        <tr>
                          Link:{" "}
                          <a href={res.link} target="_blank">
                            {res.link}
                          </a>
                        </tr>
                        <tr>Note: {res.note}</tr>
                      </tr>
                    </tbody>
                  );
                })}
              </Table>
            </MainCard>
          </Col>
        </Row>
      </Aux>
    );
  }
}

export default JanTv;
