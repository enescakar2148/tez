import React from 'react'
import { Link } from 'react-router-dom'
import "../css/blog.css"


export default function PostListItem() {
    return (
        <div className="swapper">
            <div className="container">
                <div className='header'>
                    <h1 id="title-post-list">Post Title</h1>
                    <p id='date-text'>04 Mart 2021</p>
                </div>
                <div className="sub-optinions">
                <Link to="/post-details" className='sub-optinion optinion'>Post a Comment</Link>
                    <Link to="/post-details" className="link optinion">Read More</Link>
                </div>
            </div>
        </div>
    )
}
