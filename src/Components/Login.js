import React from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { toast, ToastContainer } from "react-toastify"

export default class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: "",
      msg: "",
    }
    this.changeEmail = this.changeEmail.bind(this)
    this.changePassword = this.changePassword.bind(this)
  }

  changeEmail = (e) => {
    this.setState({
      email: e.target.value,
    })
  }

  changePassword = (e) => {
    this.setState({
      password: e.target.value,
    })
  }

  eventHandler = async (e) => {
    e.preventDefault()
    const data = {
      email: this.state.email,
      password: this.state.password,
    }
    try {
      const res = await axios.post(
        "https://ebook-backend4.herokuapp.com/auth/login",
        data
      )
      if (res.data.status === 200) {
        this.setState({
          msg: res.data.message,
        })
        localStorage.setItem("token", res.data.data.token)
        localStorage.setItem("user", JSON.stringify(res.data.data.user))
        toast.success("Login Success")
      } else {
        this.setState({
          msg: res.data.message,
        })
        toast.error(res.data.message)
      }
    } catch (e) {
      this.setState({
        msg: e.response.data.message,
      })
      toast.error(e.response.data.message)
    }
  }

  render() {
    return (
      <div>
        <br />
        <ToastContainer></ToastContainer>
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="card">
                <div className="card-header">
                  <h4>Login</h4>
                </div>
                <div className="card-body">
                  <form onSubmit={this.eventHandler}>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        onChange={this.changeEmail}
                        value={this.state.email}
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
                        onChange={this.changePassword}
                        value={this.state.password}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                    <p>
                      Don't have account yet ? register at{" "}
                      <Link to="/register">Here</Link>
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
