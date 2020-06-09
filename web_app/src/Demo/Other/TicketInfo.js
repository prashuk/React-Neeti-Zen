import React, { Component } from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import Aux from "../../hoc/_Aux";
import MainCard from "../../App/components/MainCard";
import * as firebase from "firebase";
import ApiKeys from "../../store/ApiKeys";
import { getModerators } from "../../store/data";
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
import { Link } from "react-router-dom";

class ComponentToPrint extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moderators: [],
      ticket: "Ticket Number: " + global.ticketNumber,
      moveStatus: "",
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(ApiKeys.FirebaseConfig);
    }

    // this.showModerator();
    this.showComplainData();
  }

  showModerator = () => {
    var updateData = getModerators();
    updateData.then((result) => {
      this.setState({ moderators: Object.values(result) });
    });
  };

  showComplainData = () => {
    
  }

  handleMoveStatus = (event) => {
    this.setState({ moveStatus: event.target.value });
  };

  handleSubmit = (event) => {
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
                      {Object.entries(global.ticketDetails).map(
                        (val, index) => (
                          <TableRow key={index}>
                            <TableCell component="th" scope="row">
                              {val[0]}
                            </TableCell>
                            <TableCell align="left">{val[1]}</TableCell>
                          </TableRow>
                        )
                      )}
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
                  <Link to="/">
                    <Button variant="primary" onClick={this.handleSubmit}>
                      Submit
                    </Button>
                  </Link>
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
          trigger={() => <a href="!#">Download</a>}
        />
        <ComponentToPrint ref={(el) => (this.componentRef = el)} />
      </div>
    );
  }
}

export default TicketInfo;
