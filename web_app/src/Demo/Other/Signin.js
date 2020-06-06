import React from "react";
import * as firebase from "firebase";
import ApiKeys from "../../store/ApiKeys";
import "./../../assets/scss/style.scss";
import Aux from "../../hoc/_Aux";

class Signin extends React.Component {
  state = {
    user: "",
    password: "",
    rememberMe: "false",
  };

  constructor(props) {
    super(props);

    this.goBack = this.goBack.bind(this);

    if (!firebase.apps.length) {
      firebase.initializeApp(ApiKeys.FirebaseConfig);
    }
  }

  componentWillMount() {
    const user = localStorage.getItem("user");
    const rememberMe = localStorage.getItem("rememberMe");
    this.setState({ user: user, rememberMe: rememberMe });
  }

  goBack = () => {
    this.props.history.goBack();
  };

  handleChange = (event) => {
    this.setState({ user: event.target.value });
  };

  doLogin = async () => {
    if (this.state.user !== "neetizenhelp@gmail.com" || this.state.password !== "password") {
      alert("Please enter correct email id/password!");
      return;
    }

    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(this.state.user, this.state.password)
        .then((user) => {
          global.User = user;
          localStorage.setItem("user", this.state.user);
          localStorage.setItem("rememberMe", "true");
          this.goBack();
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
    if (this.state.rememberMe === "true") {
      this.goBack();
    } else {
      return (
        <Aux>
          <div className="auth-wrapper">
            <div className="auth-content">
              <div className="auth-bg">
                <span className="r" />
                <span className="r s" />
                <span className="r s" />
                <span className="r" />
              </div>
              <div className="card">
                <div className="card-body text-center">
                  <div className="mb-4">
                    <i className="feather icon-unlock auth-icon" />
                  </div>
                  <h3 className="mb-4">Login</h3>
                  <div className="input-group mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="user"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="input-group mb-4">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      onChange={(text) => {
                        this.setState({password: text.target.value})
                      }}
                    />
                  </div>
                  <button
                    className="btn btn-primary shadow-2 mb-4"
                    onClick={this.doLogin}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Aux>
      );
    }
  }
}

export default Signin;
