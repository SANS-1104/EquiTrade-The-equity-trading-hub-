import './CSS/Navbar.css';
import { useRef, React } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar({ username }) {
    const [selectedMenu, setSelectedMenu] = useState(0);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    const handleMenuClick = (index) => {
        setSelectedMenu(index);
    }

    const handleProfileClick = () => {
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
    }

    const menuClass = 'menu';
    const activeMenuClass = 'menu selected';

    const navRef = useRef();
    const showNavBar = () => {
        navRef.current.classList.toggle('responsive_nav');
    }

    return (
        <header>
            <div className='nifty-sensex'>
                <div className='nifty'>
                    <div className='index'>NIFTY 50</div>
                    <div className='index-points'>{100.2}</div>
                    <div className='percent'></div>
                </div>
                <div className='sensex'>
                    <div className='index'>SENSEX</div>
                    <div className='index-points'>{100.2}</div>
                    <div className='percent'></div>
                </div>
            </div>
            <div className='image-routes'>
                <img src='images/logoIcon.png' alt="Logo" className='logo' />
                <nav ref={navRef}>
                    <Link to={`/${username}`} onClick={() => handleMenuClick(0)}>
                        <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
                    </Link>
                    <Link to={`/${username}/orders`} onClick={() => handleMenuClick(1)}>
                        <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
                    </Link>
                    <Link to={`/${username}/holdings`} onClick={() => handleMenuClick(2)}>
                        <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
                    </Link>
                    <Link to={`/${username}/positions`} onClick={() => handleMenuClick(3)}>
                        <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
                    </Link>
                    <Link to={`/${username}/funds`} onClick={() => handleMenuClick(4)}>
                        <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
                    </Link>
                    <Link to={`/${username}/apps`} onClick={() => handleMenuClick(5)}>
                        <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>Apps</p>
                    </Link>
                    <button onClick={showNavBar} className='nav-btn nav-close-btn'>
                        <FaTimes />
                    </button>
                </nav>
                <div className="profile" onClick={handleProfileClick}>
                    <div className="avatar"> {username[0]}{username[1]} </div>
                    <p className="username">{username}</p>
                </div>
                <button onClick={showNavBar} className='nav-btn'>
                    <FaBars />
                </button>
            </div>
        </header>
    );
}

export default Navbar;
