import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteProfile } from './actions/authActions'

import activePage from './actions/activePage'

const DeleteUser = props => {
  const deleteFn = () => {
    props.deleteProfile(props.auth.username)
    .then(() => {
      localStorage.removeItem('token')
      props.settingsClick()
      props.activePage('map')
    })
  }
    return (
      <>
      {<button className="btn btn-danger h-r-b" name = "delete" onClick={() => deleteFn()}>Delete profile?</button>}
      </>
    )
  
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteProfile: user => dispatch(deleteProfile(user)),
    activePage: (destination) => dispatch(activePage(destination))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteUser)
