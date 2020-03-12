import React, { Component } from 'react'
import { connect } from 'react-redux'
import activePage from './actions/activePage'

export const Landing = (props) => {
  return (
    <>
      <div className="logo fullscreen-bg" >
        <img data-testid="image" className="img-lp" src="images/Logowalkland white.png"></img>
        <button name='landingButton' data-testid="startButton" className="btn-lp" onClick={() => props.activePage('map')}>START JOURNEY</button>
      </div>
    </>
  )
}

const mapDispatchToProps = {
  activePage
}

export default connect(null, mapDispatchToProps)(Landing)
