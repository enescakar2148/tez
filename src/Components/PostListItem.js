import React from 'react'
import { Link } from 'react-router-dom'
import "../css/blog.css"

import logo from "../images/post_image.png"

export default function PostListItem() {
    return (
        <div className="swapper">
            <div className="container">
                <div className='header'>
                    <h1 id="title">Post Title</h1>
                    <p id='date-text'>04 Mart 2021</p>
                </div>
                <Link to="/post-details"><img src={logo} alt="Post Image" id="post-image"/></Link>
                <div className="sub-optinions">
                    <h2 className='sub-optinion'>Post a Comment</h2>
                    <h2 className='sub-optinion'>Read More</h2>
                </div>
            </div>
        </div>
    )
}
