import React, { Component } from "react";
import { Row, Col, Form, Button, Card, Table } from "react-bootstrap";
import Aux from "../../hoc/_Aux";
import MainCard from "../../App/components/MainCard";
import ApiKeys from "../../store/ApiKeys";
import * as firebase from "firebase";
import { getUpdate } from "../../store/data";

class Update extends Component {
  state = {
    note: "",
    link: "",
    updateData: [],
  };

  constructor(props) {
    super(props);

    if (!firebase.apps.length) {
      firebase.initializeApp(ApiKeys.FirebaseConfig);
    }

    firebase
      .auth()
      .signInWithEmailAndPassword("prashuk.ajmera@yahoo.com", "Covid2020")
      .then((user) => {
        global.User = user;
      })
      .catch((error) => {
        alert(error.message);
      });

    this.showUpdate();
  }

  submitHandle = () => {
    if (this.state.note === "") {
      alert("Please all fields!");
      return;
    }
    this.writeNewPost(this.state.note, this.state.link);
    alert("Update Data Uploaded!");
    this.setState({ note: "", link: "" });
  };

  writeNewPost(note, link) {
    var postData = {
      note: note,
      link: link,
    };

    var newPostKey = firebase.database().ref().child("update/").push().key;
    var updates = {};
    updates["update/" + newPostKey] = postData;

    return firebase.database().ref().update(updates);
  }

  showUpdate = () => {
    var updatedData = getUpdate();
    updatedData.then((result) => {
      this.setState({
        updateData: Object.values(result),
      });
    });
  };

  render() {
    return (
      <Aux>
        <Row>
          <Col>
            <MainCard title="Update Link">
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
                {this.state.updateData.map((res) => {
                  return (
                    <tbody key={res.link}>
                      <br />
                      <tr>
                        <tr>Notes: {res.note}</tr>
                        <tr>
                          Link:{" "}
                          <a href={res.link} target="_blank">
                            {res.link}
                          </a>
                        </tr>
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

export default Update;
