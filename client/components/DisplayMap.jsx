import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker, mapStyles } from 'google-maps-react'
import { connect } from 'react-redux'
import selectedWalk from './actions/selectedWalk'

export const DisplayMap = (props) =>{
 const bounceMarker = () => {
    const walk = props.selectedWalkState
    return <Marker key={walk.id} id={walk.id} position={{
      lat: walk.latitude,
      lng: walk.longitude
    }}
    animation={window.google.maps.Animation.BOUNCE}
    onClick={() => { props.selectedWalk(walk) }}
    />
  }
  const initialMarkers = () => {
    const { allWalksState, selectedWalkState } = props
    return allWalksState.map(walk => {
      return <Marker key={walk.id} id={walk.id} position={{
        lat: walk.latitude,
        lng: walk.longitude
      }}
      opacity={ selectedWalkState.id === undefined ? 1 : 0.6 }
      visible={ walk.id === selectedWalkState.id ? false : true }
      animation={ selectedWalkState.id === undefined ? 2 : 0}
      onClick={() => { props.selectedWalk(walk) }}
      />
    })
  }

  
    return (
      <>
      <div data-testid="loadMap">
          <Map
            google={props.google}
            zoom={11}
            style={mapStyles}
            initialCenter={{ lat: -36.848461, lng: 174.763336 }}
          >
            {initialMarkers()}
            {bounceMarker()}
          
          </Map>
          </div>
      </>
    )
  }

const mapDispatchToProps = dispatch => {
  return {
    selectedWalk: (walk) => dispatch(selectedWalk(walk))
  }
}

const mapStateToProps = (state) => {
  return {
    selectedWalkState: state.selectedWalk,
    allWalksState: state.allWalks
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleApiWrapper({
  apiKey: 'AIzaSyAnz2zXo94BzcNmXJucAXslMthhqQ52OlU'
})(DisplayMap))
