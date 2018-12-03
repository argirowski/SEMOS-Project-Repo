import React from 'react';

export class CVForm extends React.Component {
    render() {
        return (

            <div className="main-container" >


                <div className="wrapper-signup" />


                <form className="company-signup" />

                <div>
                    <span className="company-signup-title">
                        Create Your CV
          </span>
                </div>

                <div className="wrapper">
                    <input type="text" name="first_name" placeholder="First Name" />
                    <span className="highlight"></span>
                    <span className="bar"></span>

                </div>

                <div className="wrapper">
                    <input type="text" name="last_name" placeholder="Last Name" />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                </div>


                <div className="wrapper">
                    <input type="date" name="birth_date" placeholder="Date Of Birth" />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                </div>

                <div className="wrapper">
                    <input type="tel" name="phone" placeholder="Phone Number" />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                </div>

                <div className="wrapper">
                    <select name="country">
                        <option value="">Country</option>
                        <option value="AF">Afghanistan</option>
                        <option value="AL">Albania</option>
                        <option value="DZ">Algeria</option>
                    </select>
                    <span class="highlight"></span>
                    <span class="bar"></span>
                </div>


                <div className="wrapper">
                    <select name="city" />>
                <option value="">City</option>
                    <option value="SK">Skopje</option>
                    <option value="BT">Bitola</option>
                    <option value="VE">Veles</option>
                    <span className="highlight"></span>
                    <span className="bar"></span>

                </div>

                <div className="wrapper">
                    <input type="text" placeholder="ZIP Code" />
                    <span className="highlight"></span>
                    <span className="bar"></span>

                </div>

                <div className="wrapper">
                    <input type="text" name="address" placeholder="Address" />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                </div>

                <div className="wrapper">
                    <input type="text" name="school_name" placeholder="School Name" />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                </div>

                <div className="wrapper">
                    <input type="text" name="level" placeholder="Level Of Education" />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                </div>

                <div className="wrapper">
                    <input type="text" name="degree" placeholder="Degree" />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                </div>

                <div className="container-company-signup-btn" />
                <button className="company-signup-btn">
                    Press to Create CV
          </button>

            </div>
        )
    }
}