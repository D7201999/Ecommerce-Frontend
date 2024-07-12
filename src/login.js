import React from 'react';
import {Link } from 'react-router-dom';
function Login(){
return(
    <>
    <div className='container d-flex justify-content-center align-items-center'>
      <div className="main">
            <h1>Login Form</h1>
            <h3>Enter your login credentials</h3>
            <form action="">
            <div className="mb-3">
       <label htmlFor="formGroupExampleInput5" className="form-label ">Email Id</label>
      <input type="email" className="form-control w-100" id="formGroupExampleInput5" placeholder="Email address" />
      </div>
      <div className="mb-3">
       <label htmlFor="formGroupExampleInput5" className="form-label ">Password</label>
      <input type="password" className="form-control w-100" id="formGroupExampleInput5" placeholder="enter password" required />
      </div>
                  <div className="wrap">
                        <Link to='/homepage'>
                        <button type="submit" className='submit'>
                              Submit
                        </button>
                        </Link>
                       
                  </div>
            </form>
            <p>Not registered? 
        
            <Link to='/registration' target='_self'>
                     Create an account
                
                      </Link>
                      </p>
      </div>
      </div>

    </>
);
}
export default Login;