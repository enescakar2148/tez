import React, { Component } from 'react'
import Navbar from "../Components/SubComponents/Navbar"
import "../css/PostDetay.css"

import image from "../images/slider2.jpg"
import image2 from "../images/slider3.jpg"

export default class PostDetails extends Component {
    render() {
        return (
            <div className='post-details-main'>
                <Navbar />

                <div className='post-details-swapper'>
                    <div className='post-details'>
                        <div className='header'>
                            <h1 id='title'>Title</h1>

                            <p id='content-text'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book. It has survived not only five centuries, but also the leap into
                                electronic typesetting, remaining essentially unchanged. It was popularised in
                                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software like Aldus PageMaker including
                                versions of Lorem Ipsum.
                            </p>

                            <div className='section'>
                                <p id='content-text'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book. It has survived not only five centuries, but also the leap into
                                    electronic typesetting, remaining essentially unchanged. It was popularised in
                                    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop publishing software like Aldus PageMaker including
                                    versions of Lorem Ipsum.
                                </p>

                                <img src={image} id="image" />
                            </div>

                            <div className='section'>
                                <img src={image2} id="image" />
                                <p id='content-text'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book. It has survived not only five centuries, but also the leap into
                                    electronic typesetting, remaining essentially unchanged. It was popularised in
                                    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop publishing software like Aldus PageMaker including
                                    versions of Lorem Ipsum.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
                

                <div className='footer'>
                        <h2 id='send-comment-text'>Yorum Yap</h2>
                        <div className='comment-components'>
                            <input type="text" placeholder="aaa" id="comment-input"/>
                            <button id='comment-button'>Gönder</button>
                        </div>
                    </div>
            </div>
        )
    }
}
