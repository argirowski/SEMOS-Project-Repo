import React from "react";
import { NavLink } from "react-router-dom";

export class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <section id="app-info">
          <div className="container">
            <h1>Welcome to Recruiter App</h1>
            <p>
              Built for both companies and job seekers, Recruiter App will help
              you find job openings and candidates that best fit you!
            </p>
          </div>
        </section>

        <section id="register-section">
          <div className="container">
            <h1>
              If you are a job seeker or a company representative sign up below.
            </h1>
            <NavLink to="/register-user">Sign Up</NavLink>
          </div>
        </section>

        <footer>
          <div className="footer-container">
            <div className="footer">
              <div className="footer-content">
                <div className="footer-content-wrapper">
                  <div className="footer-features">
                    <h2>Companies</h2>
                    <p> Lorem Ipsum.</p>
                  </div>
                  <div className="footer-features">
                    <h2>Applicants</h2>
                    <p>Lorem Ipsum.</p>
                  </div>
                  <div className="footer-features">
                    <h2>About us</h2>
                    <p>Lorem Ipsum.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <div className="footer-bottom-content" />
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
