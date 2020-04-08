import React from 'react'
import "./style/Blog.css"

import { GiBookCover } from "react-icons/gi";

const Blog = () => {
    return (
        <>
            <header className="header">
                <div className="header-content">
                    <div className="header-logo">
                        <h3>
                            < GiBookCover />
                            &ensp; The Book Store
                        </h3>
                    </div>
                    <ul>
                        <li>Cart</li>
                        <li>Account</li>
                        <li>Login/signup</li>
                    </ul>
                </div>
            </header>
            <footer>
                <p>ABOuZAR, All Right Reserved</p>
            </footer>
        </>
    );
};

export default Blog;