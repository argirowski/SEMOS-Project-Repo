import React from "react";
import { SelectCountry } from "./SelectCountry";

export class SignUpUser extends React.Component {
	constructor() {
		super();
		this.state = {
			type: "",
			first_name: "",
			last_name: "",
			email: "",
			password: "",
			country: "",
			city: ""
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
		let user = {
			type: this.state.type,
			first_name: this.state.first_name,
			last_name: this.state.last_name,
			email: this.state.email,
			password: this.state.password,
			country: this.state.country,
			city: this.state.city
		};
		fetch('https://jsonplaceholder.typicode.com/users', {
            method: "POST", 
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(user)
		})
		.then(res => {
			console.log(res);
			switch(this.state.type) {
				case 'applicant':
					this.props.history.push('/cv-form');
				break;
				case 'company':
					this.props.history.push('/company-form');
				break;
				default:
					this.props.history.push('/');
			}
			// if(this.state.type === "applicant" && res.status == 201) {
			// 	this.props.history.push('/cv-form');
			// }else{
			// 	this.props.history.push('/');
			// }
		})
		.catch((error) => {
            console.error('Could not sign up the user.', error);
        })
	}
	
	render() {
		return (
			<div className="forms-container" >
				<div className="sign-up-box">
					<div className="top-input-box">
						<img src={require("../assets/images/sign-up.png")} className="sign-up-logo" alt=""/>
						<p className="section">Basic Info</p>

						<div className="input-box">
							<select name="type" onChange={this.handleChange}>
								<option value="select-type" >Select User Type</option>
								<option value="applicant">Applicant</option>
								<option value="company">Company</option>
							</select>
							<span><i className="fas fa-compass"></i></span>
						</div>

						{/* <form> */}
							<div className="input-box">
								<input type="text" onChange={this.handleChange} name="first_name" placeholder="Your first name" />
								<span><i className="fas fa-file-signature"></i></span>
							</div>

							<div className="input-box">
								<input type="text" onChange={this.handleChange}  name="last_name" placeholder="Your last name" />
								<span><i className="fas fa-file-signature"></i></span>
							</div>

							<div className="input-box">
								<input type="email" onChange={this.handleChange} name="email" placeholder="Your email" required />
								<span><i className="fas fa-envelope"></i></span>
							</div>

							<div className="input-box">
								<input type="password" onChange={this.handleChange} name="password" placeholder="Password" required />
								<span><i className="fas fa-unlock-alt"></i></span>
							</div>

							<p className="section">Location</p>

							<SelectCountry />

							<div className="input-box">
								<input type="text" onChange={this.handleChange} name="city" placeholder="City" />
								<span><i className="fas fa-city"></i></span>
							</div>

							<input type="submit" onClick={this.submitForm} value="Sign Up" />
						{/* </form> */}
					</div>
				</div>
			</div>
		)
	}
}