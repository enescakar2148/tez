import React, { Component } from 'react'
import "../css/Login.css"
import loginp from '../images/login1.png';

export default class Login extends Component {
    render() {
        return (
            <div className="login-swapper">
                <div className="photo">
                    <img src={loginp} id='login-photo' alt='login photo'/>
                </div>
                <div className="inputs">

                <label className="input-text" for="fname">E-mail </label>
                <input className="input" type="text" id="fname" name="fname" />
               
                <label className="input-text" for="input">Şifre</label>
                <input className="input" type="text" id="lname" name="lname" />
               
                <button className="buttonx" > Giriş Yap </button>
                <label className="input-text" for="input">Şifrenizi mi unuttunuz?</label>
                </div>

            </div>

        )
    }
}
