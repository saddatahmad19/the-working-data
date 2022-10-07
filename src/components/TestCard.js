import React, { Component } from 'react'
import './TestimonialsStyles.css'


export class TestCard extends Component {
  render() {
    return (
      <div className='testCard'>
            <h1>{this.props.name} | {this.props.industry}</h1>
            <p>{this.props.comment}</p>
      </div>
    )
  }
}

export default TestCard