import React, { Component } from "react";
import './Dashboard.css'

class Dashboard extends Component {
    constructor(){
        super();

        this.state = {};
    };

    render() {
        return (
            <div className = "Dashboard_Container">
                <div className = "Dashboard_Search">
                    <div className = "Search_Input"></div>
                    <button className = "Search_Button"></button>
                    <button className = "Reset_Button">
                        <p className = "Reset_Text"> Reset </p>
                    </button>
                    <div className = "My_Post_Text"></div>
                    <input className = "Input_Checkbox"></input>
                </div>
                <div className = "Dashboard_Entry"></div>
        
            </div>
        );
    }
};

export default Dashboard;