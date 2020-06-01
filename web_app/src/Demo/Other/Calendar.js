import React, { Component } from "react";
import { Row, Col, Card, Form, Button, Table } from "react-bootstrap";
import Aux from "../../hoc/_Aux";
import MainCard from "../../App/components/MainCard";
import ApiKeys from "../../store/ApiKeys";
import * as firebase from "firebase";
import { getCalendarDates } from "../../store/data";

class Calendar extends Component {
  state = {
    date: "",
    dates: [],
  };

  constructor(props) {
    super(props);

    if (!firebase.apps.length) {
      firebase.initializeApp(ApiKeys.FirebaseConfig);
    }

    this.showDates();
  }

  editDate = (date) => {
    this.setState({ date: date });
  };

  submitHandle = () => {
    if (this.state.date === "") {
      alert("Please all fields!");
      return;
    }
    this.writeNewPost(this.state.date);
    alert("Date Entered!");
    this.setState({ date: "" });
  };

  writeNewPost(date) {
    var postData = {
      date: date,
      status: "available",
    };

    var newPostKey = firebase.database().ref().child("calendarDates/").push()
      .key;
    var updates = {};
    updates["calendarDates/" + newPostKey] = postData;

    return firebase.database().ref().update(updates);
  }

  showDates = () => {
    var updatedData = getCalendarDates();
    updatedData.then((result) => {
      this.setState({
        dates: Object.values(result),
      });
    });
  };

  render() {
    return (
      <Aux>
        <Row>
          <Col>
            <MainCard title="Available Date">
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <Form>
                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Enter Available Date</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter date in DD-MM-YYYY format"
                          onChange={(text) => {
                            this.editDate(text.target.value);
                          }}
                          value={this.state.date}
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
            <MainCard title="Dates Status">
              <Table responsive>
                {this.state.dates.map((res) => {
                  return (
                    <tbody key={res.date}>
                      <br />
                      <tr>
                        <tr>Dates: {res.date}</tr>
                        <tr>
                          Status:{" "}
                          {res.status.charAt(0).toUpperCase() +
                            res.status.slice(1)}
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

export default Calendar;
