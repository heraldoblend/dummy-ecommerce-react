import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import '../App.css';
import Cartpage from "../pages/cart/Cartpage";
import Homepage from "../pages/homepage/Homepage";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";




const Pages = ({ productItems, cartItems, addToCart, shopItems, deleteFromCart, checkOut }) => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage productItems={productItems} cartItems={cartItems} addToCart={addToCart} shopItems={shopItems} />} />
          <Route path="/cart" element={<Cartpage cartItems={cartItems} addToCart={addToCart} deleteFromCart={deleteFromCart} checkOut={checkOut} />} />
          <Route path="/login" element={<Login cartItems={cartItems} />} />
          <Route path="/registration" element={<Registration cartItems={cartItems} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Pages;