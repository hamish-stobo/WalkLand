import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProfileInfo } from './actions/userProfile'

import activePage from './actions/activePage'
import ProfileReviews from './ProfileReviews'
import ProfileBanner from './ProfileBanner'

class Profile extends Component {

  componentDidMount = () => {
    this.props.fetchProfileInfo(this.props.viewProfile)
  }

  render () {
    return (
      <>
        {this.props.userProfile === 'error' ? <a className="alert alert-danger hamish-profile-deleted" href="/#/" onClick={() => this.props.activePage('details')}>Profile not found. Click to go back.</a>
          : 
          <div>
            <ProfileBanner profile={this.props.userProfile} />
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
