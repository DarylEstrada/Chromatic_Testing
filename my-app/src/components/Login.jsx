import React from "react";
import './Login.css';
import PropTypes, { func } from "prop-types"

function Login() {

    return (

      <div class="modal-content animate">
        <div class="imgcontainer">
            <div class="container">
                <label for="Username"><b>Username</b></label>
                <input id="Username" type="text" placeholder="Enter Username" name="uname" required></input>

                <label for="Password"><b>Password</b></label>
                <input id="Password" type="Password" placeholder="Enter Password" name="psw" required></input>

                <button role="button" >Login</button>
                <label>
                <input type="checkbox" checked="checked" name="remember"/> Remember me
                </label>
            </div>
        </div>
      </div>


    )

}

export default Login