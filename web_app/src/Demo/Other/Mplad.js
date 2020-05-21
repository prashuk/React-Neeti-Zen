import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  Form,
  Button,
  InputGroup,
  FormControl,
  Table,
} from "react-bootstrap";
import Aux from "../../hoc/_Aux";
import MainCard from "../../App/components/MainCard";
import ApiKeys from "../../store/ApiKeys";
import * as firebase from "firebase";

class Mplad extends Component {
  state = {
    name: "",
    email: "",
    link: "",
    note: "",
    moderatorsEmail: [],
    moderatorsName: [],
    selectedFile: null,
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

  onFileUpload = () => {
    const formData = new FormData();
    formData.append("myFile", this.state.selectedFile);
    console.log(this.state.selectedFile);
  };

  render() {
    return (
      <Aux>
        <Row>
          <Col>
            <MainCard title="MPLAD Upload" isOption>
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <Form>
                      <Form.Label>Upload File</Form.Label>
                      <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                          <Button onClick={this.onFileUpload}>Browse</Button>
                        </InputGroup.Prepend>
                        <FormControl
                          aria-describedby="basic-addon1"
                          onChange={(text) => {
                            this.setState({
                              selectedFile: text.target.files[0],
                            });
                          }}
                        />
                      </InputGroup>
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
                <tbody>
                  <tr>
                    <tr>Upload: </tr>
                    <tr>Notes: </tr>
                  </tr>
                </tbody>
                <tbody>
                  <br />
                  <tr>
                    <tr>Uploads: </tr>
                    <tr>Notes: </tr>
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

export default Mplad;
