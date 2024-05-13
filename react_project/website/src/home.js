import React  from 'react'
import {Link } from 'react-router-dom'
import { FaArrowsTurnRight } from "react-icons/fa6";
import { FiTruck } from "react-icons/fi";
import { HiCurrencyDollar } from "react-icons/hi2";
import { PiPercentFill } from "react-icons/pi";
import { IoIosHelpCircle } from "react-icons/io";
import { MdMiscellaneousServices } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { FiEye } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { RiCloseLine } from "react-icons/ri";
import Homeproduct from './homeproduct';

import './home.css'


const Home=({detail,view,close,setclose,addtocart}) => {
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
                                        <h3>RON {curElm.Price}</h3>
                                        <button onClick={()=>addtocart(curElm)}>Adaugă În Coș</button>
                                        </div>
                            </div>
                        )
                    })
                }
            </div>
        </div> : null
        } 
    <div className='top_banner'>
        <div className='container'>
            <div className='detail'>
                <h2>Cele mai bune plăci video din 2024!</h2>
                <Link to='/product' className='link'>Comandă acum <FaArrowsTurnRight/></Link>
            </div>
            <div className='img_box'>
                <img src='./img/gpu1.jpg' alt='celemaiputernic'></img>
            </div>
        </div>
     </div>
     <div className='product_type'>
        <div className='container'>
            <div className='box'>
                <div className='img_box'>
                    <img src='./img/cpu.webp' alt='cpu'></img>
                </div>
                <div className='detail'>
                    <p>9 produse</p>
                </div>
            </div>
            <div className='box'>
                <div className='img_box'>
                    <img src='./img/cooler.avif' alt='cpuheat'></img>
                </div>
                <div className='detail'>
                    <p>7 produse</p>
                </div>
            </div>
            <div className='box'>
                <div className='img_box'>
                    <img src='./img/ram.webp' alt='ram'></img>
                </div>
                <div className='detail'>
                    <p>5 produse</p>
                </div>
            </div>
            <div className='box'>
                <div className='img_box'>
                    <img src='./img/pbaza.webp' alt='placidebaza'></img>
                </div>
                <div className='detail'>
                    <p>6 produse</p>
                </div>
            </div>
            <div className='box'>
                <div className='img_box'>
                    <img src='./img/carcasa.webp' alt='carcasa'></img>
                </div>
                <div className='detail'>
                    <p>4 produse</p>
                </div>
            </div>
        </div>
     </div>
     <div className='despre'>
        <div className='container'>
            <div className='box '>
                <div className='icon'>
                    <FiTruck/>
                </div>
                <div className='detail'>
                    <h3>Transport Gratuit</h3>
                    <p>Comenzi peste 300 RON</p>
                </div>
            </div>
            <div className='box '>
                <div className='icon'>
                    <HiCurrencyDollar/>
                </div>
                <div className='detail'>
                    <h3>Returnare produs</h3>
                    <p>Banii înapoi garantat!</p>
                </div>
            </div>
            <div className='box '>
                <div className='icon'>
                    <PiPercentFill/>
                </div>
                <div className='detail'>
                    <h3>Reduceri fenomenale pentru membrii</h3>
                    <p>La fiecare comandă!</p>
                </div>
            </div>
            <div className='box '>
                <div className='icon'>
                    <IoIosHelpCircle/>
                </div>
                <div className='detail'>
                    <h3>Suport clienți</h3>
                    <p>Apel telefonic</p>
                </div>
            </div>
            <div className='box '>
                <div className='icon'>
                    <MdMiscellaneousServices/>
                </div>
                <div className='detail'>
                    <h3>Service</h3>
                    <p>Service oricând la tine acasă!</p>
                </div>
            </div>
        </div>
     </div>
     <div className='product'>
        <h2>Produse de top</h2>
        <div className='container'>
            {
                Homeproduct.map((curElm)=>
                {
                    return(
                            <div className='box' key={curElm.id}>
                                <div className='img_box'>
                                <img src={curElm.Img} alt={curElm.Title}></img>
                                    <div className='icon'>
                                        <li onClick={()=>addtocart(curElm)}><BsCart3/></li>
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
                        );
                })
            }
                
            </div>
        </div>
</>
    )
}
export default Home