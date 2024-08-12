import React from 'react';
import '../CSS/main.css';

function Education() {
    return ( 
      <div className='flex flex-wrap items-center justify-center ed-cont-1'>
        <div className='flex flex-wrap justify-center items-center w-4/5 pb-16 ed-cont-2'>
        <div className='w-1/2 ed-cont-3 pr-4'>
            <img src='images/education.svg' alt=''/>
        </div>
        <div className='w-1/2 px-8 pt-16 ed-cont-4'>
            <p className='p1'>Free and open market education</p>
            <p className='p2'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
            <p className='p3'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
        </div>
      </div> 
      </div> 
    );
}

export default Education;