import React from "react";

export class SingUpUser extends React.Component {
    render (){
        return(
            <div class="wrapper-signup">


                <form class="user-signup">

                    <div>
                        <span class="user-signup-title">
                            User Registration
                        </span>
                    </div>

                    <label for="first_name">First Name: </label>
                    <input type="text" name="first_name"/>
                    <span class="highlight"></span>
                    <span class="bar"></span>

                    <label for="first_name">Last Name: </label>
                    <input type="text" name="last_name"/>
                    <span class="highlight"></span>
                    <span class="bar"></span>

                    <label for="first_name">Email: </label>
                    <input type="text" name="email"/>
                    <span class="highlight"></span>
                    <span class="bar"></span>

                    <label for="first_name">Password: </label>
                    <input type="text" name="password"/>
                    <span class="highlight"></span>
                    <span class="bar"></span>

                    <label for="first_name">Type: </label>
                    <input type="text" name="type"/>
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <br/>

                    <h3>Location</h3>

                    <br/>
                    <label for="first_name">Country: </label>
                    <input type="text" name="country"/>
                    <span class="highlight"></span>
                    <span class="bar"></span>

                    <label for="first_name">City: </label>
                    <input type="text" name="city"/>
                    <span class="highlight"></span>
                    <span class="bar"></span>

                    <label for="first_name">Region: </label>
                    <input type="text" name="region"/>
                    <span class="highlight"></span>
                    <span class="bar"></span>

                    <label for="first_name">Address: </label>
                    <input type="text" name="address"/>
                    <span class="highlight"></span>
                    <span class="bar"></span>

                    <div class="container-user-signup-btn">
                        <button class="user-signup-btn">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}