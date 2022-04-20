import axios from 'axios';
import React, { useState } from 'react'

const Register = () => {
  const url = 'http://localhost:5000/signup';
  const [customer, setCustomer] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setCustomer({
      ...customer,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      fullname: customer.fullname,
      email: customer.email,
      password: customer.password,
      confirmPassword: customer.confirmPassword
    };
    
    axios.post(url, userData)
    .then((response) => {
      console.log(response.status);
      console.log(response.data);
    })
    .catch((error) => {
      if(error.res){
        console.log(error.response);
        console.log("Server responded");
      } else {
        console.log(error);
      }
    });
  };

  return(
    <div className='registration-form'>
          <form>
              <div className="form-group">
                  <input 
                  type="text" 
                  className="form-control item" 
                  name="fullname"
                  value={customer.fullname}
                  placeholder="Full Name"
                  onChange={handleChange}
                  />
              </div>

              <div className="form-group">
                  <input 
                  type="text" 
                  className="form-control item" 
                  name="email" 
                  value={customer.email}
                  placeholder="Email"
                  onChange={handleChange}
                  />
              </div>

              <div className="form-group">
                  <input 
                  type="password" 
                  className="form-control item" 
                  name="password" 
                  value={customer.password}
                  placeholder="Password"
                  onChange={handleChange}
                  />
              </div>

              <div className="form-group">
                  <input 
                  type="password" 
                  className="form-control item" 
                  name="confirmPassword" 
                  value={customer.confirmPassword}
                  placeholder="Confirm Password"
                  onChange={handleChange}
                  />
              </div>

              <div className="form-group">
                  <button 
                  type="button" 
                  className="btn btn-block create-account"
                  onClick={handleSubmit}
                  >
                      Create Account
                  </button>
              </div>
              <a href="/login"> Already have an account </a>
          </form>
          <div className="social-media">
              <h5>Sign up with social media</h5>
              <div className="social-icons">
                  <a href="/"><i className="icon-social-facebook" title="Facebook"></i></a>
                  <a href="/"><i className="icon-social-google" title="Google"></i></a>
                  <a href="/"><i className="icon-social-twitter" title="Twitter"></i></a>
              </div>
          </div>
     </div>
  )
}

export default Register