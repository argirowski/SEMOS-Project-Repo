import React from 'react';
import { Route } from "react-router-dom";

import { Nav } from './Nav';
import { CompanyForm } from './CompanyForm';
import { Home } from "./Home";
import { CVForm } from "./CVForm";
import { SignUpUser } from "./SignUpUser";
import { Login } from "./Login";

export class App extends React.Component { 
    render() {
        return (
            <div id="app">
                <Nav />
                
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/company-form" component={CompanyForm} />
                <Route path="/register-user" component= {SignUpUser} />
                <Route path="/cv-form" component={CVForm}/>
            </div>
        )
    }
}