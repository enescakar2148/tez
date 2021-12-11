import React, { Component } from 'react'
import "../css/global.css"
import "../css/post.css"
import Navbar from './SubComponents/Navbar'

export default class Post extends Component {
    render() {
        return (
            <div className='post-wrapper'>
               <Navbar/>
            </div>
        )
    }
}
