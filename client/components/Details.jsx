import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createReview } from './actions/reviewWalks'
import { create } from 'react-test-renderer'
import Slider from 'react-slick'
import activePage from './actions/activePage'
import viewProfile from './actions/viewProfile'

let slideIndex = 1

class Details extends Component {
  state = {
    rating: 0,
    review: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.createReview({ ...this.state, username: this.props.login, walkId: this.props.selectedWalk.id })
      .then(() => this.setState({
        rating: 0,
        review: ''
      }))
      .catch(err => console.log(err))
  }

  render () {
    const { selectedWalk } = this.props

    const { ratings } = this.props
    const idWalk = selectedWalk.id
    const reviewsArray = ratings.filter(rating => rating.walkId === idWalk).map(data => {
      const stars = new Array(data.rating).fill('star')
      return {
        rating: data.rating,
        review: data.review,
        author: data.username,
        stars
      }
    })
    const authorsArray = reviewsArray.map(review => review.author)
    const reviewExists = authorsArray.indexOf(this.props.login)
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0px',
      arrows: false
    }
    return (

      <div className="details-container">
        <div className = "details-walktitle">
        </div>
        <div data-testid={'slider'} className = "details-photo-slider">
          <Slider {...settings} >
            {
              selectedWalk.photos && selectedWalk.photos.map((item, idx) => (
                <img  className = "details-photos" key={idx} src={item} />
              ))
            }
          </Slider >
        </div>
        <div data-testid={'detailsTitle'} className="details-content">
          <div className="details-text">
            <p data-testid={'description'}> {`${selectedWalk.description}`} </p>
          </div>
          <img data-testid={'image'} className="details-map" src={selectedWalk.routeImage} height="100%" width="100%" />

          <ul data-testid={'ul'} className="details-info">
            <div className='details-info-text'>
              <li>{`Name: ${selectedWalk.title}`}</li>
              <li>{`Location: ${selectedWalk.location}`}</li>
              <li>{`Distance: ${selectedWalk.distance}`}</li>
              <li>{`Elevation Gain: ${selectedWalk.elevationGain}m`}</li>
              <li>{`Estimated Time: ${selectedWalk.timeTaken}`}</li>
              <li>{`Difficulty: ${selectedWalk.difficulty}`}</li>
              <li>{`Surface: ${selectedWalk.surface}`}</li>
            </div>
          </ul>

          <div className='hamish-reviews-wrapper'>
            <ul data-testid={'grid'} className='hamish-reviews-grid'>
              {reviewsArray.length > 0
                ? reviewsArray.map((item, idx) =>
                  <>
                    <li id="tomId" className="card card-body hamish-review-card" key={idx}>
                      <ul className="hamish-stars-ul">
                        {
                          item.stars.length > 0 &&
                          item.stars.map((star, idx) => <img  key={idx} className="hamish-stars-li" width="25" src="https://image.flaticon.com/icons/svg/148/148841.svg" alt="Image of star"/>)
                        }
                      </ul>
                      <span  className="card-text" ><span className="hamish-bold">Review</span>: {item.review}</span><br></br>
                      <span className="card-text"><span className="hamish-bold">Author:</span> <a href="/#/" onClick={() => {
                        this.props.activePage('profile')
                        this.props.viewProfile(item.author, true)
                      }}>{item.author}</a></span>
                    </li>
                    </>
                )
                : <p data-testid={'review'}>No reviews yet</p>
              }
            </ul>
          </div>

          { reviewExists === -1 && this.props.login &&
        <div data-testid={'form'} className="details-form">
          <form onSubmit={this.handleSubmit}>
            <h3>Share your experience!</h3>
            <label  className="right-margin">Rating</label>
            <input
              type='number'
              min='1'
              max='5'
              name='rating'
              placeholder='Rating (1 - 5)'
              value={this.state.rating}
              onChange={this.handleChange}
            /><br/>

            <textarea
              type='text'
              name='review'
              placeholder='Add Review...'
              value={this.state.review}
              onChange={this.handleChange}
            /><br/>
            <input  type='hidden' value={this.props.selectedWalk.id} name="walkId" />
            <input type='hidden' value={this.props.login} name="username" />
            <button name = "submitReview" type='submit'>Submit Review</button>
          </form>
        </div>
          }
        </div>
  
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
