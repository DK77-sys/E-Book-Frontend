import React from "react"
import { Link } from "react-router-dom"
export default class Footer extends React.Component {
  constructor(props) {
    super(props)

    this.ref = {
      username: React.createRef(),
      email: React.createRef(),
      password: React.createRef(),
      password_confirmation: React.createRef(),
    }

    this.state = {
      username: "",
      email: "",
      password: "",
      password_confirmation: "",
      errormsg: "",
      successmsg: false,
    }
  }

  render() {
    return (
      <div>
        <br />
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="card">
                <div className="card-header">
                  <h4>Register</h4>
                </div>
                <div className="card-body">
                  <form onSubmit={this.eventHandler}>
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">
                        Username
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        ref={this.ref.username}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        ref={this.ref.email}
                      />
                      <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        ref={this.ref.password}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="password_confirmation"
                        className="form-label"
                      >
                        Password Confirmation
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password_confirmation"
                        ref={this.ref.password_confirmation}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                    <p>
                      Have account ? login at <Link to="/login">Here</Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
