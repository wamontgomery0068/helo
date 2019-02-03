import React, { Component } from "react";
import './Post.css';

class Post extends Component {
    constructor(){
        super();

        this.state = {};
    };

    render() {
        return (
            <div className = "Post">
                <div className = "Post_Container"></div>
            </div>
        );
    }
};

export default Post;