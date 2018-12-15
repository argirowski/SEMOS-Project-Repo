import React from 'react';
import { SelectCountry } from "./SelectCountry";

export class CompanyForm extends React.Component {
    constructor() {
        super()
        this.state = {
            company_name: '',
            established: '',
            email: '',
            website: '',
            phone: '',
            userId: '',
            country: '',
            city: '',
            zip_code: '',
            address: '',
            industry: '',
            scope_of_work: '',
            no_of_employess: '',
            tags: '',
            expected_hires_per_year: '',
            company_vision: '',
            portfolio: '',
            programs_projects: '',
            HR: '',
            amenities: '',
            current_openings: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });

        console.log(this.state);
    }

    submitForm(e) {
        var data = {
            company_name: this.state.company_name,
            established: this.state.established,
            email: this.state.email,
            website: this.state.website,
            phone: this.state.phone,
            city: this.state.city,
            zip_code: this.state.zip_code,
            address: this.state.address,
            industry: this.state.industry,
            scope_of_work: this.state.scope_of_work,
            no_of_employess: this.state.no_of_employess,
            expected_hires_per_year: this.expected_hires_per_year,
            company_vision: this.state.company_vision,
            portfolio: this.state.portfolio,
            programs_projects: this.state.programs_projects,
            HR: this.state.HR,
            amenities: this.state.amenities,
            current_openings: this.state.current_openings,
        }


        fetch('https://jsonplaceholder.typicode.com/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(data),
        })
            .then(res => {
                console.log(res);
                if (res.status == 201) {
                    this.setState({
                        company_name: '',
                        established: '',
                        email: '',
                        website: '',
                        phone: '',
                        userId: '',
                        country: '',
                        city: '',
                        zip_code: '',
                        address: '',
                        industry: '',
                        scope_of_work: '',
                        no_of_employess: '',
                        tags: '',
                        expected_hires_per_year: '',
                        company_vision: '',
                        portfolio: '',
                        programs_projects: '',
                        HR: '',
                        amenities: '',
                        current_openings: ''
                    });
                    this.props.history.push('/');
                } else {
                    alert('Not register');
                }
            })
            .catch((e) => {
                console.error('Could not write post', e);
            })
    }

    render() {
        return (
            <div className="company-details-form">
                <div className="company-icon-div">
                    <img src={require("../assets/images/company-logo.png")} className="company-icon" />
                </div>
                <h1>
                    Company form
	            </h1>
                <br />

                <form>
                <p>Company Name</p>
                <input type="text" onChange={this.handleChange} name="company_name" />

                <p>Established</p>
                <input type="text" onChange={this.handleChange} name="established" />

                <p>Email</p>
                <input type="email" onChange={this.handleChange} name="email" required />

                <p>Company Website</p>
                <input type="url" onChange={this.handleChange} name="website" required />

                <p>Telephone Number</p>
                <input type="text" onChange={this.handleChange} name="phone" />
                <br />

                <p className="section">Company Location</p>
                <br />
                <SelectCountry />


                <p>City</p>
                <input type="text" onChange={this.handleChange} name="city" />


                <p>ZIP Code</p>
                <input type="text" onChange={this.handleChange} name="zip_code" />

                <p>Address</p>
                <input type="text" onChange={this.handleChange} name="address" />
                <br />

                <p className="section">Company Info</p>
                <br />

                <p>Industry</p>
                <input type="text" onChange={this.handleChange} name="industry" />

                <p>Scope of Work</p>
                <input type="text" onChange={this.handleChange} name="scope_of_work" />

                <p>Number of Employees</p>
                <input type="text" onChange={this.handleChange} name="number_of_employes" />

                <p>Expected Hirings</p>
                <input type="text" onChange={this.handleChange} name="expected_hires_per_year" />

                <p>Company Vision</p>
                <textarea id="company-vision" onChange={this.handleChange} name="company_vision" >
                </textarea>

                <p>Portfolio</p>
                <input type="text" onChange={this.handleChange} name="portfolio" />
                <br />

                <p className="section">Opportunities</p>
                <br />

                <p>Programs</p>
                <input type="text" onChange={this.handleChange} name="programs_projects" />
                <p>HR</p>
                <input type="text" onChange={this.handleChange} name="HR" />
                <p>Amenities</p>
                <input type="text" onChange={this.handleChange} name="amenities" />
                <p>Current Openings</p>
                <input type="text" onChange={this.handleChange} name="current_openings" />
                <br />

                <input type="submit" onClick={this.submitForm} value="Click Here To Register" />
                </form>
            </div>
        )
    }
}
