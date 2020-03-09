import React, { Component } from 'react'
import { connect } from 'react-redux'
import { justLogin } from './actions/authActions'

class Login extends Component {
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
    this.props.justLogin(this.state)
      .then(this.props.closePopup)
      .catch(() => null)
  }

  render () {
    return (
      <div className='popup'>
        <button className='button-round button-x' onClick={this.props.closePopup}>x</button>
        <div className='popup_inner'>
          <form onSubmit={this.handleSubmit}>
            <h3>Login</h3>

            <label name="username-label">Username</label>
            <input
              name='username'
              placeholder='Username'
              value={this.state.username}
              onChange={this.handleChange}
            />

            <label name="password-label">Password</label>
            <input
              type='password'
              name='password'
              placeholder='Password'
              value={this.state.password}
              onChange={this.handleChange}
            />

            <button name = 'login' type='submit'>Login</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    error: state.errorState
  }
}

const mapDispatchToProps = dispatch => ({
  justLogin: userInfo => dispatch(justLogin(userInfo))
})

export default connect(null, mapDispatchToProps)(Login)
