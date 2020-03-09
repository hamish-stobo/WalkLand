import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteProfile } from './actions/authActions'

import activePage from './actions/activePage'

const DeleteUser = props => {
  const deleteToken = () => {
    localStorage.removeItem('token')
  }
    return (
      <>
      {<button className="hamish-del-btn btn btn btn-danger" name = "delete" onClick={() => { props.deleteProfile(props.auth); deleteToken(); props.activePage('map') }}>Delete profile?</button>}
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
