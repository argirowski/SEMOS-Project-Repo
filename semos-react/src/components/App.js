import React from 'react';
import { Nav } from './Nav';
import { CompanyRegister } from './CompanyRegister';

export class App extends React.Component{
    render() {
        return(
            <div>
                <Nav />
                <CompanyRegister />
            </div>
        )
    }
}