import React, { Component } from 'react'
import "../css/Login.css"


export default class Login extends Component {
    render() {
        return (
            <div className="container">
                <div className="inputs">
                    <div className="labels1">
                        <label for="uname" className="labels"> <b> Username </b> </label>
                        <input type="text" placeholder="Enter Username" name="uname" className="input" />
                    </div>
                    <div className="labels2">
                        <label for="psw" className="labels"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" className="input" />
                    </div>

                    <button type="submit" className="login-btn">Login</button>

                </div>
            </div>
        )
    }
}
