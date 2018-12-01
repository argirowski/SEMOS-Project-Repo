import React from 'react';

export class CompanyRegister extends React.Component{
    render() {
        return(
            <div class="wrapper-signup">
				
				
            <form class="company-signup">
                              
                                  <div>
                                    <span class="company-signup-title">
                                      Company Registration
                                    </span>
                                  </div>
              
                                    <div class="wrapper">
                                        <input type="text" required placeholder="Name"/>
                                        <span class="highlight"></span>
                                        <span class="bar"></span>
                                        {/* <label>Name</label> */}
                                
                                    </div>
    
                                  <div class="wrapper">
                                      <input type="email" required />
                                      <span class="highlight"></span>
                                      <span class="bar"></span>
                                      <label>Email</label>
                                  </div>
                        
                        
                                  <div class="wrapper">
                                      <input type="password" required />
                                      <span class="highlight"></span>
                                      <span class="bar"></span>
                                      <label>Password</label>
                                    </div>
  
                                  <div class="wrapper">
                                      <input type="text" required />
                                      <span class="highlight"></span>
                                      <span class="bar"></span>
                                      <label>Website</label>
                                  </div>
    
                                  <div class="wrapper">
                                      <input type="text" required />
                                      <span class="highlight"></span>
                                      <span class="bar"></span>
                                      <label>Country</label>
                                  </div>
    
    
                                                <div class="wrapper">
                                                    <input type="text" required />
                                                    <span class="highlight"></span>
                                                    <span class="bar"></span>
                                                    <label>City</label>
                                                </div>
                                  
                                                <div class="wrapper">
                                                    <input type="text" name="Field" required />
                                                    <span class="highlight"></span>
                                                    <span class="bar"></span>
                                                    <label>Field</label>
                                                </div>
                        
    
                                          <div class="container-company-signup-btn">
                                            <button class="company-signup-btn">
                                              Submit
                                            </button>
                                            </div>
            </form>
          </div>
        )
    }
}