import React from 'react';
import '../CSS/main.css';
import { useRef } from 'react';
// npm i react-icons
import {FaBars , FaTimes} from 'react-icons/fa';


export default function Navbar(){
    const navRef = useRef();
    const showNavBar = ()=>{
        navRef.current.classList.toggle('responsive_nav')
    }
    return(
        <header>
            <a href="/"><img src='images/zerodhaLogo2.png' alt="Logo" className='logo'/></a>
            <nav ref={navRef}>
                <a href="/user">Signup/Login</a>
                <a href="/about">About</a>
                <a href="/products">Products</a>
                <a href="/pricing">Pricing</a>
                <a href="/support" className="">Support</a>
                <button onClick={showNavBar} className='nav-btn nav-close-btn'>
                    <FaTimes />
                </button>
            </nav>
            <button onClick={showNavBar} className='nav-btn'>
                <FaBars />
            </button>
        </header>
    )
}