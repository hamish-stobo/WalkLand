import React, { Component } from 'react'
import { connect } from 'react-redux'

class ProfileReviews extends Component {

  render () {
    const profileReviews = this.props.ratings
    .filter(rating => rating.username === this.props.viewProfile)
    .map(each => {
      each.starRating = new Array(each.rating).fill('star')
      each.mainPhoto = this.props.allWalks.find(walk => walk.id === each.walkId).mainPhoto
      each.title =  this.props.allWalks.find(walk => walk.id === each.walkId).title
      return each
    })
    console.log(profileReviews)
    return (
      <>
      <ul>
      {
        profileReviews.map((review, idx) => 
        <>
        <div key={idx} className="profile-bot-content-card">
           <div className="profile-card-top">
              <img className="profile-walk-image" src={review.mainPhoto}/>
            </div>
            <div className="profile-card-bot">
              <span>Name of walk: {review.title}</span>
              <span>Your review: {review.review}</span>
              <div>My rating: 
              {review.starRating
              .map((star, idx) => 
              (<img key={idx} className="hamish-stars-li" width="25" src="https://image.flaticon.com/icons/svg/148/148841.svg" alt={`Image of ${star}`}/>))}
              </div>
            </div>
        </div>
        </>
        )}
      </ul>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    ratings: state.ratings,
    auth: state.auth,
    viewProfile: state.viewProfile,
    userProfile: state.userProfile,
    allWalks: state.allWalks
  }
}

export default connect(mapStateToProps)(ProfileReviews)
