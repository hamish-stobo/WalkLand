import React from 'react'

const ProfileBanner = ({ profile }) => {
  return (
    <>
      <div>
        <span>{profile.username}</span>
        <img src='https://p7.hiclipart.com/preview/355/848/997/computer-icons-user-profile-google-account-photos-icon-account.jpg' />
      </div>
      <div >
        <img src='https://lp-cms-production.imgix.net/features/2015/04/Routeburn-Track_cs.jpg' />
      </div>
    </>
  )
}

export default ProfileBanner