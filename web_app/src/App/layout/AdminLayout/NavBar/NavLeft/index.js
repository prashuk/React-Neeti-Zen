import React, { Component } from "react";
import { connect } from "react-redux";
import windowSize from "react-window-size";
import Aux from "../../../../../hoc/_Aux";
import * as actionTypes from "../../../../../store/actions";

class NavLeft extends Component {
  render() {
    let navItemClass = ["nav-item"];
    if (this.props.windowWidth <= 575) {
      navItemClass = [...navItemClass, "d-none"];
    }

    return (
      <Aux>
        <ul className="navbar-nav mr-auto">
          <li className={navItemClass.join(" ")}></li>
        </ul>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFullScreen: state.isFullScreen,
    rtlLayout: state.rtlLayout,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFullScreen: () => dispatch({ type: actionTypes.FULL_SCREEN }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(windowSize(NavLeft));
