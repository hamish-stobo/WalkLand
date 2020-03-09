import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProfileInfo } from './actions/userProfile'

import activePage from './actions/activePage'
import ProfileReviews from './ProfileReviews'
import ProfileBanner from './ProfileBanner'
import DeleteUser from './DeleteUser'

class Profile extends Component {

  state = {
    deleteClick: false
  }

  componentDidMount = () => {
    this.props.fetchProfileInfo(this.props.viewProfile)
  }

  render () {
    const myProfile = this.props.viewProfile === this.props.auth

    return (
      <>
        {this.props.userProfile === 'error' ? <a className="alert alert-danger hamish-profile-deleted" href="/#/" onClick={() => this.props.activePage('details')}>Profile not found. Click to go back.</a>
          : <div className="profile-container">
            <div className="profile-header">
              <img className='profile-logo' src='images/mainlogo.png' />
              <div className="profile-header-btn-group">
                <button name = "home" className="profile-header-btn btn btn-link" onClick={() => this.props.activePage('map')}>Home</button>
                {myProfile && <button name = "settings" className="profile-header-btn btn btn-link" onClick={() => this.setState({deleteClick: !this.state.deleteClick})}>Settings</button>}
              </div>
            </div>
            {this.state.deleteClick && <DeleteUser />}
            <div className="profile-top">
              <div className="profile-top-children">
                <ProfileBanner user={this.props.viewProfile} welcome={`You are viewing ${this.props.viewProfile}'s profile`} />
              </div>
            </div>
            <ProfileReviews />
          </div>
        }
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    username: state.auth,
    userProfile: state.userProfile,
    viewProfile: state.viewProfile,
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    activePage: (destination) => dispatch(activePage(destination)),
    fetchProfileInfo: (user) => dispatch(fetchProfileInfo(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
