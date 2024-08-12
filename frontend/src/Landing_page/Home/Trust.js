import React from 'react';
import '../CSS/main.css';


function Trust() {
    return (
        <div className='container flex flex-wrap justify-center items-center Trust-cont w-4/5  mt-20 mb-20'>
            <div className='row flex flex-wrap mb-16 justify-center items-center'>
                <div className='flex data-section flex-wrap mr-4 text-left'>
                    <div className='row Trust-title1 text-[4vh] font-semibold'>Trust with Confidence</div>
                    <div className='row text-justify'>
                        <div className='row Trust-title2'><h3>Customer-first always</h3></div>
                        <div className='row Trust-content'><p>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p></div>
                    </div>

                    <div className='row text-justify'>
                        <div className='row Trust-title2'><h3>No spam or gimmicks</h3></div>
                        <div className='row Trust-content'><p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p></div>
                    </div>

                    <div className='row text-justify'>
                        <div className='row Trust-title2'><h3>The Zerodha universe</h3></div>
                        <div className='row Trust-content'><p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p></div>
                    </div>

                    <div className='row text-justify'>
                        <div className='row Trust-title2'><h3>Do better with money</h3></div>
                        <div className='row Trust-content'><p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p></div>
                    </div>
                    
                </div>
                <div className='w-1/2 flex flex-wrap justify-center items-center flex-col image-section'>
                    <img src='images/Trust.png' alt='Trust-img'/>
                    <p className='explore-prod'> <a href='/products'>Explore Our Products <i class="fa-solid fa-arrow-right-long"></i></a> </p>
                </div>
            </div>
            <img src='images/newspaper.png' alt='news' className='pt-4 mb-16'/>           
        </div>
    );
}

export default Trust;