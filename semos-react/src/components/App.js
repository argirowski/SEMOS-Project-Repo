import React from 'react';
import { Route } from "react-router-dom";

import { Nav } from './Nav';
import { CompanyRegister } from './CompanyRegister';
import { Home } from "./Home";
import { CVForm } from "./CVForm";
import { SingUpUser } from "./SingUpUser";

export class App extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                {/* <CompanyRegister /> */}

                <Route exact path="/" component={Home} />
                <Route path="/companyregister" component={CompanyRegister} />
                <Route path="cvform" component={CVForm}/>
                <Route path="singup_user" componet = {SingUpUser} />
                /
                >
            </div>
        )
    }
}