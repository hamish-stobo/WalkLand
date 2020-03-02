import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchWalks, getReviewRatings } from './actions/allWalks'

import LandingPage from './LandingPage'
import DisplayMap from './DisplayMap'
import SideBar from './SideBar'
import Details from './Details'
import NavBar from './NavBar'
import Profile from './Profile'
import RegisterUser from './RegisterUser'
import FilterBar from './FilterBar'
import LoginUser from './LoginUser'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchWalks())
    this.props.dispatch(getReviewRatings())
  }

  render() {
    return (
      <>
        {this.props.activePage === 'landingPage' &&
          <div className="landing-page-container">
            <LandingPage />
          </div>
        }
        {this.props.activePage === 'map' &&
          <div className="map-page-container">
            <div className="logo-nav-container">
              <img className="logo-main" src='images/mainlogo.png' />
              <NavBar />
            </div>
            <div className="sidebar-container">
              <FilterBar/>
              <div className="items-container">
                <SideBar />
              </div>
            </div>
            <div className="map-container">
              <DisplayMap />
            </div>
          </div>
        }

        {this.props.activePage === 'details' &&
          <div className="map-page-container">
            <div className="logo-nav-container">
              <img className="logo-main" src='images/mainlogo.png' />
              <NavBar />
            </div>
            <div className="sidebar-container">
              <FilterBar/>
              <div className="items-container">
                <SideBar />
              </div>
            </div>
            <div className="map-container">
              <Details />
            </div>
          </div>
        }

        {this.props.activePage === 'profile' &&
          <Profile />
        }
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    activePage: state.activePage
  }
}

export default connect(mapStateToProps)(App)
