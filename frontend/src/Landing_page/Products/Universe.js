import React from 'react';
import '../CSS/main.css';
import SubmitButton from '../common_components/SubmitBtn';

function Universe() {
    return ( 
        <div className='container product-universe w-4/5 flex flex-col gap-4 my-20 mt-40 justify-center text-center items-center'>
            <div className='row'><h1>The Zerodha Universe</h1> </div>
            <div className='row'><p>Extend your trading and investment experience even further with our partner platforms</p> </div>

            <div className='row universe-img mt-8'>
                <div className='each-unit'>
                    <img src='images/smallcaseLogo.png' alt='' />
                    <p>Thematic investment platform</p>
                </div>
                <div className='each-unit'>
                    <img src='images/streakLogo.png' alt='' />
                    <p>Algo & strategy platform</p>
                </div>
                <div className='each-unit'>
                    <img src='images/sensibullLogo.svg' alt='' />
                    <p>Options Trading Platform</p>
                </div>
            </div>

            <div className='row universe-img mb-8'>
                <div className='each-unit'>
                    <img src='images/zerodhaFundhouse.png' alt='' />
                    <p>Asset Management</p>
                </div>
                <div className='each-unit'>
                    <img src='images/tijori.svg' alt='' />
                    <p>Fundamental Research Platform</p>
                </div>
                <div className='each-unit'>
                    <img src='images/dittoLogo.png' alt='' />
                    <p>Insurance</p>
                </div>
            </div>

            <div className='row'><SubmitButton /></div>
        </div>
     );
}

export default Universe;