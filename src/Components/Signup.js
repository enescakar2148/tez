import React, { Component } from 'react'
import "../css/Signup.css"


export default class Signup extends Component {
  render() {
    return (

      <div className="signupFrm">
        <form action="" className="form">
          <h1 class="title">Sign up</h1>

          <div class="inputContainer">
            <input type="text" className="inpute" placeholder="a" />
            <label for="" className="label">Email</label>
          </div>

          <div class="inputContainer">
            <input type="text" className="inpute" placeholder="a" />
            <label for="" className="label">Username</label>
          </div>

          <div class="inputContainer">
            <input type="text" className="inpute" placeholder="a" />
            <label for="" className="label">Password</label>
          </div>

          <div class="inputContainer">
            <input type="text" className="inpute" placeholder="a" />
            <label for="" className="label">Confirm Password</label>
          </div>

          <input type="submit" className="submitBtn" value="Sign up" />
        </form>

      </div>
    )
  }
}
