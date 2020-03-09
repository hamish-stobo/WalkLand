import React, { Component } from 'react'
import { connect } from 'react-redux'
import { registerUserAndLogin } from './actions/authActions'

class RegisterUser extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.registerUserAndLogin(this.state)
      .then(this.props.closePopup)
      .catch(err => null)
  }

  render () {
    return (
      <div className='popup'>
        <button className='button-round button-x' onClick={this.props.closePopup}>x</button>
        <div className='popup_inner'>
          <form onSubmit={this.handleSubmit}>
            <h3>Register!</h3>

            <label name="username-label">Username</label>
            <input className="username"
              name='username'
              placeholder='Username'
              value={this.state.username}
              onChange={this.handleChange}
            />

            <label name="password-label">Password</label>
            <input className="password"
              type='password'
              name='password'
              placeholder='Password'
              value={this.state.password}
              onChange={this.handleChange}
            />

            <button name = 'submit' type='submit'>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  registerUserAndLogin: userInfo => dispatch(registerUserAndLogin(userInfo))
})

export default connect(null, mapDispatchToProps)(RegisterUser)
