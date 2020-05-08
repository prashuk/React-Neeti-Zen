import React from "react";
import { Row, Col, Card, Table } from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";
import NavSearch from "../../App/layout/AdminLayout/NavBar/NavLeft/NavSearch/index";

import avatar1 from "../../assets/images/user/avatar-1.jpg";
import avatar2 from "../../assets/images/user/avatar-2.jpg";
import avatar3 from "../../assets/images/user/avatar-3.jpg";

import PieBasicChart from "../Charts/Nvd3Chart/PieBasicChart";

class Dashboard extends React.Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col md={6} xl={4}>
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
                                <div
                                    className="progress m-t-30"
                                    style={{ height: "7px" }}
                                >
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
                    <Col md={6} xl={4}>
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
                                <div
                                    className="progress m-t-30"
                                    style={{ height: "7px" }}
                                >
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
                    <Col xl={4}>
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
                                <div
                                    className="progress m-t-30"
                                    style={{ height: "7px" }}
                                >
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
                    <Col md={6} xl={8}>
                        <Card className="Recent-Users">
                            <Card.Header>
                                <Card.Title as="h5">Recent Tickets</Card.Title>
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <NavSearch />
                                    </li>
                                </ul>
                            </Card.Header>
                            <Card.Body className="px-0 py-2">
                                <Table responsive hover>
                                    <tbody>
                                        <tr className="unread">
                                            <td>
                                                <img
                                                    className="rounded-circle"
                                                    style={{ width: "40px" }}
                                                    src={avatar1}
                                                    alt="activity-user"
                                                />
                                            </td>
                                            <td>
                                                <h6 className="mb-1">
                                                    Ticket 1
                                                </h6>
                                                <p className="m-0">
                                                    Expatriates
                                                </p>
                                            </td>
                                            <td>
                                                <h6 className="text-muted">
                                                    <i className="fa fa-circle text-c-green f-10 m-r-15" />
                                                    11 MAY 12:56
                                                </h6>
                                            </td>
                                            <td>
                                                {/* <a
                                                    href={DEMO.BLANK_LINK}
                                                    className="label theme-bg2 text-white f-12"
                                                >
                                                    Reject
                                                </a> */}
                                                <a
                                                    href={DEMO.BLANK_LINK}
                                                    className="label theme-bg text-white f-12"
                                                >
                                                    Assign To
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="unread">
                                            <td>
                                                <img
                                                    className="rounded-circle"
                                                    style={{ width: "40px" }}
                                                    src={avatar1}
                                                    alt="activity-user"
                                                />
                                            </td>
                                            <td>
                                                <h6 className="mb-1">
                                                    Ticket 1
                                                </h6>
                                                <p className="m-0">
                                                    Expatriates
                                                </p>
                                            </td>
                                            <td>
                                                <h6 className="text-muted">
                                                    <i className="fa fa-circle text-c-green f-10 m-r-15" />
                                                    11 MAY 12:56
                                                </h6>
                                            </td>
                                            <td>
                                                {/* <a
                                                    href={DEMO.BLANK_LINK}
                                                    className="label theme-bg2 text-white f-12"
                                                >
                                                    Reject
                                                </a> */}
                                                <a
                                                    href={DEMO.BLANK_LINK}
                                                    className="label theme-bg text-white f-12"
                                                >
                                                    Assign To
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="unread">
                                            <td>
                                                <img
                                                    className="rounded-circle"
                                                    style={{ width: "40px" }}
                                                    src={avatar1}
                                                    alt="activity-user"
                                                />
                                            </td>
                                            <td>
                                                <h6 className="mb-1">
                                                    Ticket 1
                                                </h6>
                                                <p className="m-0">
                                                    Expatriates
                                                </p>
                                            </td>
                                            <td>
                                                <h6 className="text-muted">
                                                    <i className="fa fa-circle text-c-red f-10 m-r-15" />
                                                    11 MAY 12:56
                                                </h6>
                                            </td>
                                            <td>
                                                {/* <a
                                                    href={DEMO.BLANK_LINK}
                                                    className="label theme-bg2 text-white f-12"
                                                >
                                                    Reject
                                                </a> */}
                                                <a
                                                    href={DEMO.BLANK_LINK}
                                                    className="label theme-bg text-white f-12"
                                                >
                                                    Assign To
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={10} xl={4}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">
                                    Tickets Category Chart
                                </Card.Title>
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
