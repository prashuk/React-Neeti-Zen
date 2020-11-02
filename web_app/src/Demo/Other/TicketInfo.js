import React, { Component } from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import Aux from "../../hoc/_Aux";
import MainCard from "../../App/components/MainCard";
import { getData, getModerators } from "../../store/data";
import ReactToPrint from "react-to-print";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import * as firebase from "firebase";

function setComplainData(key, value) {
  return { key, value };
}

class ComponentToPrint extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      date: "",
      status: "",
      type: "",
      assigned: "",
      newData: [],
      imageData: [],
      moderators: [],
      ticket: "Ticket Number: " + global.ticketNumber,
      moveStatus: "",
    };

    this.showData();
    // this.showModerator();
  }

  showData = () => {
    var updateData = getData();
    updateData.then((result) => {
      this.setState({ allData: result });
      result.forEach((value, key, map) => {
        if (key === global.ticketNumber) {
          Object.keys(value).forEach((key) => {
            if (key === "name") {
              this.setState({ name: value[key] });
            } else if (key === "date") {
              this.setState({ date: value[key] });
            } else if (key === "status") {
              var status =
                value[key].charAt(0).toUpperCase() + value[key].slice(1);
              this.setState({ status: status });
            } else if (key === "type") {
              var type =
                value[key].charAt(0).toUpperCase() + value[key].slice(1);
              this.setState({ type: type });
            } else if (key === "assigned") {
              var assigned =
                value[key].charAt(0).toUpperCase() + value[key].slice(1);
              this.setState({ assigned: assigned });
            } else if (
              key === "addressProof" ||
              key === "aadharProof" ||
              key === "estimateProof" ||
              key === "passportProof" ||
              key === "visaProof" ||
              key === "invitationCard"
            ) {
              var keyData = key.charAt(0).toUpperCase() + key.slice(1);
              keyData = keyData.replace(/([A-Z])/g, " $1").trim();

              this.setState({
                imageData: [
                  ...this.state.imageData,
                  setComplainData(keyData, value[key]),
                ],
              });
            } else {
              var keyDataNew = key.charAt(0).toUpperCase() + key.slice(1);
              keyDataNew = keyDataNew.replace(/([A-Z])/g, " $1").trim();

              var valueData =
                value[key].charAt(0).toUpperCase() + value[key].slice(1);

              this.setState({
                newData: [
                  ...this.state.newData,
                  setComplainData(keyDataNew, valueData),
                ],
              });
            }
          });
        }
      });
    });
  };

  showModerator = () => {
    var updateData = getModerators();
    updateData.then((result) => {
      this.setState({ moderators: Object.values(result) });
    });
  };

  handleMoveStatus = (event) => {
    this.setState({ moveStatus: event.target.value });
  };

  handleSubmit = (event) => {
    console.log(firebase.database().ref().child("users/"));
  };

  render() {
    return (
      <Aux>
        <Row>
          <Col>
            <MainCard title={this.state.ticket}>
              <Card.Body>
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableBody>
                      <TableRow>
                        <TableCell
                          component="th"
                          scope="row"
                          style={{ width: 300 }}
                        >
                          Submitted By
                        </TableCell>
                        <TableCell align="left">{this.state.name}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          component="th"
                          scope="row"
                          style={{ width: 300 }}
                        >
                          Submitted On
                        </TableCell>
                        <TableCell align="left">{this.state.date}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          component="th"
                          scope="row"
                          style={{ width: 300 }}
                        >
                          Type of Complain
                        </TableCell>
                        <TableCell align="left">{this.state.type}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          component="th"
                          scope="row"
                          style={{ width: 300 }}
                        >
                          Status
                        </TableCell>
                        <TableCell align="left">{this.state.status}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          component="th"
                          scope="row"
                          style={{ width: 300 }}
                        >
                          Assigned To
                        </TableCell>
                        <TableCell align="left">
                          {this.state.assigned}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Card.Body>
            </MainCard>
            <MainCard title="Ticket Details">
              <Card.Body>
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableBody>
                      {this.state.newData.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell
                            component="th"
                            scope="row"
                            style={{ width: 300 }}
                          >
                            {row.key}
                          </TableCell>
                          <TableCell align="left">{row.value}</TableCell>
                        </TableRow>
                      ))}
                      {this.state.imageData.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell
                            component="th"
                            scope="row"
                            size="small"
                            style={{ width: 300 }}
                          >
                            {row.key}
                          </TableCell>
                          <TableCell align="left">
                            <a
                              href={row.value}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Click Here
                            </a>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <br />
                <Row>
                  <FormControl style={{ width: 180 }}>
                    <InputLabel
                      shrink
                      id="demo-simple-select-placeholder-label-label"
                    >
                      Move Status To
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-placeholder-label-label"
                      id="demo-simple-select-placeholder-label"
                      value={this.state.moveStatus}
                      onChange={this.handleMoveStatus}
                      displayEmpty
                    >
                      <MenuItem value="inProgress">In Progress</MenuItem>
                      <MenuItem value="closed">Closed</MenuItem>
                    </Select>
                  </FormControl>
                </Row>
                <br />
                <Row>
                  {/* <Link to="/"> */}
                  <Button variant="primary" onClick={this.handleSubmit}>
                    Submit
                  </Button>
                  {/* </Link> */}
                </Row>
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
          trigger={() => <a href="#!">Download</a>}
        />
        <ComponentToPrint ref={(el) => (this.componentRef = el)} />
      </div>
    );
  }
}

export default TicketInfo;
