import React, { Component } from 'react'
import PostListItem from './PostListItem'
import Navbar from './SubComponents/Navbar'

export default class Blog extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <PostListItem/>
            </div>
        )
    }
}
