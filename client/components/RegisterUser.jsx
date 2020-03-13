import React, { Component } from 'react'
import { connect } from 'react-redux'
import { registerUserAndLogin } from './actions/authActions'

class RegisterUser extends Component {
  state = {
    username: '',
    password: '',
    bio: '',
    avatarImage: '',
    coverPhoto: '',
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.registerUserAndLogin(this.state)
      .then(this.props.closePopup)
      .catch(err => null)
  }

  render () {
    return (
      <div className='popup'>
        <button className='button-round button-x' onClick={this.props.closePopup}>x</button>
        <div className='popup_inner'>
          <form onSubmit={this.handleSubmit}>
            <h3>Register!</h3>

            <label name="username-label">Username</label>
            <input className="username"
              name='username'
              placeholder='Username'
              value={this.state.username}
              onChange={this.handleChange}
              required
            />

            <label name="password-label">Password</label>
            <input className="password"
              type='password'
              name='password'
              placeholder='Password'
              value={this.state.password}
              onChange={this.handleChange}
              required
            />

            <label  name="bio-label">Bio</label>
            <textarea 
              className="add-some-margin"
              name='bio'
              placeholder='User bio'
              value={this.state.bio}
              onChange={this.handleChange}
            />

            <label name="avatarImage-label">Profile Picture</label>
            <input 
              className="add-some-margin"
              name='avatarImage'
              placeholder='Your profile image'
              value={this.state.avatarImage}
              onChange={this.handleChange}
            />
            {this.state.avatarImage && <img className="form-profile-img" width="25" src={this.state.avatarImage} placeholder="Your profile picture"/>}

            <label name="coverPhoto-label">Cover Photo</label>
            <input 
              className="add-some-margin"
              name='coverPhoto'
              placeholder='Link to a cover photo'
              value={this.state.coverPhoto}
              onChange={this.handleChange}
            />
            {this.state.coverPhoto && <img className="form-cover-img" src={this.state.coverPhoto} width="25" placeholder="Your cover photo"/>}
            <button name='submit' type='submit'>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  registerUserAndLogin: userInfo => dispatch(registerUserAndLogin(userInfo))
})

export default connect(null, mapDispatchToProps)(RegisterUser)
