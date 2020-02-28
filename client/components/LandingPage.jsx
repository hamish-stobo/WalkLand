import React, { Component } from 'react'
import { connect } from 'react-redux'
import activePage from './actions/activePage'

const Landing = (props) => {
  return (
    <>
    <div className="fullscreen-bg">
    <video autoPlay muted loop id="myVideo" className="fullscreen-bg__video">
    <source src='landingvideo1.mp4' type="video/mp4" />
    </video>

    </div>
      <h1 className="landing-heading-centre">Walkland</h1>
      <div className="btn-group-wrap">
        <button className="btn" onClick={() => props.activePage('map')}> Walk through Auckland</button>
      </div>
    </>
  )
}

const mapDispatchToProps = {
  activePage
}

export default connect(null, mapDispatchToProps)(Landing)
