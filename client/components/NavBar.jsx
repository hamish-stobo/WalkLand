import React from 'react'
import { connect } from 'react-redux'
import activePage from './actions/activePage'
import RegisterUser from './RegisterUser'
import Logout from './Logout'
import LoginUser from './LoginUser'
import viewProfile from './actions/viewProfile'

class NavBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showRegisterPopup: false,
      showLoginPopup: false
    }
  }

  registerClickHandler = () => {
    this.setState({
      showRegisterPopup: !this.state.showRegisterPopup,
      showLoginPopup: false
    })
  }

  loginClickHandler = () => {
    this.setState({
      showLoginPopup: !this.state.showLoginPopup,
      showRegisterPopup: false
    })
  }

  render () {
    return (
      <>
        {this.props.login
          ? <div className="logged-in">
            <button name = "profile" className="nav-bar-buttons" onClick={() => { this.props.activePage('profile'); this.props.viewProfile(this.props.login, false) }}>Profile</button>
            <p id = "profile-name-nav" className="label-white-text x-y-centre">Welcome<br />{this.props.login}</p>
            <Logout />
          </div>

          : <div id="nav" className="not-logged-in">
            <div className="login-text">
              <a id = "loginLink" href="/#/" onClick={this.loginClickHandler}>Login</a>
              <a id = "registerLink" href="/#/" onClick={this.registerClickHandler}>Register</a>
            </div>
          </div>
        }

        {this.state.showRegisterPopup
          ? <RegisterUser
            closePopup={this.registerClickHandler} />
          : null
        }

        {this.state.showLoginPopup
          ? <LoginUser
            closePopup={this.loginClickHandler} />
          : null
        }

        {/* <NavBarLogin />
        <NavBarRegister /> */}

      </>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    activePage: (destination) => dispatch(activePage(destination)),
    viewProfile: (username, isViewing) => dispatch(viewProfile(username, isViewing))
  }
}

const mapStateToProps = state => {
  return {
    login: state.auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
