import React from 'react';
import { NavLink } from "react-router-dom";

export class Home extends React.Component {
    render() {
        return (
            <div className="container">

                <section id="app-info">
                    <div className="container">
                        <h1>
                            Welcome to the coolest CV-related App
                        </h1>
                        <p>For both companies and job seekers, this app will help you find the best available job openings or candidates that fit your description !!!!</p>
                    </div>
                </section>

                <section id="register-section">
                    <div className="container">
                        <h1>
                            Still do not have a profile !?!?! Please sign up accordingly...
                        </h1>
                        <NavLink to="/register">Sign Up</NavLink>
                        {/* <NavLink to="/register-company">Sign Up As Company</NavLink> */}
                    </div>
                </section>

                <footer>
                    <div className="footer-container">
                        <div className="footer">
                            <div className="footer-content">
                                <div className="footer-content-wrapper">
                                    <div className="footer-features">
                                        <h2>Companies</h2>
                                        <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                    </div>
                                    <div className="footer-features">
                                        <h2>Users</h2>
                                        <p>
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                                                                    </p>
                                    </div>
                                    <div className="footer-features">
                                        <h2>About Us</h2>
                                        <p>
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                                                                    </p>
                                    </div>

                                </div>
                            </div>


                        </div>
                        <div className="footer-bottom">
                            <div className="footer-bottom-content">

                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}