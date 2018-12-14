import React from "react";
import { SelectCountry } from "./SelectCountry";

export class SingUpUser extends React.Component {
	constructor() {
		super()
		this.state = {
			type: "",
			first_name: "",
			last_name: "",
			email: "",
			password: "",
			country: "",
			city: "",
			region: "",
			address: ""
		}

		this.onChange = this.onChange.bind(this);
		this.submitForm = this.submitForm.bind(this);
	}

	onChange(e) {
        this.setState({
			[e.target.name]: e.target.value
        });
	}

	submitForm(e) {
		let user = {
			type: this.state.type,
			first_name: this.state.first_name,
			last_name: this.state.last_name,
			email: this.state.email,
			password: this.state.password,
			country: this.state.country,
			city: this.state.city,
			region: this.state.region,
			address: this.state.address
		};
		fetch('https://jsonplaceholder.typicode.com/users', {
            method: "POST", 
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(user), 
		})
		.then(res => {
		console.log(res);
		if(this.state.type === "Applicant" && res.status == 201) {
			this.props.history.push('/cv-form');
		}else{
			this.props.history.push('/');
		}
		})
		.catch((error) => {
            console.error('Could not sign up user', error);
        })
	}
	

	render() {
		return (
			<div className="forms-container">
			
				<div className="sign-up-box">
					<div className="top-input-box">
						<img src={require("../assets/images/sign-up.png")} className="sign-up-logo" />
						<p className="section">Basic info</p>

						<p className="section">User type</p>

						<div className="input-box">
							<select name="region" onChange={this.handleChange}>
								<option value="select-type" >Select User Type...</option>
								<option value="applicant">Applicant</option>
								<option value="company">Company</option>
							</select>
							<span><i className="fas fa-compass"></i></span>
						</div>
						<form>
							<div className="input-box">
								<input type="text" onChange={this.handleChange} name="first_name" placeholder="Your First Name" />
								<span><i className="fas fa-file-signature"></i></span>
							</div>

							<div className="input-box">
								<input type="text" onChange={this.handleChange}  name="last_name" placeholder="Your Last Name" />
								<span><i className="fas fa-file-signature"></i></span>
							</div>

							<div className="input-box">
								<input type="email" onChange={this.handleChange} name="email" placeholder="Your Email Address" required />
								<span><i className="fas fa-envelope"></i></span>
							</div>

							<div className="input-box">
								<input type="password" onChange={this.handleChange} name="password" placeholder="Password" required />
								<span><i className="fas fa-unlock-alt"></i></span>
							</div>

							<p className="section">Location</p>

							<SelectCountry />

							<div className="input-box">
								<input type="text" onChange={this.handleChange} name="city" placeholder="City Of Residence" />
								<span><i className="fas fa-city"></i></span>
							</div>

							<div className="input-box">
								<select id="region" name="region">
									<option value="select-region">Select Region...</option>
									<option value="NO">North</option>
									<option value="SO">South</option>
									<option value="EA">East</option>
									<option value="WE">West</option>
								</select>
								<span><i className="fas fa-compass"></i></span>
							</div>

							<div className="input-box">
								<input type="text" onChange={this.handleChange} name="address" placeholder="Address of Residence" />
								<span><i className="fas fa-address-card"></i></span>
							</div>

							<input type="submit" onClick={this.submitForm} value="Click Here To Register" />
						</form>
					</div>
				</div>
			</div>
		)
	}
}