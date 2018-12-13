import React from 'react';

export class Login extends React.Component{
    render() {
        return(
            <div className="log-in-box">
                    <div className="top-input-box">
                            <img src={require("../assets/images/log-in.png")} className="log-in-logo" />
                            <h2>Already Have an Account? <br />Log In Here...</h2> 
                    <form>
                        <div className="input-box">
                            <input type="text" name="username" placeholder="Username" />
                            <span><i className="fas fa-user-tie"></i></span>
                        </div>

                        <div className="input-box">
                            <input type="password" name="password" placeholder="Password" required />
                            <span><i className="fas fa-unlock-alt"></i></span>
                        </div>
                        <input type="submit" value="Click Here To Log In" />
                    </form>

                    </div>

</div>
        )
    }
}