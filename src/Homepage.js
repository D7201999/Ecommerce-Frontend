import {Link} from 'react-router-dom';
function Homepage(){
    return(
        <>
        <body>
        <div className='background-imag'>
        <nav>
            <ol>
               <Link to='/registration'><button className='submit'> profile</button></Link> 
               <Link to='/electronics'><button className='submit'>Electronics</button></Link>
                <Link to='/clothes'><button className='submit'>Clothes</button></Link>
            </ol>
        </nav>
        <div className='container d-flex justify-content-center align-items-center'>
        <h1>Welcome to our website</h1>
       
        </div>
        <div className='container d-flex justify-content-center align-items-cente'>
        <h6>For any queries contact 	&#128222;9133269297</h6>
        </div>
    
            
        </div>
        </body>
        </>
    );
}
export default Homepage;