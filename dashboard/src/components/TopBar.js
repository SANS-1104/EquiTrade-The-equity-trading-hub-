import React from 'react';
import Menu from './Menu';
import './CSS/main.css';

function TopBar() {
    return (
        <div className='topbar-container'>
            <div className='indices-container'>
                <div className='nifty'>
                    <div className='index'>NIFTY 50</div>
                    <div className='index-points'> {100.2} </div>
                    <div className='percent'></div>
                </div>
                <div className='sensex'>
                    <div className='index'>SENSEX</div>
                    <div className='index-points'> {100.2} </div>
                    <div className='percent'></div>
                </div>
            </div>
            <Menu />
        </div>
    );
}

export default TopBar;