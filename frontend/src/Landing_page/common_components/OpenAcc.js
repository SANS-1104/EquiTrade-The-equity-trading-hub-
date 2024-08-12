import React from 'react';
import '../CSS/main.css';
import SubmitButton from './SubmitBtn';

function OpenAcc() {
    return ( 
        <div className='container text-center mb-32'>
            <div className='row'>
                <div className='col open-acc-head'>
                    Open a Zerodha account
                </div>
            </div>

            <div className='row'>
                <div className='col open-acc-desc px-8'>
                Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
                </div>
            </div>
            <SubmitButton />
        </div>
     );
}

export default OpenAcc;