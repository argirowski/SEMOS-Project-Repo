import React from 'react';

export class CompanyRegister extends React.Component{
    render() {
        return(
            <div className="wrapper-signup">
				
				
            <form className="company-signup">
                              
                                  <div>
                                    <span className="company-signup-title">
                                      Company Registration
                                    </span>
                                  </div>
              
                                    <div className="wrapper">
                                        <input type="text" required placeholder="Name"/>
                                        <span className="highlight"></span>
                                        <span className="bar"></span>
                                        {/* <label>Name</label> */}
                                
                                    </div>
    
                                  <div className="wrapper">
                                      <input type="email" required />
                                      <span className="highlight"></span>
                                      <span className="bar"></span>
                                      <label>Email</label>
                                  </div>
                        
                        
                                  <div className="wrapper">
                                      <input type="password" required />
                                      <span className="highlight"></span>
                                      <span className="bar"></span>
                                      <label>Password</label>
                                    </div>
  
                                  <div className="wrapper">
                                      <input type="text" required />
                                      <span className="highlight"></span>
                                      <span className="bar"></span>
                                      <label>Website</label>
                                  </div>
    
                                  <div className="wrapper">
                                      <input type="text" required />
                                      <span className="highlight"></span>
                                      <span className="bar"></span>
                                      <label>Country</label>
                                  </div>
    
    
                                                <div className="wrapper">
                                                    <input type="text" required />
                                                    <span className="highlight"></span>
                                                    <span className="bar"></span>
                                                    <label>City</label>
                                                </div>
                                  
                                                <div className="wrapper">
                                                    <input type="text" name="Field" required />
                                                    <span className="highlight"></span>
                                                    <span className="bar"></span>
                                                    <label>Field</label>
                                                </div>
                        
    
                                          <div className="container-company-signup-btn">
                                            <button className="company-signup-btn">
                                              Submit
                                            </button>
                                            </div>
            </form>
          </div>
        )
    }
}