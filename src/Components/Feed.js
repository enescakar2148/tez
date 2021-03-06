import React, { Component } from 'react'
import "../css/global.css"
import Navbar from './SubComponents/Navbar'
import "../css/Feed.css"
import slider1 from "../images/slider1.jpg";
import slider2 from "../images/slider2.jpg";
import slider3 from "../images/slider3.jpg";
import slider4 from "../images/slider4.jpg";
export default class Feed extends Component {


    render() {
        return (
            <div className="Anasayfa">
                <Navbar />
                <div className="slider_ana">
                    <div className="slider">

                        <div className="slides">
                            <div id="slide-1">
                                <img src={slider1} className='slide-image'
                                    alt='Slider Image'>
                                </img>
                            </div>
                            <div id="slide-2">
                                <img src={slider2} className='slide-image'
                                    alt='Slider Image'>
                                </img>
                            </div>
                            <div id="slide-3">
                                <img src={slider3} className='slide-image'
                                    alt='Slider Image'>
                                </img>
                            </div>
                            <div id="slide-4">
                                <img src={slider4} className='slide-image'
                                    alt='Slider Image'>
                                </img>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
