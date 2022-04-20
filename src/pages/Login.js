import axios from 'axios';
import React, { useState } from 'react'

const Login = () => {
    // const [ users, setUsers ] = useState();
    

  return (
    <div className='registration-form'>
        <form>
            <div className="form-group">
                <input 
                type="text" 
                class="form-control item" 
                id="email" 
                placeholder="Email"
                // onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <input 
                type="password" 
                class="form-control item" 
                id="password" 
                placeholder="Password"
                // onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <button 
                type="button" 
                class="btn btn-block create-account">
                    Login
                </button>
            </div>

        </form>
        <div className="social-media">
            <h5>Sign up with social media</h5>
            <div className="social-icons">
                <a href="/"><i class="icon-social-facebook" title="Facebook"></i></a>
                <a href="/"><i class="icon-social-google" title="Google"></i></a>
                <a href="/"><i class="icon-social-twitter" title="Twitter"></i></a>
            </div>
        </div>
    </div>
  )
}

export default Login