import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import Aux from "../../../../../hoc/_Aux";
import * as firebase from "firebase";

class NavRight extends Component {
  doLogout = async (e) => {
    e.preventDefault();
    try {
      await firebase
        .auth()
        .signOut()
        .then(() => {
          localStorage.removeItem("user");
          localStorage.removeItem("rememberMe");
          window.location.reload();
        })
        .catch((error) => {
          localStorage.removeItem("user");
          localStorage.removeItem("rememberMe");
          alert(error.message);
        });
    } catch (error) {
      localStorage.removeItem("user");
      localStorage.removeItem("rememberMe");
      alert(error.message);
    }
  };

  render() {
    return (
      <Aux>
        <ul className="navbar-nav ml-auto">
          <li>
            <Dropdown alignRight={!this.props.rtlLayout} className="drp-user">
              <Dropdown.Toggle variant={"link"} id="dropdown-basic">
                <i className="icon feather icon-settings" />
              </Dropdown.Toggle>
              <Dropdown.Menu alignRight className="profile-notification">
                <div className="pro-head">
                  <span>Neeti Zen</span>
                  <a
                    href="!#"
                    className="dud-logout"
                    title="Logout"
                    onClick={this.doLogout}
                  >
                    <i className="feather icon-log-out" />
                  </a>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
      </Aux>
    );
  }
}

export default NavRight;
