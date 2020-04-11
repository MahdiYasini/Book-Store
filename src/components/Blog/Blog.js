import React from 'react'
import "./style/Blog.css"
import { Link, Switch, Route } from 'react-router-dom';

import { GiBookCover } from "react-icons/gi";

import BooksContainer from '../../container/BooksContainer/Bookscontainer';

const Blog = () => {
    return (
        <>
            <header className="header">
                <div className="header-content">
                    <div className="header-logo">
                        <h3>
                            < GiBookCover />
                            &ensp; The 943 Book Store
                        </h3>
                    </div>
                    <ul>
                        <li><Link to="">Cart</Link></li>
                        <li><Link to="">Account</Link></li>
                        <li><Link to="">Login</Link></li>
                    </ul>
                </div>
            </header>
            <section>
                <Switch>
                    <Route path = "/" component = {BooksContainer}/>
                </Switch>
            </section>
            <footer className="footer">
                <p>ABOuZAR, All Right Reserved</p>
            </footer>
        </>
    );
};

export default Blog;