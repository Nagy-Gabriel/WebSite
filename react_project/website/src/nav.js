import React from 'react'
import { FaTruckMoving, FaUser } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsBagPlus } from "react-icons/bs";
import { FiLogOut, FiLogIn } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

import './nav.css'
import { useState } from 'react';

const Nav = ({searchbtn}) => {
    const [search,setSearch] = useState()
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

    return (
        <>
            <div className='free'>
                <div className='icon'>
                    <FaTruckMoving />
                </div>
                <p>Transport GRATUIT peste 300 RON!</p>
            </div>
            <div className='main_header'>
                <div className='container'>
                    <div className='logo'>
                        <img src='./img/logo.png' alt='logo' style={{ maxWidth: '85px', maxHeight: '100px' }} />
                    </div>
                    <div className='search_box'>
                        <input
                            type='text'
                            value={search}
                            placeholder='Cautati Produsul Dorit...'
                            autoComplete='off'
                            onChange={(e)=> setSearch(e.target.value)}
                        />
                        <button onClick={()=> searchbtn(search)}>Cautare</button>
                    </div>
                    <div className='icon'>
                        {
                            isAuthenticated &&
                            (<div className='account'>
                                <div className='user_icon'>
                                    <FaUser />
                                </div>
                                <p>Bun venit, {user.name}!</p>
                            </div>)
                        }

                        <div className='second_icon'>
                            <Link to="/" className='link'><IoIosHeartEmpty /></Link>
                            <Link to="/cart" className='link'><BsBagPlus /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='header'>
                <div className='container'>
                    <div className='nav'>
                        <ul>
                            <li>
                                <Link to='/' className='link'>Home</Link>
                            </li>
                            <li>
                                <Link to='/product' className='link'>Produse</Link>
                            </li>
                            <li>
                                <Link to='/about' className='link'>Despre</Link>
                            </li>
                            <li>
                                <Link to='/contact' className='link'>Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div className='auth'>
                        {
                            isAuthenticated ?
                                <button onClick={() => logout({ returnTo: window.location.origin })}><FiLogOut /></button>
                                :
                                <button onClick={() => loginWithRedirect()}><FiLogIn /></button>

                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav;
