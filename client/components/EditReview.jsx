import React, { Component } from 'react'
import { connect } from 'react-redux'

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

    render() {
        console.log('props available to editreview component ', this.props)
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



export default connect()(EditReview)