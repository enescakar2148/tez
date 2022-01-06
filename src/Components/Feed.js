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

                    <a href="#slide-1">1</a>
                    <a href="#slide-2">2</a>
                    <a href="#slide-3">3</a>
                    <a href="#slide-4">4</a>
                    <a href="#slide-5">5</a>

                    <div className="slides">
                        <div id="slide-1">
                        <img src={slider1}>
                    </img>
                        </div>
                        <div id="slide-2">
                        <img src={slider2}>
                    </img>
                        </div>
                        <div id="slide-3">
                        <img src={slider3}>
                    </img>
                        </div>
                        <div id="slide-4">
                        <img src={slider4}>
                    </img>
                        </div>
                      
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
