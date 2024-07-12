import {Link} from 'react-router-dom';
export default function Relogin(){
    return(
        <>
        <div class='alignn'>
        <div className='container d-flex justify-content-center align-items-center'>
        <h5>Your are successfully created account on our website </h5>
        </div>
        <div className='container d-flex justify-content-center align-items-center'><Link to='/'>click here to redirect to login page</Link></div>
        </div>
        </>
    );
}