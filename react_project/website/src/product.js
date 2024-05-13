import React from 'react'
import Productdetail from './productdetail'
import { BsCart3 } from "react-icons/bs";
import { FiEye } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { RiCloseLine } from "react-icons/ri";
import { useAuth0 } from "@auth0/auth0-react";


import './product.css'
const Product=({product,setProduct,detail,view,close,setclose,addtocart}) => {

    const {loginWithRedirect,isAuthenticated } = useAuth0();


    const filtterproduct=(product)=>
        {
            const update= Productdetail.filter((x)=>{
               return x.Cat===product;
            })
            setProduct(update);
        }
        const AllProduct = () => {
            setProduct(Productdetail)
        }
    return (
        <>
        {
            close ? 
            <div className='product_detail'>
            <div className='container'>
                <button onClick={()=>setclose(false)} className='closebtn'><RiCloseLine/></button>
                {
                    detail.map((curElm)=>
                    {
                        return (
                            <div className='productbox'>
                                <div className='img-box'>
                                    <img src={curElm.Img} alt={curElm.Title}></img>
                                    </div>
                                    <div className='detail'>
                                        <h4>{curElm.Title}</h4>
                                        <h2>{curElm.Cat}</h2>
                                        <p>Descoperă jocurile cu o performanță extrem de mare, lumi virtuale incredibil de detaliate, productivitate fără precedent și modalități noi de a crea.</p>
                                        <h3>{curElm.Price}</h3>
                                        <button onClick={()=>addtocart(curElm)}>Adaugă În Coș</button>
                                        </div>
                            </div>
                        )
                    })
                }
            </div>
        </div> : null
        }   
         <div className='products'>
        <h2># Produse</h2>
            <div className='container'>
                <div className='filter'>
                    <div className='categories'>
                    <h3>Categorii</h3>
                    <ul>
                        <li onClick={()=>AllProduct()}>Toate produsele</li>
                        <li onClick={()=>filtterproduct("GPU")}>GPU</li>
                        <li onClick={()=>filtterproduct("CPU")}>CPU</li>
                        <li onClick={()=>filtterproduct("Cooler")}>Cooler Procesor</li>
                        <li onClick={()=>filtterproduct("RAM")}>Memorie RAM</li>
                        <li onClick={()=>filtterproduct("Placi de baza")}>Plăci de bază</li>
                        <li onClick={()=>filtterproduct("Carcase")}>Carcase</li>
                    </ul>
                    </div>
                </div>
                <div className='productbox'>
                    <div className='contant'>
                        {
                            product.map((curElm)=>
                            {
                                return(
                                    <>
                                    <div className='box' key={curElm.id}>
                                <div className='img_box'>
                                <img src={curElm.Img} alt={curElm.Title}></img>
                                    <div className='icon'>
                                        {
                                            isAuthenticated ?
                                            <li onClick={()=>addtocart(curElm)}><BsCart3/></li>
                                            :
                                            <li onClick={() => loginWithRedirect()}><BsCart3/> </li>
                                        }
                                        <li onClick={()=>view(curElm)}><FiEye/></li>
                                        <li><CiHeart/></li>
                                    </div>
                                </div>
                                <div className='detail'>
                                <p>{curElm.Cat}</p>
                                <h3>{curElm.Title}</h3>
                                <h4>RON {curElm.Price}</h4>
                            </div>
                            </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


export default Product
