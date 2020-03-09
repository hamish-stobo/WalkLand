import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createReview } from './actions/reviewWalks'
import { create } from 'react-test-renderer'
// import { Carousel } from 'react-responsive-carousel'
import Slider from 'react-slick'
import activePage from './actions/activePage'
import viewProfile from './actions/viewProfile'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

let slideIndex = 1

class Details extends Component {
  state = {
    rating: '',
    review: '',
    walkId: this.props.selectedWalk.id
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    // e.preventDefault()
    this.props.createReview({ ...this.state, username: this.props.login })
      .then(() => this.setState({
        rating: '',
        review: ''
      }))
      .catch(err => console.log(err))
  }

  render () {
    const { selectedWalk } = this.props

    const { ratings } = this.props
    const idWalk = selectedWalk.id
    const reviewsArray = ratings.filter(rating => rating.walkId === idWalk).map(data => {
      return {
        rating: data.rating,
        review: data.review,
        author: data.username
      }
    })
    const authorsArray = reviewsArray.map(review => review.author)
    const reviewExists = authorsArray.indexOf(this.props.login)
    console.log('currently logged in user ', this.props.login)

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0px'
    }
    const texty = "I saw the way the woman walked, shoulders back, yet eyes frequently checking her own appearance; it was as if she felt superior and insecure all at once, perhaps that's the emotional optimum in a shallow society. I prefer the way our Maya is, she swaggers, a sort of free-style motion that says she's real happy with who she is, eyes on the sky, the trees and the birds, music in her soul as much as her ears."

    return (

      <div className="details-container">
        <h1 className = "details-walktitle">{selectedWalk.title}</h1>
        <div className = "details-photo-slider">
          <Slider {...settings} >
            {
              selectedWalk.photos.map((item, idx) => (
                <img className = "details-photos" key={idx} src={item} />
              ))
            }
          </Slider >
        </div>
        <div className = "details-text">
          <p> {`${selectedWalk.description}`} </p>
        </div>
        <img className = "details-map" src={selectedWalk.routeImage} height="100%" width="100%" />
        <ul className = "details-info">

          <li>{`Location: ${selectedWalk.location}`}</li>
          <li>{`Distance: ${selectedWalk.distance}`}</li>
          <li>{`Elevation Gain: ${selectedWalk.elevationGain}m`}</li>
          <li>{`Estimated Time: ${selectedWalk.timeTaken}`}</li>
          <li>{`Difficulty: ${selectedWalk.difficulty}`}</li>
          <li>{`Surface: ${selectedWalk.surface}`}</li>

          <ul>
            {reviewsArray.length > 0
              ? reviewsArray.map((item, idx) => (
              <>
              <li key={idx}>
                <span>Rating: {item.rating}</span>
                <span>Review: {item.review}</span>
                <span>Author: <a href="/#/" onClick={() => {
                  this.props.activePage('profile')
                  this.props.viewProfile(item.author, true)
                }}>{item.author}</a></span>
              </li>
              </>
              ))
              : <p>No reviews yet</p>
            }
          </ul>
        </ul>
        {reviewExists === -1 && this.props.login &&
        <div>
          <form onSubmit={this.handleSubmit}>
            <h1>Submit your experience!</h1>
            <p>Be a part of the experience</p>
            <label>Rating</label>
            <input
              type='number'
              min='1'
              max='5'
              name='rating'
              placeholder='Rating (1 - 5)'
              value={this.state.rating}
              onChange={this.handleChange}
            /><br/>

            <label>Review</label>
            <input
              type='text'
              name='review'
              placeholder='Review'
              value={this.state.review}
              onChange={this.handleChange}
            /><br/>
            <input type='hidden' value={this.props.selectedWalk.id} name="walkId" />
            <input type='hidden' value={this.props.login} name="username" />
            <button type='submit'>Submit Review</button>
          </form>
        </div>
        }

      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createReview: review => dispatch(createReview(review)),
  activePage: (destination) => dispatch(activePage(destination)),
  viewProfile: (username, isViewing) => dispatch(viewProfile(username, isViewing))
})

const mapStateToProps = state => {
  return {
    selectedWalk: state.selectedWalk,
    ratings: state.ratings,
    login: state.auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)
