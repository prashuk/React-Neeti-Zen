import React from "react";
import { Row, Col, Card, Table } from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";

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
                                            <i className="feather icon-arrow-up text-c-green f-30 m-r-5" />{" "}
                                            18
                                        </h3>
                                    </div>

                                    <div className="col-3 text-right">
                                        <p className="m-b-0">50%</p>
                                    </div>
                                </div>
                                <div
                                    className="progress m-t-30"
                                    style={{ height: "7px" }}
                                >
                                    <div
                                        className="progress-bar progress-c-theme"
                                        role="progressbar"
                                        style={{ width: "50%" }}
                                        aria-valuenow="50"
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
                                            <i className="feather icon-arrow-down text-c-red f-30 m-r-5" />{" "}
                                            26
                                        </h3>
                                    </div>

                                    <div className="col-3 text-right">
                                        <p className="m-b-0">36%</p>
                                    </div>
                                </div>
                                <div
                                    className="progress m-t-30"
                                    style={{ height: "7px" }}
                                >
                                    <div
                                        className="progress-bar progress-c-theme2"
                                        role="progressbar"
                                        style={{ width: "35%" }}
                                        aria-valuenow="35"
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
                                            <i className="feather icon-arrow-up text-c-green f-30 m-r-5" />{" "}
                                            9
                                        </h3>
                                    </div>

                                    <div className="col-3 text-right">
                                        <p className="m-b-0">70%</p>
                                    </div>
                                </div>
                                <div
                                    className="progress m-t-30"
                                    style={{ height: "7px" }}
                                >
                                    <div
                                        className="progress-bar progress-c-theme"
                                        role="progressbar"
                                        style={{ width: "70%" }}
                                        aria-valuenow="70"
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
                                                    Isabella Christensen
                                                </h6>
                                                <p className="m-0">
                                                    Lorem Ipsum is simply dummy
                                                    text of…
                                                </p>
                                            </td>
                                            <td>
                                                <h6 className="text-muted">
                                                    <i className="fa fa-circle text-c-green f-10 m-r-15" />
                                                    11 MAY 12:56
                                                </h6>
                                            </td>
                                            <td>
                                                <a
                                                    href={DEMO.BLANK_LINK}
                                                    className="label theme-bg2 text-white f-12"
                                                >
                                                    Reject
                                                </a>
                                                <a
                                                    href={DEMO.BLANK_LINK}
                                                    className="label theme-bg text-white f-12"
                                                >
                                                    Approve
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="unread">
                                            <td>
                                                <img
                                                    className="rounded-circle"
                                                    style={{ width: "40px" }}
                                                    src={avatar2}
                                                    alt="activity-user"
                                                />
                                            </td>
                                            <td>
                                                <h6 className="mb-1">
                                                    Mathilde Andersen
                                                </h6>
                                                <p className="m-0">
                                                    Lorem Ipsum is simply dummy
                                                    text of…
                                                </p>
                                            </td>
                                            <td>
                                                <h6 className="text-muted">
                                                    <i className="fa fa-circle text-c-red f-10 m-r-15" />
                                                    11 MAY 10:35
                                                </h6>
                                            </td>
                                            <td>
                                                <a
                                                    href={DEMO.BLANK_LINK}
                                                    className="label theme-bg2 text-white f-12"
                                                >
                                                    Reject
                                                </a>
                                                <a
                                                    href={DEMO.BLANK_LINK}
                                                    className="label theme-bg text-white f-12"
                                                >
                                                    Approve
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="unread">
                                            <td>
                                                <img
                                                    className="rounded-circle"
                                                    style={{ width: "40px" }}
                                                    src={avatar3}
                                                    alt="activity-user"
                                                />
                                            </td>
                                            <td>
                                                <h6 className="mb-1">
                                                    Karla Sorensen
                                                </h6>
                                                <p className="m-0">
                                                    Lorem Ipsum is simply dummy
                                                    text of…
                                                </p>
                                            </td>
                                            <td>
                                                <h6 className="text-muted">
                                                    <i className="fa fa-circle text-c-green f-10 m-r-15" />
                                                    9 MAY 17:38
                                                </h6>
                                            </td>
                                            <td>
                                                <a
                                                    href={DEMO.BLANK_LINK}
                                                    className="label theme-bg2 text-white f-12"
                                                >
                                                    Reject
                                                </a>
                                                <a
                                                    href={DEMO.BLANK_LINK}
                                                    className="label theme-bg text-white f-12"
                                                >
                                                    Approve
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
                                                    Ida Jorgensen
                                                </h6>
                                                <p className="m-0">
                                                    Lorem Ipsum is simply dummy
                                                    text of…
                                                </p>
                                            </td>
                                            <td>
                                                <h6 className="text-muted f-w-300">
                                                    <i className="fa fa-circle text-c-red f-10 m-r-15" />
                                                    19 MAY 12:56
                                                </h6>
                                            </td>
                                            <td>
                                                <a
                                                    href={DEMO.BLANK_LINK}
                                                    className="label theme-bg2 text-white f-12"
                                                >
                                                    Reject
                                                </a>
                                                <a
                                                    href={DEMO.BLANK_LINK}
                                                    className="label theme-bg text-white f-12"
                                                >
                                                    Approve
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="unread">
                                            <td>
                                                <img
                                                    className="rounded-circle"
                                                    style={{ width: "40px" }}
                                                    src={avatar2}
                                                    alt="activity-user"
                                                />
                                            </td>
                                            <td>
                                                <h6 className="mb-1">
                                                    Albert Andersen
                                                </h6>
                                                <p className="m-0">
                                                    Lorem Ipsum is simply dummy
                                                    text of…
                                                </p>
                                            </td>
                                            <td>
                                                <h6 className="text-muted">
                                                    <i className="fa fa-circle text-c-green f-10 m-r-15" />
                                                    21 July 12:56
                                                </h6>
                                            </td>
                                            <td>
                                                <a
                                                    href={DEMO.BLANK_LINK}
                                                    className="label theme-bg2 text-white f-12"
                                                >
                                                    Reject
                                                </a>
                                                <a
                                                    href={DEMO.BLANK_LINK}
                                                    className="label theme-bg text-white f-12"
                                                >
                                                    Approve
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
                                <Card.Title as="h5">Pie Basic Chart</Card.Title>
                            </Card.Header>
                            <Card.Body className="text-center">
                                <PieBasicChart/>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Dashboard;
