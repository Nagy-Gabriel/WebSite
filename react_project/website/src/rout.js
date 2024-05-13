import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from './home'
import Product from "./product";
import Cart from "./cart";
import Contact from "./contact";
import Despre from "./despre";

const Rout=({product,setProduct,detail,view,close,setclose,cart,setCart,addtocart,despre}) => {
    return (
        <>
        <Routes>
            <Route path='/' element={<Home detail={detail} view={view} close={close} setclose={setclose} addtocart={addtocart}/>}/>
            <Route path='/product' element={<Product product={product} setProduct={setProduct} detail={detail} view={view} close={close} setclose={setclose} cart={cart} setCart={setCart} addtocart={addtocart}/>}/>
            <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/despre' element={<Despre/>}/>
        </Routes>
        </>
    )
}

 
export default Rout