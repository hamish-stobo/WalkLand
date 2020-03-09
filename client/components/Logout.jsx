import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logoutUser } from './actions/authActions'

class Logout extends Component {
  handleClick = event => {
    event.preventDefault()
    // Remove the token from localStorage
    localStorage.removeItem('token')
    // Remove the user object from the Redux store
    this.props.logoutUser()
  }

  render () {
    return (
      <>
        <button id = "logOut4" name = "logOut" className="nav-bar-buttons button-logout" onClick={this.handleClick}>Log Out</button>
      </>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
})

export default connect(null, mapDispatchToProps)(Logout)
