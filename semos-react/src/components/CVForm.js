import React from "react";
import { SelectCountry } from "./SelectCountry";

export class CVForm extends React.Component {
  state = {
    first_name: "",
    last_name: "",
    birth_date: "",
    email: "",
    phone: "",
    location: {
      country: "",
      city: "",
      zip_code: "",
      address: ""
    },
    education: {
      institution: "",
      level: "",
      degree: "",
      start_at: "",
      finish_at: ""
    },
    experience: {
      position: "",
      job_description: "",
      tags: "",
      employer: "",
      start_at: "",
      finish_at: ""
    },
    skils: {
      languages: "",
      communicational_skills: "",
      organizational_skills: "",
      digital_skills: ""
    },
    other: {
      profile_photo: "",
      attachment: ""
    }
  };
  render() {
    return (
      <div className="cv-form">
        <div>
          <img src="assets/images/cv-logo.jpeg" class="icon" alt="" />
          <h1>Create your CV</h1>
          <form>
            <p>First name</p>
            <input type="text" name="first_name" placeholder="Your first name"
            />

            <p>Last name</p>
            <input type="text" name="last_name" placeholder="Your last name" />

            <p>Birth date</p>
            <input type="date" name="birth_date" />

            <p>Email</p>
            <input type="text" name="email" placeholder="Your Email Address" />

            <p>Telephone number</p>
            <input type="text" name="phone" placeholder="Your telephone number" />

            <p class="section">Residence</p>

            <p>Country</p>
            <SelectCountry />

            <p>City</p>
            <input type="text" name="city" placeholder="City" />

            <p>ZIP Code</p>
            <input type="text" name="zip_code" placeholder="ZIP code" />

            <p>Address</p>
            <input type="text" name="address" placeholder="Address" />

            <p class="section">Education</p>

            <p>Institution</p>
            <input type="text" name="institution" placeholder="Name of educational institution" />

            <p>Level of education</p>
            <input type="text" name="level" placeholder="Leve of education" />

            <p>Type of degree</p>
            <input type="text" name="degree" placeholder="Type of degree" />

            <p>Start</p>
            <input type="text" name="start_at" placeholder="Start date" />

            <p>End</p>
            <input type="text" name="finish_at" placeholder="End date" />

            <p class="section">Experience</p>

            <p>Position</p>
            <input type="text" name="position" placeholder="Position" />

            <p>Job description</p>
            <textarea placeholder="Describe your work repsonsibilities..."
              id="job-description"
              name="job_description"
              rows="5"
              cols="20"
            />

            <p>Tags</p>
            <input type="text" name="tags" placeholder="Highlight your skills (separate words by empty space)" />

            <p>Employer</p>
            <input type="text" name="employer" placeholder="Company name" />

            <p>Start</p>
            <input type="text" name="start_at" placeholder="Start date" />

            <p>End</p>
            <input type="text" name="finish_at" placeholder="End date" />

            <p class="section">Skills</p>

            <p>Languages</p>
            <input type="text" name="languages" placeholder="Languages you speak" />
            
            <p>Communicational Skills</p>
            <input type="text" name="communication_skills" placeholder="Your communication skills" />

            <p>Organizational Skills</p>
            <input type="text" name="organizational_skills" placeholder="Your organizational skills"
            />
            <p>Digital Skills</p>
            <input type="text" name="digital_skills" placeholder="Your digital skills" />
            
            <br />

            <button id="create-cv">Create CV</button>
          </form>
        </div>
      </div>
    );
  }
}
