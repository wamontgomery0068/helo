import React, { Component } from "react";
import './Auth.css';
import axios from "axios";
import Wink from "../../Images/winkface.png";

class Auth extends Component {
    constructor(){
        super();

        this.state = {
            username: "",
            password: ""
        };
    };

    render() {
        return (
            <div className = "Auth_Container">
                <div className = "Auth_Card">
                    <div className = "Auth_Card_Logo">
                        <img className = "Logo_Image" src= {Wink} alt="Winky Smiley" />
                    </div>
                    <div className = "Auth_Card_Title">
                        <p className = "Auth_Card_Title_Text"> Helo </p>
                    </div>
                    <div className = "Auth_Card_Field">
                        <p className = "Auth_Card_Field_Text"> Username: <input className = "Auth_Input_1" /></p>
                        <p className = "Auth_Card_Field_Text"> Password: <input className = "Auth_Input_2" /> </p>
                    </div>
                    <div className = "Auth_Card_Buttons">
                        <button className = "Auth_Card_Button_Login">
                            <p className = "Auth_Card_Button_Login_Text"> Login </p>
                        </button>
                        <button className = "Auth_Card_Button_Register">
                            <p className = "Auth_Card_Button_Register_Text"> Register </p>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
};

export default Auth;