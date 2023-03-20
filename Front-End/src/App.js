
import './App.css';
import Header  from './Header/Header';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import { Home } from './Home/Home';
import {About} from './About/About';
import { Login } from './Login/Login';
// import { Signin } from './Login/Signin';
import { Register } from './Register/Register';
import { Product } from './Product/Product';
import  {Admin} from './Admin/Admin';
import { ManageCategory } from './Category/ManageCategory';
import { AddCategory } from './Category/AddCategory';
import { ShowAllUser } from './AdminUser/ShowUsers';
import { AddAdminUser } from './AdminUser/AddAdminUser';
import { ForgotPassword } from './ForgotPassword/ForgotPassword';
// import { VerifyOtp } from './Admin/VerifyOtp';
import { NewPassword } from './ForgotPassword/NewPassword';
import { Manager } from './Manager/Manager';
import {ShopMart} from './ShoppingCart/ShopMart'
import { UpdateUser } from './AdminUser/UpdateUser';
import {Checkout} from './Checkout/Checkout';
import { UploadImage } from './Product/UploadImage';
import { ShowCart } from './ShoppingCart/ShowCart';



function App() {
  return (
    <>
    <div className='div'>

    
    <Header></Header>
   
    
      {/* <Link to="/">Home</Link><br/>
      <Link to="/about">About</Link><br/>
      <Link to="/product">Product</Link><br/>
      <Link to="/login">Login</Link><br/>
      <Link to="/signup">SignUp</Link> */}
      <Routes>
      <Route  path='/' element={< Home />}></Route>
      <Route  path='/about' element={< About />}></Route>
      <Route  path='/login' element={< Login />}></Route>
      {/* <Route  path='/signin' element={< Signin />}></Route> */}
      <Route  path='/register' element={< Register />}></Route>
      <Route  path='/product' element={< Product />}></Route>
      <Route  path='/admin' element={<Admin />}></Route>   
      <Route  path='/managedcategory' element={<ManageCategory />}></Route>
      <Route  path='/addcategory' element={<AddCategory/>}></Route>
      <Route  path='/showalluser' element={<ShowAllUser/>}></Route>
      <Route  path='/addadminuser' element={<AddAdminUser/>}></Route>
      <Route  path='/forgotpassword' element={<ForgotPassword/>}></Route>
      {/* <Route  path='/verifyotp' element={<VerifyOtp/>}></Route> */}
      <Route  path='/newpassword' element={<NewPassword/>}></Route>
      <Route  path='/manager' element={<Manager/>}></Route>
      <Route  path='/shopmart' element={<ShopMart/>}></Route>
      <Route  path='/userupdate' element={<UpdateUser/>}></Route>
      <Route  path='/checkout' element={<Checkout/>}></Route>
      <Route  path='/uploadimage' element={<UploadImage/>}></Route>
      <Route  path='/showcart' element={<ShowCart/>}></Route>

      </Routes>
      </div>
    </>
  );
}

export default App;
