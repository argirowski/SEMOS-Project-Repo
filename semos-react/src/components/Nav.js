import React from 'react';
import {NavLink} from "react-router-dom";

export class Nav extends React.Component{
    render() {
        return(
            <div className="container-nav">
                <header>
                    <div id="app-name">
                        <h1>
                            CV <span>Generator</span>
                        </h1>
                    </div>
                    <nav>
                        <ul>
                            <NavLink to="/">Home</NavLink>
                            <li><a href="#">about</a></li>
                            <NavLink to="/login">Login</NavLink>
                        </ul>
                    </nav>
                </header>
        </div>  
        )
    }
}