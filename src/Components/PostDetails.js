import React, { Component } from 'react'
import Navbar from "../Components/SubComponents/Navbar"
import "../css/PostDetay.css"

export default class PostDetails extends Component {
    render() {
        return (
            <div className='post-details-main'>
                <Navbar/>

                <div className='post-details-swapper'>
                    <div className='post-details'>
                        <div className='header'>
                            <h1 id='title'>Title</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
