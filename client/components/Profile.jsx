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
          <>
            <ProfileBanner profile={this.props.userProfile} />
            <ProfileReviews />
          </>
        }
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    userProfile: state.userProfile,
    viewProfile: state.viewProfile,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    activePage: (destination) => dispatch(activePage(destination)),
    fetchProfileInfo: (user) => dispatch(fetchProfileInfo(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
