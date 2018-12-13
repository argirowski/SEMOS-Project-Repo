import React from 'react';
import { Route } from "react-router-dom";

import { Nav } from './Nav';
import { CompanyForm } from './CompanyForm';
import { Home } from "./Home";
import { CVForm } from "./CVForm";
import { SingUpUser } from "./SingUpUser";
import { Login } from "./Login";

export class App extends React.Component { 
    render() {
        return (
            <div id="app">
                <Nav />
                {/* <CompanyRegister /> */}

                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/CompanyForm" component={CompanyForm} />
                <Route path="/register" component= {SingUpUser} />
                <Route path="/cv-form" component={CVForm}/>
            </div>
        )
    }
}