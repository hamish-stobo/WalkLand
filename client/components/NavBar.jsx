import React from 'react'
import { connect } from 'react-redux'
import activePage from './actions/activePage'
import RegisterUser from './RegisterUser'
import Logout from './Logout'
import LoginUser from './LoginUser'
import viewProfile from './actions/viewProfile'
import DeleteUser from './DeleteUser' 
import EditUser from './EditUser'

class NavBar extends React.Component {
    state = {
      showRegisterPopup: false,
      showLoginPopup: false,
      settingsClick: false,
      editing: false
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

  settingsClick = () => {
    this.setState({settingsClick: false})
  }

  render () {
    const myProfile = this.props.viewProfileState === this.props.login.username
    console.log('avatar image when none given at register ', this.props.login.avatarImage)
    return (
      <>
        {this.props.activePageState === 'profile' 
        ? 
          <>
          <div className="profile-header-btn-group">
            <button name = "home" className="nav-bar-buttons" onClick={() => {this.props.activePage('map'); this.setState({settingsClick: false})}}>Home</button>
            {myProfile && <button name = "settings" className="nav-bar-buttons" onClick={() => this.setState({settingsClick: !this.state.settingsClick})}>Settings</button>}
          </div>
          {this.state.settingsClick && 
              <>
                <button onClick={() => this.setState({editing: !this.state.editing})}>Edit Profile</button>
                <DeleteUser settingsClick={this.settingsClick} />
                {this.state.editing && <EditUser closePopup={() => this.setState({editing: false})} />}
              </>
          }
          </>
        :
        <>
          {this.props.login.username
          ? <div className="logged-in">
            <button name = "profile" className="nav-bar-buttons" onClick={() => { this.props.activePage('profile'); this.props.viewProfile(this.props.login.username) }}>Profile</button>
            {this.props.login.avatarImage && <img width="20" src={this.props.login.avatarImage} alt="Profile picture icon"/>}
            <p id = "profile-name-nav" className="label-white-text x-y-centre">Welcome<br />{this.props.login.username}</p>
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
          </>
          }
      </>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    activePage: (destination) => dispatch(activePage(destination)),
    viewProfile: username => dispatch(viewProfile(username))
  }
}

const mapStateToProps = state => {
  return {
    login: state.auth,
    activePageState: state.activePage,
    viewProfileState: state.viewProfile,
    userProfileState: state.userProfile
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
