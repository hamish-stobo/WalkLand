import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setError } from './actions/setError'

class ErrorComponent extends Component {
  render () {
    return (
      <div className="popup hamish-error">
        <button className='button-round hamish-button-round' onClick={() => this.props.setError('')}>x</button>
        <div className='popup_inner hamish-popup-inner'>
          <p className='hamish-error-text'>{this.props.errorState}</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    errorState: state.errorState
  }
}

const mapDispatchToProps = dispatch => ({
  setError: errorState => dispatch(setError(errorState))
})

export default connect(mapStateToProps, mapDispatchToProps)(ErrorComponent)
