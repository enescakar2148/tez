import React, { Component } from 'react'
import "../css/blog.css"
import Navbar from './SubComponents/Navbar'

export default class Blog extends Component {
    render() {
        return (
            <div>
                <Navbar/>

                <div className="swapper">
                    <div className="container">
                        <div className='header'>
                            <h1 id="title">Lorem Ipsum!</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
