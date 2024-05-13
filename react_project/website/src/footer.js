import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import './footer.css'

const Footer=() => {
    return (

        <>
        <div className='footer'>
            <div className='container'>
                <div className='about'>
                    <div className='logo'>
                        <img src='./img/logo.png' alt='logo' style={{ maxWidth: '85px', maxHeight: '100px' }}></img>
                    </div>
                    <div className='detail'>
                        <p>Proiect facultate - Site componente PC</p>
                        <div className='icon'>
                            <li><CiLinkedin/></li>
                        </div>
                    </div>
                </div>
                <div className='account'>
                    <h3>Contul meu</h3>
                    <ul>
                        <li>Cont</li>
                        <li>Comenzi</li>
                        <li>Cosul meu</li>
                        <li>Transport</li>
                        <li>Retur</li>
                    </ul>
                </div>
                <div className='page'>
                    <h3>Pagini</h3>
                    <ul>
                        <li>
                            Home
                        </li>
                        <li>Despre</li>
                        <li>Contact</li>
                        <li>Termene & Condiții</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer;