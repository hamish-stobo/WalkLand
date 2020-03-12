import React, { Component } from 'react'
import { connect } from 'react-redux'
import EditReview from './EditReview'
import { deleteReview } from './actions/reviewWalks'

class ProfileReviews extends Component {

  state = {
    showEdit: false,
    selectedReview: {}
  }

  giveToEdit = review => {
    this.setState({
      showEdit: !this.state.showEdit,
      selectedReview: review
    })
  }

  deleteReviewFn = reviewToDelete => {
    this.props.deleteReview({...reviewToDelete, username: this.props.auth.username})
    .then(() => console.log(success))
    .catch(err => console.log(err))
  }

  render () {
    console.log('props available to profile reviews component, ', this.props)
    const myProfile = this.props.viewProfile === this.props.auth.username
    const profileReviews = this.props.ratings
    .filter(rating => rating.username === this.props.viewProfile)
    .map(each => {
      each.starRating = new Array(each.rating).fill('star')
      each.mainPhoto = this.props.allWalks.find(walk => walk.id === each.walkId).mainPhoto
      each.title =  this.props.allWalks.find(walk => walk.id === each.walkId).title
      return each
    })
    return (
      <>
      <ul className="hamish-reviews-grid">
      {
        profileReviews.map((review, idx) => 
        <>
        <div key={idx}>
            <img className="profile-walk-image" src={review.mainPhoto}/>
            <div className="profile-card-bot">
              <span>Name of walk: {review.title}</span>
              <span>Your review: {review.review}</span>
              <div>Your rating: 
              {review.starRating
              .map((star, idx) => 
              (<img key={idx} className="hamish-stars-li" width="25" src="https://image.flaticon.com/icons/svg/148/148841.svg" alt={`Image of ${star}`}/>))}
              </div>
            </div>
            {myProfile &&
            <div>
              <button onClick={() => this.giveToEdit(review)}>Edit walk</button>
              <button className="hamish-del-btn btn btn-danger" onClick={() => this.deleteReviewFn(review)}>Delete Review</button>
            </div>
            }
        </div>
        </>
        )}
      </ul>
      {this.state.showEdit && <EditReview selectedReview={this.state.selectedReview} hideEdit={() => this.setState({showEdit: false})}/>}
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

const mapDispatchToProps = dispatch => ({
  deleteReview: reviewToDelete => dispatch(deleteReview(reviewToDelete))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileReviews)
