import React from 'react'

const ProfileBanner = ({ profile }) => {
  return (
    <>
      <div>
        <span>{profile.username}</span>
        <img src={profile.avatarImage} />
        <img src={profile.coverPhoto} />
        <p>{profile.bio}</p>
      </div>
    </>
  )
}

export default ProfileBanner