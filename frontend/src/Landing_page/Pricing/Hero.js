import React from 'react';
import '../CSS/main.css';


function Hero() {
    return ( 
        <div className='container w-4/5'>
            <div className='row about-hero flex flex-wrap items-center justify-center hero text-center mb-20'>
                <div className='upper-pricing-hero'>
                    <h1>Pricing</h1>
                    <h4>Free equity investments and flat ₹20 intraday and F&O trades</h4>
                </div>
                <div className='lower-pricing-hero flex flex-wrap items-center justify-center'>
                    <div className='w-1/3 each-card'>
                        <img src='images/pricingimg2.svg' alt='' className='pb-20'/>
                        <h2>Free equity delivery</h2>
                        <p>All equity delivery investments (NSE, BSE),<br /> are absolutely free — ₹ 0 brokerage.</p>
                    </div>

                    <div className='w-1/3 each-card'>
                        <img src='images/pricingimg3.svg' alt='' className='pt-4'/>
                        <h2 className='pt-12'>Intraday and F&O trades</h2>
                        <p>Flat ₹ 20 or 0.03% (whichever is lower)<br /> per executed order on intraday trades<br /> across equity, currency, and commodity<br /> trades. Flat ₹20 on all option trades.</p>
                    </div>

                    <div className='w-1/3 each-card'>
                        <img src='images/pricingimg2.svg' alt='' className='pb-8'/>
                        <h2 className='pt-4'>Free direct MF</h2>
                        <p>All direct mutual fund investments are<br /> absolutely free — ₹ 0 commissions & DP<br /> charges.</p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Hero;