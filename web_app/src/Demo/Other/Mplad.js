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
import { getMplad } from "../../store/data";

class Mplad extends Component {
  state = {
    fileUrl: "",
    note: "",
    selectedFile: null,
    mpladData: [],
  };

  constructor(props) {
    super(props);

    if (!firebase.apps.length) {
      firebase.initializeApp(ApiKeys.FirebaseConfig);
    }

    this.showMplad();
  }

  submitHandle = () => {
    if (this.state.selectedFile === null || this.state.note === "") {
      alert("Please all fields!");
      return;
    }

    const data = new FormData();
    data.append("file", this.state.selectedFile);

    this.uploadFile();

    alert("MPLAD Data Uploaded!");
  };

  uploadFile = async () => {
    const storageRef = await firebase.storage().ref();
    const mainFile = storageRef.child(
      "mplad-files/" + this.state.selectedFile.name
    );
    mainFile.put(this.state.selectedFile).then((snapshot) => {
      mainFile.getDownloadURL().then((url) => {
        this.setState({ fileUrl: url });
        this.writeNewPost(url, this.state.note, this.state.selectedFile.name);
      });
    });
  };

  writeNewPost = async (fileUrl, note, fileName) => {
    var postData = {
      fileUrl: fileUrl,
      fileName: fileName,
      note: note,
    };

    var newPostKey = firebase.database().ref().child("mplad/").push().key;
    var updates = {};
    updates["mplad/" + newPostKey] = postData;

    this.setState({ fileUrl: "", note: "" });

    return await firebase.database().ref().update(updates);
  };

  showMplad = () => {
    var updatedData = getMplad();
    updatedData.then((result) => {
      console.log(Object.values(result));
      this.setState({
        mpladData: Object.values(result),
      });
    });
  };

  onChangeHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    });
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
                        <FormControl
                          aria-describedby="basic-addon1"
                          type="file"
                          onChange={this.onChangeHandler}
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
                {this.state.mpladData.map((res) => {
                  return (
                    <tbody key={res.fileUrl}>
                      <br />
                      <tr>
                        <tr>
                          File:{" "}
                          <a href={res.fileUrl} target="_blank">
                            {res.fileName}
                          </a>
                        </tr>
                        <tr>Notes: {res.note}</tr>
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

export default Mplad;
