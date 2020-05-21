import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import Aux from "../../hoc/_Aux";
import PieBasicChart from "../Charts/Nvd3Chart/PieBasicChart";
import * as firebase from "firebase";
import ApiKeys from "../../store/ApiKeys";
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";
import { getData, getModerators } from "../../store/data";

function createData(ticket, type, date, status, assigned) {
  return { ticket, type, date, status, assigned };
}

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "ticket",
    numeric: false,
    disablePadding: true,
    label: "Ticket Number",
  },
  { id: "type", numeric: true, disablePadding: false, label: "Type" },
  { id: "date", numeric: true, disablePadding: false, label: "Date" },
  { id: "status", numeric: true, disablePadding: false, label: "Status" },
  {
    id: "assigned",
    numeric: true,
    disablePadding: false,
    label: "Assigned To",
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox"></TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? <span></span> : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

class Dashboard extends React.Component {
  state = {
    order: "asc",
    orderBy: "type",
    selected: [],
    page: 0,
    dense: false,
    rowsPerPage: 5,
    rows: [],
    moderators: [],
  };

  constructor(props) {
    super(props);

    if (!firebase.apps.length) {
      firebase.initializeApp(ApiKeys.FirebaseConfig);
    }

    firebase
      .auth()
      .signInWithEmailAndPassword("test@gmail.com", "1234567890")
      .then((user) => {
        global.User = user;
      })
      .catch((error) => {
        alert(error.message);
      });

    this.showData();
    this.showModerator();
  }

  showData = () => {
    var updateData = getData();
    updateData.then((result) => {
      result.forEach((value, key) => {
        var type =
          value["type"].charAt(0).toUpperCase() + value["type"].slice(1);
        var date =
          value["date"].charAt(0).toUpperCase() + value["date"].slice(1);
        var status =
          value["status"].charAt(0).toUpperCase() + value["status"].slice(1);
        this.setState({
          rows: [...this.state.rows, createData(key, type, date, status, "")],
        });
      });
    });
  };

  showModerator = () => {
    var updateData = getModerators();
    updateData.then((result) => {
      this.setState({ moderators: result });
    });
  };

  handleRequestSort = (event, property) => {
    const isAsc = this.state.orderBy === property && this.state.order === "asc";
    this.setState({ order: isAsc ? "desc" : "asc", orderBy: property });
  };

  handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = this.rows.map((n) => n.ticket);
      this.setState({ selected: newSelecteds });
      return;
    }
    this.setState({ selected: [] });
  };

  handleClick = (event, ticket) => {
    console.log(ticket);
  };

  handleChangePage = (event, newPage) => {
    this.setState({ page: newPage });
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({
      rowsPerPage: parseInt(event.target.value, 10),
      page: 0,
    });
  };

  isSelected = (ticket) => this.state.selected.indexOf(ticket) !== -1;

  render() {
    return (
      <Aux>
        <Row>
          <Col md={6} xl={3}>
            <Card>
              <Card.Body>
                <h6 className="mb-4">All Tickets</h6>
                <div className="row d-flex align-items-center">
                  <div className="col-9">
                    <h3 className="f-w-300 d-flex align-items-center m-b-0">
                      18 / 55
                    </h3>
                  </div>

                  <div className="col-3 text-right">
                    <p className="m-b-0">32%</p>
                  </div>
                </div>
                <div className="progress m-t-30" style={{ height: "7px" }}>
                  <div
                    className="progress-bar progress-c-theme"
                    role="progressbar"
                    style={{ width: "32%" }}
                    aria-valuenow="32"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={3}>
            <Card>
              <Card.Body>
                <h6 className="mb-4">Open Tickets</h6>
                <div className="row d-flex align-items-center">
                  <div className="col-9">
                    <h3 className="f-w-300 d-flex align-items-center m-b-0">
                      18 / 55
                    </h3>
                  </div>

                  <div className="col-3 text-right">
                    <p className="m-b-0">32%</p>
                  </div>
                </div>
                <div className="progress m-t-30" style={{ height: "7px" }}>
                  <div
                    className="progress-bar progress-c-theme"
                    role="progressbar"
                    style={{ width: "32%" }}
                    aria-valuenow="32"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={3}>
            <Card>
              <Card.Body>
                <h6 className="mb-4">In Progress Tickets</h6>
                <div className="row d-flex align-items-center">
                  <div className="col-9">
                    <h3 className="f-w-300 d-flex align-items-center m-b-0">
                      26 / 55
                    </h3>
                  </div>
                  <div className="col-3 text-right">
                    <p className="m-b-0">48%</p>
                  </div>
                </div>
                <div className="progress m-t-30" style={{ height: "7px" }}>
                  <div
                    className="progress-bar progress-c-theme"
                    role="progressbar"
                    style={{ width: "48%" }}
                    aria-valuenow="48"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={3}>
            <Card>
              <Card.Body>
                <h6 className="mb-4">Closed Tickets</h6>
                <div className="row d-flex align-items-center">
                  <div className="col-9">
                    <h3 className="f-w-300 d-flex align-items-center m-b-0">
                      11 / 55
                    </h3>
                  </div>
                  <div className="col-3 text-right">
                    <p className="m-b-0">20%</p>
                  </div>
                </div>
                <div className="progress m-t-30" style={{ height: "7px" }}>
                  <div
                    className="progress-bar progress-c-theme"
                    role="progressbar"
                    style={{ width: "20%" }}
                    aria-valuenow="20"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={12} xl={8}>
            <Card className="Recent-Users">
              <Card.Header>
                <Card.Title as="h5">Recent Tickets</Card.Title>
              </Card.Header>
              <Card.Body className="px-0 py-2">
                <div>
                  <Paper>
                    <TableContainer>
                      <Table
                        aria-labelledby="tableTitle"
                        size={this.state.dense ? "small" : "medium"}
                        aria-label="enhanced table"
                      >
                        <EnhancedTableHead
                          numSelected={this.state.selected.length}
                          order={this.state.order}
                          orderBy={this.state.orderBy}
                          onSelectAllClick={this.handleSelectAllClick}
                          onRequestSort={this.handleRequestSort}
                          rowCount={this.state.rows.length}
                        />
                        <TableBody>
                          {stableSort(
                            this.state.rows,
                            getComparator(this.state.order, this.state.orderBy)
                          )
                            .slice(
                              this.state.page * this.state.rowsPerPage,
                              this.state.page * this.state.rowsPerPage +
                                this.state.rowsPerPage
                            )
                            .map((row, index) => {
                              const isItemSelected = this.isSelected(
                                row.ticket
                              );
                              const labelId = `enhanced-table-checkbox-${index}`;

                              return (
                                <TableRow
                                  hover
                                  onClick={(event) =>
                                    this.handleClick(event, row.ticket)
                                  }
                                  role="checkbox"
                                  aria-checked={isItemSelected}
                                  tabIndex={-1}
                                  key={row.ticket}
                                  selected={isItemSelected}
                                >
                                  <TableCell padding="checkbox"></TableCell>
                                  <TableCell
                                    component="th"
                                    id={labelId}
                                    scope="row"
                                    padding="none"
                                  >
                                    {row.ticket}
                                  </TableCell>
                                  <TableCell align="right">
                                    {row.type}
                                  </TableCell>
                                  <TableCell align="right">
                                    {row.date}
                                  </TableCell>
                                  <TableCell align="right">
                                    {row.status}
                                  </TableCell>
                                  <TableCell align="right">
                                    <select>
                                      {this.state.moderators.map(
                                        (moderator) => (
                                          <option
                                            key={moderator}
                                            value={moderator}
                                          >
                                            {moderator}
                                          </option>
                                        )
                                      )}
                                    </select>
                                  </TableCell>
                                </TableRow>
                              );
                            })}
                        </TableBody>
                      </Table>
                    </TableContainer>
                    <TablePagination
                      rowsPerPageOptions={[5, 10, 25]}
                      component="div"
                      count={this.state.rows.length}
                      rowsPerPage={this.state.rowsPerPage}
                      page={this.state.page}
                      onChangePage={this.handleChangePage}
                      onChangeRowsPerPage={this.handleChangeRowsPerPage}
                    />
                  </Paper>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={12} xl={4}>
            <Card>
              <Card.Header>
                <Card.Title as="h5">Tickets Category Chart</Card.Title>
              </Card.Header>
              <Card.Body className="text-center">
                <PieBasicChart />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Aux>
    );
  }
}

export default Dashboard;
