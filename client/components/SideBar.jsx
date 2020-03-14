import React, { Component } from 'react'
import SideBarItem from './SideBarItem'
import { connect } from 'react-redux'

export const Sidebar = (props) => {
  return (
    <>
      {props.allWalks.map((walk) => {
        return (
          <SideBarItem key={walk.id} walk={walk} mainPhoto={walk.mainPhoto} />
        )
      })}

    </>
  )
}

function mapStateToProps(state) {
  return {
    selectedWalkState: state.selectedWalk,
    allWalks: state.allWalks
  }
}

export default connect(mapStateToProps)(Sidebar)
