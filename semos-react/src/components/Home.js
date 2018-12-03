import React from 'react';
import {NavLink} from "react-router-dom";

export class Home extends React.Component{
    render() {
        return(
            <div className="home">
                <ul>
                    <li>
                        <NavLink activeClassName="active" to="/">User Register</NavLink>
                    
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/companyregister">Company Register</NavLink>
                    
                    </li>
                </ul>
            </div>
        )
    }
}