import React, { Component } from 'react'
import { connect } from 'react-redux'
import activePage from './actions/activePage'
import selectedWalk from './actions/selectedWalk'
import { getReviewRatings } from './actions/allWalks'

class SideBarItem extends Component {
  render () {
    const walk = this.props.walk
    const { id, title, mainPhoto, distance } = walk
    const { activePageState, selectedWalkState } = this.props
    const { selectedWalk, activePage } = this.props
    const walkRatings = this.props.ratings // array of ratings
    const walkId = this.props.walk.id // id of walk passed down
    const filterByWalk = walkRatings.filter(walk => walk.walkId === walkId)
    const walkAverage = filterByWalk.reduce((total, next) => total + Number(next.rating), 0) / filterByWalk.length

    const style = {
      backgroundImage: `url(${mainPhoto})`,
      backgroundSize: '100% auto',
      backgroundPosition: 'center',
      opacity: '0.9'
    }

    return (
      <div className='overlay'>
        <div style={style}
          className={
            `${selectedWalkState.id === id ? 'selected-walk' : 'sidebar-item'}`
          }
          onClick={() => {
            selectedWalk(walk)
          }}
        >
          <h2 className='item-title' data-testid={'sideBarTitle'}> {title} </h2>
          {walkAverage ? <p className='sidebar-rating' data-testid={'rating'}>Rating: {Math.round((walkAverage + Number.EPSILON) * 100) / 100}</p> : <p>No rating yet</p>}
        <p className='sidebar-distance'>Distance: {distance}</p>
          { selectedWalkState.id === id &&
        <>

        {activePageState === 'details' &&
        <button data-testid='showMap' name = 'showMap' onClick={() => activePage('map')}>Show Map</button>}
        {activePageState === 'map' &&
        <button data-testid="showDetails" name = 'showDetials' onClick={() => activePage('details') }>Show Details</button>}
        </>
          }
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    activePage: (destination) => dispatch(activePage(destination)),
    selectedWalk: (walk) => dispatch(selectedWalk(walk))
  }
}

const mapStateToProps = state => {
  return {
    selectedWalkState: state.selectedWalk,
    activePageState: state.activePage,
    ratings: state.ratings,
    allWalksState: state.allWalks
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBarItem)
