import React, { Component } from 'react'
import { connect } from 'react-redux'

class ProfileReviews extends Component {
  render () {
    let reviewsArr = []
    let reviews = this.props.ratings.map(ratingInfo => {
      if (ratingInfo.username === this.props.currentUsername && !this.props.otherUsername.isViewing) {
        reviewsArr.push(<div>{ratingInfo.walkId}</div>)
        reviewsArr.push(<div>{ratingInfo.review}</div>)
        reviewsArr.push(new Array(ratingInfo.rating).fill('star'))
      } else if (ratingInfo.username === this.props.otherUsername.username && this.props.otherUsername.isViewing) {
        reviewsArr.push(<div>{ratingInfo.walkId}</div>)
        reviewsArr.push(<div>{ratingInfo.review}</div>)
        reviewsArr.push(new Array(ratingInfo.rating).fill('star'))
      }
    })
    return (
      <>
      {reviewsArr[0] === undefined ? null : <div className="profile-bot-container-left">
          <div className="profile-bot-content-card">
            <div className="profile-card-top">
              <img className="profile-walk-image" src={reviewsArr[0] === undefined ? '' : this.props.allWalks.find(walk => walk.id === reviewsArr[0].props.children).mainPhoto} /><br />
            </div>
            <div className="profile-card-bot">
              Walk name: {reviewsArr[0] === undefined ? '' : this.props.allWalks.find(walk => walk.id === reviewsArr[0].props.children).title} <br />
              My review: {reviewsArr[1]} <br />
              <div>My rating: {reviewsArr[2].map((rating, idx) => <img key={idx} className="hamish-stars-li" width="25" src="https://image.flaticon.com/icons/svg/148/148841.svg" alt="Image of star"/>)}</div>
            </div>
          </div>
        </div>
       }

        {reviewsArr[3] === undefined ? null : <div className="profile-bot-container-mid">
          <div className="profile-bot-content-card">
            <div className="profile-card-top">
              <img className="profile-walk-image" src={reviewsArr[3] === undefined ? '' : this.props.allWalks.find(walk => walk.id === reviewsArr[3].props.children).mainPhoto} /><br />
            </div>
            <div className="profile-card-bot">
              Walk name: {reviewsArr[3] === undefined ? '' : this.props.allWalks.find(walk => walk.id === reviewsArr[3].props.children).title} <br />
              My review: {reviewsArr[4]} <br />
              <div>My rating: {reviewsArr[5].map((rating, idx) => <img key={idx} className="hamish-stars-li" width="25" src="https://image.flaticon.com/icons/svg/148/148841.svg" alt="Image of star"/>)}</div>
            </div>
          </div>
        </div>}

        {reviewsArr[6] === undefined ? null : <div className="profile-bot-container-right">
          <div className="profile-bot-content-card">
            <div className="profile-card-top">
              <img className="profile-walk-image" src={reviewsArr[6] === undefined ? '' : this.props.allWalks.find(walk => walk.id === reviewsArr[6].props.children).mainPhoto} /><br />
            </div>
            <div className="profile-card-bot">
              Walk name: {reviewsArr[6] === undefined ? '' : this.props.allWalks.find(walk => walk.id === reviewsArr[6].props.children).title} <br />
              My review: {reviewsArr[7]} <br />
              <div>My rating: {reviewsArr[8].map((rating, idx) => <img key={idx} className="hamish-stars-li" width="25" src="https://image.flaticon.com/icons/svg/148/148841.svg" alt="Image of star"/>)}</div>
            </div>
          </div>
        </div>}
      </>
    )
  }
}

// const userId = !!this.props.userId.id && this.props.userId.id
// const allRatings = this.props.ratings
// const allWalks = this.props.allWalks
// const reviewByUser = allRatings.filter(rating => rating.userId === userId)

const mapStateToProps = state => {
  return {
    ratings: state.ratings,
    currentUsername: state.auth,
    otherUsername: state.viewProfile,
    userId: state.userProfiles,
    allWalks: state.allWalks
  }
}

export default connect(mapStateToProps)(ProfileReviews)
