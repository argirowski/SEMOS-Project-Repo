import React from 'react';
import {NavLink} from "react-router-dom";

export class Nav extends React.Component{
    render() {
        return(
            <div className="container-nav">
                <nav className="nav">
                    <ul>
                        <li>
                            <NavLink activeClassName="active" to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/companyregister">Company Register</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="#">Log in</NavLink>
                        </li>
                        <li>
                        <NavLink activeClassName="active" to="/singup_user">Sing Up User</NavLink>
                        </li>
                        <li>
                        <NavLink activeClassName="active" to="#">Find a job</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="#">Contacts</NavLink>
                        </li>
                    </ul>
                </nav>  
        </div>  
        )
    }
}