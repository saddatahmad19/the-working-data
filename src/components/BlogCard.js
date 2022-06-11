import React, { Component } from 'react'
import './BlogCardStyles.css'
import {Link, NavLink} from 'react-router-dom'

export class BlogCard extends Component {
  render() {
    return (
      <div className='wrapper'>
          <div className='blog-card'>
            <h1>{this.props.title}</h1>
            <p>{this.props.date}</p>
            <p>{this.props.text1}</p>
            <div>
              <NavLink to={this.props.link == '/page1' && (this.props.link)}><p>Read More</p></NavLink>
            </div>
          </div>
      </div>
    )
  }
}

export default BlogCard