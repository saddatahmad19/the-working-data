import React, { Component } from 'react'
import './BlogCardStyles.css'
import {Link} from 'react-router-dom'

export class BlogCard extends Component {
  render() {
    return (
      <div className='blogWrapper'>
          <div className='blog-card'>
            <h1>{this.props.title}</h1>
            <p>{this.props.date}</p>
            <p>{this.props.text1}</p>
            <div>
              <Link to={{pathname: `${this.props.link}`}}><p>Read More</p></Link>
            </div>
          </div>
      </div>
    )
  }
}

export default BlogCard