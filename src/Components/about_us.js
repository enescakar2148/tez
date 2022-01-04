import React from 'react'
import Navbar from './SubComponents/Navbar';
import about1 from "../images/about1.png";
import about2 from "../images/about2.png";
import "../css/about_us.css";

export default function About_us() {
  return (
    <div className="about_component">
      <Navbar/>
      <div className="about_ana">
      <div className="about_container">
        <div className="about_container1">
        <img src={about1} ></img>
        </div>
        <div className="about_container1_text">
          <h2 className="about_container1_title" > Çocuğun Gücü Studyo</h2>
          <p className="about_container1_title">Eu nostrud incididunt laboris ut pariatur cupidatat ex veniam amet commodo nostrud exercitation. In cupidatat adipisicing elit laboris. Consectetur non Lorem dolore in aliqua laboris sunt aute sit magna reprehenderit adipisicing ad aliquip. Voluptate dolor quis consequat culpa exercitation in minim sit ad elit. </p>
          </div>

  
      </div>
      <div className="about_container">
      <div className="about_container1_text">
          <h2 className="about_container1_title" > Çocuğun Gücü Studyo</h2>
          <p className="about_container1_title">Eu nostrud incididunt laboris ut pariatur cupidatat ex veniam amet commodo nostrud exercitation. In cupidatat adipisicing elit laboris. Consectetur non Lorem dolore in aliqua laboris sunt aute sit magna reprehenderit adipisicing ad aliquip. Voluptate dolor quis consequat culpa exercitation in minim sit ad elit. </p>
          </div>
        <div className="about_container1">
        <img src={about2} ></img>
        </div>
       

  
      </div>
      </div>
    </div>
  )
}
