import React, { Component } from 'react'
import "../css/Login.css"
import loginp from '../images/login1.png';

export default class Login extends Component {
    render() {
        return (
            <div className="container">
                <div className="photo">
                    <img src={loginp} />
                </div>
                <div className="content">
                    
                    <label className="label1" for="fname">E-mail </label>
                    <input className="labelx" type="text" id="fname" name="fname" />
                        <label for="lname">Şifre</label>
                        <input type="text" className="labelx" id="lname" name="lname" />
                        <div className='btn-b'>
                        <label for="lname">Şifrenizi mi unuttunuz?</label>
                        <button className="buttonx" > Giriş Yap </button>
                        </div>
               
                        </div>



                    </div>

                        )
    }
}
