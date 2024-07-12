import React from 'react';
import Login from'./login.js';
import {Link} from 'react-router-dom';

function Registration(){
    return(
      <>
      <body class='bosy'>
      <div className='container d-flex justify-content-center align-items-center'>
      <div className='card cam regid'>
        <div className='card-body '>
        <form action="">
        < div className='registration'>
        <h1>Registration Form</h1>
        <div className="mb-3 registration">
        <label htmlFor="formGroupExampleInput1" className="form-label">First Name</label>
        <input type="text" className="form-control w-100 " id="formGroupExampleInput1" placeholder="Enter First Name" />
       </div>
       <div className="mb-3">
       <label htmlFor="formGroupExampleInput2" className="form-label ">Last Name</label>
      <input type="text" className="form-control w-100" id="formGroupExampleInput2" placeholder="Enter Last Name" />
      </div>
      <div className="mb-3">
       <label htmlFor="formGroupExampleInput3" className="form-label ">Father Name</label>
      <input type="text" className="form-control w-100" id="formGroupExampleInput3" placeholder="Enter Father Name" />
      </div>
      <div className="mb-3">
       <label htmlFor="formGroupExampleInput4" className="form-label ">Mother Name</label>
      <input type="text" className="form-control w-100" id="formGroupExampleInput4" placeholder="Enter Mother Name" />
      </div>
      <div className="mb-3">
       <label htmlFor="formGroupExampleInput5" className="form-label ">Email Id</label>
      <input type="email" className="form-control w-100" id="formGroupExampleInput5" placeholder="Email address" />
      </div>
      <div className="mb-3">
       <label htmlFor="password" className="form-label ">password</label>
      <input type="texpassword" className="form-control w-100" id="password" placeholder="Enter new password" />
      </div>
      <div className="mb-3">
       <label htmlFor="password1" className="form-label ">Re-enter</label>
      <input type="text" className="form-control w-100" id="password1" placeholder="confirm new password" />
      </div>
      <div>
       <label htmlFor="formGroupExampleInput6" className="form-label ">Gender</label>
       </div>
       <div>
      <input type="radio" name='gender'id="formGroupExampleInput6"/>Male
      <input type="radio" name='gender' id="formGroupExampleInput7"/>FeMale
      <input type="radio" name='gender'id="formGroupExampleInput8"/>Others
      </div>
      <div>

      <Link to='/redirect'><button className='submit'>submit</button></Link>
    </div>

      </div>
      </form>

        </div>

      </div>
      </div>
      </body>
      
      </>

    );
}
export default Registration;