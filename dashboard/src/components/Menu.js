import React, { useRef,useState } from 'react';
import { Link } from 'react-router-dom';
import './CSS/main.css';
import {FaBars , FaTimes} from 'react-icons/fa'


function Menu() {
    const [selectedMenu, setSelectedMenu] = useState(0);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    const handleMenuClick = (index) =>{
        setSelectedMenu(index)
    }

    const handleProfileClick = (index) =>{
        setIsProfileDropdownOpen(!isProfileDropdownOpen)
    }

    const menuClass = 'menu';
    const activeMenuClass = 'menu selected';

    const navRef = useRef();
    const showNavBar = ()=>{
        navRef.current.classList.toggle('responsive_nav')
    }

    return (
        <div className='menu-container'>
            <img src='images/logoIcon.png' alt='Logo' className='logo' style={{width: '50px'}} />
            <div className='menus' ref={navRef}>
                <Link style={{textDecoration: "none"}} to="/" onClick={() => handleMenuClick(0)}> 
                    <p className={selectedMenu === 0 ? activeMenuClass : menuClass} >Dashboard</p> 
                </Link>
                <Link style={{textDecoration: "none"}} to="/orders" onClick={() => handleMenuClick(1)}> 
                    <p className={selectedMenu === 1 ? activeMenuClass : menuClass} >Orders</p> 
                </Link>
                <Link style={{textDecoration: "none"}} to="/holdings" onClick={() => handleMenuClick(2)}> 
                    <p className={selectedMenu === 2 ? activeMenuClass : menuClass} >Holdings</p> 
                </Link>
                <Link style={{textDecoration: "none"}} to="/positions" onClick={() => handleMenuClick(3)}> 
                    <p className={selectedMenu === 3 ? activeMenuClass : menuClass} >Positions</p> 
                </Link>
                <Link style={{textDecoration: "none"}} to="/funds" onClick={() => handleMenuClick(4)}> 
                    <p className={selectedMenu === 4 ? activeMenuClass : menuClass} >Funds</p> 
                </Link>
                <Link style={{textDecoration: "none"}} to="/apps" onClick={() => handleMenuClick(5)}> 
                    <p className={selectedMenu === 5 ? activeMenuClass : menuClass} >Apps</p> 
                </Link>
                <button onClick={showNavBar} className='nav-btn nav-close-btn'>
                    <FaTimes />
                </button>
                    
                
                <hr />
                <div className="profile" onClick={handleProfileClick}>
                    <div className="avatar">ZU</div>
                    <p className="username">USERID</p>
                </div>
                <button onClick={showNavBar} className='nav-btn'>
                    <FaBars />
                </button>
            </div>

        </div>
    );
}

export default Menu;