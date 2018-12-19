import React from 'react';
import {NavLink} from "react-router-dom";

export class Nav extends React.Component{
    render() {
        return(
            <div className="container-nav">
                <header>
                    <div id="app-name">
                        <h1>
                            Recruiter <span>App</span>
                        </h1>
                    </div>
                    <nav>
                        <ul>
                            <NavLink to="/">Home</NavLink>
                            <li><a href="#">About</a></li>
                            <NavLink to="/login">Log in</NavLink>
                        </ul>
                    </nav>
                </header>
            </div>  
        )
    }
}