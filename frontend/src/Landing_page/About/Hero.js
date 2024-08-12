import React from 'react';
import '../CSS/main.css'

function Hero() {
    return ( 
        <div className='container w-4/5'>
            <div className='row mt-20 about-hero flex flex-wrap items-center justify-center hero'>
                <div className='quote text-center'>
                    <h1>We pioneered the discount broking model in India.</h1>
                    <h1>Now, we are breaking ground with our technology.</h1>
                </div>
                <div className='abt-txt py-10 px-20 mx-10 mb-20 flex flex-wrap justify-start items-start'>
                    <div className='about-column w-1/2 px-8'>
                        <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier. </p>
                        <p>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
                        <p>Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
                    </div>
                    <div className='about-column w-1/2 px-8'>
                        <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
                        <p>Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
                        <p>And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us.</p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Hero;