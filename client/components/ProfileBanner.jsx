import React, { Component } from 'react'
import { connect } from 'react-redux'

class ProfileBanner extends Component {
  render () {
    return (
            <>
                <div className="profile-top-content-left" >{this.props.welcome}<img className="profile-picture-image" src='https://p7.hiclipart.com/preview/355/848/997/computer-icons-user-profile-google-account-photos-icon-account.jpg' /></div>
                <div className="profile-top-content-right"><img className="profile-cover-image" src='https://lp-cms-production.imgix.net/features/2015/04/Routeburn-Track_cs.jpg' /></div>
            </>
    )
  }
}

export default ProfileBanner
