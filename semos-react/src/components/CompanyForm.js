import React from 'react';
import { SelectCountry } from "./SelectCountry";

export class CompanyForm extends React.Component {
    constructor() {
        super();
        this.state = {
            company_name: '',
            established: '',
            email: '',
            website: '',
            phone: '',
            location: {
                country: "",
                city: "",
                zip_code: "",
                address: ""
            },
            company_information: {
                industry: "",
                scope_of_work: "",
                no_of_employees: "",
                tags: "",
                expected_hires_per_year: "",
                vision: "",
                portfolio: ""
            },
            opportunities: {
                programs_projects: "",
                HR: "",
                amenities: "",
                current_openings: ""
            }
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
            country: this.state.location.country,
            city: this.state.location.city,
            zip_code: this.state.location.zip_code,
            address: this.state.location.address,
            industry: this.state.company_information.industry,
            scope_of_work: this.state.company_information.scope_of_work,
            no_of_employess: this.state.company_information.no_of_employess,
            expected_hires_per_year: this.state.company_information.expected_hires_per_year,
            company_vision: this.state.company_information.company_vision,
            portfolio: this.state.company_information.portfolio,
            programs_projects: this.state.opportunities.programs_projects,
            HR: this.state.opportunities.HR,
            amenities: this.state.opportunities.amenities,
            current_openings: this.state.opportunities.current_openings,
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
                        location: {
                            country: "",
                            city: "",
                            zip_code: "",
                            address: ""
                        },
                        company_information: {
                            industry: "",
                            scope_of_work: "",
                            no_of_employees: "",
                            tags: "",
                            expected_hires_per_year: "",
                            vision: "",
                            portfolio: ""
                        },
                        opportunities: {
                            programs_projects: "",
                            HR: "",
                            amenities: "",
                            current_openings: ""
                        }
                    });
                    this.props.history.push('/');
                } else {
                    alert('Could not create company profile.');
                }
            })
            .catch((e) => {
                console.error('Could not create company profile.', e);
            })
    }

    render() {
        return (
            <div className="company-details-form">
                <div className="company-icon-div">
                    <img src={require("../assets/images/company-logo.png")} className="company-icon" alt=""/>
                </div>
                <h1>
                    Enter company details
	            </h1>
                <br />

                <form>
                <p>Company name</p>
                <input type="text" onChange={this.handleChange} name="company_name" />

                <p>Established</p>
                <input type="text" onChange={this.handleChange} name="established" />

                <p>Email</p>
                <input type="email" onChange={this.handleChange} name="email" required />

                <p>Company website</p>
                <input type="url" onChange={this.handleChange} name="website" required />

                <p>Telephone number</p>
                <input type="text" onChange={this.handleChange} name="phone" />
                <br />

                <p className="section">Location</p>

                <br />

                <SelectCountry />

                <p>City</p>
                <input type="text" onChange={this.handleChange} name="city" />

                <p>ZIP Code</p>
                <input type="text" onChange={this.handleChange} name="zip_code" />

                <p>Address</p>
                <input type="text" onChange={this.handleChange} name="address" />
                <br />

                <p className="section">Company information</p>

                <br />

                <p>Industry</p>
                <input type="text" onChange={this.handleChange} name="industry" />

                <p>Scope of work</p>
                <input type="text" onChange={this.handleChange} name="scope_of_work" />

                <p>Number of employees</p>
                <input type="text" onChange={this.handleChange} name="number_of_employes" />

                <p>Expected number of hires</p>
                <input type="text" onChange={this.handleChange} name="expected_hires_per_year" />

                <p>Company vision</p>
                <textarea id="company-vision" onChange={this.handleChange} name="company_vision" rows="5" cols="20">
                </textarea>

                <p>Portfolio</p>
                <textarea id="portfolio" onChange={this.handleChange} name="portfolio" rows="5" cols="20">
                </textarea>

                <br />

                <p className="section">Opportunities</p>

                <br />

                <p>Programs and projects</p>
                <input type="text" onChange={this.handleChange} name="programs_projects" />

                <p>HR</p>
                <input type="text" onChange={this.handleChange} name="HR" />

                <p>Amenities</p>
                <input type="text" onChange={this.handleChange} name="amenities" />

                <p>Current openings</p>
                <input type="text" onChange={this.handleChange} name="current_openings" />

                <br />

                <input type="submit" onClick={this.submitForm} value="Create company profile" />
                </form>
            </div>
        )
    }
}
