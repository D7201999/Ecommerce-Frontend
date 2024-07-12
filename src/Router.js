import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Registration from './registration';
import Login from './login';
import Homepage from './Homepage';
import Relogin from './Redirect-to-login';
import Electronics from './Electronics';
import Clothes from './clothes';
function Router(){
    return(
        <BrowserRouter>
        <Routes>
            <Route
                path='/registration' element={<Registration />} />
            <Route path='/electronics' element={<Electronics />} />
            <Route path='/' element={<Login />} />
            <Route path='/homepage' element={<Homepage />} />
            <Route path='/redirect' element={<Relogin />} />
            <Route path='/clothes' element={<Clothes />} />
        </Routes>
        </BrowserRouter>
    );
}
export default Router;