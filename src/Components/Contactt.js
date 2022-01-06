import React, { Component } from 'react'
import "../css/contact.css";

export default class Contact extends Component {
    render() {
        return (
            <div className="contact">
            
<div className="listing-hero">
  <div className="hero-heading">
      <div className="hero-large">İletişim.</div>
      <div className="hero-text"> <i>Herhangi bir sorunuz var mı? Sormaktan veya sayfamızı ziyaret etmekten çekinmeyin </i> </div>       
    </div>
</div>

<div className="container-contact">
  <div className="wrap-contact">

<div className="nameSurname">
<label className="labeler">İsim: </label>
      <div className="wrap-input validate-input" >

        <input className="inputx" type="text" name="name"  />
        
      </div>
      
   <label className="labeler">Soyisim:</label>
      <div className="wrap-input validate-input" >
        <input className="inputx" type="text" name="surnname"/>
        
      </div>
      </div>
      <label className="labels">Email:</label>
      <div className="wrap-input validate-input">
        <input class="inputx" type="text" name="email" placeholder="E-mail"/>
      </div>
      <label className="labels"> Konu :</label>
      <div className="wrap-input validate-input" data-validate = "Please enter your message">
        <input className="inputx" type="text" name="message" placeholder="Your Message"></input>
      </div>
      <label className="labels">Mesaj :</label>

        <textarea id="msj_box"> </textarea>
     

      <div className="container-contact-form-btn">
        <button type="submit" className="contact-form-btn">
          <span>GÖNDER</span>
        </button>
      </div>

   

 

  </div>
</div>
</div>




        )
    }
}
