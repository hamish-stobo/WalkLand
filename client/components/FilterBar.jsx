import React, { Component } from 'react'
import SideBarItem from './SideBarItem'
import { connect } from 'react-redux'

export const SearchBar = (props) => {
  return (
    <div className="filterbar">
      <form className="filter-field">
        <input type="text" placeholder="Filter by:" />
      </form>

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    allWalks: state.allWalks
  }
}

export default connect(mapStateToProps)(SearchBar)