import React, { Component } from 'react'
import { connect } from 'react-redux'
import activePage from './actions/activePage'

export const Landing = (props) => {
  return (
    <>
      <div className="logo fullscreen-bg" >
        <img data-testid="image" src="images/Logowalkland white.png"></img>
      </div>
      <div className="btn-group-wrap">
        <button name='landingButton' data-testid="startButton" className="btn btn-primary btn-sm" onClick={() => props.activePage('map')}>START JOURNEY</button>
      </div>
    </>
  )
}

const mapDispatchToProps = {
  activePage
}

export default connect(null, mapDispatchToProps)(Landing)
