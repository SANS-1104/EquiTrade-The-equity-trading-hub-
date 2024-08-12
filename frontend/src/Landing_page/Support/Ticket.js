import React from 'react';

function Ticket() {
    return ( 
        <div className='container w-4/5 my-32'>
            <div className='row mb-12'>
                <div className='support-ticket-column w-1/3'>
                    <div className='heading flex flex-wrap items-center justify-start'>
                        <i class="fa-solid fa-circle-plus"></i>
                        <h3>Account Opening</h3>
                    </div>
                    <div className='links flex flex-col flex-wrap items-start justify-start'>
                        <div> <a href=''>Getting started</a> </div>
                        <div> <a href=''>Online</a> </div>
                        <div> <a href=''>Offline</a> </div>
                        <div> <a href=''>Charges</a> </div>
                        <div> <a href=''>Company, Partnership and HUF</a> </div>
                        <div> <a href=''>Non Resident Indian (NRI)</a> </div>
                    </div>
                </div>

                <div className='support-ticket-column w-1/3'>
                    <div className='heading flex flex-wrap items-start justify-start'>
                        <i class="fa-solid fa-user"></i>
                        <h3>Your Zerodha Account</h3>
                    </div>
                    <div className='links flex flex-col flex-wrap items-start justify-start'>
                        <div> <a href=''>Login credentials</a> </div>
                        <div> <a href=''>Your Profile</a> </div>
                        <div> <a href=''>Account modification and segment addition</a> </div>
                        <div> <a href=''>CMR & DP ID</a> </div>
                        <div> <a href=''>Nomination</a> </div>
                        <div> <a href=''>Transfer and conversion of shares</a> </div>
                    </div>
                </div>

                <div className='support-ticket-column w-1/3'>
                    <div className='heading flex flex-wrap items-start justify-start'>
                        <i class="fa-solid fa-chart-simple"></i>  
                        <h3>Trading and Markets</h3>
                    </div>
                    <div className='links flex flex-col flex-wrap items-start justify-start'>
                        <div> <a href=''>Trading FAQs</a> </div>
                        <div> <a href=''>Kite</a> </div>
                        <div> <a href=''>Margins</a> </div>
                        <div> <a href=''>Product and order types</a> </div>
                        <div> <a href=''>Corporate Actions</a> </div>
                        <div> <a href=''>Kite Features</a> </div>
                    </div>
                </div>
            </div>






            <div className='row mb-12'>
                <div className='support-ticket-column w-1/3'>
                    <div className='heading flex flex-wrap items-start justify-start'>
                        <i class="fa-solid fa-wallet"></i>
                        <h3>Funds</h3>
                    </div>
                    <div className='links flex flex-col flex-wrap items-start justify-start'>
                        <div> <a href=''>Fund withdrawl</a> </div>
                        <div> <a href=''>Adding funds</a> </div>
                        <div> <a href=''>Adding Bank accounts</a> </div>
                        <div> <a href=''>eMandates</a> </div>
                    </div>
                </div>

                <div className='support-ticket-column w-1/3'>
                    <div className='heading flex flex-wrap items-start justify-start'>
                        <i class="fa-brands fa-chrome"></i>
                        <h3>Console</h3>
                    </div>
                    <div className='links flex flex-col flex-wrap items-start justify-start'>
                        <div> <a href=''>IPO</a> </div>
                        <div> <a href=''>Portfolio</a> </div>
                        <div> <a href=''>Funds statement</a> </div>
                        <div> <a href=''>Profile</a> </div>
                        <div> <a href=''>Reports</a> </div>
                        <div> <a href=''>Referral program</a> </div>
                    </div>
                </div>

                <div className='support-ticket-column w-1/3'>
                    <div className='heading flex flex-wrap items-start justify-start'>
                        <i class="fa-solid fa-coins"></i>
                        <h3>Coin</h3>
                    </div>
                    <div className='links flex flex-col flex-wrap items-start justify-start'>
                        <div> <a href=''>Understanding mutual funds and Coin</a> </div>
                        <div> <a href=''>Coin app</a> </div>
                        <div> <a href=''>Coin web</a> </div>
                        <div> <a href=''>Transactions and reports</a> </div>
                        <div> <a href=''>National Pension Scheme (NPS)</a> </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Ticket;