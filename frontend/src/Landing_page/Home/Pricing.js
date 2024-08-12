import React from 'react';
import '../CSS/main.css';

function Pricing() {
    return (  
        <div className='container  flex flex-wrap justify-center items-center mb-32'>
            <div className='row'>
                <div className='col-1'></div>
                <div className='col-4 pricing-content'>
                    <div className='row'>
                        <h2 className='price-heading'>Unbeatable pricing</h2>
                    </div>
                    <div className='row'>
                        <p className='price-desc'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    </div>
                </div>
                <div className='col-1'></div>
                <div className='col-6 flex flex-wrap pricing-image-cont'>
                    <div className='row price-box'>
                        <div className='row pricing-images'><img src='images/pricingimg1.svg' alt=''/> </div>
                        <p> Free account <br /> opening</p>
                    </div>
                    <div className='row price-box'>
                        <div className='row pricing-images'><img src='images/pricingimg2.svg' alt=''/> </div>
                        <p> Free equity delivery <br /> and direct mutual funds</p>
                    </div>
                    <div className='row price-box'>
                        <div className='row pricing-images'><img src='images/pricingimg3.svg' alt=''/> </div>
                        <p> Intraday and <br /> F&O</p>
                    </div>                    
                </div>
            </div>
            <div className='row w-full'>
                <div className='col-1'></div>
                <div className='col-11 align-self-start'>
                    <p className='explore-prod see-pricing pl-4 mt-8'> <a href='/pricing'>See Pricing <i class="fa-solid fa-arrow-right-long"></i></a> </p>
                </div>                
            </div>
        </div>
    );
}

export default Pricing;