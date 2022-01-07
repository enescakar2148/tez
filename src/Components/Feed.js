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

                        <div className='numbers-wrapper'>
                            <ul id='slide-route'>
                                <li id='route1' className='route'>
                                    1
                                </li>

                                <li id='route2' className='route'>
                                    2
                                </li>

                                <li id='route3' className='route'>
                                    3
                                </li>

                                <li id='route4' className='route'>
                                    4
                                </li>

                                <li id='route5' className='route'>
                                    5
                                </li>
                            </ul>
                        </div>

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
