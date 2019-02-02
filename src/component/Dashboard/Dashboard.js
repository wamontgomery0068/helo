import React, { Component } from "react";
import Search from "../../Images/search.png";
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
                    <input className = "Search_Input" type = "text" placeholder = "Search by Title" />
                    <button className = "Search_Button">
                        <img className = "Search_Image" src = { Search } />
                    </button>
                    <button className = "Reset_Button">
                        <p className = "Reset_Text"> Reset </p>
                    </button>
                    <div className = "My_Post">
                        <p className = "My_Post_Text"> My Posts </p>
                    </div>
                    <input className = "Input_Checkbox" type = "Checkbox" />
                </div>
                <div className = "Dashboard_Entry">
                    <div className = "Data_Entry">
                        <div className = "Data_Name"></div>
                        <div className = "Data_Author"></div>
                        <div className = "Data_Profile_Image"></div>
                    </div>
                </div>
        
            </div>
        );
    }
};

export default Dashboard;