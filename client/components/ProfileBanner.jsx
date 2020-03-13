import React from 'react'

const ProfileBanner = ({ profile }) => {
  return (
    <>
      <div className="profile-top-half">
        <span className="profile-username">{profile.username}</span>
        <img className="profile-avatarImage" src={profile.avatarImage} />
        <p className="profile-bio">{profile.bio}</p>
        <img className="profile-coverPhoto" src={profile.coverPhoto} />
      </div>
    </>
  )
}

export default ProfileBanner