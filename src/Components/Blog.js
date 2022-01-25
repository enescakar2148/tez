import React, { Component } from 'react'
import PostListItem from './PostListItem'
import Navbar from './SubComponents/Navbar'

export default class Blog extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className='blog-container-page-swapper'>
                    <div className='post-items'>
                        <PostListItem />
                        <PostListItem />
                        <PostListItem />

                    </div>
                </div>
            </div>
        )
    }
}
