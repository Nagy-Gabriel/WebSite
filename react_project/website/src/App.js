import React, { useState } from 'react'
import Nav from './nav'
import Rout from './rout';
import {BrowserRouter} from 'react-router-dom';
import Footer from './footer';
import Productdetail from './productdetail';

const App = () => {

  const[cart,setCart]=useState([])
  //detalii prod
  const[close,setclose]=useState(false);
  const[detail,setDetail]=useState([])
  //filtrare produse
  const [product,setProduct]=useState(Productdetail)
  const searchbtn =(product) =>
    {
        const change = Productdetail.filter((x)=>{
          return x.Cat===product
        })
        setProduct(change)
    }
    const view=(product)=>
      {
        setDetail([{...product}])
        setclose(true)
      }
//adaugarae in cos
      const addtocart=(product) =>
      {
        const exsit=cart.find((x)=>
          {
            return x.id === product.id
          })
  
        if(exsit)
          {
            alert("Acest produs exista deja in cos!")
          }
          else
          {
            setCart([...cart, {...product,qty:1}])
            alert("Produsul a fost adaugat in cos!")
          }
      }
      console.log(cart)
  return (
    <>
    <BrowserRouter>
      <Nav searchbtn={searchbtn}/>
        <Rout product={product} setProduct={setProduct} detail={detail} view={view} close={close} setclose={setclose} cart={cart} setCart={setCart} addtocart={addtocart}/>
        <Footer/>
      </BrowserRouter>
    </>
  )
}


export default App