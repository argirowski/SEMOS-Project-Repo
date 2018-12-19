import React from "react";

const Password = props => {
  return (
    <p>
      <input
        onChange={props.handleChange}
        value={props.password}
        name="password"
        type="password"
        placeholder="Password"
      />
    </p>
  );
};

const Email = props => {
  return (
    <p>
      <input
        onChange={props.handleChange}
        value={props.email}
        name="email"
        type="text"
        placeholder="Email"
      />
    </p>
  );
};

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.changeInputType = this.changeInputType.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.clearValidationErr = this.clearValidationErr.bind(this);
  }
  showValidationErr(element, msg) {
    this.setState(prevState => ({
      errors: [...prevState.errors, { element, msg }]
    }));
  }
  // COLLAPSE ERROR WARNINGS // assistance needed
  clearValidationErr(element) {
    this.setState(prevState => {
      let newArray = [];
      for (let err of prevState.errors) {
        if (element !== err.element) {
          newArray.push(err);
        }
      }
      return { errors: newArray };
    });
  }

  onEmailChange(e) {
    this.setState({ email: e.target.value });
    this.clearValidationErr("email");
  }

  onPasswordChange(e) {
    this.setState({ password: e.target.value });
    this.clearValidationErr("password");
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  changeInputType() {
    this.setState({
      type: this.state.type === "password" ? "text" : "password"
    });
  }

  submitForm(e) {
    e.preventDefault();
    if (
      this.state.email === "" ||
      this.state.email.indexOf("@") === -1 ||
      this.state.email.indexOf(".com") === -1
    ) {
      this.showValidationErr("email", "Invalid e-mail.");
    }
    if (
      this.state.password === "" ||
      this.state.password.length < 8 ||
      this.state.password > 32
    ) {
      this.showValidationErr("password", "Invalid password.");
    }
    let data = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(data);
  }

  render() {
    let emailErr = null,
      passwordErr = null;
    for (let err of this.state.errors) {
      if (err.element === "email") {
        emailErr = err.msg;
      }
      if (err.element === "password") {
        passwordErr = err.msg;
      }
    }

    return (
      <div className="log-in-box">
        <div className="top-input-box">
          <img
            src={require("../assets/images/log-in.png")}
            alt="login"
            className="log-in-logo"
          />
          <h2>Log In</h2>

          <form onSubmit={this.submitForm}>
            <div className="input-box">
              <Email
                handleChange={this.handleChange}
                value={this.state.email}
                onChange={this.onEmailChange}
              />
              <small className="error-warning">
                {emailErr ? emailErr : ""}
              </small>
            </div>

            <div className="input-box">
              <Password
                onChange={this.onPasswordChange}
                value={this.state.password}
                handleChange={this.handleChange}
              />
              <small className="error-warning">
                {passwordErr ? passwordErr : ""}
              </small>
            </div>
            <button onClick={this.submitForm} className="button" type="submit">
              Log in
            </button>
          </form>
        </div>
      </div>
    );
  }
}
