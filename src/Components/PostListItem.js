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
                <div className="sub-optinions">
                    <h2 className='sub-optinion optinion'>Post a Comment</h2>
                    <Link to="/post-details" className="link optinion">Read More</Link>
                </div>
            </div>
        </div>
    )
}
