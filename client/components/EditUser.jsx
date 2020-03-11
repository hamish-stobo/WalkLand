import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editProfile } from './actions/authActions'

class EditUser extends Component {
  state = {
    ...this.props.userProfileState
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.editProfile({...this.state, username: this.props.auth.username})
      .then(this.props.closePopup)
      .catch(err => null)
  }

  render () {
    return (
      <div className='popup'>
        <button className='button-round button-x' onClick={this.props.closePopup}>x</button>
        <div className='popup_inner'>
          <form onSubmit={this.handleSubmit}>
            <h3>Edit your profile</h3>

            <label  name="bio-label">Bio</label>
            <textarea 
              name='bio'
              placeholder='User bio'
              value={this.state.bio}
              onChange={this.handleChange}
            />

            <label name="avatarImage-label">Profile Picture</label>
            <input 
              name='avatarImage'
              placeholder='Your profile image'
              value={this.state.avatarImage}
              onChange={this.handleChange}
            />
            {this.state.avatarImage && <img width="25" src={this.state.avatarImage} placeholder="Your profile picture"/>}

            <label name="coverPhoto-label">Cover Photo</label>
            <input 
              name='coverPhoto'
              placeholder='Link to a cover photo'
              value={this.state.coverPhoto}
              onChange={this.handleChange}
            />
            {this.state.coverPhoto && <img src={this.state.coverPhoto} width="25" placeholder="Your cover photo"/>}
            <button name='submit' type='submit'>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        userProfileState: state.userProfile,
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => ({
  editProfile: userInfo => dispatch(editProfile(userInfo))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditUser)

