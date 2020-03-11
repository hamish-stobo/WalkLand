import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editReview } from './actions/reviewWalks'

class EditReview extends Component {

    state = {
        rating: this.props.selectedReview.rating,
        review: this.props.selectedReview.review
    }

    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }

    handleSubmit = e => {
        e.preventDefault()
        this.props.editReview({...this.state, username: this.props.login.username, walkId: this.props.selectedWalk.id})
        .then(this.props.hideEdit())
    }

    render() {
        console.log('props available to editreview component ', this.props)
        console.log('state in editreview component ', this.state)
        return (
            <div data-testid={'form'} className="details-form">
            <form onSubmit={this.handleSubmit}>
              <h3>Edit your review!</h3>
              <label  className="right-margin">Rating</label>
              <input
                type='number'
                min='1'
                max='5'
                name='rating'
                placeholder='Rating (1 - 5)'
                value={this.state.rating}
                onChange={this.handleChange}
                required
              /><br/>

              <textarea
                type='text'
                name='review'
                placeholder='Add Review...'
                value={this.state.review}
                onChange={this.handleChange}
                required
              /><br/>
              <input  type='hidden' value={this.props.selectedReview.walkId} name="walkId" />
              <input type='hidden' value={this.props.selectedReview.username} name="username" />
              <button name = "submitReview" type='submit'>Update Review</button>
            </form>
          </div>
        )
    }
}

const mapStateToProps = state => {
  return {
    selectedWalk: state.selectedWalk,
    login: state.auth
  }
}

const mapDispatchToProps = dispatch => ({
  editReview: review => dispatch(editReview(review))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditReview)